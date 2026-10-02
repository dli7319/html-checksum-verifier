(function() {
	//#region node_modules/hash-wasm/dist/index.esm.js
	/*!
	* hash-wasm (https://www.npmjs.com/package/hash-wasm)
	* (c) Dani Biro
	* @license MIT
	*/
	/*! *****************************************************************************
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
				case "xxhash128": canSimplify = () => false;
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
		hash: "40d92e5d"
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
