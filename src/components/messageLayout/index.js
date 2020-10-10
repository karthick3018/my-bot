import React, { useReducer,useRef } from 'react';
import Linkify from 'react-linkify';
import BottomArea from '../bottomArea';
import { generateReplyMessage } from '../../helpers/messageFn';
import './messageLayout.css';

const initialState = {
  messages: [{type:'sent',message:"Hi I'm a bot"}],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_MESSAGE_RECEIVED":
      return { ...state, messages: action.payload.messages };
    case "SEND_NEW_MESSAGE":
      return { ...state, messages: action.payload.messages };
    default:
      return { ...state }
  }
}

const MessageLayout = ({handleTyping}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const messagesEndRef = useRef(null)



  const handleNewReceivedMessage = (message) => {
    let updatedState = [...state.messages];
    updatedState = [...updatedState, { type: 'received', message }];

    dispatch({
      type: "NEW_MESSAGE_RECEIVED",
      payload: {
        messages: updatedState
      }
    })
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
   
    handleTyping(true);
    setTimeout(() => {
      replyForMessage(message, updatedState)
    }, 1000)
  }

  const replyForMessage = (message, existingState) => {
    let updatedState = [...existingState];
    let newMessage = generateReplyMessage(message);
    updatedState = [...updatedState, { type: 'sent', message: newMessage }];
    handleTyping(false);
    dispatch({
      type: "SEND_NEW_MESSAGE",
      payload: {
        messages: updatedState
      }
    })
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
   
  }

  return (
    <>
     <div className="message-wrapper">
      {state?.messages?.map((eachMsg,i) => (
        <div key={i} className={`message-card ${eachMsg.type}`}> 
         <Linkify><p>{eachMsg.message}</p> </Linkify>
        </div>
      ))}
       <div ref={messagesEndRef} />
      </div>
      <BottomArea handleNewReceivedMessage={handleNewReceivedMessage} />
    </>
  )
}

export default MessageLayout;