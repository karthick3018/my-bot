import React from 'react';

const MessageLayout = () => {
  const temp = [
  {
    type:'received',
    message:'hi karthick'
  },
  {
    type:'sent',
    message:'hi nice to hear from you'
  },
  {
    type:'received',
    message:`hope you're doing good`
  },
  {
    type:'sent',
    message:'yeah much better'
  }
]
  return(
    <div>
      {temp?.map(eachMsg=>(
        <div className={`message-card ${eachMsg.type}`}> {eachMsg.message} </div>
      ))}
    </div>
  )
}

export default MessageLayout;