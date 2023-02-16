import sha1 from 'node-forge/lib/sha1';

const sha1State = sha1.create();
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
        sha1State.update(text);
        totalBytes += text.length;
        self.postMessage({
            progress: totalBytes
        });
    }
    if (done) {
        self.postMessage({
            checksum: sha1State.digest().toHex(),
        });
    }
}