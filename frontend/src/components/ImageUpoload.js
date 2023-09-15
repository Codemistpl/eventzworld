import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    imageURL: null, // Added state to store the image URL
  };

  // On file select (from the pop up)
  onFileChange = event => {
    // Update the state
    this.setState({
      selectedFile: event.target.files[0],
      imageURL: URL.createObjectURL(event.target.files[0]), // Set the image URL
    });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);

    axios.post("api/uploadfile", formData)
    .then(response => {
      // Handle successful response
      console.log("File uploaded successfully:", response.data);
    })
    .catch(error => {
      // Handle error
      console.error("Error uploading file:", error.response);
    });
  };


  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return <div><br /></div>;
    }
  };

  render() {
    return (
      <div>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
        {/* Display the image if it exists */}
        {this.state.imageURL && (
          <div>
            <h2>Uploaded Image:</h2>
            <img src={this.state.imageURL} alt="Uploaded" style={{ maxWidth: '300px' }} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
