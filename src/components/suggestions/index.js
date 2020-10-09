import React,{useState} from 'react';
import * as Messages from '../../helpers/constants';
import './suggestions.css';

const suggestions = [
  {
    value:'YOUR_EXPERIENCE',
    label:'Experience'
  },
  {
    value:'YOUR_NOTICE_PERIOD',
    label:'Notice Period'
  },
  {
    value:'YOUR_SALARY_EXPECTATION',
    label:'Salary Expectation'
  },
  {
    value:'YOUR_AVAILABILITY',
    label:'Availability'
  },
  {
    value:'YOUR_INTRO',
    label:'Intro'
  },
  {
    value:'YOUR_RESUME',
    label:'Resume'
  }
]

const SuggestionList = ({handleMessageFromSuggestion}) => {
  const [state,setState] = useState(suggestions)
 

  const handleSuggestionClick = (suggestion,i) => {
    handleMessageFromSuggestion(Messages[suggestion?.value])
    let updatedState = [...state];
    updatedState.splice(i,1);
    setState(updatedState);
  }
  return (
    <div className="suggestion">
       {state?.map((eachSuggestion,i)=>{
         return (
           <span 
            className="suggestion-items" 
            key={eachSuggestion.label}
            onClick={()=>handleSuggestionClick(eachSuggestion,i)}> {eachSuggestion.label} </span>
         )
       })}
    </div>
  )
}

export default SuggestionList;