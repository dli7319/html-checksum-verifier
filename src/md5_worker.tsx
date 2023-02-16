import md5 from 'node-forge/lib/md5';

const md5State = md5.create();
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
        md5State.update(text);
        totalBytes += text.length;
        self.postMessage({
            progress: totalBytes
        });
    }
    if (done) {
        self.postMessage({
            checksum: md5State.digest().toHex(),
        });
    }
}