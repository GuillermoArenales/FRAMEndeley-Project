const Utils = require('./utils/Utils')
const MendeleyCredentials = require('./config/MendeleyCredentials')
const OAuth2 = require("./oauth2");

class GABackground {
  constructor () {
    /*this.mendeleyAuth = new OAuth2('mendeley', {
      client_id: MendeleyCredentials.client_id,
      client_secret: MendeleyCredentials.client_secret,
      api_scope: MendeleyCredentials.api_scope
    })*/
  }

  init () {
    /**

    let that = this
    chrome.runtime.onMessage.addListener((message,sender,sendResponse) => {
      if(message.scope === 'GAmendeley') {
        if(message.message === 'GAprocessInBackground'){
          return true;
        }
    })
      **/

    // Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

    /**
     * Add your Analytics tracking ID here.
     */
    var _AnalyticsCode = 'UA-251874046-1';

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

    })(window, document, 'script', 'https://ssl.google-analytics.com/analytics.js', 'ga') // Note: https protocol here

    //const analyticsCode = 'UA-151448830-2'

    ga('create', _AnalyticsCode, {

      'storage': 'none'

    })

    ga('set', 'checkProtocolTask', function () {}) // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200

    ga('set', 'anonymizeIp', true)

    ga('send', 'pageview', '/helpDialog.html')

  }
}

module.exports = GABackground
