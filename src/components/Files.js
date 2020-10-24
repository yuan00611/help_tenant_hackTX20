import React from 'react';
import data from '../data.json';
import './File.css';

const Files = () => {
    return (
        <>
        {data.files.map((data) => {
            return (
                <div className="file-container">
                    <div className="file-row">
                        <div className="file">
                            <p><a href={data.url}>{data.name}</a></p>
                            <p>{data.date}</p>
                            <p>{data.size}</p>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default Files
