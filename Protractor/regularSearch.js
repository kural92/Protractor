describe('PWA Ionic Change Code', function() {

    // var Test_Data = xl.read_from_excel('Login','./testdata.xlsx');
     var login = require('./POM/loginfunction.js');
     var editPi =  require('./POM/editPi.js');
     var search = require('./POM/searchpom.js');
       it('Login and Regular Search', function() {
         browser.waitForAngularEnabled(false);
         browser.ignoreSynchronization = false;


         var searchId = "13";
         var marital = "Unmarried"; // Any //Widow // Divorced //Separated 
         var religion = "Hindu"; //Any //Jain //Hindu
         var subcaste = "Bisa"; // Bisa , Poddar , Any , Not Specified 
         var Dosham = "No"; // Yes , No , DosentMatter
         var PhotoProfile = "Yes" ;
         var horoscopeProfile = "Yes";
         var employeedIn = "Government"; // Any, Private , Defence, Self Employeed , Business, Not Working


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
   } catch (error) {
     
   }
   browser.sleep('10000') ;
   //login.intermediate.click();
   
   browser.sleep('5000');
   search.searchBtn.click();


   browser.sleep('5000');
   browser.executeScript('window.scrollTo(0,200)');

   browser.sleep('5000');
   browser.executeScript('window.scrollTo(0,400)');


   browser.sleep('5000')
   search.regularSearch_age.click();

   browser.sleep('5000')
   search.regularSearch_ageFrom.click();

   browser.sleep('5000')
   search.regularSearch_ageFrom_24.click();

   browser.sleep('5000')
   search.regularSearch_ageTo.click();

   browser.sleep('5000')
   search.regularSearch_ageTo_29.click();

   browser.sleep('5000')
   search.regularSearch_age_okbtn.click();
   
   browser.sleep('5000')
   search.regularSearch_Height.click();

   browser.sleep('5000')
   search.regularSearch_HeightFrom.click();

   browser.sleep('5000')
   search.regularSearch_HeightFrom_4ftin.click();

   browser.sleep('5000')
   search.regularSearch_HeightTo.click();

   browser.sleep('5000')
   search.regularSearch_HeightTo_ft10in.click();

   browser.sleep('5000')
   search.regularSearch_Height_Okbtn.click();

   browser.sleep('5000')
   search.regularSearch_MaritalStatus.click();
//////
   browser.sleep('5000')
   if (marital=="Any") {
     browser.sleep('5000')
     search.regularSearch_MaritalStatus_Any.click();
   } else if (marital=="Umarried") {
    browser.sleep('5000')
    search.regularSearch_MaritalStatus_Unmarried.click();
  } else if (marital=="Widow") {
    browser.sleep('5000')
    search.regularSearch_MaritalStatus_Widow.click();
  } else if (marital=="Divorced") {
    browser.sleep('5000')
    search.regularSearch_MaritalStatus_Divorced.click();
  } else if (marital=="Separated") {
    browser.sleep('5000')
    search.regularSearch_MaritalStatus_Seperated
  } else {}

  
/////
 browser.sleep('5000')
 search.regularSearch_MaritalStatus_Okbtn.click();

 browser.sleep('5000')
 search.regularSearch_Religion.click();

 browser.sleep('5000')
 if (religion="Any") {
   search.regularSearch_Religion_any.click();
 } else if (religion="Hindu") {
  search.regularSearch_Religion_Hindu.click();
}  else if (religion="Jain") {
  search.regularSearch_Religion_Jain.click();
} else {

}

//
browser.sleep('5000')
search.regularSearch_Religion_okbtn.click();

browser.sleep('5000')
browser.executeScript("window.scrollTo(0,400)")

browser.sleep('5000')
search.regularSearch_SubCaste.click();

browser.sleep('5000')
if (subcaste=="Any") {
  browser.sleep('5000')
  search.regularSearch_SubCaste_Any.click();
} else if (subcaste=="Bisa") {
  browser.sleep('5000')
  search.regularSearch_SubCaste_Bisa.click();
} else if (subcaste=="Poddar") {
  browser.sleep('5000')
  search.regularSearch_SubCaste_Poddar.click();
} else if (subcaste=="Not Specified") {
  browser.sleep('5000')
  search.regularSearch_SubCaste_NotSpecified.click();                                      
} else if (subcaste=="Any") {
  browser.sleep('5000')
  search.regularSearch_SubCaste_Any.click();
} else {

}
browser.sleep('5000')
 search.regularSearch_SubCaste_okbtn.click();

 browser.sleep('5000')
 browser.executeScript("window.scrollTo(0,400)")

 browser.sleep('5000')
search.regularSearch_MotherTongue.click();

browser.sleep('5000')
search.regularSearch_MotherTongue_Hindi.click();

browser.sleep('5000')
search.regularSearch_MotherTongue_okbtn.click();

browser.sleep('5000')
browser.executeScript("window.scrollTo(0,400)")


browser.sleep('5000')
search.regularSearch_Star.click();

browser.sleep('5000')
search.regularSearch_Star_magam.click();

browser.sleep('5000')
search.regularSearch_Star_Oktn.click();

browser.sleep('5000')
browser.executeScript("window.scrollTo(0,400)")

browser.sleep('5000')
search.regularSearch_Dosham.click();

browser.sleep('5000')
if (Dosham=="DoesntMatter") {
  browser.sleep('5000')
  search.regularSearch_Dosham_DoesntMatter.click();
} else if (Dosham=="Yes") {
  browser.sleep('5000')
  search.regularSearch_Dosham_Yes.click();
} else if (Dosham=="No") {
  browser.sleep('5000')
  search.regularSearch_Dosham_No.click();
} else {

}

browser.sleep('5000')
search.regularSearch_Dosham_okbtn.click();

browser.sleep('5000')
search.regularSearch_Country.click();

browser.sleep('5000')
search.regularSearch_Country_Australia.click();

browser.sleep('5000')
search.regularSearch_Country_okbtn.click();

browser.sleep('5000')
search.regularSearch_state.click();

browser.sleep('5000')
search.regularSearch_state_ausState.click();

browser.sleep('5000')
search.regularSearch_State_okbtn.click();

browser.sleep('5000')
search.regularSearch_City.click();

browser.sleep('5000')
search.regularSearch_City_patna.click();

browser.sleep('5000')
search.regularSearch_Country_okbtn.click();

browser.sleep('5000')
search.regularSearch_Education.click();

browser.sleep('5000')
search.regularSearch_Education_Finance.click();

browser.sleep('5000')
search.regularSearch_Education_okbtn.click();



browser.sleep('5000')
if (employeedIn=="Government") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_Government.click();
} else if (employeedIn=="Any") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_Any.click();
} else if (employeedIn=="Private") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_Private.click();
} else if (employeedIn=="Defence") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_Defence.click();
} else if (employeedIn=="Self Employeed") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_SelfEmployeed.click();
} else if (employeedIn=="Not Working") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_NotWorking.click();
} else if (employeedIn=="Business") {
  browser.sleep('5000')
  search.regularSearch_EmployeedIN_Business.click();
} else{

}

