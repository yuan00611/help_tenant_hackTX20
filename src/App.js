import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import homepage from './pages/homepage.js';
import issuepage from './pages/issuepage.js';
import chatpage from './pages/chatpage.js';
import filepage from './pages/filepage.js';
import contactpage from './pages/contactpage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={homepage} />
        <Route  path='/issue' component={issuepage} />
        <Route  path='/chat' component={chatpage} />
        <Route  path='/file' component={filepage} />
        <Route  path='/contact' component={contactpage} />
      </Switch>
    </Router>
  );
}

export default App;
