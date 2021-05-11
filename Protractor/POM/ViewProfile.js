function VP(){

this.vpProfileNotMatchedWCSM = element(by.css('#content > app-viewprofile > ion-content > ion-grid.res_txt.paddtb10.clra3.white_bg.md.hydrated > ion-row:nth-child(1) > ion-col > p'));

this.vp_Next_ArrowButton = element(by.css('#content > app-viewprofile > ion-content > ion-grid.res_txt.paddtb10.clra3.white_bg.md.hydrated > ion-row:nth-child(2) > ion-col > div'));

this.vp_prev_ArrowButton = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > ion-row > ion-col > ion-grid > ion-row:nth-child(3) > ion-col > div.prof_prv_arrow.clrwhite'));

this.vp_requestPhoto = element(by.css('#profile > ion-col'));

this.vp_Shortlisted_btn = element(by.css('#basic > ion-col > ion-grid.ion-no-padding.md.hydrated > ion-row > ion-col:nth-child(1)'));

this.vp_CallNow_btn = element(by.css('#basic > ion-col > ion-grid.ion-no-padding.md.hydrated > ion-row > ion-col:nth-child(2)'));

this.vp_More_btn = element(by.css('#basic > ion-col > ion-grid.ion-no-padding.md.hydrated > ion-row > ion-col.more_vp.md.hydrated'));

this.vp_Basic_btn = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > div > div > ion-row > ion-col.sticky_active.md.hydrated'));

this.vp_Religious_btn = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > div > div > ion-row > ion-col:nth-child(2)'));

this.vp_Contact_btn = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > div > div > ion-row > ion-col:nth-child(3)'));

this.vp_Family_btn = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > div > div > ion-row > ion-col:nth-child(4)'));

this.vp_Partner_btn = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > div > div > ion-row > ion-col:nth-child(5)'));

this.vp_Back_Arrow_Btn = element(by.css('#content > app-viewprofile > ion-content > ion-grid.ion-no-padding.touchaction.md.hydrated > ion-row > ion-col > ion-grid > ion-row.prof_header.ion-align-items-center.md.hydrated > ion-col.ion-align-items-center.ion-text-left.ion-no-padding.md.hydrated > ion-back-button > button > span'));
    
}

module.exports = new VP();