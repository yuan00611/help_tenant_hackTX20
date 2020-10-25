import React from 'react';
import './issuepage.css';
import Header from '../components/Header';
// import Issue from '../components/Issue';
import Button from '../components/Button';
import { Issues } from '../components/Issues';
import { SolvedIssues } from '../components/SolvedIssues';

const Issue = () => {
  return (
    <div className="inner-section">
      <div className="issue-container">
          <p>
              <span className="primary-color">10/25</span><span> Without hot water</span>
              <span><span>+1</span></span>
          </p>
      </div>
      <p className="echo">
        <span id="count">1</span> tenants have the same issue.
      </p>
    </div>
  )
}

class Issuepage extends React.Component {
  state = {
    issues: []
  }

  addIssue = () => {
    this.setState({
      issues: [...this.state.issues, <Issue />]
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="ISSUE SPEAKER" />
        {this.state.issues}
        <Issues />

        <div className="section">
          <h3>Solved issues</h3>
          <div className="solved-issues">
            <SolvedIssues />
            <br/><br/><br/>
          </div>
        </div>
        <div className="button" onClick={this.addIssue}>
        <Button content="+ New Issue" />
        </div>
      </div>
    );
  }
}


export default Issuepage;