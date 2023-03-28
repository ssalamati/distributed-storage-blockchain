import React, { useState } from 'react';

import { STORJ_IPFS_GATEWAY_URL } from './constants'

function FilesTable(props) {
    console.log(props.files)
    return (
    <table>
        <thead>
        <tr>
            <th>File</th>
            <th>Size</th>
        </tr>
        </thead>
        <tbody>
        {props.files.map((row) => (
            <tr key={row.cid}>
            <td><a href={`${STORJ_IPFS_GATEWAY_URL}${row.cid}`}>{row.name}</a></td>
            <td>{row.size}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );
}

export default FilesTable;