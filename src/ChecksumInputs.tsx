import React from "react";

import styles from "./styles/ChecksumInputs.module.css";

export default function ChecksumInputs({
    readText,
    readFile,
    textValue,
    fileValue,
    className = ""
}: {
    readText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textValue: string;
    fileValue: string;
    className?: string;
}) {
    const numberOfLines = Math.max(2, textValue.split(/\r\n|\r|\n/).length);
    return (
        <div className={className}>
            <h2>Inputs</h2>
            Text: <br />
            <textarea onChange={readText} value={textValue} className={styles.inputTextarea} rows={numberOfLines} /><br />
            File: <br />
            <input type="file" onChange={readFile} value={fileValue} /><br />
        </div>
    );
}