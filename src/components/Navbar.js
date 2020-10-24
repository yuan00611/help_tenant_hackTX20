import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
        <IconContext.Provider value={{color: '#000'}}>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        TenantHelp
                    </Link>
                    <ul>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/issue" className="nav-links">
                                Issue Speaker
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chat" className="nav-links">
                                Tenant Chat
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/file" className="nav-links">
                                File Archive
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links">
                                Contact Landlord
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
