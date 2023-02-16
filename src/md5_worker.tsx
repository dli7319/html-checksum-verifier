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
    } else if (dataArray) {
        for (let i = 0; i < dataArray.length; i++) {
            const binaryString = String.fromCharCode(dataArray[i]);
            md5State.update(binaryString);
        }
    }
    if (done) {
        self.postMessage({
            checksum: md5State.digest().toHex(),
        });
    }
}