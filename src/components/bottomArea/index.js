import React, { useState } from 'react';
import './bottomArea.css';

const BottomArea = ({ handleNewReceivedMessage }) => {
  const [state, setState] = useState('');

  const handleTextAreaChange = (e) => {
    setState(e.target.value)
  }

  const handleOnEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setState('');
      handleNewReceivedMessage(e.target.value);
    }
  }

  return (
    <div className="bottom-area">
      <textarea
        onChange={handleTextAreaChange}
        value={state}
        onKeyPress={handleOnEnter}
        placeholder="ask something.."
      />
    </div>
  )
}

export default BottomArea;