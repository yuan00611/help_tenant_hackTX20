import React from 'react';
import './Header.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <h1> {props.title} </h1>
      <Link to='/'> 
         <AiOutlineArrowLeft className="arrow" />
      </Link>
    </div>
  );
}

export default Header;