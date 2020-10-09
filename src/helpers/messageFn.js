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

export const findMatchingResponse = (type) => {
  switch (type) {
    case "Initial":
      return "hi nice to hear from you"

    case "Experience":
      return "I'm having overall experience of 3 years and 3+months"

    case "Resume":
      return "Yeah! You can find updated resume in the following link https://github.com/karthick3018/resume/blob/main/Karthick%20Raja%20Resume%20(1).pdf"

    case "Notice":
      return "If thinks went good I can join in next 30 days"

    case "Salary":
      return "Too early let's discuss this after interview"

      case "Availability":
        return "I'm Available from 4pm-8pm (IST) in the weekdays you can send a invite mail to karthickraja@gmail.com"

    case "Job Change":
      return "Yeah I'm looking for a company that provides me challenging and friendly work environment"

    case "Myself":
      return "yeah sure!. I'm building web and mobile apps using react and react-native for the past 3+ years. I initially started with react and got so much interest in it. I use middleware such as saga & thunk for async operations.I Cover backed nodejs at needs and can cover styling part too.Mainly loves react and javascript can code in typescript too. Thanks!"

    default:
      return "Sry! can't get you"
  }
}