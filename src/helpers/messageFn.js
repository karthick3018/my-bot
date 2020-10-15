import * as Messages from './constants';

export const generateReplyMessage = (message) => {
  message.toLowerCase();
  let resultMessage;
  if ((message.includes("hello") || message.includes("hi") || message.includes('hey'))&& !message.includes("this") ) {
    resultMessage = findMatchingResponse('Initial')
  }
  else if (message.includes("introduce") || message.includes("yourself")) {
    resultMessage = findMatchingResponse('Myself')
  }
  else if (message.includes("experience")) {
    resultMessage = findMatchingResponse('Experience')
  }
  else if (message.includes("job") || message.includes("change")) {
    resultMessage = findMatchingResponse('Job Change')
  }
  else if (message.includes("notice") && message.includes("period")) {
    resultMessage = findMatchingResponse('Notice')
  }
  else if (message.includes("salary") || message.includes("expectation")) {
    resultMessage = findMatchingResponse('Salary')
  }
  else if (message.includes("available") || message.includes("interview")|| message.includes("schedule")) {
    resultMessage = findMatchingResponse('Availability')
  }
  else if (message.includes("updated") || message.includes("resume")) {
    resultMessage = findMatchingResponse('Resume')
  }
  else {
    resultMessage = findMatchingResponse('default')
  }
  return resultMessage;
}

export const findMatchingResponse = async(type) => {
  switch (type) {
    case "Initial":
      let currentPeriod;
      await import ("./common.js").then(eachCommonFn=>{
        currentPeriod =  eachCommonFn.getCurrentPeriod()
      })
      console.log('currentPeriod',currentPeriod)
      return `${Messages.HI} ${Messages[currentPeriod]} ${Messages.NICE_TO_HEAR}`;

    case "Experience":
      return Messages.EXPERIENCE;

    case "Resume":
      return Messages.RESUME;

    case "Notice":
      return Messages.NOTICE_PERIOD;

    case "Salary":
      return Messages.SALARY_EXPECTATION;

      case "Availability":
        return Messages.AVAILABILITY;

    case "Job Change":
      return Messages.JOB_CHANGE;

    case "Myself":
      return Messages.ABOUT_ME;

    default:
      return Messages.DEFAULT;
  }
}