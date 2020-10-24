import React from 'react';
import './filepage.css';
import Header from '../components/Header';
import Button from '../components/Button';
import File from '../components/File'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function filepage() {
  return (
    <div className="container">
      <Header title="FILE ARCHIVE" />
      <div className="section">
        <form>
          <input type="text" placeholder="search keywords..." className="search-input" />
        </form>
      </div>
      <div className="section">
        <h3>All files</h3>
        <div className="file-table">
          <File
          name="Name"
          date="Date Created"
          size="Size"
          url="" />
          <File
          name="Toilet repair request.pdf"
          date="Oct 19, 2020"
          size="1.2MB"
          url="/" />
          <File
          name="Broken window.jpg"
          date="Oct 08, 2020"
          size="465kB"
          url="/" />
          <File
          name="Oct utility bill.pdf"
          date="Oct 19, 2020"
          size="1.5MB"
          url="/" />
        </div>
      </div>

      <div class="button">
      <Button content="+ New File" />
      </div>
    </div>
  );
}

export default filepage;