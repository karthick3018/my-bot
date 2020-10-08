import React from 'react';
import BottomArea from '../bottomArea';
import MessageLayout from '../messageLayout';
import './chatArea.css'

const ChatArea = () => {
  return (
    <div className="container">
      <p>Chat Area</p>
      <MessageLayout/>
      <BottomArea/>
    </div> 
  )
}

export default ChatArea