import React, { useReducer } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import isBase64 from 'is-base64';
import styles from './styles/Encodings.module.css';


interface CopiedState {
    base64encoding: boolean;
    base64decoding: boolean;
}

const defaultCopiedState: CopiedState = Object.freeze({
    base64encoding: false,
    base64decoding: false,
});

interface CopiedStateUpdate {
    base64encoding?: boolean;
    base64decoding?: boolean;
}

function copiedStateReducer(state: CopiedState, newState: CopiedStateUpdate): CopiedState {
    return { ...state, ...newState };
}


export default function Encodings(
    {
        text,
        className = "",
        copiedTimeout = 1000,
    }: {
        text: string;
        className?: string;
        copiedTimeout?: number;
    }
) {
    const [copied, setCopied] = useReducer(copiedStateReducer, defaultCopiedState);

    function onCopy(type: keyof CopiedState) {
        setCopied({ [type]: true });
        setTimeout(() => setCopied({ [type]: false }), copiedTimeout);
    }

    const base64encoding = text ? btoa(text) : "";
    const base64decoding = text && isBase64(text) ? atob(text) : "";
    return (
        <div className={className}>
            <h2>Encodings</h2>
            <div className={`d-flex flex-column ${styles.checksumsContainer}`}>
                <div className='d-flex'>
                    <InputGroup>
                        <FloatingLabel
                            label="Base64 Encoding"
                        >
                            <Form.Control type="text" value={base64encoding} disabled />
                        </FloatingLabel>
                        <InputGroup.Text>
                            <CopyToClipboard text={base64encoding} onCopy={() => onCopy("base64encoding")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.base64encoding}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.base64encoding}></i>
                        </InputGroup.Text>
                    </InputGroup>
                </div>
                <div className='d-flex'>
                    <InputGroup>
                        <FloatingLabel
                            label="Base64 Decoding"
                        >
                            <Form.Control type="text" value={base64decoding} disabled />
                        </FloatingLabel>
                        <InputGroup.Text>
                            <CopyToClipboard text={base64decoding} onCopy={() => onCopy("base64decoding")}>
                                <i className={`bi bi-clipboard2 ${styles.copyIcon}`} hidden={copied.base64decoding}></i>
                            </CopyToClipboard>
                            <i className={`bi bi-check ${styles.copyIcon}`} hidden={!copied.base64decoding}></i>
                        </InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
}