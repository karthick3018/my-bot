export const generateReplyMessage = (message) => {
   message.toLowerCase();
   let resultMessage;
   if(message.includes("hello") || message.includes("hi") || message.includes('hey')){
    resultMessage = findMatchingMessage('Initial')
   }
   else if(message.includes("how") && message.includes("you")) {
    resultMessage = findMatchingMessage('About')
   }
   else{
    resultMessage = findMatchingMessage('default')
   }
   return resultMessage;
}

export const findMatchingMessage = (type) => {
  switch (type){
    case "Initial":
     return "hi nice to hear from you"

     case "About":
      return "yeah good,thanks! hope you're good"
     
      default:
      return "Sry! can't get you"
  }
}