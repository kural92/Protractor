describe('PWA Ionic Change Code', function() {

    // var Test_Data = xl.read_from_excel('Login','./testdata.xlsx');
     var login = require('./POM/loginfunction.js');
     var mail =  require('./POM/mailboxpom.js');
   
       it('View and Reply for Mail', function() {
         browser.waitForAngularEnabled(false);
         browser.ignoreSynchronization = false;
         
       
   
         browser.get('https://mobile.communitymatrimony.com#/login');
         browser.manage().window().setSize(411, 823);
        
         browser.sleep(10000);
     try{
       login.username.click();
        login.username.sendKeys('chy458603');
        login.password.click();
       login.password.sendKeys('cbstest');
       login.loginclick.click();
     }catch (error){
   console.log('Id was Already Login');
    }
           browser.sleep('10000') ;
   try {
     login.intermediate.click();
   } catch (error) {
     
   }
   browser.sleep('10000') ;
   //login.intermediate.click();
   
   browser.sleep('5000');
   mail.mailbox.click();


  
   
   // EDit PI 
   browser.sleep('10000') ; 
  
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

 browser.waitForAngularEnabled(false);
  
   browser.sleep('5000')

   try {
       mail.Mail_gotIt.click();
   } catch (error) {
       
   }

   browser.sleep('5000')
   if ((mail.mail_viewandReply).isDisplayed) {
       browser.sleep('5000')
       mail.mail_viewandReply.click();

       browser.sleep('5000')
       mail.mail_viewandreply_msgBox.clear();


   } else {
       
   }

browser.sleep('10000')

});

});