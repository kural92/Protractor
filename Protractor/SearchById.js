describe('PWA Ionic Change Code', function() {

    // var Test_Data = xl.read_from_excel('Login','./testdata.xlsx');
     var login = require('./POM/loginfunction.js');
     var editPi =  require('./POM/editPi.js');
     var search = require('./POM/searchpom.js');
       it('Login and Search profile with Matri Id', function() {
         browser.waitForAngularEnabled(false);
         browser.ignoreSynchronization = false;


         var searchId = "13";

         browser.get('https://mobilestage.agarwalmatrimony.com/stage4/#/login');
         browser.manage().window().setSize(411, 823);
        
         browser.sleep(10000);
     try{
       login.username.click();
        login.username.sendKeys('agr39');
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
   search.searchBtn.click();

   browser.sleep('5000');
   search.search_By_Id.sendKeys(searchId);

   browser.sleep('5000')
   var enter = browser.actions().sendKeys(protractor.Key.ENTER);
   enter.perform();


   browser.sleep('10000') ;
       });
});