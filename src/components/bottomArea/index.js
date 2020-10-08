import React,{useState} from 'react';
import './bottomArea.css';

const BottomArea = () => {
  const [state,setState] = useState('');

  const handleTextAreaChange = (e) => {
   setState(e.target.value)
  }

  const handleOnEnter = (e) => {
    if(e.key==='Enter'){
      // handleOnClick(e.target.value);
     }
  }

  return (
    <div className="bottom-area">
      <textarea 
       onChange = { handleTextAreaChange }
       value = { state }
       onKeyPress ={ handleOnEnter }
      />
    </div>
  )
}

export default BottomArea;