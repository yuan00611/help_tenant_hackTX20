import React from 'react';
import './filepage.css';
import Header from '../components/Header';
import Button from '../components/Button';
import { Files } from '../components/Files';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function filepage() {
  return (
    <div className="container">
      <Header title="FILE ARCHIVE" />
      <Files />

      <div className="button">
      <Button content="+ New File" />
      </div>
    </div>
  );
}

export default filepage;
