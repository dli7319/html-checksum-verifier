import { createMD5 } from 'hash-wasm';

let md5State = createMD5().then(hasher => hasher.init());
let totalBytes = 0;

self.onmessage = ({ data: {
    text,
    uint8Array,
    done,
} }: {
    data: {
        text?: string,
        uint8Array?: Uint8Array,
        done?: boolean
    }
}) => {
    if (text) {
        md5State = md5State.then(hasher => {
            hasher.update(text.normalize("NFC"));
            totalBytes += text.length;
            self.postMessage({
                progress: totalBytes
            });
            return hasher;
        });
    } else if (uint8Array) {
        md5State = md5State.then(hasher => {
            hasher.update(uint8Array);
            totalBytes += uint8Array.byteLength;
            self.postMessage({
                progress: totalBytes
            });
            return hasher;
        });
    }
    if (done) {
        md5State = md5State.then(hasher => {
            self.postMessage({
                checksum: hasher.digest(),
            });
            return hasher;
        });
    }
}