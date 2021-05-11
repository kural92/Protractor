//var xl= require('./excelreader.js');

describe('PWA Ionic Change Code', function() {

 // var Test_Data = xl.read_from_excel('Login','./testdata.xlsx');
  var login = require('./POM/loginfunction.js');
  var editPi =  require('./POM/editPi.js');

    it('Login and Edit Personal Information', function() {
      browser.waitForAngularEnabled(true);
      browser.ignoreSynchronization = true;
      
      // PI Data
      var marital = "Widow"; // Marital Status 
      var pcf = "Sibiling";  //  Profile Created
      var Name = "Ajitha"; // Name
      var height = "";
      var weight = "";
      var children = "None"; 
      var ChildrenStatus = "Living"; // Children Living, Not Living
      var bodyType = "Athletic"; //Average, Athletic, Slim, Heavy
      var Complexion = "Wheatish";//Very Fair, Fair, Wheatish, Wheatish brown, Dark
       var physicalStatus = "Normal"; // Normal, Physical Challengeds

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

browser.sleep('10000');
//login.menu_profile.click();
element(by.xpath("//*[@id='content']/app-dashboard/ion-footer/app-footer/ion-toolbar/ion-grid/ion-row/ion-col[5]")).click();
//element(by.css('#content > app-dashboard > app-footer > ion-toolbar > ion-grid > ion-row > ion-col:nth-child(5) > a')).click();

// EDit PI 
browser.sleep('5000') ; 
login.EditProfileButton.click();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

 browser.waitForAngularEnabled(false);

browser.sleep('10000') ;
editPi.piAboutMeEditButtom.click();

browser.sleep('5000') ;
editPi.piAboutMeEdit.clear();

browser.sleep('5000')
editPi.piAboutMeEdit.sendKeys('abc def ghi jkl mno pqr stu vwx y z . abc def ghi jkl mno pqr stu vwx y z . 123456 789123 ');

browser.sleep('5000')
editPi.piAboutMeSave.click();

browser.sleep('10000');
editPi.piAboutMePopClosebtn.click();
//element(by.css('#SucessPopupclose > img')).click();

browser.sleep('10000');
editPi.piBasicEditButton.click();

browser.sleep('5000')
editPi.piProgileCreatedEdit.click();

browser.sleep('5000')

// Profile Created
if (pcf=="Self") {
  browser.sleep('5000')
  editPi.profileCreated_Self.click();
} else if (pcf=="Parents") {
  browser.sleep('5000')
  editPi.profileCreated_Parents.click();
} else if (pcf=="Sibiling") {
  browser.sleep('5000')
  editPi.profileCreated_Sibling.click();
} else if (pcf=="Relative") {
  browser.sleep('5000')
  editPi.profileCreated_Relative.click();
} else if (pcf=="Friend") {
  browser.sleep('5000')
  editPi.profileCreated_Friend.click();
} else {
}
  
// Name
browser.sleep('5000')
editPi.piNameEditButton.clear();
editPi.piNameEditButton.sendKeys(Name);

/*
browser.sleep('5000')
editPi.piDOBeditButton.click();

browser.sleep('5000')
element(by.css('body > div.dw.ios > div.dwc.dwhl > div > div:nth-child(1) > div.dwwol')).sendKeys('March');

browser.sleep('5000')
element(by.css('body > div.dw.ios > div.dwc.dwhl > div > div:nth-child(2) > div.dwwol')).sendKeys('11');


browser.sleep('5000')
element(by.css('body > div.dw.ios > div.dwc.dwhl > div > div:nth-child(3) > div.dwwol')).sendKeys('1996');
*/
//Height
browser.sleep('5000')
editPi.piHeight.click();
browser.sleep('5000')
editPi.piHeightValue.click();

//Weight
browser.sleep('5000')
editPi.piWeight.click();
browser.sleep('5000')
editPi.piWeightValue.click();




// Marital Status
browser.sleep('5000')
editPi.piMaritalstatusEDitButton.click();

if (marital=="Unmarried") {
  browser.sleep('5000')
  editPi.piMarital_Unmarried.click();
} else if (marital=="Widow") {
  browser.sleep('5000')
  editPi.piMarital_Widow.click();
} else if (marital=="Divorced") {
  browser.sleep('5000')
  editPi.piMarital_Divorced.click();
} else if (marital=="Separated") {
  browser.sleep('5000')
  editPi.piMarital_Separated.click();
} else {
  
}

//Children Status
browser.sleep('5000')
if (!(marital=="Unmarried")) {
  browser.sleep('5000')
  editPi.piChildrenEDitButton.click();
  
if (children=="None") {
  browser.sleep('5000')
  editPi.piChildren_None.click();
} else if (children=="1") {
  browser.sleep('5000')
  editPi.piChildren_1.click();
} else if (children=="2") {
  browser.sleep('5000')
  editPi.piChildren_2.click();
} else if (children=="3") {
  browser.sleep('5000')
  editPi.piChildren_3.click();
} else if (children=="3+") {
  browser.sleep('5000')
  editPi.piChildren_33.click();
} else {
  console.log("Marital Status was Unmarried, So No Child Status")
}
}
//
browser.sleep('5000')
if (!(children=="None")) {
  browser.sleep('5000')
editPi.piChilLivingEditButton.click();

if (ChildrenStatus=="Living") {
  browser.sleep('5000')
  editPi.piChildLivingWithMe.click();
} else if (ChildrenStatus=="Not Living") {
  browser.sleep('5000')
  editPi.piChildNotLivingWithMe.click(); 
}  else { }
} else {
  console.log('No Children Status to choose ')
}

//Body Type
browser.sleep('5000')
editPi.piBodyTypeEDitButton.click();

if (bodyType=="Average") {
  browser.sleep('5000')
  editPi.piBodyType_Average.click();
} else if (bodyType=="Athletic") {
  browser.sleep('5000')
  editPi.piBodyType_Athletic.click();
}else if (bodyType=="Slim") {
  browser.sleep('5000')
  editPi.piBodyType_Slim.click();
} else if (bodyType=="Heavy") {
  browser.sleep('5000')
  editPi.piBodyType_Heavy.click();
} else { }

// Complexionn
browser.sleep('5000')
editPi.piComplexionEDitButton.click();

if(Complexion=="Very Fair"){
  browser.sleep('5000')
  editPi.piComplexion_VeryFair.click();
} else if(Complexion=="Fair"){
  browser.sleep('5000')
  editPi.piComplexion_Fair.click();
} else if(Complexion=="Wheatish"){
  browser.sleep('5000')
  editPi.piComplexion_Wheatish.click();
} else if(Complexion=="Wheatish brown"){
  browser.sleep('5000')
  editPi.piComplexion_Wheatishbrown.click();
} else if(Complexion=="Dark"){
  browser.sleep('5000')
  editPi.piComplexion_Dark.click();
} else { }

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');
//Physical Status
browser.sleep('5000')
editPi.piPhysicalStatusEDitButton.click();

if (physicalStatus=="Normal") {
  browser.sleep('5000')
  editPi.piPhysicalStatus_Normal.click();
} else  if (physicalStatus=="Physical Challenged") {
  browser.sleep('5000')
  editPi.piPhysicalStatus_Normal.click();
} else { }


browser.sleep('5000')
//editPi.piLanguageEditButton.click();
browser.sleep('5000')
editPi.piBasicDetailCancelButton.click();

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');

browser.sleep('10000')
editPi.piReligiousEditButton.click();

browser.sleep('5000')
editPi.piReligionEditButton.click();
var religion = "Jain"; // Hindu, Jain, 
browser.sleep('5000')
if(religion=="Hindu"){
  browser.sleep('5000')
  editPi.piReligion_Hindu.click();
} else if(religion=="Jain"){
  browser.sleep('5000')
  editPi.piReligion_Jain.click();
} else { }

/// SUbcaste
var subcaste = "Poddar" // Bisa, Poddar, Others

browser.sleep('5000')
editPi.piSubcasteEditButton.click();

if(subcaste=="Bisa"){
  browser.sleep('5000')
  editPi.piSubcaste_Bisa.click();
} else if(subcaste=="Poddar"){
  browser.sleep('5000')
  editPi.piSubcaste_POddar.click();
} else if(subcaste=="Others"){
  browser.sleep('5000')
  editPi.piSubcaste_Other.click();
} else { 

}

//SubCaste Text
/*try {
  browser.sleep('5000')
  //editPi.piSubcaste_OtherText.clear();
 // editPi.piSubcaste_OtherText.sendKeys('Others');
} catch (error) {
  console.log('There is no SubCaste Text Field to edit')
}*/



//Gothram Text
try{
//if ((editPi.piGothram_Text).isDispayed) {
  browser.sleep('5000')
  //editPi.piGothram_Text.clear();
  editPi.piGothram_Text.sendKeys('Gothram');
}
 catch (error) {
  console.log('There is no Gothra Field to edit')
}

//Star
//if ((editPi.piStarEDitButton).isDispayed) {
  try{
  browser.sleep('5000')
  editPi.piStarEDitButton.click();
  browser.sleep('5000')
  editPi.piStar_Mirugasira.click();
} catch (error) {
  console.log('There is no Star field to edit');
}

//Rasi
try{
//if ((editPi.piRasiEDitButton).isDispayed) {
  browser.sleep('5000')
  editPi.piRasiEDitButton.click();
  browser.sleep('5000')
  editPi.piRasi_Capricon.click();
} catch (error) {
  console.log('There is no Rassi field to edit');
}

//Dosham
var dosham = "Yes" ; // Yes, No , Dont Know
try{
//if ((editPi.piDoshamEDitButton).isDispayed) {
  browser.sleep('5000')
  editPi.piDoshamEDitButton.click();

  if (dosham=="Yes") {
    browser.sleep('5000')
    editPi.PIDosham_Yes.click();
  } else if (dosham=="No") {
    browser.sleep('5000')
    editPi.piDosham_No.click();
  } else if (dosham=="Dont Know") {
    browser.sleep('5000')
    editPi.piDosham_DontKnow.click();
  } 
} catch (error) {
  console.log('There is no Dosham field to edit');
}

//Dosham - Yes
/*if (dosham=="Yes") {
  browser.sleep('5000')
  editPi.piSpecifiedDoshamEDitButton.click();

} else {
   console.log('Dosham was selected as No/DontKnow');
}*/

browser.sleep('5000')
editPi.piBasicDetailCancelButton.click();
browser.sleep('5000')
///////
browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');

browser.sleep('5000')
editPi.piProfesionalEditButton.click();

browser.sleep('5000')
editPi.piEducationEditButton.click('5000')

browser.sleep('5000')
editPi.piEducation_IAS.click();

browser.sleep('5000')
editPi.piAdditionalDegree.click();

browser.sleep('5000')
editPi.piAdiitionalDegree_Other.click();

browser.sleep('5000')
editPi.piEDucationText.clear();
editPi.piEDucationText.sendKeys('Administrative');

browser.sleep('5000')
editPi.piCollegeText.clear();
editPi.piCollegeText.sendKeys('ABC College');
browser.sleep('5000')


var employeed_In = "Defence"; //Government, Private, Defence, Self Employed,

browser.sleep('5000')
editPi.piEmployeedInEditButton.click();

if (employeed_In="Government") {
  browser.sleep('5000')
  editPi.piEmployed_Government.click();
} else if (employeed_In="Private") {
  browser.sleep('5000')
  editPi.piEmployed_Private.click();
}  else if (employeed_In="Defence") {
  browser.sleep('5000')
  editPi.piEmployed_Defence.click();
}  else if (employeed_In="Self Employed") {
  browser.sleep('5000')
  editPi.piEmployed_SelfEmployed.click();
} else if (employeed_In="Business") {
  browser.sleep('5000')
  editPi.piEmployed_Business.click();
} else if (employeed_In="Not Working") {
  browser.sleep('5000')
  editPi.piEmployed_NotWorkinh.click();
} else { }

////////////////////////
try{
browser.sleep('5000')
editPi.piOcuupationEDitButton.click();

browser.sleep('5000')
editPi.piOccupation_manager.click();

browser.sleep('5000')
editPi.piOccupationText.clear();
editPi.piOccupationText.sendKeys('Manager')
} catch (error){
  console.log('There is no Occupation Filed')
}

try {
  browser.sleep('5000')
  editPi.piCurrencyEDitButton.click();

  browser.sleep('5000')
  editPi.piCuurency_India.click();

  browser.sleep('5000')
  editPi.piAnnualIncomeEditButton.click();

  browser.sleep('5000')
  editPi.piAnnualIncme_3to4.click();


} catch (error) {
  
  console.log('There is No Annual Income Field')
}

browser.sleep('5000')
editPi.piBasicDetailCancelButton.click();
browser.sleep('5000')
///////

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');

browser.sleep('5000')
browser.executeScript('window.scrollTo(0,400)');


////  Location In formation

browser.sleep('5000')
editPi.piLocationEditButton.click();

browser.sleep('5000')
editPi.piCountryEditButton.click();

browser.sleep('5000')
editPi.piCountryIndia.click();

browser.sleep('5000')
editPi.piStateEditButton.click();

browser.sleep('5000')
editPi.piState_Bihar.click();

///////
try{
browser.sleep('5000')
editPi.piStateText.clear();
editPi.piStateText.sendKeys('Other')
} catch (error){
  console.log('Other ')
}

//////
try {
  browser.sleep('5000')
  editPi.piCityEDitButton.click();

  browser.sleep('5000')
  editPi.piCity_Bairgania.click();
} catch (error) {
  console.log('City Other')
}

//
try {
  browser.sleep('5000')
  editPi.piCityText.clear();
  editPi.piCityText.sendKeys('City');
} catch (error) {
  
}

/////
try {
  browser.sleep('5000')
  editPi.piPlaceofBirth.clear();
  editPi.piPlaceofBirth.sendKeys('India');

} catch (error) {
  
}

var resident = "Permanent resident"; //Permanent resident, Work permit, Student visa, Temporary visa , Non-Resident
////
try {
  browser.sleep('5000')
  editPi.piResidentStatusEditButton.click();

  browser.sleep('5000')
  if (resident=="Permanent resident") {
    browser.sleep('5000')
    editPi.piResident_Permanent.click();
  } else if(resident=="Work permit") {
    browser.sleep('5000')
    editPi.piResident_WorkPermit.click();
  }else if(resident=="Student visa") {
    browser.sleep('5000')
    editPi.piResident_Student.click();
  } else if(resident=="Temporary visa") {
    browser.sleep('5000')
    editPi.piResident_Temporary.click();
  } else if(resident=="Non-Resident") {
    browser.sleep('5000')
    editPi.piResident_NonResident.click();
  } else {

  }
} catch (error) {
  console.log('No resident Status')
}

////
try {
  browser.sleep('5000')
  editPi.piCitizenshipEditButton.click();

  browser.sleep('5000')
  editPi.piCitizen_India.click();

} catch (error) {
console.log('No Citizen Ship ')  
}  

/////////
browser.sleep('5000')
editPi.piBasicDetailCancelButton.click();






browser.sleep('30000') ;

});
  });