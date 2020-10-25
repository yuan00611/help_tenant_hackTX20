import React from 'react';
import './Button.css';

const Button = ({
    content
}) => {
    return (
        <div className="button-container">
            <p>{content}</p>
        </div>
    )
}

export default Button
