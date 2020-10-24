import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { FaQuestion, FaFolder, FaPhoneAlt, FaHome } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import './Navbar.css'

const Navbar = ({currentRoute}) => {
    
    return (
        <>
        <IconContext.Provider value={{color: '#000'}}>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to='/'>
                        <div className="navbar-logo">
                        <span className="primary-color">Tenant</span><span className="secondary-color">Circle</span>
                        </div>
                    </Link>
                    <ul className="section">
                        <li>
                            <NavLink to="/" activeStyle={{
                                borderLeft: "0.4rem solid #9b51e0",
                                backgroundColor: "#ffffff", 
                                color: "#000000"
                            }} className="nav-item">
                                    <FaHome /><span className="nav-title">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/issue" activeStyle={{
                                borderLeft: "0.4rem solid #9b51e0",
                                backgroundColor: "#ffffff", 
                                color: "#000000"
                            }} className="nav-item">
                                <FaQuestion /><span className="nav-title">Issue Speaker</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/chat" activeStyle={{
                                borderLeft: "0.4rem solid #9b51e0",
                                backgroundColor: "#ffffff", 
                                color: "#000000"
                            }} className="nav-item">
                                <BsFillChatDotsFill /><span className="nav-title">Tenant Chat</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/file" activeStyle={{
                                borderLeft: "0.4rem solid #9b51e0",
                                backgroundColor: "#ffffff", 
                                color: "#000000"
                            }} className="nav-item">
                                <FaFolder /><span className="nav-title">File Archive</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeStyle={{
                                borderLeft: "0.4rem solid #9b51e0",
                                backgroundColor: "#ffffff", 
                                color: "#000000"
                            }} className="nav-item">
                                <p><FaPhoneAlt /><span className="nav-title">Contact Landlord</span></p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
