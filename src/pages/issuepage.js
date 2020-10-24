import React from 'react';
import './issuepage.css';
import Header from '../components/Header';
import Issue from '../components/Issue';
import Button from '../components/Button';
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
          <Issue 
            date="10/21"
            content="I don't have hot water"
            echoNumber="12" />
          <Issue 
            date="10/20"
            content="Noices during the night"
            echoNumber="5" />
          <Issue 
            date="10/21"
            content="My apartment loses power."
            echoNumber="2" />
        </div>
      </div>
      <div className="section">
        <h3>Solved issues</h3>
        <div className="solved-issues">
          <Issue 
            date="10/21"
            content="I don't have hot water"
            echoNumber="12" />
          <Issue 
            date="10/20"
            content="Noices during the night"
            echoNumber="5" />
          <Issue 
            date="10/21"
            content="My apartment loses power."
            echoNumber="2" />
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