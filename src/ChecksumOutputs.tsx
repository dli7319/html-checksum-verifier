import React, { useState, useReducer } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
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

    const verificationResult = ({
        [md5Sum]: "MD5",
        [sha1Sum]: "SHA1",
        [sha256Sum]: "SHA256",
    })[verifyInput] || "";
    const verifyClassname = "mt-2 mb-0";
    const verifyAlert = verifyInput !== "" ?
        verificationResult !== "" ?
            <Alert variant="success" className={verifyClassname}>Verified with {verificationResult}</Alert> :
            <Alert variant="danger" className={verifyClassname}>Verification failed</Alert> :
        null;

    return (
        <div className={className}>
            <h2>Checksums</h2>
            <div className={`d-flex flex-column ${styles.checksumsContainer}`}>
                <div className='d-flex'>
                    <InputGroup>
                        <FloatingLabel
                            label="MD5SUM"
                        >
                            <Form.Control type="text" value={md5Sum} disabled />
                        </FloatingLabel>
                        <InputGroup.Text>
                            <CopyToClipboard text={md5Sum} onCopy={() => onCopy("md5Sum")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.md5Sum}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.md5Sum}></i>
                        </InputGroup.Text>
                    </InputGroup>
                </div>
                <div className='d-flex'>
                    <InputGroup>
                        <FloatingLabel
                            label="SHA1SUM"
                        >
                            <Form.Control type="text" value={sha1Sum} disabled />
                        </FloatingLabel>
                        <InputGroup.Text>
                            <CopyToClipboard text={sha1Sum} onCopy={() => onCopy("sha1Sum")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.sha1Sum}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.sha1Sum}></i>
                        </InputGroup.Text>
                    </InputGroup>
                </div>
                <div className='d-flex'>
                    <InputGroup>
                        <FloatingLabel
                            label="SHA256SUM"
                        >
                            <Form.Control type="text" value={sha256Sum} disabled />
                        </FloatingLabel>
                        <InputGroup.Text>
                            <CopyToClipboard text={sha256Sum} onCopy={() => onCopy("sha256Sum")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.sha256Sum}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.sha256Sum}></i>
                        </InputGroup.Text>
                    </InputGroup>
                </div>
                <div className='d-flex'>
                    <InputGroup>
                        <FloatingLabel
                            label="Verify"
                        >
                            <Form.Control type="text" value={verifyInput}
                                placeholder="Enter a checksum to verify"
                                onChange={e => setVerifyInput(e.target.value)} />
                        </FloatingLabel>
                    </InputGroup>
                </div>
            </div>
            {verifyAlert}
        </div>);
}