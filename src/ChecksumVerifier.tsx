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
    fileId: -1,
    md5Sum: "",
    sha1Sum: "",
    sha256Sum: "",
    sha512Sum: ""
};

function checksumValuesUpdater(state: ChecksumValues, newState: ChecksumValuesUpdate): ChecksumValues {
    if (newState.fileId && newState.fileId != state.fileId) {
        return {
            ...defaultChecksumValues,
            fileId: newState.fileId,
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

function readSlice(file: File, start: number, end: number): () => Promise<Uint8Array> {
    const newPromise = new Promise<Uint8Array>((resolve) => {
        const fileSlice = file.slice(start, end);
        const reader = new FileReader();
        reader.onload = function (event) {
            const result = event.target?.result as ArrayBuffer;
            const view = new Uint8Array(result);
            resolve(view);
        }
        reader.readAsArrayBuffer(fileSlice);
    });
    return () => newPromise;
}

const emptyWorker = new Worker(URL.createObjectURL(new Blob([""])));

// Size of chunks to read and send to the workers.
const chunkSize = 64 * 1024 * 1024; // 64 MB
// Number of chunks to send to the workers at a time.
const numberOfChunksBuffer = 10;

export default function ChecksumVerifier() {
    const [checksumValues, setChecksumValues] = useReducer(checksumValuesUpdater, defaultChecksumValues);

    const [textValue, setTextValue] = useState("");
    const [fileValue, setFileValue] = useState("");
    const [fileProgress, setFileProgress] = useState(0);
    const fileId = useRef(0);
    const md5Worker = useRef<Worker>(emptyWorker);
    const sha1Worker = useRef<Worker>(emptyWorker);
    const sha256Worker = useRef<Worker>(emptyWorker);
    const fileSliceQueue = useRef<{ file: File, start: number, end: number, fileId: number }[]>([]);
    const fileSize = useRef(0);
    const workerProgress = useRef({
        md5: 0,
        sha1: 0,
        sha256: 0,
    });
    const slicePromiseChain = useRef<Promise<void>>(Promise.resolve());
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

    function processSlice(file: File, start: number, sliceFileId: number) {
        return (data: Uint8Array) => {
            return new Promise<void>((resolve) => {
                if (fileId.current == sliceFileId) {
                    const processedBytes = start + data.length;
                    allWorkers.forEach(worker => worker.current.postMessage({
                        uint8Array: data,
                        done: processedBytes >= file.size
                    }));
                    resolve();
                } else {
                    console.log("File changed, aborting slice processing.");
                }
            });
        };
    }

    function onWorkerProgress() {
        // Get the minimum progress of all workers
        const minProgress = Math.min(...Object.values(workerProgress.current));
        setFileProgress(100 * minProgress / fileSize.current);
        if (fileSliceQueue.current.length) {
            // Compute the amount of bytes sent to the workers
            const bytesSent = fileSliceQueue.current[0].start;
            const bytesInChunk = fileSliceQueue.current[0].end - fileSliceQueue.current[0].start;
            const numberOfChunksBehind = Math.floor((bytesSent - minProgress) / bytesInChunk);
            const numberOfChunksToSend = numberOfChunksBuffer - numberOfChunksBehind;
            for (let i = 0; i < numberOfChunksToSend && fileSliceQueue.current.length; i++) {
                const { file, start, end, fileId } = fileSliceQueue.current.shift()!;
                slicePromiseChain.current = (slicePromiseChain.current
                    .then(readSlice(file, start, end))
                    .then(processSlice(file, start, fileId)));
            }
        }
    }

    function resetChecksumStates() { resetWorkers({ md5Worker, sha1Worker, sha256Worker }); }

    function resetChecksumValues() {
        setChecksumValues({ fileId: fileId.current });
    }

    function resetAll() {
        fileId.current++;
        fileSliceQueue.current = [];
        slicePromiseChain.current = Promise.resolve();
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


    function readFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.item(0);
        resetAll();
        if (file) {
            setFileValue(event.target.value);
            fileSize.current = file.size;
            // Read the file in chunks
            for (let i = 0; i < file.size; i += chunkSize) {
                fileSliceQueue.current.push({
                    file,
                    start: i,
                    end: i + chunkSize,
                    fileId: fileId.current
                });
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