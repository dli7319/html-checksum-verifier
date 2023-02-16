import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

import styles from "./styles/ChecksumInputs.module.css";

export default function ChecksumInputs({
    readText,
    readFile,
    textValue,
    fileValue,
    fileProgress,
    className = ""
}: {
    readText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textValue: string;
    fileValue: string;
    fileProgress: number;
    className?: string;
}) {
    const numberOfLines = Math.max(2, textValue.split(/\r\n|\r|\n/).length);

    const progressBar = fileProgress < 0 ? null : (
        <ProgressBar animated now={fileProgress} label={`${fileProgress.toFixed(2)}%`} />
    );

    return (
        <div className={className}>
            <h2>Inputs</h2>
            Text: <br />
            <textarea onChange={readText} value={textValue} className={styles.inputTextarea} rows={numberOfLines} /><br />
            File: <br />
            <input type="file" onChange={readFile} value={fileValue} /><br />
            {progressBar}
        </div>
    );
}