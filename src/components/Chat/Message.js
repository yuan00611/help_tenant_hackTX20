import React from 'react';
import './Message.css';

function Messages(props) {
  return (
    <div className={props.class}>
      <p> {props.texts} </p>
    </div>
  );
}

export default Messages;