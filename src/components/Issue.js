import React from 'react';
import './Issue.css';
import { IconContext } from 'react-icons';
import { BsPlusCircle } from 'react-icons/bs';

const Issue = ({
    date, content, echoNumber, colorCode
}) => {
    return (
        <IconContext.Provider value={{color: {colorCode}, size: "20px"}}>
        <div className="inner-section">
            <div className="issue-containter">
                <p>
                    <span>{date} {content}</span>
                    <span><span>+1</span></span>
                    {/* <span><BsPlusCircle /></span> */}
                </p>
            </div>
            <p className="echo">
                {echoNumber} tenants have the same issue.
            </p>
        </div>
        </IconContext.Provider>
    )
}

export default Issue
