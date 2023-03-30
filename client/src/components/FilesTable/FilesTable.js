import React, { useState } from 'react';

import { STORJ_IPFS_GATEWAY_URL } from '../../constants'
import './FilesTable.css'

function FilesTable(props) {
    return (
        <div className="FilesTable">
            {/* <h5>
            Files
            </h5> */}
            <table>
                <thead>
                <tr>
                    <th>File</th>
                    <th>Size</th>
                </tr>
                </thead>
                <tbody>
                {props.files.map((row) => (
                    <tr>
                    <td><a href={row.url}>{row.name}</a></td>
                    <td>{row.size}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default FilesTable;