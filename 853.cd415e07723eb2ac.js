"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[853],{2853:(F,c,s)=>{s.r(c),s.d(c,{SettingsModule:()=>y});var m=s(3617),t=s(3556),g=s(2965),a=s(6019),l=s(9133),d=s(5382),u=s(6515),f=s(7707),C=s(3386),v=s(8119),Z=s(3998);function h(e,o){1&e&&(t.TgZ(0,"p",5),t.TgZ(1,"small",11),t._uU(2,"Bitte Wert eingeben."),t.qZA(),t.qZA())}function S(e,o){1&e&&(t.TgZ(0,"div",5),t.TgZ(1,"small",11),t._uU(2,"Wert muss zwischen 0 - 10 liegen."),t.qZA(),t.qZA())}function T(e,o){1&e&&t._UZ(0,"app-alert",12)}let x=(()=>{class e{constructor(n,i){this.settingsService=n,this.districtNamePipe=i,this.decimalPointsControl=new l.NI(this.settingsService.settings.decimalPoints,[l.kI.required,l.kI.min(0),l.kI.max(10)]),this.isSuccessAlertVisible=!1,this.selectedDistrictCode=0,this.options=[]}ngOnInit(){this.options=this.listOfDistrictHistories.map(n=>{const i=n[0];return{name:this.districtNamePipe.transform(i),value:i.code}}),this.selectedDistrictCode=this.settingsService.settings.favoriteDistrictCode}onSave(){this.settingsService.setSettings({decimalPoints:this.decimalPointsControl.value,favoriteDistrictCode:this.selectedDistrictCode}),this.isSuccessAlertVisible=!0}onSelect(n){this.selectedDistrictCode=n.value}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.g),t.Y36(u.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-settings-form"]],inputs:{listOfDistrictHistories:"listOfDistrictHistories"},decls:21,vars:9,consts:[[1,"mt-2"],[1,"input-container","mt-05"],["type","number",3,"formControl","focus"],[3,"decimalPoints","incidence"],["class","mt-05",4,"ngIf"],[1,"mt-05"],["width","190px",3,"initialValue","options","appSelect"],["select",""],[1,"mt-2","mb-1"],["icon","save-regular","text","Speichern",3,"disabled","appClick"],["text","Einstellungen gespeichert",4,"ngIf"],[1,"fg-error"],["text","Einstellungen gespeichert"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"label"),t.TgZ(2,"small"),t._uU(3,"Nachkommastellen:"),t.qZA(),t.TgZ(4,"div",1),t.TgZ(5,"input",2),t.NdJ("focus",function(p){return p.target.select()}),t.qZA(),t.TgZ(6,"span"),t._uU(7," 78,29198 ~ "),t._UZ(8,"app-incidence-tag",3),t.qZA(),t.qZA(),t.YNc(9,h,3,0,"p",4),t.YNc(10,S,3,0,"div",4),t.qZA(),t.qZA(),t.TgZ(11,"div",0),t.TgZ(12,"label"),t.TgZ(13,"small"),t._uU(14,"Mein Landkreis:"),t.qZA(),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"app-select",6,7),t.NdJ("appSelect",function(p){return i.onSelect(p)}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",8),t.TgZ(19,"app-button",9),t.NdJ("appClick",function(){return i.onSave()}),t.qZA(),t.qZA(),t.YNc(20,T,1,0,"app-alert",10)),2&n&&(t.xp6(5),t.Q6J("formControl",i.decimalPointsControl),t.xp6(3),t.Q6J("decimalPoints",i.decimalPointsControl.value)("incidence",78.29198),t.xp6(1),t.Q6J("ngIf",null==i.decimalPointsControl.errors?null:i.decimalPointsControl.errors.required),t.xp6(1),t.Q6J("ngIf",(null==i.decimalPointsControl.errors?null:i.decimalPointsControl.errors.max)||(null==i.decimalPointsControl.errors?null:i.decimalPointsControl.errors.min)),t.xp6(6),t.Q6J("initialValue",i.selectedDistrictCode)("options",i.options),t.xp6(3),t.Q6J("disabled",i.decimalPointsControl.invalid),t.xp6(1),t.Q6J("ngIf",i.isSuccessAlertVisible))},directives:[l.wV,l.Fj,l.JJ,l.oH,f.T,a.O5,C.H,v.r,Z.w],styles:[".input-container[_ngcontent-%COMP%]{display:grid;width:100%;height:30px;grid-template-columns:190px 1fr;align-items:center;grid-gap:0 10px;gap:0 10px}input[_ngcontent-%COMP%]{padding:5px 7px;outline:none;border:1px solid rgb(220,220,220);border-radius:5px}.decimalpoint-hint[_ngcontent-%COMP%]{margin-top:8px;display:grid;grid-template-columns:1fr auto auto;grid-gap:0 5px;gap:0 5px}"]}),e})();var A=s(3305);function P(e,o){if(1&e&&(t.TgZ(0,"section",2),t.TgZ(1,"h1"),t._uU(2,"Einstellungen"),t.qZA(),t._UZ(3,"app-settings-form",3),t.qZA()),2&e){const n=o.ngIf;t.xp6(3),t.Q6J("listOfDistrictHistories",n.listOfDistrictHistories)}}function O(e,o){1&e&&t._UZ(0,"app-spinner")}let D=(()=>{class e{constructor(n){this.dataService=n,this.data$=this.dataService.data$}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-settings"]],decls:4,vars:4,consts:[["class","mt-1",4,"ngIf","ngIfElse"],["noData",""],[1,"mt-1"],[3,"listOfDistrictHistories"]],template:function(n,i){if(1&n&&(t.YNc(0,P,4,1,"section",0),t.ALo(1,"async"),t.YNc(2,O,1,0,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,i.data$))("ngIfElse",r)}},directives:[a.O5,x,A.O],pipes:[a.Ov],styles:[".input-container[_ngcontent-%COMP%]{display:grid;width:100%;height:30px;grid-template-columns:190px 1fr;align-items:center;grid-gap:0 10px;gap:0 10px}input[_ngcontent-%COMP%]{padding:5px 7px;outline:none;border:1px solid rgb(220,220,220);border-radius:5px}.decimalpoint-hint[_ngcontent-%COMP%]{margin-top:8px;display:grid;grid-template-columns:1fr auto auto;grid-gap:0 5px;gap:0 5px}"]}),e})();var I=s(1382);const J=[{path:"",component:D}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[I.m,m.Bz.forChild(J)]]}),e})()}}]);