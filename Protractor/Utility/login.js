var loginFunction= function(){

var matriId = element(by.css('#content > app-login > ion-content > div.loginType > form > ion-list:nth-child(1) > ion-item > ion-input > input'));
var passWord = element(by.css('#content > app-login > ion-content > div.loginType > form > ion-list:nth-child(2) > ion-item > ion-input > input'));
var loginButton = element(by.css('#content > app-login > ion-content > div.loginType > form > ion-grid > ion-row:nth-child(2) > ion-col > ion-button'));
var intermediate = element(by.css('#ion-overlay-2 > div > app-intermediatepcs > div:nth-child(1) > span > button > span'));


this.login = function(ID, password){
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = false;
    
  

    browser.get('https://mobilestage.agarwalmatrimony.com/stage4/#/login');
    browser.manage().window().setSize(411, 823);
   
    browser.sleep(10000);
try{
  matriId.click()
   matriId.sendKeys(ID);
   passWord.click();
  passWord.sendKeys(password);
  loginButton.click();
}catch (error){
console.log('Id was Already Login');
}
      browser.sleep('10000') ;

      try {
        intermediate.click();
      } catch (error) {
        
      }
      browser.sleep('10000') ;
};



};

module.exports = new loginFunction();