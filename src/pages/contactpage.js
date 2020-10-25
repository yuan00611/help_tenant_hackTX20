import React from 'react';
import './contactpage.css';
import Header from '../components/Header';
import Button from '../components/Button';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function contactpage() {
  return (
    <div className="container">
      <Header title="CONTACT" />
      <div className="section">
          <form>
            <input type="text" placeholder="Title" className="title-input" />
          </form>
      </div>
      <div className="section">
          <form>
            <input type="text" placeholder="Type your message here..." className="message-input" />
          </form>
      </div>

      <div class="button">
      <Button content="Submit" />
      </div>
    </div>
  );
}

export default contactpage;
