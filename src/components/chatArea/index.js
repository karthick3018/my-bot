import React from 'react';
import MessageLayout from '../messageLayout';
import './chatArea.css'

const ChatArea = () => {
  return (
    <div className="container">
      <p>Chat Area</p>
      <MessageLayout />
    </div>
  )
}

export default ChatArea