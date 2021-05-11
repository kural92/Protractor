var loginFunction = require('./Utility/login')

describe('Dashboard Scenario for Male Paid Member',function(){

  var login = require('./POM/loginfunction.js');
  var editPi =  require('./POM/editPi.js');

it('Login',function(){


    //loginFunction.login('agr47','cbstest');
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = false;
    
  

    browser.get('https://mobile.agarwalmatrimony.com/#/login');
    browser.manage().window().setSize(411, 823);
   
    browser.sleep(10000);
try{
  login.username.click();
   login.username.sendKeys('KMC439132');
   login.password.click();
  login.password.sendKeys('Change12');
  login.loginclick.click();
}catch (error){
console.log('Id was Already Login');
}
      browser.sleep('10000') ;
      login.intermediate.isEnabled().then(function (page){
console.log("is Enabled : "+page)
     if (page=="true") {
       browser.sleep('3000')
       login.intermediate.click();
     } else {
       
     }

      });
    
browser.sleep('10000') ;
///////
var paid_status = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > div > ion-row.member_banner.md.hydrated > ion-col > ion-item-divider > ion-label > h2'));

browser.sleep('3000')

paid_status.getText().then(function (text) {
  console.log('Package Name : '+text);
});
browser.sleep('3000') ;


/////

var helpline_number = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > div > ion-row.member_banner.md.hydrated > ion-col > ion-item-divider > ion-label > p > a > span.clrblack.paddr5'));

browser.sleep('3000')

helpline_number.getText().then(function (number) {
  console.log('HelpLine Number : '+number);
});

///////
browser.sleep('3000')
 var Days_left = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > div > ion-row.dashboard_banner.paddt10.md.hydrated > ion-col > ion-list > ion-list-header'));
 browser.sleep('3000')

 Days_left.getText().then(function (Days) {
   console.log('Paid Days Left : '+Days);
 });
/////

browser.sleep('3000')
var contact_Used = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > div > ion-row.dashboard_banner.paddt10.md.hydrated > ion-col > ion-list > ion-item-divider:nth-child(2) > ion-button > span'));
browser.sleep('3000')

contact_Used.getText().then(function (Contact) {
  console.log('Contact Used/Seen : '+Contact);
});
////
 
if ((element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > div > ion-row.dashboard_banner.paddt10.md.hydrated > ion-col > ion-list > ion-item-divider.item_listcontent.bdrt.md.item.hydrated > ion-button > span')))!==0) {
  browser.sleep('3000')
var matches_Yet_To_View = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > div > ion-row.dashboard_banner.paddt10.md.hydrated > ion-col > ion-list > ion-item-divider.item_listcontent.bdrt.md.item.hydrated > ion-button > span'));
browser.sleep('3000')

matches_Yet_To_View.getText().then(function (Contact) {
  console.log('Matches Yet To be View : '+Contact);
});
} else {
  console.log('No matches Yet to View')
}


//////
browser.sleep('3000')
if (element(by.xpath('//p[contains(text(),"expressed interest")]')).isDisplayed) {
  var express_intrest = element(by.xpath('//p[contains(text(),"expressed interest")]'));
browser.sleep('3000')
express_intrest.getText().then(function (interest) {
console.log(interest);
});
browser.sleep('3000')
var count = element(by.xpath('(//span[@class="bold-txt font18 paddlr30 listbdr_right member_counts"])[1]'));
count.getText().then(function (count){
  console.log(count)
});
browser.sleep('3000')
express_intrest.click();
browser.sleep('3000')
try {
  element(by.xpath('//div[contains(text(),"GOT IT")]')).click();
} catch (error) {
  console.log('No PoP UP')
}
browser.sleep('3000')
var pending = element(by.xpath('//*[@id="content"]/app-mailbox/super-tabs/super-tabs-toolbar/super-tab-button[1]/ion-label/span'));
pending.getText().then(function (pends) {
console.log(pends)
});
browser.sleep('3000')
/*if (pend==count) {
  console.log('Member Expressed Intrest Count Matches')
} else {
  console.log('Member Expressed Intrest Count not Matches')
}*/
browser.sleep('3000')
element(by.css('#content > app-mailbox > ion-header > ion-toolbar > ion-back-button')).click();

} else {
  console.log('Members yet to Express Interest')
}

///
browser.sleep('3000')
if(element(by.xpath('//p[contains(text(),"viewed your profile")]')).isDisplayed){
browser.sleep('3000')
var viewed_your_profile = element(by.xpath('//p[contains(text(),"viewed your profile")]'));
browser.sleep('3000')
viewed_your_profile.getText().then(function (View) {
console.log(View);
});
browser.sleep('3000')
var count = element(by.xpath('(//span[@class="bold-txt font18 paddlr30 listbdr_right member_counts"])[2]'));
count.getText().then(function (count1){
  console.log(count1)
});
browser.sleep('3000')
viewed_your_profile.click();
browser.sleep('3000')
var view_profile = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(8) > app-list > ion-content > ion-list > ion-grid > ion-row > ion-col.font600.sub_listheadertitle.md.hydrated'));
view_profile.getText().then(function (VP_Count){
  console.log(VP_Count)
var vPP = VP_Count.split(' ');
   console.log(vPP[0])
   browser.sleep('3000')
element(by.css('#content > app-dashboard > ion-footer > app-footer > ion-toolbar > ion-grid > ion-row > ion-col:nth-child(1) > a')).click();
});

} else {
  console.log('Members yet to View your Profile')
}
///
browser.sleep('5000')
element(by.xpath('//p[contains(text(),"are yet to respond")]')).isDisplayed().then(function (ress){
if(ress){
  browser.sleep('3000')
  var Yet_To_Respond = element(by.xpath('//p[contains(text(),"are yet to respond")]'));
  browser.sleep('3000')
  Yet_To_Respond.getText().then(function (Respond) {
  console.log(Respond) 
  });
  browser.sleep('3000')
  var count = element(by.xpath('(//span[@class="bold-txt font18 paddlr30 listbdr_right member_counts"])[3]'));
  count.getText().then(function (count2){
    console.log(count2)
  });
  browser.sleep('3000')
  Yet_To_Respond.click();
  browser.sleep('3000')
  var sent_count = element(by.xpath('//*[@id="content"]/app-mailbox/super-tabs/super-tabs-toolbar/super-tab-button[1]/ion-label/span'));
  sent_count.getText().then(function (scount){
    console.log(scount)
  });
  browser.sleep('3000')
  element(by.css('#content > app-mailbox > ion-header > ion-toolbar > ion-back-button')).click();
  
}else {
  console.log('Members yet to Respond')
}
});
////////s



browser.sleep('3000')
var pcs = element(by.css('#content > app-dashboard > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > div:nth-child(7) > div:nth-child(4) > ion-grid > ion-slides > div > ion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active > ion-grid > ion-row > ion-col.vertical-align-content.md.hydrated > div > div > ion-button'));

browser.executeScript("arguments[0].scrollIntoView();",pcs)

var swipe = function(el, distance) {
  browser.driver
      .actions()
      .mouseDown(el)
      .mouseMove({
          x: distance,
          y: 0
      })
      .mouseUp().perform();
};
browser.swipeLeft = function(el, distance = 50) {
  swipe(el, distance);
};

browser.swipeRight = function(el, distance = -50) {
  swipe(el, distance);
};



















browser.sleep('10000') ;




});

});