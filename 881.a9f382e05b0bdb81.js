"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[881],{2881:(pt,g,o)=>{o.r(g),o.d(g,{SettingsModule:()=>ct});var u=o(160),m=o(8051),a=o(9133),t=o(3556),D=o(5382),f=o(6132),h=o(4522),x=o(3067),T=o(7867),A=o(4753);let S=(()=>{class i{constructor(e,n){this.environment=e,this.http=n}getLocation(){return this.getCurrentCoordinates().pipe((0,x.w)(e=>{const n=`${this.environment.api}/location`,r=new h.LE({fromObject:Object.assign({},e)});return this.http.get(n,{params:r})}))}getCurrentCoordinates(){const e=new Promise((n,r)=>{navigator.geolocation.getCurrentPosition(n,r)});return(0,T.D)(e).pipe((0,A.U)(({coords:n})=>({lat:n.latitude,lon:n.longitude})))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.b),t.LFG(h.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var b=o(7707),p=o(6019),y=o(5077),O=o(2629),U=o(7239),C=o(7879);function F(i,s){if(1&i&&(t.TgZ(0,"span",6),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit,n=t.oxw(3);t.xp6(1),t.hij(" ",e.name.slice(0,n.filter.length),"")}}function w(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(3).onDistrictSelect(c)}),t.YNc(1,F,2,1,"span",5),t.TgZ(2,"span"),t._uU(3),t.qZA(),t._uU(4),t.ALo(5,"districtType"),t.qZA()}if(2&i){const e=s.$implicit,n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",n.filter),t.xp6(2),t.hij("",e.name.slice(n.filter.length)," "),t.xp6(1),t.hij(" ",t.lcZ(5,3,e.type)," ")}}function k(i,s){if(1&i&&(t.ynx(0),t.YNc(1,w,6,5,"li",3),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.filteredDistrictPreviews)}}function P(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"li"),t._uU(2," Keine Ergebnisse f\xfcr "),t.TgZ(3,"span",6),t._uU(4),t.qZA(),t.qZA(),t.BQk()),2&i){const e=t.oxw(2);t.xp6(4),t.hij('"',e.filter,'"')}}function I(i,s){if(1&i&&(t.TgZ(0,"ul"),t.YNc(1,k,2,1,"ng-container",2),t.YNc(2,P,5,1,"ng-container",2),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.filteredDistrictPreviews.length),t.xp6(1),t.Q6J("ngIf",!e.filteredDistrictPreviews.length)}}let J=(()=>{class i{constructor(e){this.doc=e,this.districtSelect=new t.vpe,this.isOpen=!1,this.filter="",this.filteredDistrictPreviews=[],this.districtPreviews=U.k,this.subsink=new O.Y}ngOnInit(){this.subsink.sink=(0,y.R)(this.doc,"click").subscribe(()=>this.isOpen=!1),this.reset()}ngOnDestroy(){this.subsink.unsubscribe()}onInputClick(){this.isOpen=!0}onInput(){!this.filter.trim()||(this.filteredDistrictPreviews=this.districtPreviews.filter(e=>e.name.toLocaleLowerCase().startsWith(this.filter.toLocaleLowerCase().trim())))}onDistrictSelect(e){this.districtSelect.emit(e),this.reset()}reset(){this.filter=""}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.K0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-district-auto-complete"]],outputs:{districtSelect:"districtSelect"},decls:3,vars:4,consts:[[1,"mt-05"],["placeholder","z.B. Rosenheim","type","text",3,"ngModel","ngModelChange","input","click"],[4,"ngIf"],["class","clickable",3,"click",4,"ngFor","ngForOf"],[1,"clickable",3,"click"],["class","fw-5",4,"ngIf"],[1,"fw-5"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(c){return n.filter=c})("input",function(){return n.onInput()})("click",function(c){return n.onInputClick(),c.stopPropagation()}),t.qZA(),t.YNc(2,I,3,2,"ul",2),t.qZA()),2&e&&(t.xp6(1),t.ekj("open",n.isOpen&&n.filter.trim()),t.Q6J("ngModel",n.filter),t.xp6(1),t.Q6J("ngIf",n.isOpen&&n.filter.trim()))},directives:[a.Fj,a.JJ,a.On,p.O5,p.sg],pipes:[C.H],styles:["div[_ngcontent-%COMP%]{display:grid;position:relative;--border: 1px solid rgb(230, 230, 230)}input[_ngcontent-%COMP%]{padding:5px 7px;outline:none;border:var(--border);border-radius:5px;height:17px}input.open[_ngcontent-%COMP%]{border-end-end-radius:0;border-end-start-radius:0}ul[_ngcontent-%COMP%]{right:0;left:0;position:absolute;top:29px;overflow:auto;max-height:148px;z-index:10;background-color:#fafafa;border:var(--border);border-top:0;border-end-end-radius:5px;border-end-start-radius:5px}li[_ngcontent-%COMP%]{padding:8px 14px 8px 10px;font-size:.8rem;background-color:#fafafa;border-top:var(--border)}li[_ngcontent-%COMP%]:first-child{border-top:0}"]}),i})();var _=o(8119),M=o(3998),q=o(8441),N=o(9109);let L=(()=>{class i extends q.v{constructor(e){super(e),this.discard=new t.vpe,this.cancel=new t.vpe}onDiscard(){this.discard.emit()}onCancel(){this.cancel.emit()}ngOnDestroy(){this.cleanup()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(N.N))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-discard-changed-dialog"]],outputs:{discard:"discard",cancel:"cancel"},features:[t.qOj],decls:10,vars:0,consts:[[1,"backdrop",3,"click"],[1,"content"],["src","assets/icons/close.svg","alt","Close",1,"img-close",3,"click"],[1,"mt-1","fg-secondary"],[1,"mt-2","action-container"],["text","Nein",3,"appClick"],["text","Ja",3,"appClick"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return n.onCancel()}),t.TgZ(1,"div",1),t.TgZ(2,"img",2),t.NdJ("click",function(){return n.onCancel()}),t.qZA(),t.TgZ(3,"h2"),t._uU(4,"\xc4nderungen verwerfen?"),t.qZA(),t.TgZ(5,"p",3),t._uU(6,"Alle \xc4nderungen werden verworfen. Weiter?"),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"app-button",5),t.NdJ("appClick",function(){return n.onCancel()}),t.qZA(),t.TgZ(9,"app-button",6),t.NdJ("appClick",function(){return n.onDiscard()}),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[_.r],styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:20;background-color:#0006;display:flex;align-items:center;justify-content:center}.content[_ngcontent-%COMP%]{border-radius:5px;position:relative;background-color:#fff;padding:30px;width:250px}.action-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.img-close[_ngcontent-%COMP%]{position:absolute;width:10px;height:10px;top:5px;cursor:pointer;right:5px;padding:10px}"]}),i})();function Y(i,s){1&i&&(t.TgZ(0,"p",9),t.TgZ(1,"small",16),t._uU(2,"Bitte Wert eingeben."),t.qZA(),t.qZA())}function E(i,s){1&i&&(t.TgZ(0,"div",9),t.TgZ(1,"small",16),t._uU(2,"Wert muss zwischen 0 - 10 liegen."),t.qZA(),t.qZA())}function Q(i,s){if(1&i&&(t.TgZ(0,"p",17),t.TgZ(1,"small",18),t._uU(2,"Sie sind in "),t.TgZ(3,"small",19),t._uU(4),t.qZA(),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Oqu(e.currentUserLocation)}}function z(i,s){1&i&&(t.TgZ(0,"p",17),t.TgZ(1,"small",20),t._uU(2,"Uns fehlt die Berechtigung um auf Ihren Standort zuzugreifen."),t.qZA(),t.qZA())}function H(i,s){1&i&&t._UZ(0,"img",25)}function j(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"img",26),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw().onMakeFavorite(r)}),t.qZA()}}function V(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"li"),t.TgZ(1,"div",21),t.TgZ(2,"span"),t._uU(3),t.ALo(4,"districtType"),t.qZA(),t.TgZ(5,"div"),t.YNc(6,H,1,0,"img",22),t.YNc(7,j,1,0,"img",23),t.TgZ(8,"img",24),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().onDistrictRemove(c)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=s.$implicit,n=t.oxw();t.xp6(1),t.ekj("highlight",n.lastAddedDistrictPreview===e),t.xp6(2),t.AsE("",e.name," ",t.lcZ(4,6,e.type),""),t.xp6(3),t.Q6J("ngIf",n.favoriteDistrictCode===e.code),t.xp6(1),t.Q6J("ngIf",n.favoriteDistrictCode!==e.code)}}function $(i,s){1&i&&t._UZ(0,"app-alert",27),2&i&&t.Q6J("error",!0)}function B(i,s){1&i&&t._UZ(0,"app-alert",28)}function G(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"app-discard-changed-dialog",29),t.NdJ("cancel",function(){return t.CHM(e),t.oxw().isDiscardChangesDialogVisible=!1})("discard",function(){return t.CHM(e),t.oxw().onDiscardChanges()}),t.qZA()}}let v=(()=>{class i{constructor(e,n,r,c){this.settingsService=e,this.dataService=n,this.router=r,this.locationService=c,this.decimalPointsControl=new a.NI(this.settingsService.settings.decimalPoints,[a.kI.required,a.kI.min(0),a.kI.max(10)]),this.selectedDistricts=[...this.settingsService.settings.districts],this.favoriteDistrictCode=this.settingsService.settings.favoriteDistrictCode,this.currentUserLocation="",this.currentUserLocationHasError=!1,this.isSuccessAlertVisible=!1,this.isErrorAlertVisible=!1,this.districtDataOutOfSync=!1,this.isDiscardChangesDialogVisible=!1,this.isDiscardChangesConfirmed=!1}ngOnDestroy(){this.districtDataOutOfSync&&this.dataService.loadData()}onSave(){this.districtDataOutOfSync=this.isDistrictDataOutOfSync(),this.settingsService.setSettings({decimalPoints:this.decimalPointsControl.value,districts:this.selectedDistricts,favoriteDistrictCode:this.favoriteDistrictCode}),this.isSuccessAlertVisible=!0,this.isErrorAlertVisible=!1}isDistrictDataOutOfSync(){const e=this.settingsService.settings.districts,n=this.selectedDistricts;return n.length!=e.length||!e.every(r=>n.find(c=>c.code===r.code))}hasUnsavedChanges(){return this.isDistrictDataOutOfSync()||this.decimalPointsControl.value!==this.settingsService.settings.decimalPoints||this.favoriteDistrictCode!==this.settingsService.settings.favoriteDistrictCode}onDistrictSelect(e){void 0===this.selectedDistricts.find(r=>r.code===e.code)&&(this.selectedDistricts=[e,...this.selectedDistricts],this.isErrorAlertVisible=!1,this.lastAddedDistrictPreview=e)}onDistrictRemove(e){if(this.lastAddedDistrictPreview=void 0,1===this.selectedDistricts.length)return void(this.isErrorAlertVisible=!0);const n=this.selectedDistricts.findIndex(r=>r.code===e.code);this.selectedDistricts.splice(n,1),e.code===this.favoriteDistrictCode&&(this.favoriteDistrictCode=void 0)}onMakeFavorite(e){this.favoriteDistrictCode=e.code}onGetLocation(){this.currentUserLocationHasError=!1,this.currentUserLocation="",this.locationService.getLocation().subscribe({next:e=>{this.currentUserLocation=`${e.districtName}, ${e.stateName}`},error:()=>this.currentUserLocationHasError=!0})}onDiscardChanges(){this.isDiscardChangesConfirmed=!0,this.guardedRoute&&this.router.navigateByUrl(this.guardedRoute)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(D.g),t.Y36(f.D),t.Y36(u.F0),t.Y36(S))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-settings-form"]],inputs:{listOfDistrictHistories:"listOfDistrictHistories"},decls:28,vars:13,consts:[[1,"mt-2"],[1,"input-container","mt-05"],["type","number",3,"formControl","focus"],[3,"decimalPoints","incidence"],["class","mt-05",4,"ngIf"],[1,"search-action-container"],[3,"districtSelect"],["height","29px","text","Wo bin Ich?",3,"appClick"],["class","ta-center mt-1",4,"ngIf"],[1,"mt-05"],[4,"ngFor","ngForOf"],["text","Es muss mind. ein Landkreis gew\xe4hlt werden",3,"error",4,"ngIf"],[1,"mt-2","mb-1"],["text","Speichern",3,"disabled","appClick"],["text","Einstellungen gespeichert",4,"ngIf"],[3,"cancel","discard",4,"ngIf"],[1,"fg-error"],[1,"ta-center","mt-1"],[1,"fg-secondary"],[1,"fw-5"],[1,"fg-secondary","fg-error","fw-5"],[1,"district-list-item-container"],["src","assets/icons/star-filled.svg","alt","Star filled","class","mr-2",4,"ngIf"],["src","assets/icons/star-outlined.svg","alt","Star outlined","class","mr-2",3,"click",4,"ngIf"],["src","assets/icons/minus-solid.svg","alt","Remove",3,"click"],["src","assets/icons/star-filled.svg","alt","Star filled",1,"mr-2"],["src","assets/icons/star-outlined.svg","alt","Star outlined",1,"mr-2",3,"click"],["text","Es muss mind. ein Landkreis gew\xe4hlt werden",3,"error"],["text","Einstellungen gespeichert"],[3,"cancel","discard"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"label"),t.TgZ(2,"small"),t._uU(3,"Nachkommastellen:"),t.qZA(),t.TgZ(4,"div",1),t.TgZ(5,"input",2),t.NdJ("focus",function(c){return c.target.select()}),t.qZA(),t.TgZ(6,"span"),t._uU(7," 78,29198 ~ "),t._UZ(8,"app-incidence-tag",3),t.qZA(),t.qZA(),t.YNc(9,Y,3,0,"p",4),t.YNc(10,E,3,0,"div",4),t.qZA(),t.qZA(),t.TgZ(11,"div",0),t.TgZ(12,"div",5),t.TgZ(13,"div"),t.TgZ(14,"label"),t.TgZ(15,"small"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"app-district-auto-complete",6),t.NdJ("districtSelect",function(c){return n.onDistrictSelect(c)}),t.qZA(),t.qZA(),t.TgZ(18,"app-button",7),t.NdJ("appClick",function(){return n.onGetLocation()}),t.qZA(),t.qZA(),t.YNc(19,Q,5,1,"p",8),t.YNc(20,z,3,0,"p",8),t.TgZ(21,"ul",9),t.YNc(22,V,9,8,"li",10),t.qZA(),t.YNc(23,$,1,1,"app-alert",11),t.qZA(),t.TgZ(24,"div",12),t.TgZ(25,"app-button",13),t.NdJ("appClick",function(){return n.onSave()}),t.qZA(),t.qZA(),t.YNc(26,B,1,0,"app-alert",14),t.YNc(27,G,1,0,"app-discard-changed-dialog",15)),2&e&&(t.xp6(5),t.Q6J("formControl",n.decimalPointsControl),t.xp6(3),t.Q6J("decimalPoints",n.decimalPointsControl.value)("incidence",78.29198),t.xp6(1),t.Q6J("ngIf",null==n.decimalPointsControl.errors?null:n.decimalPointsControl.errors.required),t.xp6(1),t.Q6J("ngIf",(null==n.decimalPointsControl.errors?null:n.decimalPointsControl.errors.max)||(null==n.decimalPointsControl.errors?null:n.decimalPointsControl.errors.min)),t.xp6(6),t.hij("Stadt oder Landkreis hinzuf\xfcgen (",n.selectedDistricts.length,"/411):"),t.xp6(3),t.Q6J("ngIf",n.currentUserLocation),t.xp6(1),t.Q6J("ngIf",n.currentUserLocationHasError),t.xp6(2),t.Q6J("ngForOf",n.selectedDistricts),t.xp6(1),t.Q6J("ngIf",n.isErrorAlertVisible),t.xp6(2),t.Q6J("disabled",n.decimalPointsControl.invalid||!n.hasUnsavedChanges()),t.xp6(1),t.Q6J("ngIf",n.isSuccessAlertVisible),t.xp6(1),t.Q6J("ngIf",n.isDiscardChangesDialogVisible))},directives:[a.wV,a.Fj,a.JJ,a.oH,b.T,p.O5,J,_.r,p.sg,M.w,L],pipes:[C.H],styles:[".input-container[_ngcontent-%COMP%]{display:grid;width:100%;height:30px;grid-template-columns:190px 1fr;align-items:center;grid-gap:0 10px;gap:0 10px}input[_ngcontent-%COMP%]{padding:5px 7px;outline:none;border:1px solid rgb(230,230,230);border-radius:5px}.decimalpoint-hint[_ngcontent-%COMP%]{margin-top:8px;display:grid;grid-template-columns:1fr auto auto;grid-gap:0 5px;gap:0 5px}.district-list-item-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;justify-content:space-between;align-items:center;padding:10px}.district-list-item-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:14px;height:14px;cursor:pointer}.district-list-item-container.highlight[_ngcontent-%COMP%]{animation:highlight 3s ease}@keyframes highlight{0%{background:#2ecc71}to{background:white}}.search-action-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-gap:0 5px;gap:0 5px;align-items:end}"]}),i})();var R=o(3332),W=o(539),d=o(8466),X=o(6339);let K=(()=>{class i{ngAfterViewInit(){this.drawChart()}ngOnDestroy(){var e;null===(e=this.chart)||void 0===e||e.destroy()}drawChart(){d.kL.register(...d.zX);const r={type:"bar",data:{labels:this.fingerprintDocuments.map((c,l)=>{if(0===l)return"Heute";const Z=new Date(c.created);return`${Z.getDate()}.${Z.getMonth()+1}`}).reverse(),datasets:[{data:this.fingerprintDocuments.map(c=>c.fingerprintCount).reverse(),datalabels:{color:"rgb(50, 50, 50)",align:"center",padding:0,font:{size:13,weight:700}},backgroundColor:[...Array(this.fingerprintDocuments.length-1).fill("rgba(201, 203, 207, 0.2)"),"rgba(54, 162, 235, 0.2)"],borderColor:[...Array(this.fingerprintDocuments.length-1).fill("rgb(201, 203, 207)"),"rgb(54, 162, 235)"],borderWidth:1}]},plugins:[X.Z],options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{y:{display:!1},x:{display:!0,grid:{display:!0,drawOnChartArea:!1,drawBorder:!0,drawTicks:!0}}},animation:!1}};this.chart=new d.kL(document.getElementById("usersbarchart"),r)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-users-bar-chart"]],inputs:{fingerprintDocuments:"fingerprintDocuments"},decls:4,vars:0,consts:[[1,"mt-1"],["id","usersbarchart"]],template:function(e,n){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"T\xe4gliche Nutzer"),t.qZA(),t.TgZ(2,"div",0),t._UZ(3,"canvas",1),t.qZA())},styles:[""]}),i})();var tt=o(5734);function et(i,s){1&i&&(t.TgZ(0,"p"),t._uU(1,"Ihre Version ist veraltet \u2718"),t.qZA())}function it(i,s){1&i&&(t.TgZ(0,"p"),t._uU(1,"Sie verwenden die neueste Version \u2714"),t.qZA())}function nt(i,s){if(1&i&&(t.TgZ(0,"section",1),t.TgZ(1,"h1"),t._uU(2,"Einstellungen"),t.qZA(),t._UZ(3,"app-settings-form",2),t.TgZ(4,"div",3),t.TgZ(5,"app-divider"),t._uU(6,"Metainformationen"),t.qZA(),t.qZA(),t._UZ(7,"app-users-bar-chart",4),t.TgZ(8,"p",1),t.TgZ(9,"small"),t._uU(10),t.ALo(11,"germanDate"),t.qZA(),t.qZA(),t.TgZ(12,"h3",5),t._uU(13,"App Version"),t.qZA(),t.YNc(14,et,2,0,"p",6),t.ALo(15,"async"),t.YNc(16,it,2,0,"ng-template",null,7,t.W1O),t.TgZ(18,"p",8),t.TgZ(19,"small"),t._uU(20),t.qZA(),t.qZA(),t.TgZ(21,"div",9),t.TgZ(22,"a",10),t._UZ(23,"img",11),t.qZA(),t.qZA(),t.qZA()),2&i){const e=s.ngIf,n=t.MAs(17),r=t.oxw();t.xp6(3),t.Q6J("listOfDistrictHistories",e.listOfDistrictHistories),t.xp6(4),t.Q6J("fingerprintDocuments",e.fingerprintDocuments),t.xp6(3),t.AsE("Bisheriger Rekord: ",e.fingerPrintDocumentWithMaxFingerprints.fingerprintCount," Nutzer am ",t.lcZ(11,7,e.fingerPrintDocumentWithMaxFingerprints.created)," "),t.xp6(4),t.Q6J("ngIf",t.lcZ(15,9,r.hasUpdate$))("ngIfElse",n),t.xp6(6),t.hij("",r.localSha," ")}}let st=(()=>{class i{constructor(e,n,r){this.environment=e,this.dataService=n,this.updateService=r,this.data$=this.dataService.data$,this.localSha=this.environment.localSha,this.hasUpdate$=this.updateService.hasUpdate$}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.b),t.Y36(f.D),t.Y36(R.G))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-settings"]],viewQuery:function(e,n){if(1&e&&t.Gf(v,5),2&e){let r;t.iGM(r=t.CRH())&&(n.settingsForm=r.first)}},decls:2,vars:3,consts:[["class","mt-1",4,"ngIf"],[1,"mt-1"],[3,"listOfDistrictHistories"],[1,"mt-2"],[3,"fingerprintDocuments"],[1,"mt-2","mb-1"],[4,"ngIf","ngIfElse"],["noUpdates",""],[1,"mt-1","mb-05"],[1,"mt-1","ta-center"],["target","_blank","href","https://github.com/kexplx/covid"],["src","assets/icons/logo.png","alt","",2,"width","50%"]],template:function(e,n){1&e&&(t.YNc(0,nt,24,11,"section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.data$))},directives:[p.O5,v,W.X,K],pipes:[p.Ov,tt.Z],styles:[""]}),i})();var rt=o(1382);const ot=[{path:"",component:st,canDeactivate:[(()=>{class i{canDeactivate(e,n,r,c){const l=e.settingsForm;return!(l.hasUnsavedChanges()&&!l.isDiscardChangesConfirmed&&(l.guardedRoute=null==c?void 0:c.url,l.isDiscardChangesDialogVisible=!0,1))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()]}];let ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[rt.m,u.Bz.forChild(ot)]]}),i})()}}]);