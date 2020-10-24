import React from 'react';
import './filepage.css';
import Header from '../components/Header';
import Button from '../components/Button';
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
      </div>

      <div class="button">
      <Button content="+ New File" />
      </div>
    </div>
  );
}

export default filepage;