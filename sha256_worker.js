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
	new Mutex();
	new Mutex();
	new Mutex();
	var wasmJson$a = {
		name: "sha256",
		data: "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",
		hash: "817d957e"
	};
	new Mutex();
	new Mutex();
	/**
	* Creates a new SHA-2 (SHA-256) hash instance
	*/
	function createSHA256() {
		return WASMInterface(wasmJson$a, 32).then((wasm) => {
			wasm.init(256);
			const obj = {
				init: () => {
					wasm.init(256);
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
				digestSize: 32
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
	//#endregion
	//#region src/sha256_worker.ts
	let sha256State = createSHA256().then((hasher) => hasher.init());
	let totalBytes = 0;
	self.onmessage = ({ data: { text, uint8Array, done } }) => {
		if (text) sha256State = sha256State.then((hasher) => {
			hasher.update(text.normalize("NFC"));
			totalBytes += text.length;
			self.postMessage({ progress: totalBytes });
			return hasher;
		});
		else if (uint8Array) sha256State = sha256State.then((hasher) => {
			hasher.update(uint8Array);
			totalBytes += uint8Array.byteLength;
			self.postMessage({ progress: totalBytes });
			return hasher;
		});
		if (done) sha256State = sha256State.then((hasher) => {
			self.postMessage({ checksum: hasher.digest() });
			return hasher;
		});
	};
	//#endregion
})();
