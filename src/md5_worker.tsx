import md5 from 'node-forge/lib/md5';

const md5State = md5.create();

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
        md5State.update(text);
    }
    if (done) {
        self.postMessage({
            checksum: md5State.digest().toHex(),
        });
    }
}