/*exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['DashBoard_Male_Paid.js'],
   
    capabilities: {
      'browserName': 'chrome',
  
        //platformName: 'Android',
        //platformVersion: '7.0',
        //deviceName: 'Android Emulator',
      
    
      'chromeOptions': {
        'args': ['disable-notifications']
  
      }
    },

    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
    },
  };  */

  exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
  
    specs: ['DashBoard_Male_Paid.js'],
  
    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
      browserName: 'chrome',
      platformName: 'Android',
      platformVersion: '10.0',
      deviceName: 'Redmi K20 Pro',
    },
  
    baseUrl: 'http://10.0.2.2:8000'
  };
  