import React from 'react';
import './issuepage.css';
import Header from '../components/Header';
// import Issue from '../components/Issue';
import Button from '../components/Button';
import { Issues } from '../components/Issues';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function issuepage() {
  return (
    <div className="container">
      <Header title="ISSUE SPEAKER" />
      <div className="section">
        <form>
          <input type="text" placeholder="search keywords..." className="search-input" />
        </form>
      </div>
      <div className="section">
        <div className="open-issues">
          <Issues />
        </div>
      </div>
      <div className="section">
        <h3>Solved issues</h3>
        <div className="solved-issues">
          <Issues />
          <br/><br/><br/>
        </div>
      </div>
      <div class="button">
      <Button content="+ New Issue" />
      </div>
    </div>
  );
}

export default issuepage;