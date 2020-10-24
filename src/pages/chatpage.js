import React from 'react';
import './chatpage.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function chatpage() {
  return (
    <div>
      <Navbar />
      <Header title="CHAT" />
    </div>
  );
}

export default chatpage;