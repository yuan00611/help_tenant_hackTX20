import React, { useState, useEffect } from 'react';
// import ReactDom from 'react-dom';
import webSocket from 'socket.io-client';
import './chatpage.css';
import Header from '../components/Header';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Chatpage = () => {
	const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
  	setWs(webSocket('http://localhost:3000'));
  }

  useEffect(() => {
  	if (ws) {
  		console.log('success connect!')
  		initWebSocket()
  	}
  }, [ws])

  const initWebSocket = () => {
        //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
        ws.on('getMessage', message => {
            console.log(message)
        })
        ws.on('getMessageAll', message => {
	        console.log(message)
		    })
		    ws.on('getMessageLess', message => {
		      console.log(message)
		    })
    }

    const sendMessage = (name) => {
        //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
        ws.emit(name, '收到訊息！')
    }

  return (
    <div className="container">
      <Header title="CHAT" />
      <input type='button' value='連線' onClick={connectWebSocket} />
      <input type='button' value='送出訊息，只有自己收到回傳' onClick={() => { sendMessage('getMessage') }} />
      <input type='button' value='送出訊息，讓所有人收到回傳' onClick={() => { sendMessage('getMessageAll') }} />
      
    </div>
  );
}

export default Chatpage;