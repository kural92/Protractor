describe('PWA Ionic Change Code', function() {

    // var Test_Data = xl.read_from_excel('Login','./testdata.xlsx');
     var login = require('./POM/loginfunction.js');
     var editPi =  require('./POM/editPi.js');
     var vp = require('./POM/ViewProfile.js');
   
       it('ViewProfile Function', function() {
         browser.waitForAngularEnabled(false);
         browser.ignoreSynchronization = false;


         browser.get('https://mobile.communitymatrimony.com/#/login');
         browser.manage().window().setSize(411, 823);
        
         browser.sleep(10000);
     try{
       login.username.click();
        login.username.sendKeys('CHY458603');
        login.password.click();
       login.password.sendKeys('cbstest');
       login.loginclick.click();
     }catch (error){
   console.log('Id was Already Login');
    }
           browser.sleep('10000') ;
   try {
     login.intermediate.click();
    browser.sleep(5000)
   // login.qucikResponse.click();
   } catch (error) {
   
   }

   
   browser.sleep('10000') ;
   //login.intermediate.click();
   element(by.css('#content > app-dashboard > super-tabs > super-tabs-toolbar > super-tab-button:nth-child(3)')).click();
   browser.sleep('10000') ;

   element(by.xpath('(//div[@class="matriid_txt"])[1]')).click();

   browser.sleep('5000')
   if (vp.vpProfileNotMatchedWCSM==1) {
     browser.sleep(5000) 
     vp.vp_Next_ArrowButton.click();

   } else {
     
   browser.sleep(5000)
   if (vp.vp_requestPhoto==1) {
    browser.sleep(5000)
    vp.vp_requestPhoto.click();
   } else {
     
   }
   

   browser.sleep(2000)
   browser.executeScript('');

   browser.sleep(5000)
   vp.vp_Basic_btn.click();

   browser.sleep(5000)
   element(by.xpath('//*[@id="content"]/app-viewprofile/ion-content/ion-grid[1]/div/div/ion-row/ion-col[2]/ion-buttons/ion-button/ion-icon')).click();


   browser.sleep(5000)
   element(by.xpath('//*[@id="content"]/app-viewprofile/ion-content/ion-grid[1]/div/div/ion-row/ion-col[3]/ion-buttons/ion-button/ion-icon')).click();

   
   browser.sleep(5000)
   element(by.xpath('//*[@id="content"]/app-viewprofile/ion-content/ion-grid[1]/div/div/ion-row/ion-col[4]/ion-buttons/ion-button/ion-icon')).click();

   
   browser.sleep(5000)
   element(by.xpath('//*[@id="content"]/app-viewprofile/ion-content/ion-grid[1]/div/div/ion-row/ion-col[5]/ion-buttons/ion-button/ion-icon')).click();

  
   }

   browser.sleep('30000')
       });

});