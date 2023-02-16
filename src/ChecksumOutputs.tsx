import React, { useState, useReducer } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from 'react-bootstrap/Alert';

import styles from './styles/ChecksumOutputs.module.css';


interface CopiedState {
    md5Sum: boolean;
    sha1Sum: boolean;
    sha256Sum: boolean;
}

const defaultCopiedState: CopiedState = Object.freeze({
    md5Sum: false,
    sha1Sum: false,
    sha256Sum: false,
});

interface CopiedStateUpdate {
    md5Sum?: boolean;
    sha1Sum?: boolean;
    sha256Sum?: boolean;
}

function copiedStateReducer(state: CopiedState, newState: CopiedStateUpdate): CopiedState {
    return { ...state, ...newState };
}

export default function ChecksumOutputs({
    md5Sum,
    sha1Sum,
    sha256Sum,
    className = "",
    copiedTimeout = 1000,
}: {
    md5Sum: string;
    sha1Sum: string;
    sha256Sum: string;
    className?: string;
    copiedTimeout?: number;
}) {
    const [verifyInput, setVerifyInput] = useState("");
    const [copied, setCopied] = useReducer(copiedStateReducer, defaultCopiedState);

    function onCopy(type: keyof CopiedState) {
        setCopied({ [type]: true });
        setTimeout(() => setCopied({ [type]: false }), copiedTimeout);
    }

    let verificationResult = "";
    switch (verifyInput) {
        case md5Sum:
            verificationResult = "MD5";
            break;
        case sha1Sum:
            verificationResult = "SHA1";
            break;
        case sha256Sum:
            verificationResult = "SHA256";
            break;
    }
    let verifyAlert = null;
    if (verifyInput !== "") {
        const verifyClassname = "mt-2 mb-0";
        if (verificationResult !== "") {
            verifyAlert = <Alert variant="success" className={verifyClassname}>Verified with {verificationResult}</Alert>;
        } else {
            verifyAlert = <Alert variant="danger" className={verifyClassname}>Verification failed</Alert>;
        }
    }

    return (
        <div className={className}>
            <h2>Checksums</h2>
            <table className='mx-auto w-100'>
                <tbody>
                    <tr>
                        <td>MD5SUM</td>
                        <td>
                            <input type="text" value={md5Sum} disabled />
                            <CopyToClipboard text={md5Sum} onCopy={() => onCopy("md5Sum")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.md5Sum}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.md5Sum}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>SHA1SUM</td>
                        <td>
                            <input type="text" value={sha1Sum} disabled />
                            <CopyToClipboard text={sha1Sum} onCopy={() => onCopy("sha1Sum")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.sha1Sum}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.sha1Sum}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>SHA256SUM</td>
                        <td>
                            <input type="text" value={sha256Sum} disabled />
                            <CopyToClipboard text={sha256Sum} onCopy={() => onCopy("sha256Sum")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.sha256Sum}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.sha256Sum}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Verify</td>
                        <td>
                            <input type="text" value={verifyInput} onChange={e => setVerifyInput(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            {verifyAlert}
        </div>);
}