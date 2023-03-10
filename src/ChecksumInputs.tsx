import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
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
    const numberOfLines = Math.max(2, Math.min(10, textValue.split(/\r\n|\r|\n/).length));
    const progressBar = fileProgress < 0 ? null : (
        <ProgressBar animated now={fileProgress} label={`${fileProgress.toFixed(2)}%`} />
    );
    return (
        <div className={`${className} ${styles.mainDiv}`}>
            <h2>Inputs</h2>
            <FloatingLabel label="Text Input">
                <Form.Control
                    as="textarea"
                    rows={numberOfLines}
                    value={textValue}
                    onChange={readText}
                    className={styles.textInput}
                />
            </FloatingLabel>
            <Form.Control type="file" onChange={readFile} value={fileValue} />
            {progressBar}
        </div>
    );
}