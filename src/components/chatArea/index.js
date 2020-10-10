import React, { useState } from 'react';
import {MY_EMAIL,MY_NAME} from '../../helpers/constants';
import MessageLayout from '../messageLayout';
import BotImg from '../messageLayout/bot.png';
import './chatArea.css'

const ChatArea = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (typingState) => {
    setIsTyping(typingState)
  }

  return (
    <div className="container">
      <div className="message-header">
        <div className="message-name">
          <figure>
            <img src={BotImg} alt="profile" />
          </figure>
          <div>
            <p>{`${MY_NAME}'s bot`}</p>
            <span>{`${isTyping ? 'typing...' : 'online'}`}</span>
          </div>
        </div>
        <div className="mail-link">
          <a href={`mailto:${MY_EMAIL}`} target="_top">Send a mail</a>
        </div>
      </div>
      <MessageLayout handleTyping={handleTyping} />
    </div>
  )
}

export default ChatArea