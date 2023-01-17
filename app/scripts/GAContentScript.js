
const Utils = require('./utils/Utils')

class GAContentScript {
  static processInBackground (method, args){
    return new Promise((resolve,reject) => {
      chrome.runtime.sendMessage({scope:"GAmendeley",message:"GAprocessInBackground",method:method,args:args},(response) => {
        if(response.response != null) resolve(response.response)
        else if(response.error != null) reject(response.error)
      })
    })
  }
}

module.exports = GAContentScript
