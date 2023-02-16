import sha1 from 'node-forge/lib/sha1';

const sha1State = sha1.create();

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
        sha1State.update(text);
    } else if (dataArray) {
        for (let i = 0; i < dataArray.length; i++) {
            const binaryString = String.fromCharCode(dataArray[i]);
            sha1State.update(binaryString);
        }
    }
    if (done) {
        self.postMessage({
            checksum: sha1State.digest().toHex(),
        });
    }
}