import React, { useState, useReducer } from 'react';
import md5 from 'node-forge/lib/md5';
import sha1 from 'node-forge/lib/sha1';
import sha256 from 'node-forge/lib/sha256';

import ChecksumInputs from './ChecksumInputs';
import ChecksumOutputs from './ChecksumOutputs';

import styles from './styles/ChecksumVerifier.module.css';

interface ChecksumValues {
    fileId: number
    md5Sum: string;
    sha1Sum: string;
    sha256Sum: string;
    sha512Sum: string;
}

interface ChecksumValuesUpdate {
    fileId?: number;
    md5Sum?: string;
    sha1Sum?: string;
    sha256Sum?: string;
    sha512Sum?: string;
}

const defaultChecksumValues: ChecksumValues = {
    fileId: 1,
    md5Sum: "",
    sha1Sum: "",
    sha256Sum: "",
    sha512Sum: ""
};

function checksumValuesUpdater(state: ChecksumValues, newState: ChecksumValuesUpdate): ChecksumValues {
    if (newState.fileId === -1) {
        return {
            ...defaultChecksumValues,
            fileId: state.fileId + 1,
        }
    }
    return { ...state, ...newState };
}

export default function ChecksumVerifier() {
    const [md5State, setMd5State] = useState(md5.create());
    const [sha1State, setSha1State] = useState(sha1.create());
    const [sha256State, setSha256State] = useState(sha256.create());
    const [checksumValues, setChecksumValues] = useReducer(checksumValuesUpdater, defaultChecksumValues);

    const [textValue, setTextValue] = useState("");
    const [fileValue, setFileValue] = useState("");
    const [fileProgress, setFileProgress] = useState(0);

    function resetChecksumStates() {
        setMd5State(md5.create());
        setSha1State(sha1.create());
        setSha256State(sha256.create());
    }

    function resetChecksumValues() {
        setChecksumValues({ fileId: -1 });
    }

    function readText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value;
        resetChecksumStates();
        resetChecksumValues();
        setTextValue(text);
        setFileValue("");
        if (text.length) {
            md5State.update(text);
            sha1State.update(text);
            sha256State.update(text);
            const md5sum = md5State.digest().toHex();
            const sha1sum = sha1State.digest().toHex();
            const sha256sum = sha256State.digest().toHex();
            setChecksumValues({
                md5Sum: md5sum,
                sha1Sum: sha1sum,
                sha256Sum: sha256sum
            });
        }
    }

    function readFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.item(0);
        if (file) {
            resetChecksumStates();
            resetChecksumValues();
            setTextValue("");
            setFileValue(event.target.value);
            // Create a stream reader to read the file
            const stream = file.stream();
            const reader = stream.getReader();
            // Read the file in chunks
            let processedBytes = 0;
            const startTime = Date.now();
            reader.read().then(function processChunk({ value, done }) {
                if (done) {
                    console.log("Done reading file");
                    const endTime = Date.now();
                    const duration = endTime - startTime;
                    console.log(`Read ${processedBytes} bytes in ${duration} ms`);
                    const md5sum = md5State.digest().toHex();
                    const sha1sum = sha1State.digest().toHex();
                    const sha256sum = sha256State.digest().toHex();
                    setChecksumValues({ md5Sum: md5sum });
                    setChecksumValues({ sha1Sum: sha1sum });
                    setChecksumValues({ sha256Sum: sha256sum });
                    return;
                }
                processedBytes += value.length;
                console.log("Chunk length: " + value.length);
                const processedPercentage = processedBytes / file.size * 100;
                setFileProgress(processedPercentage);
                console.log(`Read ${processedBytes} bytes (${processedPercentage.toFixed(2)}%)`);
                for (let i = 0; i < value.length; i++) {
                    const binaryString = String.fromCharCode(value[i]);
                    md5State.update(binaryString);
                    sha1State.update(binaryString);
                    sha256State.update(binaryString);
                }
                // Hack to allow the UI to update.
                setTimeout(() => {
                    reader.read().then(processChunk);
                }, 1);
            });
        }
    }

    const className = `text-center ${styles.components}`;

    return <div className={`text-center d-flex flex-wrap ${styles.mainContainer}`}>
        <ChecksumInputs {...{ readText, readFile, textValue, fileValue, fileProgress }} className={className} />
        <ChecksumOutputs {...checksumValues} className={className} />
    </div>;
}