import React from 'react';

export default function ChecksumOutputs({
    md5Sum,
    sha1Sum,
    sha256Sum,
    className = ""
}: {
    md5Sum: string;
    sha1Sum: string;
    sha256Sum: string;
    className?: string;
}) {
    return (
        <div className={className}>
            <h2>Checksums</h2>
            <table className='mx-auto'>
                <tbody>
                    <tr>
                        <td>MD5SUM</td>
                        <td><input type="text" value={md5Sum} disabled /></td>
                    </tr>
                    <tr>
                        <td>SHA1SUM</td>
                        <td><input type="text" value={sha1Sum} disabled /></td>
                    </tr>
                    <tr>
                        <td>SHA256SUM</td>
                        <td><input type="text" value={sha256Sum} disabled /></td>
                    </tr>
                </tbody>
            </table>
        </div>);
}