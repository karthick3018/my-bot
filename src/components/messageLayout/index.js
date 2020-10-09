import React, { useReducer } from 'react';
import BottomArea from '../bottomArea';
import { generateReplyMessage } from '../../helpers/messageFn';
import './messageLayout.css';

const initialState = {
  messages: [{type:'sent',message:"Hi I'm a bot"}],
  isTyping: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_MESSAGE_RECEIVED":
      return { ...state, messages: action.payload.messages, isTyping: true };
    case "SEND_NEW_MESSAGE":
      return { ...state, messages: action.payload.messages, isTyping: false };
    default:
      return { ...state }
  }
}

const MessageLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleNewReceivedMessage = (message) => {
    let updatedState = [...state.messages];
    updatedState = [...updatedState, { type: 'received', message }];

    dispatch({
      type: "NEW_MESSAGE_RECEIVED",
      payload: {
        messages: updatedState
      }
    })
    setTimeout(() => {
      replyForMessage(message, updatedState)
    }, 1000)
  }

  const replyForMessage = (message, existingState) => {
    let updatedState = [...existingState];
    let newMessage = generateReplyMessage(message);
    updatedState = [...updatedState, { type: 'sent', message: newMessage }];

    dispatch({
      type: "SEND_NEW_MESSAGE",
      payload: {
        messages: updatedState
      }
    })
  }

  return (
    <div>
      {state?.messages?.map((eachMsg,i) => (
        <div key={i} className={`message-card ${eachMsg.type}`}> 
         <p>{eachMsg.message}</p> 
        </div>
      ))}
      <BottomArea handleNewReceivedMessage={handleNewReceivedMessage} />
      {state?.isTyping && <p>typing ....</p>}
    </div>
  )
}

export default MessageLayout;