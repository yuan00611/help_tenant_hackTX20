import React from 'react';
import './filepage.css';
import Header from '../components/Header';
import Button from '../components/Button';
import { Files } from '../components/Files';
// import File from '../components/File';

const File = () => {
  return (
    <div className="file-container">
      <div className="file-row">
          <div className="file">
              <p><a href="/">Oct utility bill.pdf</a></p>
              <p>10/25/2020</p>
              <p>455kB</p>
          </div>
      </div>
    </div>
  )
}

class filepage extends React.Component{
  state = {
    files: []
  }

  addFile = () => {
    this.setState({
      files: [...this.state.files, <File />]
    })
  }

  render() {
    return (
      <div className="container">
      <Header title="FILE ARCHIVE" />
      <Files />
      {this.state.files}
      

      <div className="button" onClick={this.addFile}>
      <Button content="+ New File" />
      
      </div>
      </div>
    );
  }
}

export default filepage;
