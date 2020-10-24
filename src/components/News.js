import React from 'react';
import './News.css';

const News = ({
    date, content
}) => {
    return (
        <div className="news-containter">
            <div>
            <p>
                <span>{date}</span>
                <span> {content}</span>
            </p>
            </div>
        </div>
    )
}

export default News
