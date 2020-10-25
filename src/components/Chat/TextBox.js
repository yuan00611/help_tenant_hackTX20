import React, { Component } from 'react';
import './TextBox.css';


class TextBox extends Component{
  
  

  render(){
    return(
      <div className="message_input_wrapper">
        <input id="msg_input" 
               className="message_input" 
               placeholder="Type your messages here..." 
               value = {this.props.value}
               onChange={this.props.onChange}/> 
      </div>
    );
  }
}

export default TextBox;
