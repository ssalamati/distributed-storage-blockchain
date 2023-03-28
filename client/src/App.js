import React, { Component } from 'react';

import axios from 'axios';
import FormData from 'form-data';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
	this.state = {
		buffer: null
	};
  }

  handleFileUpload = async (event) => {
    event.preventDefault();

    const url = `https://demo.storj-ipfs.com/api/v0/add`;

    let data = new FormData();
    data.append('file', event.target.files[0]);

	try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Upload file
          </p>
          <form onChange={this.handleFileUpload}>
            <input type="file"/>
            <input type="submit"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
