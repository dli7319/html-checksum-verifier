import sha256 from 'node-forge/lib/sha256';

const sha256State = sha256.create();
let totalBytes = 0;

self.onmessage = ({ data: {
    text,
    done,
} }: {
    data: {
        text?: string,
        done?: boolean
    }
}) => {
    if (text) {
        sha256State.update(text);
        totalBytes += text.length;
        self.postMessage({
            progress: totalBytes
        });
    }
    if (done) {
        self.postMessage({
            checksum: sha256State.digest().toHex(),
        });
    }
}