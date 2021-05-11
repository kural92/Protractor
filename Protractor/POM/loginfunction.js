function login() {
   
        this.username = element(by.css('#content > app-login > ion-content > div.loginType > form > ion-list:nth-child(1) > ion-item > ion-input > input'));
        this.password = element(by.css('#content > app-login > ion-content > div.loginType > form > ion-list:nth-child(2) > ion-item > ion-input > input'));
        this.loginclick = element(by.css('#content > app-login > ion-content > div.loginType > form > ion-grid > ion-row > ion-col > ion-button'));
        this.intermediate = element(by.css('#ion-overlay-2 > div > app-intermediatepcs > div:nth-child(1) > span > button > span'));
    this.menu_profile = element(by.css('#content > app-dashboard > app-footer > ion-toolbar > ion-grid > ion-row > ion-col:nth-child(5) > a'));
    this.EditProfileButton = element(by.xpath("//ion-label[contains(text(),' Edit Profile ')]"));
     this.qucikResponse = element(by.xpath('//*[@id="content"]/app-quickresponse/ion-header/ion-toolbar/ion-back-button/button'));
}

module.exports = new login();

/*function editPI(){

this.piAboutMeEditButtom = element(by.css('#wap-edit-profile > div.editpersonal-infocont > div:nth-child(2) > div.head > div.info-edit-ico'));
this.piAboutMeEdit=element(by.id('About_myself'));
this.piAboutMeSave = element(by.id('About_myself'));
this.piAboutMeCancel = element(by.className('cancel'));

this.piBasicEditButton = element(by.css('#linktobasic_details > div.head > div.info-edit-ico'));

this.piProgileCreatedEdit = element(by.id('PCF'));
//this.profileCreated_Self = element(by.xpath('//li[contains(text(),'Self')]'));
this.profileCreated_Self = element(by.linkText('Self'));
this.profileCreated_Parents = element(by.linkText('Parents'));
this.profileCreated_Sibling= element(by.linkText('Sibling'));
this.profileCreated_Relative = element(by.linkText('Relative'));
this.profileCreated_Friend = element(by.linkText('Friend'));

this.piNameEditButton = element(by.id('User_name'));

this.piDOBeditButton = element(by.id('dobspan'));

this.piHeight = element(by.id('height'));

this.piWeight = element(by.id('Weight'));

this.piMaritalstatusEDitButton = element(by.id('MARITAL_STATUS'));
this.piMarital_Unmarried = element(by.linkText('Unmarried'));
this.piMarital_Widow = element(by.linkText('Widow'));
this.piMarital_Divorced = element(by.linkText('Divorced'));
this.piMarital_Separated = element(by.linkText('Separated'));
//this.piMarital_Unmarried = element(by.linkText('Unmarried'));

this.piChildrenEDitButton = element(by.id('No_of_child_value'));
this.piChildren_None = element(by.linkText('None'));
this.piChildren_1 = element(by.linkText('1'));
this.piChildren_2 = element(by.linkText('2'));
this.piChildren_3 = element(by.linkText('3'));
this.piChildren_33 = element(by.linkText('3+'));


this.piBodyTypeEDitButton = element(by.id('Body_type'));
this.piBodyType_Average = element(by.linkText('Average'));
this.piBodyType_Athletic = element(by.linkText('Athletic'));
this.piBodyType_Slim = element(by.linkText('Slim'));
this.piBodyType_Heavy= element(by.linkText('Heavy'));


this.piComplexionEDitButton = element(by.id('Complexion'));
this.piComplexion_VeryFair = element(by.linkText('Very Fair'));
this.piComplexion_Fair = element(by.linkText('Fair'));
this.piComplexion_Wheatish = element(by.linkText('Wheatish'));
this.piComplexion_Wheatishbrown= element(by.linkText('Wheatish brown'));
this.piComplexion_Dark = element(by.linkText('Dark'));



this.piPhysicalStatusEDitButton = element(by.id('phy_status'));
this.piPhysicalStatus_Normal = element(by.linkText('Normal'));
this.piPhysicalStatus_PhysicallyChallenged = element(by.linkText('Physically Challenged'));

this.piLanguageEditButton = element(by.id('Language_selected'));



  
}  


module.exports=new editPI();*/