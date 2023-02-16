import sha256 from 'node-forge/lib/sha256';

const sha256State = sha256.create();

self.onmessage = ({ data: {
    text,
    dataArray,
    done,
} }: {
    data: {
        text?: string,
        dataArray?: Uint8Array
        done?: boolean
    }
}) => {
    if (text) {
        sha256State.update(text);
    }
    if (done) {
        self.postMessage({
            checksum: sha256State.digest().toHex(),
        });
    }
}