import React from "react";

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
    return (
        <div className={className}>
            <h2>Inputs</h2>
            Text: <br />
            <textarea onChange={readText} value={textValue} style={{ resize: "both" }} /><br />
            File: <br />
            <input type="file" onChange={readFile} value={fileValue} /><br />
        </div>
    );
}