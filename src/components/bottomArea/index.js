import React, { useState } from 'react';
import SuggestionList from '../suggestions';
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

  const handleMessageFromSuggestion = (message) => {
    setState(message);
  }

  return (
    <div className="bottom-area">
      <SuggestionList handleMessageFromSuggestion={handleMessageFromSuggestion} />
      <textarea
        onChange={handleTextAreaChange}
        value={state}
        onKeyPress={handleOnEnter}
        placeholder="HR queries.."
        autoFocus={true}
      />
    </div>
  )
}

export default BottomArea;