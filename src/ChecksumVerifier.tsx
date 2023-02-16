import React, { useState, useReducer, useRef } from 'react';

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

interface WebWorkerMessage {
    checksum: string;
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

interface ChecksumWorkerRefs {
    md5Worker: React.MutableRefObject<Worker>;
    sha1Worker: React.MutableRefObject<Worker>;
    sha256Worker: React.MutableRefObject<Worker>;
}

function resetWorkers({ md5Worker, sha1Worker, sha256Worker }: ChecksumWorkerRefs) {
    [md5Worker, sha1Worker, sha256Worker].forEach(worker => worker.current.terminate());
    md5Worker.current = new Worker(new URL("./md5_worker.tsx", import.meta.url));
    sha1Worker.current = new Worker(new URL("./sha1_worker.tsx", import.meta.url));
    sha256Worker.current = new Worker(new URL("./sha256_worker.tsx", import.meta.url));
    console.log("Reset workers");
}

const emptyWorker = new Worker(URL.createObjectURL(new Blob([""])));

export default function ChecksumVerifier() {
    const [checksumValues, setChecksumValues] = useReducer(checksumValuesUpdater, defaultChecksumValues);

    const [textValue, setTextValue] = useState("");
    const [fileValue, setFileValue] = useState("");
    const [fileProgress, setFileProgress] = useState(0);
    const md5Worker = useRef<Worker>(emptyWorker);
    const sha1Worker = useRef<Worker>(emptyWorker);
    const sha256Worker = useRef<Worker>(emptyWorker);
    md5Worker.current.onmessage = ({ data }: MessageEvent<WebWorkerMessage>) => {
        if (data.checksum) {
            setChecksumValues({ md5Sum: data.checksum });
        }
    };
    sha1Worker.current.onmessage = ({ data }: MessageEvent<WebWorkerMessage>) => {
        if (data.checksum) {
            setChecksumValues({ sha1Sum: data.checksum });
        }
    };
    sha256Worker.current.onmessage = ({ data }: MessageEvent<WebWorkerMessage>) => {
        if (data.checksum) {
            setChecksumValues({ sha256Sum: data.checksum });
        }
    };
    const allWorkers = [md5Worker, sha1Worker, sha256Worker];

    function resetChecksumStates() { resetWorkers({ md5Worker, sha1Worker, sha256Worker }); }

    function resetChecksumValues() {
        setChecksumValues({ fileId: -1 });
    }

    function resetAll() {
        resetChecksumStates();
        resetChecksumValues();
        setTextValue("");
        setFileValue("");
        setFileProgress(0);
    }

    function readText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value;
        resetAll();
        setTextValue(text);
        if (text.length) {
            console.log("Starting to read text");
            const allWorkers = [md5Worker, sha1Worker, sha256Worker];
            allWorkers.forEach(worker => worker.current.postMessage({
                text,
                done: true
            }));
        }
    }

    function readFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.item(0);
        resetAll();
        if (file) {
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
                    allWorkers.forEach(worker => worker.current.postMessage({
                        done: true
                    }));
                    return;
                }
                processedBytes += value.length;
                console.log("Chunk length: " + value.length);
                const processedPercentage = processedBytes / file.size * 100;
                setFileProgress(processedPercentage);
                console.log(`Read ${processedBytes} bytes (${processedPercentage.toFixed(2)}%)`);
                const startPost = Date.now();
                allWorkers.forEach(worker => worker.current.postMessage({
                    dataArray: value
                }));
                const endPost = Date.now();
                console.log(`Posted ${value.length} bytes in ${endPost - startPost} ms`);
                // Hack to allow the UI to update.
                setTimeout(() => {
                    reader.read().then(processChunk);
                }, 1);
            });
        }
    }

    const componentClasses = `text-center ${styles.components}`;
    return <div className={`text-center d-flex flex-wrap ${styles.mainContainer}`}>
        <ChecksumInputs {...{ readText, readFile, textValue, fileValue, fileProgress }} className={componentClasses} />
        <ChecksumOutputs {...checksumValues} className={componentClasses} />
    </div>;
}