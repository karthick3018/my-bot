import React,{useState} from 'react';
import MessageLayout from '../messageLayout';
import BotImg from '../messageLayout/bot.png';
import './chatArea.css'

const ChatArea = () => {
  const [isTyping,setIsTyping] = useState(false);

  const handleTyping = (typingState) => {
    setIsTyping(typingState)
  }

  return (
    <div className="container">
      <div className="message-header">
        <figure>
          <img src={BotImg} alt="profile"/>
        </figure>
        <div>
          <p>Karthick's bot</p>
          <span>{`${isTyping?'typing...':'online'}`}</span>
        </div>
      </div>
      <MessageLayout handleTyping={handleTyping} />
    </div>
  )
}

export default ChatArea