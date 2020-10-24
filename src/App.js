import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import homepage from './pages/homepage.js';
import issuepage from './pages/issuepage.js';
import Chatpage from './pages/chatpage.js';
import filepage from './pages/filepage.js';
import contactpage from './pages/contactpage.js';
import testpage from './pages/testpage.js';

function App() {
  return (
  	
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={homepage} />
        <Route  path='/issue' component={issuepage} />
        <Route  path='/chat' component={Chatpage} />
        <Route  path='/file' component={filepage} />
        <Route  path='/contact' component={contactpage} />
        <Route  path='/test' component={testpage} />
      </Switch>
    </Router>
  );
}

export default App;
