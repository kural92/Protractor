function search(){

this.searchBtn = element(by.css('#content > app-dashboard > ion-footer > app-footer > ion-toolbar > ion-grid > ion-row > ion-col:nth-child(2)'));

//this.search_By_Id = element(by.xpath('//input[@placeholder="Search By Id"]'))
this.search_By_Id = element(by.css('#content > app-search > ion-content > div > ion-grid.bgclr7.search_id.md.hydrated > ion-row:nth-child(2) > ion-col > form > ion-searchbar > div > input'));

this.search_By_Id_searchBtn = element(by.css('button'));

this.keyWordSearch_editbtn = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(3) > ion-row.paddlr10.keyword_search.md.hydrated > ion-col > form > div:nth-child(1) > ion-row.paddt15.md.hydrated > ion-col.ion-text-right.md.hydrated'));

this.keyWordSearch_cancelbtn = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(3) > ion-row.paddlr10.keyword_search.md.hydrated > ion-col > form > div:nth-child(1) > ion-row > ion-col.ion-text-right.md.hydrated'));

this.keyWordSearch = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(3) > ion-row.paddlr10.keyword_search.md.hydrated > ion-col > form > div:nth-child(4) > ion-row > ion-col > ion-searchbar > div > input'));

//
this.regularSearch_age = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > ion-list > ion-item:nth-child(1) > ion-label'));
this.regularSearch_ageFrom = element(by.css('#ion-overlay-4 > div > app-option > ion-content > div > div > div > ion-list.bdr_btm.ageFrom.md.list-md.list-lines-none.list-md-lines-none.hydrated'));
this.regularSearch_ageFrom_24 = element(by.css('#ion-overlay-5 > div > div.popover-content.sc-ion-popover-md > ion-select-popover > ion-list > ion-radio-group > ion-item:nth-child(7)'));
this.regularSearch_age_okbtn = element(by.xpath('//*[@id="ion-overlay-3"]/div/app-option/ion-header/ion-grid/ion-row/ion-col[2]/ion-buttons/ion-button[2]'));
//#ion-overlay-3 > div > app-option > ion-header > ion-grid > ion-row > ion-col.save_actions.ion-no-padding.md.hydrated > ion-buttons > ion-button:nth-child(2)
this.regularSearch_ageTo = element(by.css('#ion-overlay-7 > div > app-option > ion-content > div > div > div > ion-list.bdr_btm.ageFrom.md.list-md.list-lines-none.list-md-lines-none.hydrated'));
this.regularSearch_ageTo_29 = element(by.css('#ion-overlay-6 > div > div.popover-content.sc-ion-popover-md > ion-select-popover > ion-list > ion-radio-group > ion-item:nth-child(12)'));
this.regularSearch_age_cancelBtn = element(by.css('#ion-overlay-3 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_Height = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > ion-list > ion-item:nth-child(2) > ion-label'));
this.regularSearch_HeightFrom = element(by.css('button'));
this.regularSearch_HeightTo = element(by.css('button'));

this.regularSearch_HeightFrom_4ftin = element(by.css('#ion-overlay-10 > div > div.popover-content.sc-ion-popover-md > ion-select-popover > ion-list > ion-radio-group > ion-item:nth-child(2)'));
this.regularSearch_HeightTo_ft10in = element(by.css('#ion-overlay-13 > div > div.popover-content.sc-ion-popover-md > ion-select-popover > ion-list > ion-radio-group > ion-item:nth-child(23)'));

this.regularSearch_Height_Okbtn = element(by.css('#ion-overlay-9 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));

this.regularSearch_Heigh_cancelbtn = element(by.css('#ion-overlay-9 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_MaritalStatus = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > ion-list > ion-item:nth-child(3) > ion-label'));


this.regularSearch_MaritalStatus_Any = element(by.css('#ion-overlay-15 > div > app-option > ion-content > div > div > div > ion-list > ion-item.ion-no-padding.item-label.item-checkbox-checked.item.md.in-list.ion-activatable.ion-focusable.hydrated'));
this.regularSearch_MaritalStatus_Unmarried = element(by.css('#ion-overlay-15 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(2)'));
this.regularSearch_MaritalStatus_Widow = element(by.css('#ion-overlay-15 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(3)'));
this.regularSearch_MaritalStatus_Divorced  = element(by.css('#ion-overlay-15 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(4)'));
this.regularSearch_MaritalStatus_Seperated = element(by.css('#ion-overlay-15 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(5)'));
this.regularSearch_MaritalStatus_Okbtn = element(by.css('#ion-overlay-15 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_MaritalStatus_cancelbtn = element(by.css('#ion-overlay-15 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));


this.regularSearch_Religion = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(1) > ion-label'));
this.regularSearch_Religion_any = element(by.css('#ion-overlay-18 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(1)'));
this.regularSearch_Religion_Hindu = element(by.css('#ion-overlay-18 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(2)'));
this.regularSearch_Religion_Jain = element(by.css('#ion-overlay-18 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(3)'));

this.regularSearch_Religion_okbtn = element(by.css('#ion-overlay-18 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_Religion_cancelbtn = element(by.css('#ion-overlay-18 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));


this.regularSearch_SubCaste = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(2) > ion-label'));
this.regularSearch_SubCaste_Any = element(by.css('#ion-overlay-23 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(1)'));
this.regularSearch_SubCaste_Bisa = element(by.css('#ion-overlay-23 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(2)'));
this.regularSearch_SubCaste_Poddar = element(by.css('#ion-overlay-23 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(3)'));
this.regularSearch_SubCaste_NotSpecified = element(by.css('#ion-overlay-23 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(4)'));

this.regularSearch_SubCaste_okbtn = element(by.css('#ion-overlay-23 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_SubCaste_cancelbtn = element(by.css('#ion-overlay-23 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_MotherTongue = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(3) > ion-label'));

this.regularSearch_MotherTongue_Hindi = element(by.css('//ion-label[contains(text(),"Hindi")]'));

this.regularSearch_MotherTongue_okbtn = element(by.css('#ion-overlay-25 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));

this.regularSearch_MotherTongue_cancelbtn = element(by.css('#ion-overlay-25 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));


this.regularSearch_Star = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(4) > ion-label'));
this.regularSearch_Star_magam = element(by.css('#ion-overlay-4 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(11)'));
this.regularSearch_Star_Oktn =  element(by.css('#ion-overlay-4 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_Star_cancelbtn = element(by.css('#ion-overlay-4 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_Dosham = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(5) > ion-label'));
this.regularSearch_Dosham_DoesntMatter = element(by.css('#ion-rb-4-lbl'));
this.regularSearch_Dosham_Yes = element(by.css('#ion-rb-5-lbl'));
this.regularSearch_Dosham_No = element(by.css('#ion-rb-6-lbl'));
this.regularSearch_Dosham_okbtn = element(by.css('#ion-overlay-15 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_Dosham_cancelbtn = element(by.css('#ion-overlay-15 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_Country = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(6) > ion-label'));
this.regularSearch_Country_Australia = element(by.css('#ion-overlay-17 > div > app-option > ion-content > div > div > div > ion-list > ion-item:nth-child(7)'));
this.regularSearch_Country_okbtn = element(by.css('#ion-overlay-17 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_Country_cancelbtn = element(by.css('#ion-overlay-17 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));


this.regularSearch_state = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(7) > ion-label'));
this.regularSearch_state_ausState = element(by.css('#ion-cb-486-lbl'));
this.regularSearch_State_okbtn = element(by.css('#ion-overlay-21 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_State_cancelbtn = element(by.css('#ion-overlay-21 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));


this.regularSearch_City = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(8) > ion-label'));
this.regularSearch_City_patna = element(by.css('#ion-cb-519-lbl'));
this.regularSearch_City_okbtn = element(by.css('#ion-overlay-23 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_City_cancelBtn = element(by.css('#ion-overlay-23 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_Education = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(9) > ion-label'));
this.regularSearch_Education_Finance = element(by.css('#ion-overlay-27 > div > app-option > ion-content > div > div > div > div > ion-list > div:nth-child(4) > ion-item.bgclr5.option_grouptitle.item-label.item.md.in-list.ion-focusable.hydrated > ion-label'));
this.regularSearch_Education_okbtn = element(by.css('#ion-overlay-27 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_Education_cancelbtn = element(by.css('#ion-overlay-27 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'))

this.regularSearch_EmployeedIN = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(10) > ion-label'));
this.regularSearch_EmployeedIN_Any = element(by.id('ion-cb-672-lbl'));
this.regularSearch_EmployeedIN_Government = element(by.id('ion-cb-673-lbl'));
this.regularSearch_EmployeedIN_Private = element(by.id('ion-cb-674-lbl'));
this.regularSearch_EmployeedIN_Defence = element(by.id('ion-cb-675-lbl'));
this.regularSearch_EmployeedIN_SelfEmployeed = element(by.id('ion-cb-676-lbl'));
this.regularSearch_EmployeedIN_Business = element(by.id('ion-cb-677-lbl'));
this.regularSearch_EmployeedIN_NotWorking = element(by.id('ion-cb-678-lbl'));
this.regularSearch_EmployeedIN_okbtn = element(by.css('#ion-overlay-29 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_EmployeedIn_cancelbtn = element(by.css('#ion-overlay-29 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5 > span'));

this.regularSearch_Occupation = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(11) > ion-label'));
this.regularSearch_Occupation_Administration = element(by.css('#ion-overlay-31 > div > app-option > ion-content > div > div > div > div > ion-list > div:nth-child(2) > ion-item.bgclr5.option_grouptitle.item-label.item.md.in-list.ion-focusable.hydrated > ion-label'));
this.regularSearch_Occupation_okbtn = element(by.css('#ion-overlay-31 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_Occupation_cancelbtn = element(by.css('#ion-overlay-31 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button.no_bg.clra3.font10.paddr5'));

this.regularSearch_AnnualIncome = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-list > ion-item:nth-child(12)'));
this.regularSearch_AnnualIncome_from = element(by.css('div.select-text'));
this.regularSearch_AnnualIncome_5lak = element(by.css('#ion-rb-14-lbl'));
this.regularSearch_AnnualIncome_to = element(by.css('#ion-overlay-34 > div > app-option > ion-content > div > div > div > ion-list.bdr_btm.annualincomeTo.md.list-md.list-lines-none.list-md-lines-none.hydrated > div > ion-item'));
this.regularSearch_AnnualIncome_10lak = element(by.css('#ion-rb-42-lbl'));
this.regularSearch_AnnualIncome_okbtn = element(by.css('#ion-overlay-34 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));
this.regularSearch_AnnualIncome_cancelbtn = element(by.css('#ion-overlay-34 > div > app-option > ion-header > ion-grid > ion-row > ion-col.ion-text-right.md.hydrated > button:nth-child(2) > span'));

this.regularSearch_ShowProfiles_Photo = element(by.id('photoOpt'));
this.regularSearch_ShowProfiles_Horoscope = element(by.id('ion-cb-1-lbl'));

this.regularSearch_DontShowProfile_AlreadyViewed = element(by.id('ion-cb-2-lbl'));
this.regularSearch_DontShowProfile_AlreadyCotact = element(by.id('ion-cb-3-lbl'));
this.regularSearch_DontShowProfile_Shortlisted = element(by.id('ion-cb-4-lbl'));
this.regularSearch_DontShowProfile_Ignored = element(by.id('ion-cb-5-lbl'));

this.regularSearch_OrderBy_Relevance = element(by.css('#content > app-search > ion-content > div > ion-grid:nth-child(4) > ion-row > ion-col > form > div > ion-grid:nth-child(4) > ion-radio-group > ion-row > ion-col:nth-child(1) > ion-list > ion-item > ion-radio'));
this.regularSearch_OrderBy_RecentlyActive = element(by.id('ion-rb-1-lbl'));
this.regularSearch_OrderBy_OldestFirst = element(by.id('ion-rb-2-lbl'));
this.regularSearch_OrderBy_NewestFirst = element(by.id('ion-rb-3-lbl'));

this.searchNowBtn = element(by.css('#content > app-search > div > ion-footer > ion-toolbar > ion-grid > ion-row > ion-col.bgclrb.ion-text-center.bd_radius.md.hydrated'));
this.mySavedSearch = element(by.css('#content > app-search > div > ion-footer > ion-toolbar > ion-grid > ion-row > ion-col:nth-child(2)'));
this.saveSearch = element(by.css('#content > app-search > div > ion-footer > ion-toolbar > ion-grid > ion-row > ion-col.bgclr7.border_right.disabled.ion-text-center.md.hydrated'));





}

module.exports = new search();