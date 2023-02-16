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
    progress: number;
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
    const fileSliceQueue = useRef<{ file: File, start: number, end: number }[]>([]);
    const workerProgress = useRef({
        md5: 0,
        sha1: 0,
        sha256: 0,
    });
    md5Worker.current.onmessage = ({ data }: MessageEvent<WebWorkerMessage>) => {
        if (data.checksum) {
            setChecksumValues({ md5Sum: data.checksum });
        } else if (data.progress) {
            workerProgress.current.md5 = data.progress;
            onWorkerProgress();
        }
    };
    sha1Worker.current.onmessage = ({ data }: MessageEvent<WebWorkerMessage>) => {
        if (data.checksum) {
            setChecksumValues({ sha1Sum: data.checksum });
        } else if (data.progress) {
            workerProgress.current.sha1 = data.progress;
            onWorkerProgress();
        }
    };
    sha256Worker.current.onmessage = ({ data }: MessageEvent<WebWorkerMessage>) => {
        if (data.checksum) {
            setChecksumValues({ sha256Sum: data.checksum });
        } else if (data.progress) {
            workerProgress.current.sha256 = data.progress;
            onWorkerProgress();
        }
    };
    const allWorkers = [md5Worker, sha1Worker, sha256Worker];

    function onWorkerProgress() {
        if (fileSliceQueue.current.length) {
            // Get the minimum progress of all workers
            const minProgress = Math.min(...Object.values(workerProgress.current));
            // Compute the amount of bytes sent to the workers
            const bytesSent = fileSliceQueue.current[0].start;
            const bytesInChunk = fileSliceQueue.current[0].end - fileSliceQueue.current[0].start;
            const numberOfChunksBehind = Math.floor((bytesSent - minProgress) / bytesInChunk);
            // Send a new chunk if the progress is less than 20 chunks behind.
            const numberOfChunksToSend = 20 - numberOfChunksBehind;
            for (let i = 0; i < numberOfChunksToSend && fileSliceQueue.current.length; i++) {
                readSlice(fileSliceQueue.current.shift()!);
            }
        }
    }

    function resetChecksumStates() { resetWorkers({ md5Worker, sha1Worker, sha256Worker }); }

    function resetChecksumValues() {
        setChecksumValues({ fileId: -1 });
    }

    function resetAll() {
        fileSliceQueue.current = [];
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
            const allWorkers = [md5Worker, sha1Worker, sha256Worker];
            allWorkers.forEach(worker => worker.current.postMessage({
                text,
                done: true
            }));
        }
    }

    function readSlice({ file, start, end }: { file: File, start: number, end: number }) {
        const fileSlice = file.slice(start, end);
        const reader = new FileReader();
        reader.onload = function (event) {
            const result = event.target?.result as string;
            const processedBytes = start + result.length;
            allWorkers.forEach(worker => worker.current.postMessage({
                text: result,
                done: processedBytes >= file.size
            }));
            const processedPercentage = processedBytes / file.size * 100;
            setFileProgress(processedPercentage);
        }
        reader.readAsBinaryString(fileSlice);
    }


    function readFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.item(0);
        resetAll();
        if (file) {
            setFileValue(event.target.value);
            // Create a stream reader to read the file
            // Read the file in chunks
            const chunkSize = 1024 * 1024; // 1 MB
            for (let i = 0; i < file.size; i += chunkSize) {
                fileSliceQueue.current.push({ file, start: i, end: i + chunkSize });
            }
            onWorkerProgress();
        }
    }

    const componentClasses = `text-center ${styles.components}`;
    return <div className={`text-center d-flex flex-wrap ${styles.mainContainer}`}>
        <ChecksumInputs {...{ readText, readFile, textValue, fileValue, fileProgress }} className={componentClasses} />
        <ChecksumOutputs {...checksumValues} className={componentClasses} />
    </div>;
}