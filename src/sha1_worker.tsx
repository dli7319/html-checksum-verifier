import { createSHA1 } from 'hash-wasm';

let sha1State = createSHA1().then(hasher => hasher.init());
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
        sha1State = sha1State.then(hasher => {
            hasher.update(text.normalize("NFC"));
            totalBytes += text.length;
            self.postMessage({
                progress: totalBytes
            });
            return hasher;
        });
    } else if (uint8Array) {
        sha1State = sha1State.then(hasher => {
            hasher.update(uint8Array);
            totalBytes += uint8Array.byteLength;
            self.postMessage({
                progress: totalBytes
            });
            return hasher;
        });
    }
    if (done) {
        sha1State = sha1State.then(hasher => {
            self.postMessage({
                checksum: hasher.digest(),
            });
            return hasher;
        });
    }
}