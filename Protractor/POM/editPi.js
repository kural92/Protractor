function editPi(){

    this.piSearchValue = element(by.id('RegPanelSearchvalue'));
    this.pisearchedValueClick = element(by.css('#list_view_detail'));

    this.piAboutMeEditButtom = element(by.css('#wap-edit-profile > div.editpersonal-infocont > div:nth-child(2) > div.head > div.info-edit-ico'));
    this.piAboutMeEdit=element(by.id('About_myself'));
    this.piAboutMeSave = element(by.id('Save'));
    this.piAboutMePopClosebtn= element(by.css('#SucessPopupclose > img'));
    this.piAboutMeCancel = element(by.className('cancel'));
    
    this.piBasicEditButton = element(by.css('#linktobasic_details > div.head > div.info-edit-ico > a > img'));
    
    this.piProgileCreatedEdit = element(by.id('PCF'));
    //this.profileCreated_Self = element(by.xpath('//li[contains(text(),'Self')]'));
    this.profileCreated_Self = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.profileCreated_Parents = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.profileCreated_Sibling= element(by.css('#list_view_detail > li:nth-child(3)'));
    this.profileCreated_Relative = element(by.css('#list_view_detail > li:nth-child(4)'));
    this.profileCreated_Friend = element(by.css('#list_view_detail > li:nth-child(5)'));
    
    this.piNameEditButton = element(by.id('User_name'));
    
    this.piDOBeditButton = element(by.id('dobspan'));
    
    this.piHeight = element(by.id('height'));
    this.piHeightValue = element(by.css('#list_view_detail > li:nth-child(15)'));

    this.piWeight = element(by.id('Weight'));
    this.piWeightValue = element(by.css('#list_view_detail > li:nth-child(14)'));

    this.piMaritalstatusEDitButton = element(by.id('MARITAL_STATUS'));
    this.piMarital_Unmarried = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piMarital_Widow = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piMarital_Divorced = element(by.css('#list_view_detail > li:nth-child(3)'));
    this.piMarital_Separated = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    //this.piMarital_Unmarried = element(by.linkText('Unmarried'));
    
    this.piChildrenEDitButton = element(by.id('No_of_child_value'));
    this.piChildren_None = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piChildren_1 = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piChildren_2 = element(by.css('#list_view_detail > li:nth-child(3)'));
    this.piChildren_3 = element(by.css('#list_view_detail > li:nth-child(4)'));
    this.piChildren_33 = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));

    this.piChilLivingEditButton = element(by.id('Child_Living_status_value'));
    this.piChildLivingWithMe = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piChildNotLivingWithMe = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    
    
    this.piBodyTypeEDitButton = element(by.id('Body_type'));
    this.piBodyType_Average = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piBodyType_Athletic = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piBodyType_Slim = element(by.css('#list_view_detail > li:nth-child(3)'));
    this.piBodyType_Heavy= element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    
    
    this.piComplexionEDitButton = element(by.id('Complexion'));
    this.piComplexion_VeryFair = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piComplexion_Fair = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piComplexion_Wheatish = element(by.css('#list_view_detail > li:nth-child(3)'));
    this.piComplexion_Wheatishbrown= element(by.css('#list_view_detail > li:nth-child(4)'));
    this.piComplexion_Dark = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    
    
    
    this.piPhysicalStatusEDitButton = element(by.id('phy_status'));
    this.piPhysicalStatus_Normal = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piPhysicalStatus_PhysicallyChallenged = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    
    this.piLanguageEditButton = element(by.id('Language_selected'));
    

    this.piBasicDetailCancelButton = element(by.css('#edit-prof_footer > div:nth-child(1) > a'));


    ////////////////////
    this.piReligiousEditButton = element(by.css('#wap-edit-profile > div.editpersonal-infocont > div:nth-child(4) > div.head > div.info-edit-ico > a > img'));

    this.piReligionEditButton = element(by.id('RELIGION'));
    this.piReligion_Hindu = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piReligion_Jain = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'))

    this.piSubcasteEditButton = element(by.id('SUBCASTE'));
    this.piSubcaste_Bisa = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piSubcaste_POddar = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piSubcaste_Other = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    this.piSubcaste_OtherText = element(by.id('SUBCASTETEXT'));

    this.piGothram_Text = element(by.id('Gothra_text'));

    this.piStarEDitButton = element(by.id('Star'));
    this.piStar_Mirugasira = element(by.css('#list_view_detail > li:nth-child(5)'));

    this.piRasiEDitButton = element(by.id('Raasi'));
    this.piRasi_Capricon = element(by.css('#list_view_detail > li:nth-child(5)'));

    this.piDoshamEDitButton = element(by.id('Dosham'));
    this.PIDosham_Yes=element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piDosham_No = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piDosham_DontKnow = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));
    this.piSpecifiedDoshamEDitButton = element(by.id('SpecifiedDosham'));

    /////////////////Professional Information

    this.piProfesionalEditButton = element(by.css('#linktoeducation > div.head > div.info-edit-ico > a > img'));

    this.piEducationEditButton = element(by.id('EDUCATION_SUBCAT'));
    this.piEducation_IAS = element(by.css('#list_view_detail > li:nth-child(4)'));
    this.piAdditionalDegree = element(by.id('additional_degree'));
    this.piAdiitionalDegree_Other = element(by.css('#list_view_detail > li:nth-child(8)'));
    this.piEDucationText = element(by.id('Education_detail'));
    this.piCollegeText = element(by.id('College_Institution'));

    this.piEmployeedInEditButton = element(by.id('EMPLOYEDIN'));
    this.piEmployed_Government = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piEmployed_Private = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piEmployed_Defence =element(by.css('#list_view_detail > li:nth-child(3)'));
    this.piEmployed_SelfEmployed =  element(by.css('#list_view_detail > li:nth-child(4)'));
    this.piEmployed_Business = element(by.css('#list_view_detail > li:nth-child(5)'));
    this.piEmployed_NotWorkinh = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));

    this.piOcuupationEDitButton =  element(by.id('OCCUPATION'));
    this.piOccupation_manager = element(by.css('#list_view_detail > li:nth-child(6)'));
    this.piOccupationText = element(by.css('Occupation_detail'));
    
    this.piCurrencyEDitButton = element(by.id('Income_Currency'));
    this.piCuurency_India = element(by.css('#list_view_detail > li:nth-child(98)'));
    
    this.piAnnualIncomeEditButton = element(by.id('Annual_income'));
    this.piAnnualIncme_3to4 = element(by.css('#list_view_detail > li:nth-child(4)')) 


    this.piLocationEditButton = element(by.css('#wap-edit-profile > div.editpersonal-infocont > div:nth-child(6) > div.head > div.info-edit-ico > a > img'));
    this.piCountryEditButton = element(by.id('Country'));
    this.piCountryIndia =  element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piStateEditButton =  element(by.id('Residing_state'));
    this.piState_Bihar =  element(by.css('#list_view_detail > li:nth-child(5)'));
    this.piStateText = element(by.id('Residing_state_text'));

    this.piCityEDitButton =  element(by.id('Residing_city'));
    this.piCity_Bairgania =  element(by.css('#list_view_detail > li:nth-child(10)'));
    this.piCityText = element(by.id('Residing_city_text'));
    this.piCitizenshipEditButton =  element(by.id('Citizenship'));
    this.piCitizen_India = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piPlaceofBirth = element(by.id('Place_of_birth'));
    this.piResidentStatusEditButton = element(by.id('Resident_status'));
    this.piResident_Permanent = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-first-child'));
    this.piResident_WorkPermit = element(by.css('#list_view_detail > li:nth-child(2)'));
    this.piResident_Student = element(by.css('#list_view_detail > li:nth-child(3)'));
    this.piResident_Temporary = element(by.css('#list_view_detail > li:nth-child(4)'));
    this.piResident_NonResident = element(by.css('#list_view_detail > li.ui-li.ui-li-static.ui-btn-up-c.ui-last-child'));

//////////////////////////////

this.piFamilyDetailsEditButton = element(by.css('#linktofamily > div.head > div.info-edit-ico > a > img'));


}

module.exports = new editPi();