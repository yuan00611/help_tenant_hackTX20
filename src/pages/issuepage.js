import React from 'react';
import './issuepage.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function issuepage() {
  return (
    <div>
      <Navbar />
      <Header title="ISSUE SPEAKER" />
    </div>
  );
}

export default issuepage;