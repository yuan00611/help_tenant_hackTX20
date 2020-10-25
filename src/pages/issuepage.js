import React from 'react';
import './issuepage.css';
import Header from '../components/Header';
// import Issue from '../components/Issue';
import Button from '../components/Button';
import { Issues } from '../components/Issues';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Issuepage() {
  return (
    <div className="container">
      <Header title="ISSUE SPEAKER" />
      <Issues />
      <div className="section">
        <h3>Solved issues</h3>
        <div className="solved-issues">
          <Issues />
          <br/><br/><br/>
        </div>
      </div>
      <div className="button">
      <Button content="+ New Issue" />
      </div>
    </div>
  );
}

export default Issuepage;