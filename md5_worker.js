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
	var wasmJson$d = {
		name: "md5",
		data: "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",
		hash: "e6508e4b"
	};
	new Mutex();
	/**
	* Creates a new MD5 hash instance
	*/
	function createMD5() {
		return WASMInterface(wasmJson$d, 16).then((wasm) => {
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
				digestSize: 16
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
	new Mutex();
	//#endregion
	//#region src/md5_worker.ts
	let md5State = createMD5().then((hasher) => hasher.init());
	let totalBytes = 0;
	self.onmessage = ({ data: { text, uint8Array, done } }) => {
		if (text) md5State = md5State.then((hasher) => {
			hasher.update(text.normalize("NFC"));
			totalBytes += text.length;
			self.postMessage({ progress: totalBytes });
			return hasher;
		});
		else if (uint8Array) md5State = md5State.then((hasher) => {
			hasher.update(uint8Array);
			totalBytes += uint8Array.byteLength;
			self.postMessage({ progress: totalBytes });
			return hasher;
		});
		if (done) md5State = md5State.then((hasher) => {
			self.postMessage({ checksum: hasher.digest() });
			return hasher;
		});
	};
	//#endregion
})();
