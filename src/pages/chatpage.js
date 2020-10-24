import React, { Component } from 'react';
import './chatpage.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class SendButton extends Component {
	render() {
		return (
			<div className="send_message" onClick={this.props.handleClick}>
			  <div className="text">send</div>
			</div>
		);
	}
}

class MessageTextBoxContainer extends Component{
  render(){
    return(
      <div className="message_input_wrapper">
        <input id="msg_input" className="message_input" placeholder="Type your messages here..." value={this.props.message} onChange={this.props.onChange} onKeyPress={this.props._handleKeyPress}/>
      </div>
    );
  }
}

class Avatar extends Component {
  render(){
    return(
      <div className="avatar"/>
    );
  }
}

class BotMessageBox extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <li className="message left appeared">
        <Avatar></Avatar>
        <div className="text_wrapper">
            <div className="text">{this.props.message}</div>
        </div>
      </li>
    );
  }
}

class UserMessageBox extends Component{
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <li className={`message ${this.props.appearance} appeared`}>
        <Avatar></Avatar>
        <div className="text_wrapper">
            <div className="text">{this.props.message}</div>
        </div>
      </li>
    );
  }
}

class chatpage extends Component{
	constructor(props){
		super(props);
		this.state = {
			"message": "",
			"current_message": ""
		};
		this.handleClick = this.handleClick.bind(this);
		this._handleKeyPress = this._handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addMessageBox = this.addMessageBox.bind(this);

	}
  
  addMessageBox(enter=true){
    let messages = this.state.messages;
    let current_message = this.state.current_message;
    console.log(this.state);
    if(current_message && enter){
      messages = [...messages, {"message":current_message}];
      fetch("http://localhost:5000?message=" + current_message)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            messages: [...messages, {"message":result["message"], "isbotmessage":true}]
          });
        },
        (error) => {
          //do nothing for now
        }
      );
      current_message = ""
    }  
    this.setState({
      current_message: current_message,
      messages
    });

  }

  handleClick(){
    this.addMessageBox();
  }

  onChange(e) {
    this.setState({
      current_message: e.target.value
    });  
  }

    _handleKeyPress(e) {
    let enter_pressed = false;
    if(e.key === "Enter"){
      enter_pressed = true;
    }
    this.addMessageBox(enter_pressed)
  }


	render() {
		return (
	    <div>
	      <Navbar />
	      <Header title="Tenant Chat" />
	      <div className="bottom_wrapper clearfix">
          <MessageTextBoxContainer 
            _handleKeyPress={this._handleKeyPress} 
            onChange={this.onChange} 
            message={this.state.current_message}></MessageTextBoxContainer>
          <SendButton handleClick={this.handleClick}></SendButton>
        </div>
	    </div>
	  );
	}
  
}

export default chatpage;