browser.sleep('5000')
search.regularSearch_EmployeedIN_okbtn.click();

browser.sleep('5000')
search.regularSearch_Occupation.click();

browser.sleep('5000')
search.regularSearch_Occupation_Administration.click();

browser.sleep('5000')
search.regularSearch_Occupation_okbtn.click();

browser.sleep('5000')
search.regularSearch_AnnualIncome.click();

browser.sleep('5000')
search.regularSearch_AnnualIncome_from.click();

browser.sleep('5000')
search.regularSearch_AnnualIncome_5lak.click();

try{
  browser.sleep('5000')
  search.regularSearch_AnnualIncome_to.click();

  browser.sleep('5000')
  search.regularSearch_AnnualIncome_10lak.click();

  browser.sleep('5000')
  search.regularSearch_AnnualIncome_okbtn.click();
} catch (error) {
  
}


////

///
 if (PhotoProfile=="Yes") {
   browser.sleep('5000')
   search.regularSearch_ShowProfiles_Photo.click();
 } else {
   
 }
///
 if (horoscopeProfile=="Yes") {
  browser.sleep('5000')
  search.regularSearch_ShowProfiles_Horoscope.click();
} else {
  
}
///
var alreadyViewed = "Yes";
var alreadyContacted = "Yes";
var shortListed = "Yes";
var  Ignored = "Yes";
///
if (alreadyViewed=="Yes") {
  browser.sleep('5000')
  search.regularSearch_DontShowProfile_AlreadyViewed.click();
} else {
  
}
///

if (alreadyContacted=="Yes") {
  browser.sleep('5000')
  search.regularSearch_DontShowProfile_AlreadyCotact.click();
} else {
  
}
////

if (shortListed=="Yes") {
  browser.sleep('5000')
  search.regularSearch_DontShowProfile_Shortlisted.click();
} else {
  
}
////

if (Ignored=="Yes") {
  browser.sleep('5000')
  search.regularSearch_DontShowProfile_Ignored.click();
} else {
  
}

//////

var orderBy = "Relevance"; // Recentlt Active, Oldest First , Newest First 

if (orderBy=="Relevance") {
  browser.sleep('5000')
  search.regularSearch_OrderBy_Relevance.click();
} else if (orderBy=="Recentlt Active") {
  browser.sleep('5000')
  search.regularSearch_OrderBy_RecentlyActive.click();
} else if (orderBy=="Oldest First") {
  browser.sleep('5000')
  search.regularSearch_OrderBy_OldestFirst.click();
} else if (orderBy=="Newest First ") {
  browser.sleep('5000')
  search.regularSearch_OrderBy_NewestFirst.click();
} else {

}
///


browser.sleep('5000')
search.searchNowBtn.click();

browser.sleep('30000')
});

});