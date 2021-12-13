"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[386],{386:(B,d,s)=>{s.r(d),s.d(d,{SettingsModule:()=>Q});var g=s(3617),u=s(8260),t=s(3556),f=s(6984),h=s(3332),c=s(6019),r=s(9133),v=s(5382),Z=s(6515),C=s(7707),S=s(3386),T=s(8119),A=s(3998);function y(e,o){1&e&&(t.TgZ(0,"p",5),t.TgZ(1,"small",11),t._uU(2,"Bitte Wert eingeben."),t.qZA(),t.qZA())}function D(e,o){1&e&&(t.TgZ(0,"div",5),t.TgZ(1,"small",11),t._uU(2,"Wert muss zwischen 0 - 10 liegen."),t.qZA(),t.qZA())}function U(e,o){1&e&&t._UZ(0,"app-alert",12)}let x=(()=>{class e{constructor(n,i){this.settingsService=n,this.districtNamePipe=i,this.decimalPointsControl=new r.NI(this.settingsService.settings.decimalPoints,[r.kI.required,r.kI.min(0),r.kI.max(10)]),this.isSuccessAlertVisible=!1,this.selectedDistrictCode=0,this.options=[]}ngOnInit(){this.options=this.listOfDistrictHistories.map(n=>{const i=n[0];return{name:this.districtNamePipe.transform(i),value:i.code}}),this.selectedDistrictCode=this.settingsService.settings.favoriteDistrictCode}onSave(){this.settingsService.setSettings({decimalPoints:this.decimalPointsControl.value,favoriteDistrictCode:this.selectedDistrictCode}),this.isSuccessAlertVisible=!0}onSelect(n){this.selectedDistrictCode=n.value}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.g),t.Y36(Z.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-settings-form"]],inputs:{listOfDistrictHistories:"listOfDistrictHistories"},decls:21,vars:9,consts:[[1,"mt-2"],[1,"input-container","mt-05"],["type","number",3,"formControl","focus"],[3,"decimalPoints","incidence"],["class","mt-05",4,"ngIf"],[1,"mt-05"],["width","190px",3,"initialValue","options","appSelect"],["select",""],[1,"mt-2","mb-1"],["text","Speichern",3,"disabled","appClick"],["text","Einstellungen gespeichert",4,"ngIf"],[1,"fg-error"],["text","Einstellungen gespeichert"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"label"),t.TgZ(2,"small"),t._uU(3,"Nachkommastellen:"),t.qZA(),t.TgZ(4,"div",1),t.TgZ(5,"input",2),t.NdJ("focus",function(a){return a.target.select()}),t.qZA(),t.TgZ(6,"span"),t._uU(7," 78,29198 ~ "),t._UZ(8,"app-incidence-tag",3),t.qZA(),t.qZA(),t.YNc(9,y,3,0,"p",4),t.YNc(10,D,3,0,"div",4),t.qZA(),t.qZA(),t.TgZ(11,"div",0),t.TgZ(12,"label"),t.TgZ(13,"small"),t._uU(14,"Mein Landkreis:"),t.qZA(),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"app-select",6,7),t.NdJ("appSelect",function(a){return i.onSelect(a)}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",8),t.TgZ(19,"app-button",9),t.NdJ("appClick",function(){return i.onSave()}),t.qZA(),t.qZA(),t.YNc(20,U,1,0,"app-alert",10)),2&n&&(t.xp6(5),t.Q6J("formControl",i.decimalPointsControl),t.xp6(3),t.Q6J("decimalPoints",i.decimalPointsControl.value)("incidence",78.29198),t.xp6(1),t.Q6J("ngIf",null==i.decimalPointsControl.errors?null:i.decimalPointsControl.errors.required),t.xp6(1),t.Q6J("ngIf",(null==i.decimalPointsControl.errors?null:i.decimalPointsControl.errors.max)||(null==i.decimalPointsControl.errors?null:i.decimalPointsControl.errors.min)),t.xp6(6),t.Q6J("initialValue",i.selectedDistrictCode)("options",i.options),t.xp6(3),t.Q6J("disabled",i.decimalPointsControl.invalid),t.xp6(1),t.Q6J("ngIf",i.isSuccessAlertVisible))},directives:[r.wV,r.Fj,r.JJ,r.oH,C.T,c.O5,S.H,T.r,A.w],styles:[".input-container[_ngcontent-%COMP%]{display:grid;width:100%;height:30px;grid-template-columns:190px 1fr;align-items:center;grid-gap:0 10px;gap:0 10px}input[_ngcontent-%COMP%]{padding:5px 7px;outline:none;border:1px solid rgb(220,220,220);border-radius:5px}.decimalpoint-hint[_ngcontent-%COMP%]{margin-top:8px;display:grid;grid-template-columns:1fr auto auto;grid-gap:0 5px;gap:0 5px}"]}),e})();var b=s(539),p=s(8466),P=s(6339);let I=(()=>{class e{ngAfterViewInit(){this.drawChart()}ngOnDestroy(){var n;null===(n=this.chart)||void 0===n||n.destroy()}drawChart(){p.kL.register(...p.zX);const l={type:"bar",data:{labels:this.fingerprintDocuments.map((a,M)=>{if(0===M)return"Heute";const m=new Date(a.created);return`${m.getDate()}.${m.getMonth()+1}`}).reverse(),datasets:[{data:this.fingerprintDocuments.map(a=>a.fingerprints.length).reverse(),datalabels:{color:"rgb(50, 50, 50)",align:"center",padding:0,font:{size:13,weight:700}},backgroundColor:[...Array(this.fingerprintDocuments.length-1).fill("rgba(201, 203, 207, 0.2)"),"rgba(54, 162, 235, 0.2)"],borderColor:[...Array(this.fingerprintDocuments.length-1).fill("rgb(201, 203, 207)"),"rgb(54, 162, 235)"],borderWidth:1}]},plugins:[P.Z],options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{y:{display:!1},x:{display:!0,grid:{display:!0,drawOnChartArea:!1,drawBorder:!0,drawTicks:!0}}},animation:!1}};this.chart=new p.kL(document.getElementById("usersbarchart"),l)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users-bar-chart"]],inputs:{fingerprintDocuments:"fingerprintDocuments"},decls:4,vars:0,consts:[[1,"mt-1"],["id","usersbarchart"]],template:function(n,i){1&n&&(t.TgZ(0,"h3",0),t._uU(1,"T\xe4gliche Nutzer"),t.qZA(),t.TgZ(2,"div",0),t._UZ(3,"canvas",1),t.qZA())},styles:[""]}),e})();function J(e,o){1&e&&(t.TgZ(0,"small"),t._uU(1,"Ihre Version ist veraltet \u2718"),t.qZA())}function O(e,o){if(1&e&&(t.TgZ(0,"section",1),t.TgZ(1,"h1"),t._uU(2,"Einstellungen"),t.qZA(),t._UZ(3,"app-settings-form",2),t.TgZ(4,"div",3),t.TgZ(5,"app-divider"),t._uU(6,"App Metainformationen"),t.qZA(),t.qZA(),t._UZ(7,"app-users-bar-chart",4),t.TgZ(8,"h3",1),t._uU(9,"App Version"),t.qZA(),t.TgZ(10,"p",5),t._uU(11),t.qZA(),t.YNc(12,J,2,0,"small",6),t.ALo(13,"async"),t.TgZ(14,"small",null,7),t._uU(16,"Sie verwenden die neueste Version \u2714"),t.qZA(),t.qZA()),2&e){const n=o.ngIf,i=t.oxw();t.xp6(3),t.Q6J("listOfDistrictHistories",n.listOfDistrictHistories),t.xp6(4),t.Q6J("fingerprintDocuments",n.fingerprintDocuments),t.xp6(4),t.Oqu(i.localSha),t.xp6(1),t.Q6J("ngIf",t.lcZ(13,4,i.hasUpdate$))}}let F=(()=>{class e{constructor(n,i){this.dataService=n,this.updateService=i,this.data$=this.dataService.data$,this.localSha=u.N.localSha,this.hasUpdate$=this.updateService.hasUpdate$}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.D),t.Y36(h.G))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-settings"]],decls:2,vars:3,consts:[["class","mt-1",4,"ngIf"],[1,"mt-1"],[3,"listOfDistrictHistories"],[1,"mt-2"],[3,"fingerprintDocuments"],[1,"mt-1","mb-05"],[4,"ngIfNoUpdates","ngIf"],["noUpdates",""]],template:function(n,i){1&n&&(t.YNc(0,O,17,6,"section",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.data$))},directives:[c.O5,x,b.X,I],pipes:[c.Ov],styles:[""]}),e})();var N=s(1382);const q=[{path:"",component:F}];let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[N.m,g.Bz.forChild(q)]]}),e})()}}]);