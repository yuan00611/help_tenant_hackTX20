import React from 'react';
import './homepage.css';
import Navbar from '../components/Navbar';
// import Header from '../components/Header';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function homepage() {
  return (
    <div className="page">
      <Navbar />
      <div className="home-container">
        <h1>Hello, Jessie!</h1>
      </div>
    </div>
  );
}

export default homepage;
