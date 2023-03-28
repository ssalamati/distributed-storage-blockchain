import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

import { STORJ_IPFS_API_URL } from './constants';
import FilesTable from './components/filesTable'
import './App.css';


function App() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [uploadedFiles, setUploadedFiles] = useState([{
		"cid": "QmQxN59Uc1Jv31PfpBh4pW5dzX63oBFjZYR8KrxgnqUx5b",
		"name": "ipfs.jpeg",
		"size": "52528",
	}]);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		let data = new FormData();
		data.append('file', selectedFile);

		try {
			const response = await axios.post(STORJ_IPFS_API_URL, data, {
				headers: {
					'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
				},
				maxContentLength: Infinity,
				maxBodyLength: Infinity,
			});

			console.log(response);
			setUploadedFiles([...uploadedFiles, {
				"cid": response.data.Hash,
				"name": response.data.Name,
				"size": response.data.Size,
			}]);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="App">
		<header className="App-header">
			<FilesTable files={uploadedFiles}/>
			<p>
			Upload file
			</p>
			<form onSubmit={handleSubmit}>
				<input type="file" onChange={handleFileChange}/>
				<input type="submit"/>
			</form>
		</header>
		</div>
	);
}

export default App;
