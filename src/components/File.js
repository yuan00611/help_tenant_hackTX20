import React from 'react';
import './File.css';

const File = ({
    name, date, size
}) => {
    return (
        <div className="file-container">
            <div className="file-row">
                <div className="file">
                    <p><a href="/">{name}</a></p>
                    <p>{date}</p>
                    <p>{size}</p>
                </div>
            </div>
        </div>
    )
}

export default File

    
            