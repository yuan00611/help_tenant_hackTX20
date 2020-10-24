import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import homepage from './components/pages/homepage.js';
import issuepage from './components/pages/issuepage.js';
import chatpage from './components/pages/chatpage.js';
import filepage from './components/pages/filepage.js';
import contactpage from './components/pages/contactpage.js';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
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
