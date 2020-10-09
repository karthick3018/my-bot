import moment from 'moment';

export const getCurrentPeriod = () => {
  let currentTime = new Date()
  const splitMorning = 6; 
  const splitAfternoon = 12;  
  const splitEvening = 17;  
  const splitNight = 21;
  const currentHour = parseFloat(moment(currentTime).format('HH'));
   

  if (currentHour >= splitMorning && currentHour < splitAfternoon) {
    return 'MORNING'
  }
  else if(currentHour >= splitAfternoon && currentHour < splitEvening){
    return 'AFTERNOON'
  } 
  else if (currentHour >= splitEvening && currentHour < splitNight) {
    return 'EVENING'
  }
  return 'NIGHT'
}