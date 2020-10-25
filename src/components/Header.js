import React from 'react';
import './Header.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <IconContext.Provider value={{size: '2rem'}}>
      <Link to='/'> 
        <h2><AiOutlineArrowLeft className="arrow" /> {props.title}</h2>
      </Link>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
