import React, { useState, useEffect, Component } from 'react';
// import ReactDom from 'react-dom';
// import webSocket from 'socket.io-client';
import './chatpage.css';
import Header from '../components/Header';
import Messages from '../components/Chat/Message.js';
import SendButton from '../components/Chat/SendButton.js';
import TextBox from '../components/Chat/TextBox.js';
import { ThemeProvider, Avatar, MessageGroup, Message, MessageText, Row } from '@livechat/ui-kit'

const divStyle = {
  // background: 'blue'
};

class Chatpage extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_message: "",
      input_text: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  

  onChange(e){
    // console.log(e);
    this.setState({
      current_message: e.target.value
    });
    // console.log(e.target.value);
  }

  handleClick(){
    this.setState({
      input_text: [...this.state.input_text, <Messages texts={this.state.current_message} class="message_own" />]
    })
    // this.state.input_text.push(<Messages texts={this.state.current_message} class="message_own" />);
    console.log("I am captured");
    console.log(this.state.input_text);
    this.state.current_message = "";
  }

  
	// const [ws, setWs] = useState(null);

 //  const connectWebSocket = () => {
 //  	setWs(webSocket('http://localhost:3000'));
 //  }

 //  useEffect(() => {
 //  	if (ws) {
 //  		console.log('success connect!')
 //  		initWebSocket()
 //  	}
 //  }, [ws])

 //  const initWebSocket = () => {
 //        //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
 //        ws.on('getMessage', message => {
 //            console.log(message)
 //        })
 //        ws.on('getMessageAll', message => {
	//         console.log(message)
	// 	    })
	// 	    ws.on('getMessageLess', message => {
	// 	      console.log(message)
	// 	    })
 //    }

 //    const sendMessage = (name) => {
 //        //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
 //        ws.emit(name, '收到訊息！')
 //    }
  render(){
    return (
      <ThemeProvider className="theme">
        <div className="container">
          <Header title="CHAT" />
          <MessageGroup avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg">
            <Message style={divStyle} authorName="Jon Smith" date="21:38">
              <Messages texts="Hi, need help!" class="message" />
              <Messages texts="What is the door code for laundry room?" class="message" />
              <Messages texts="They locked again" class="message" />
            </Message>
          </MessageGroup>

          <Row reverse>
            <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_7.jpg" />
            <Message isOwn>
              <Messages texts="The code is 4672" class="message_own" />
              {this.state.input_text}
            </Message>
          </Row>
          
          <div className="bottom_wrapper">
            <TextBox value={this.state.current_message} 
               onChange={this.onChange}  />
            <SendButton handleClick={this.handleClick} />
          </div>

        </div>

      </ThemeProvider>
    );
  }
  
}

export default Chatpage;



// <input type='button' value='連線' onClick={connectWebSocket} />
// <input type='button' value='送出訊息，只有自己收到回傳' onClick={() => { sendMessage('getMessage') }} />
// <input type='text' />