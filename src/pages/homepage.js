import React from 'react';
import News from '../components/News';
import './homepage.css';
import { FaQuestion, FaFolder, FaPhoneAlt } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
// import Header from '../components/Header';
import { Link } from 'react-router-dom';


function homepage() {
  return (
    <>
    <IconContext.Provider value={{color: '#9B51E0', size: '40px'}}>
      <div className="container">
        <h1>Hello, Jessie!</h1>
        <div className="section">
          <h3>Important news from landlord</h3>
          <div className="inner-section">
            <News date="10/21" content="Water has now been turned back on." />
            <News date="10/20" content="Water will shut off on Wednesday 10am-3pm." />
            <News date="10/19" content="Pest control is coming on next Thursday." />
          </div>
        </div>
        <div className="section">
          <h3>What would you like to do?</h3>
          <div className="inner-section">
            <div className="cards">
                <Link to="/issue" className="nav-links">
                  <div className="card-container">
                      <FaQuestion />
                      <h3 className="primary-color">Issue Speaker</h3>
                      <p>Find other tenants experiencing same issue.</p>
                  </div>
                </Link>
                <Link to="/chat" className="nav-links">
                  <div className="card-container">
                      <BsFillChatDotsFill />
                      <h3 className="primary-color">Issue Speaker</h3>
                      <p>Find other tenants experiencing same issue.</p>
                  </div>
                </Link>
                <Link to="/file" className="nav-links">
                  <div className="card-container">
                      <FaFolder />
                      <h3 className="primary-color">File Archive</h3>
                      <p>Save all your apartment related files in one place.</p>
                  </div>
                </Link>
                <Link to="/contact" className="nav-links">
                  <div className="card-container">
                      <FaPhoneAlt />
                      <h3 className="primary-color">Contact Landlord</h3>
                      <p>Email, phone call, or leave landlord a message.</p>
                  </div>
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
    </>
  );
}

export default homepage;
