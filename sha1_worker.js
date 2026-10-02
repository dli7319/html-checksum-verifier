(function() {
	//#region node_modules/hash-wasm/dist/index.esm.js
	/*!
	* hash-wasm (https://www.npmjs.com/package/hash-wasm)
	* (c) Dani Biro
	* @license MIT
	*/
	/******************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	function __awaiter(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P ? value : new P(function(resolve) {
				resolve(value);
			});
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	}
	var Mutex = class {
		constructor() {
			this.mutex = Promise.resolve();
		}
		lock() {
			let begin = () => {};
			this.mutex = this.mutex.then(() => new Promise(begin));
			return new Promise((res) => {
				begin = res;
			});
		}
		dispatch(fn) {
			return __awaiter(this, void 0, void 0, function* () {
				const unlock = yield this.lock();
				try {
					return yield Promise.resolve(fn());
				} finally {
					unlock();
				}
			});
		}
	};
	var _a;
	function getGlobal() {
		if (typeof globalThis !== "undefined") return globalThis;
		if (typeof self !== "undefined") return self;
		if (typeof window !== "undefined") return window;
		return global;
	}
	const globalObject = getGlobal();
	const nodeBuffer = (_a = globalObject.Buffer) !== null && _a !== void 0 ? _a : null;
	const textEncoder = globalObject.TextEncoder ? new globalObject.TextEncoder() : null;
	function hexCharCodesToInt(a, b) {
		return (a & 15) + (a >> 6 | a >> 3 & 8) << 4 | (b & 15) + (b >> 6 | b >> 3 & 8);
	}
	function writeHexToUInt8(buf, str) {
		const size = str.length >> 1;
		for (let i = 0; i < size; i++) {
			const index = i << 1;
			buf[i] = hexCharCodesToInt(str.charCodeAt(index), str.charCodeAt(index + 1));
		}
	}
	function hexStringEqualsUInt8(str, buf) {
		if (str.length !== buf.length * 2) return false;
		for (let i = 0; i < buf.length; i++) {
			const strIndex = i << 1;
			if (buf[i] !== hexCharCodesToInt(str.charCodeAt(strIndex), str.charCodeAt(strIndex + 1))) return false;
		}
		return true;
	}
	const alpha = "a".charCodeAt(0) - 10;
	const digit = "0".charCodeAt(0);
	function getDigestHex(tmpBuffer, input, hashLength) {
		let p = 0;
		for (let i = 0; i < hashLength; i++) {
			let nibble = input[i] >>> 4;
			tmpBuffer[p++] = nibble > 9 ? nibble + alpha : nibble + digit;
			nibble = input[i] & 15;
			tmpBuffer[p++] = nibble > 9 ? nibble + alpha : nibble + digit;
		}
		return String.fromCharCode.apply(null, tmpBuffer);
	}
	const getUInt8Buffer = nodeBuffer !== null ? (data) => {
		if (typeof data === "string") {
			const buf = nodeBuffer.from(data, "utf8");
			return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
		}
		if (nodeBuffer.isBuffer(data)) return new Uint8Array(data.buffer, data.byteOffset, data.length);
		if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
		throw new Error("Invalid data type!");
	} : (data) => {
		if (typeof data === "string") return textEncoder.encode(data);
		if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
		throw new Error("Invalid data type!");
	};
	const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	const base64Lookup = /* @__PURE__ */ new Uint8Array(256);
	for (let i = 0; i < 64; i++) base64Lookup[base64Chars.charCodeAt(i)] = i;
	function getDecodeBase64Length(data) {
		let bufferLength = Math.floor(data.length * .75);
		const len = data.length;
		if (data[len - 1] === "=") {
			bufferLength -= 1;
			if (data[len - 2] === "=") bufferLength -= 1;
		}
		return bufferLength;
	}
	function decodeBase64(data) {
		const bufferLength = getDecodeBase64Length(data);
		const len = data.length;
		const bytes = new Uint8Array(bufferLength);
		let p = 0;
		for (let i = 0; i < len; i += 4) {
			const encoded1 = base64Lookup[data.charCodeAt(i)];
			const encoded2 = base64Lookup[data.charCodeAt(i + 1)];
			const encoded3 = base64Lookup[data.charCodeAt(i + 2)];
			const encoded4 = base64Lookup[data.charCodeAt(i + 3)];
			bytes[p] = encoded1 << 2 | encoded2 >> 4;
			p += 1;
			bytes[p] = (encoded2 & 15) << 4 | encoded3 >> 2;
			p += 1;
			bytes[p] = (encoded3 & 3) << 6 | encoded4 & 63;
			p += 1;
		}
		return bytes;
	}
	const MAX_HEAP = 16384;
	const WASM_FUNC_HASH_LENGTH = 4;
	const wasmMutex = new Mutex();
	const wasmModuleCache = /* @__PURE__ */ new Map();
	function WASMInterface(binary, hashLength) {
		return __awaiter(this, void 0, void 0, function* () {
			let wasmInstance = null;
			let memoryView = null;
			let initialized = false;
			if (typeof WebAssembly === "undefined") throw new Error("WebAssembly is not supported in this environment!");
			const writeMemory = (data, offset = 0) => {
				memoryView.set(data, offset);
			};
			const getMemory = () => memoryView;
			const getExports = () => wasmInstance.exports;
			const setMemorySize = (totalSize) => {
				wasmInstance.exports.Hash_SetMemorySize(totalSize);
				const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
				const memoryBuffer = wasmInstance.exports.memory.buffer;
				memoryView = new Uint8Array(memoryBuffer, arrayOffset, totalSize);
			};
			const getStateSize = () => {
				return new DataView(wasmInstance.exports.memory.buffer).getUint32(wasmInstance.exports.STATE_SIZE, true);
			};
			const loadWASMPromise = wasmMutex.dispatch(() => __awaiter(this, void 0, void 0, function* () {
				if (!wasmModuleCache.has(binary.name)) {
					const asm = decodeBase64(binary.data);
					const promise = WebAssembly.compile(asm);
					wasmModuleCache.set(binary.name, promise);
				}
				const module = yield wasmModuleCache.get(binary.name);
				wasmInstance = yield WebAssembly.instantiate(module, {});
			}));
			const setupInterface = () => __awaiter(this, void 0, void 0, function* () {
				if (!wasmInstance) yield loadWASMPromise;
				const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
				const memoryBuffer = wasmInstance.exports.memory.buffer;
				memoryView = new Uint8Array(memoryBuffer, arrayOffset, MAX_HEAP);
			});
			const init = (bits = null) => {
				initialized = true;
				wasmInstance.exports.Hash_Init(bits);
			};
			const updateUInt8Array = (data) => {
				let read = 0;
				while (read < data.length) {
					const chunk = data.subarray(read, read + MAX_HEAP);
					read += chunk.length;
					memoryView.set(chunk);
					wasmInstance.exports.Hash_Update(chunk.length);
				}
			};
			const update = (data) => {
				if (!initialized) throw new Error("update() called before init()");
				const Uint8Buffer = getUInt8Buffer(data);
				updateUInt8Array(Uint8Buffer);
			};
			const digestChars = new Uint8Array(hashLength * 2);
			const digest = (outputType, padding = null) => {
				if (!initialized) throw new Error("digest() called before init()");
				initialized = false;
				wasmInstance.exports.Hash_Final(padding);
				if (outputType === "binary") return memoryView.slice(0, hashLength);
				return getDigestHex(digestChars, memoryView, hashLength);
			};
			const save = () => {
				if (!initialized) throw new Error("save() can only be called after init() and before digest()");
				const stateOffset = wasmInstance.exports.Hash_GetState();
				const stateLength = getStateSize();
				const memoryBuffer = wasmInstance.exports.memory.buffer;
				const internalState = new Uint8Array(memoryBuffer, stateOffset, stateLength);
				const prefixedState = new Uint8Array(WASM_FUNC_HASH_LENGTH + stateLength);
				writeHexToUInt8(prefixedState, binary.hash);
				prefixedState.set(internalState, WASM_FUNC_HASH_LENGTH);
				return prefixedState;
			};
			const load = (state) => {
				if (!(state instanceof Uint8Array)) throw new Error("load() expects an Uint8Array generated by save()");
				const stateOffset = wasmInstance.exports.Hash_GetState();
				const stateLength = getStateSize();
				const overallLength = WASM_FUNC_HASH_LENGTH + stateLength;
				const memoryBuffer = wasmInstance.exports.memory.buffer;
				if (state.length !== overallLength) throw new Error(`Bad state length (expected ${overallLength} bytes, got ${state.length})`);
				if (!hexStringEqualsUInt8(binary.hash, state.subarray(0, WASM_FUNC_HASH_LENGTH))) throw new Error("This state was written by an incompatible hash implementation");
				const internalState = state.subarray(WASM_FUNC_HASH_LENGTH);
				new Uint8Array(memoryBuffer, stateOffset, stateLength).set(internalState);
				initialized = true;
			};
			const isDataShort = (data) => {
				if (typeof data === "string") return data.length < MAX_HEAP / 4;
				return data.byteLength < MAX_HEAP;
			};
			let canSimplify = isDataShort;
			switch (binary.name) {
				case "argon2":
				case "scrypt":
					canSimplify = () => true;
					break;
				case "blake2b":
				case "blake2s":
					canSimplify = (data, initParam) => initParam <= 512 && isDataShort(data);
					break;
				case "blake3":
					canSimplify = (data, initParam) => initParam === 0 && isDataShort(data);
					break;
				case "xxhash64":
				case "xxhash3":
				case "xxhash128":
				case "crc64": canSimplify = () => false;
			}
			const calculate = (data, initParam = null, digestParam = null) => {
				if (!canSimplify(data, initParam)) {
					init(initParam);
					update(data);
					return digest("hex", digestParam);
				}
				const buffer = getUInt8Buffer(data);
				memoryView.set(buffer);
				wasmInstance.exports.Hash_Calculate(buffer.length, initParam, digestParam);
				return getDigestHex(digestChars, memoryView, hashLength);
			};
			yield setupInterface();
			return {
				getMemory,
				writeMemory,
				getExports,
				setMemorySize,
				init,
				update,
				digest,
				save,
				load,
				calculate,
				hashLength
			};
		});
	}
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	var wasmJson$c = {
		name: "sha1",
		data: "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",
		hash: "6b530c24"
	};
	new Mutex();
	/**
	* Creates a new SHA-1 hash instance
	*/
	function createSHA1() {
		return WASMInterface(wasmJson$c, 20).then((wasm) => {
			wasm.init();
			const obj = {
				init: () => {
					wasm.init();
					return obj;
				},
				update: (data) => {
					wasm.update(data);
					return obj;
				},
				digest: (outputType) => wasm.digest(outputType),
				save: () => wasm.save(),
				load: (data) => {
					wasm.load(data);
					return obj;
				},
				blockSize: 64,
				digestSize: 20
			};
			return obj;
		});
	}
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	new Mutex();
	//#endregion
	//#region src/sha1_worker.ts
	let sha1State = createSHA1().then((hasher) => hasher.init());
	let totalBytes = 0;
	self.onmessage = ({ data: { text, uint8Array, done } }) => {
		if (text) sha1State = sha1State.then((hasher) => {
			hasher.update(text.normalize("NFC"));
			totalBytes += text.length;
			self.postMessage({ progress: totalBytes });
			return hasher;
		});
		else if (uint8Array) sha1State = sha1State.then((hasher) => {
			hasher.update(uint8Array);
			totalBytes += uint8Array.byteLength;
			self.postMessage({ progress: totalBytes });
			return hasher;
		});
		if (done) sha1State = sha1State.then((hasher) => {
			self.postMessage({ checksum: hasher.digest() });
			return hasher;
		});
	};
	//#endregion
})();
