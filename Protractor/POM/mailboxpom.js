function mail(){

this.Mail_gotIt = element(by.css('#content > app-mailbox > div > div.okgotit > div'));

this.mail_received_btn = element(by.css('#content > app-mailbox > ion-header > ion-row > ion-col > ion-button.btn_white.swipe_btnleft.button-active.md.button.button-round.button-solid.ion-activatable.ion-focusable.hydrated'));
this.mail_sent_btn = element(by.css('#content > app-mailbox > ion-header > ion-row > ion-col > ion-button.btn_white.swipe_btnright.md.button.button-round.button-solid.ion-activatable.ion-focusable.hydrated'));

this.mail_received_pending = element(by.css('#content > app-mailbox > super-tabs > super-tabs-toolbar > super-tab-button.ion-activatable.ion-focusable.hydrated.label-only.active.scrollableContainer'));
this.mail_received_accepted = element(by.css('#content > app-mailbox > super-tabs > super-tabs-toolbar > super-tab-button:nth-child(2)'));
this.mail_received_declined = element(by.css('#content > app-mailbox > super-tabs > super-tabs-toolbar > super-tab-button:nth-child(3)'));
this.mail_received_replied = element(by.css('#content > app-mailbox > super-tabs > super-tabs-toolbar > super-tab-button:nth-child(4)'));


this.mail_yes = element(by.css('#content > app-mailbox > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > ion-row:nth-child(1) > ion-col > ion-grid > ion-row.ion-no-padding.vertical-align-content.md.hydrated > ion-col.ion-text-right.md.hydrated > ion-button.ion-text-capitalize.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-solid.ion-activatable.ion-focusable.hydrated'));

this.mail_no = element(by.css('#content > app-mailbox > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > ion-row:nth-child(1) > ion-col > ion-grid > ion-row.ion-no-padding.vertical-align-content.md.hydrated > ion-col.ion-text-right.md.hydrated > ion-button.ion-text-capitalize.ion-color.ion-color-medium.md.button.button-small.button-round.button-solid.ion-activatable.ion-focusable.hydrated'));

this.mail_viewandReply = element(by.css('#content > app-mailbox > super-tabs > super-tabs-container > super-tab:nth-child(1) > ion-content > div > ion-grid > ion-row:nth-child(2) > ion-col > ion-grid > ion-row.ion-no-padding.md.hydrated > ion-col.ion-text-right.md.hydrated > ion-button'));

this.mail_viewandreply_msgBox = element(by.css('#ion-overlay-1 > div > app-modal > ion-content > div > div > ion-list > ion-item > ion-textarea > textarea'));

this.mail_viewandreply_send = element(by.css('#ion-overlay-1 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-solid.button-disabled.ion-activatable.ion-focusable.hydrated'));

this.mail_viewandreply_cancel = element(by.css('#ion-overlay-1 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-solid.button-disabled.ion-activatable.ion-focusable.hydrated'));

this.mail_Accepted_SendMessage = element(by.css('#content > app-mailbox > super-tabs > super-tabs-container > super-tab:nth-child(2) > ion-content > div > ion-grid > ion-row:nth-child(1) > ion-col > ion-grid > ion-row.ion-no-padding.ion-text-center.md.hydrated > ion-col.ion-text-right.md.hydrated > ion-button'));
this.mail_Accepted_SendMessage_TextBox = element(by.css('#ion-overlay-3 > div > app-modal > ion-content > div > div > ion-list > ion-item > ion-textarea > textarea'));
this.mail_Accepted_sendMessage_cancel = element(by.css('#ion-overlay-3 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-outline.ion-activatable.ion-focusable.hydrated'));
this.mail_Accepted_SendMessage_Send = element(by.css('#ion-overlay-3 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-solid.ion-activatable.ion-focusable.hydrated'));

this.mail_Declined_viewandReply  = element(by.css('#content > app-mailbox > super-tabs > super-tabs-container > super-tab:nth-child(3) > ion-content > div > ion-grid > ion-row:nth-child(3) > ion-col > ion-grid > ion-row.ion-no-padding.ion-text-center.md.hydrated > ion-col.ion-text-right.md.hydrated > ion-button'));
this.mail_Declined_viewandReply_TextBox = element(by.css('#ion-overlay-4 > div > app-modal > ion-content > div > div > ion-list > ion-item > ion-textarea > textarea'));
this.mail_Declined_viewandReply_Cancel = element(by.css('#ion-overlay-4 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-outline.ion-activatable.ion-focusable.hydrated'));
this.mail_Declined_viewandReply_Send = element(by.css('#ion-overlay-4 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-solid.button-disabled.ion-activatable.ion-focusable.hydrated'));

this.mail_replied_SendMessage = element(by.css('#content > app-mailbox > super-tabs > super-tabs-container > super-tab:nth-child(4) > ion-content > div > ion-grid > ion-row:nth-child(5) > ion-col > ion-grid > ion-row.ion-no-padding.ion-text-center.md.hydrated > ion-col.ion-text-right.md.hydrated > ion-button'));
this.mail_replied_SendMessage_textbox = element(by.css('#ion-overlay-5 > div > app-modal > ion-content > div > div > ion-list > ion-item > ion-textarea > textarea'));
this.mail_replied_SendMessage_send = element(by.css('#ion-overlay-5 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-solid.ion-activatable.ion-focusable.hydrated'));
this.mail_replied_SendMessage_cancel = element(by.css('#ion-overlay-5 > div > app-modal > ion-content > div > div > ion-grid > ion-row > ion-col > div > ion-button.ion-color.ion-color-btnprimary.md.button.button-small.button-round.button-outline.ion-activatable.ion-focusable.hydrated'));

this.mail_filter_All = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item.ion-no-padding.item-label.item-checkbox-checked.item.md.in-list.ion-activatable.ion-focusable.hydrated.ion-untouched.ion-pristine.ion-valid > ion-checkbox'));
this.mail_filter_IntrestReceived = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item:nth-child(2) > ion-checkbox'));
this.mail_filter_MessageReceived = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item:nth-child(3) > ion-checkbox'));
this.mail_filter_RequestReceived = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item:nth-child(4) > ion-checkbox'));
this.mail_filter_ShowFilteredMessage = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item.ion-no-padding.item-label.item.md.item-lines-none.in-list.ion-activatable.ion-focusable.hydrated.ion-untouched.ion-pristine.ion-valid > ion-checkbox'));

this.filter_EDitPP_btn = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > div > p'));
this.mail_filter_Apply = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(2) > ion-col > div > ion-button'));
this.mail_filter_Reset = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-toolbar > ion-buttons.ion-padding-start.buttons-last-slot.sc-ion-buttons-md-h.sc-ion-buttons-md-s.md.hydrated > span'));

this.mail_filter_CloseBtn = element(by.css('#ion-overlay-13 > div > app-mailpopup > ion-content > ion-toolbar > ion-buttons.ion-padding-start.buttons-first-slot.sc-ion-buttons-md-h.sc-ion-buttons-md-s.md.hydrated'));

this.mail_filter_sentAll = element(by.css('#ion-overlay-14 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item.ion-no-padding.item-label.item-checkbox-checked.item.md.in-list.ion-activatable.ion-focusable.hydrated.ion-untouched.ion-pristine.ion-valid > ion-checkbox'));
this.mail_filter_IntrestSent = element(by.css('#ion-overlay-14 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item:nth-child(2) > ion-checkbox'));
this.mail_filter_messageSent = element(by.css('#ion-overlay-14 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item:nth-child(3) > ion-checkbox'));
this.mail_filter_requestSent = element(by.css('#ion-overlay-14 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(1) > ion-col > ion-list > ion-item:nth-child(4) > ion-checkbox'));
this.mail_filter_SentApply = element(by.css('#ion-overlay-14 > div > app-mailpopup > ion-content > ion-grid > ion-row:nth-child(2) > ion-col > div > ion-button'));

this.mailbox =element(by.xpath('((//a[contains(text(),"Mailbox")])//span[1])[3]'));

}


module.exports=new mail();