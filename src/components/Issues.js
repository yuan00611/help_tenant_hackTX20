import React from 'react';
import data from '../data.json';
import './Issues.css';

export const Issues = () => {
    return (
        <>
            {data.issues.map((data) => {
                return (
                    <div className="inner-section">
                        <div className="issue-container">
                            <p>
                                <span>{data.date} {data.content}</span>
                                <span><span>+1</span></span>
                            </p>
                        </div>
                        <p className="echo">
                                {data.echoNumber} tenants have the same issue.
                            </p>
                    </div>
                )
            })}
            
        </>
    )
}
