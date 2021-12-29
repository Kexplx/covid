"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[445],{2445:(mt,g,a)=>{a.r(g),a.d(g,{HomeModule:()=>dt});var f=a(1382),_=a(3617),t=a(3556),T=a(6984),l=a(6019),s=a(539);const Z=["title"],C=["desc"];function v(n,i){if(1&n&&(t.TgZ(0,"p",7),t.TgZ(1,"small",8),t.GkF(2,5),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngTemplateOutlet",e.desc)}}function h(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return c.isExpanded=!c.isExpanded}),t._UZ(1,"img",3),t.TgZ(2,"p",4),t.GkF(3,5),t.qZA(),t.YNc(4,v,3,1,"p",6),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.ekj("faded",!e.isExpanded),t.xp6(1),t.ekj("fw-5",e.isExpanded),t.xp6(1),t.Q6J("ngTemplateOutlet",e.title),t.xp6(1),t.Q6J("ngIf",e.isExpanded)}}function b(n,i){if(1&n&&(t.TgZ(0,"p",4),t.GkF(1,5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",e.title)}}let p=(()=>{class n{constructor(){this.isExpanded=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-col-content"]],contentQueries:function(e,o,c){if(1&e&&(t.Suo(c,Z,5),t.Suo(c,C,5)),2&e){let r;t.iGM(r=t.CRH())&&(o.title=r.first),t.iGM(r=t.CRH())&&(o.desc=r.first)}},decls:3,vars:2,consts:[["class","content clickable",3,"click",4,"ngIf","ngIfElse"],["noDesc",""],[1,"content","clickable",3,"click"],["src","assets/icons/info-black.svg","alt","Info",1,"info-icon"],[1,"title"],[3,"ngTemplateOutlet"],["class","desc",4,"ngIf"],[1,"desc"],[1,"fg-secondary"]],template:function(e,o){if(1&e&&(t.YNc(0,h,5,6,"div",0),t.YNc(1,b,2,1,"ng-template",null,1,t.W1O)),2&e){const c=t.MAs(2);t.Q6J("ngIf",o.desc)("ngIfElse",c)}},directives:[l.O5,l.tP],styles:[".content[_ngcontent-%COMP%]{position:relative}.title[_ngcontent-%COMP%]{padding:10px}.desc[_ngcontent-%COMP%]{padding:0 5px 5px}.clickable[_ngcontent-%COMP%]{cursor:pointer}.info-icon[_ngcontent-%COMP%]{position:absolute;width:4px;left:13px;top:11px}.faded[_ngcontent-%COMP%]{opacity:.3}"]}),n})();var d=a(7707),m=a(8582),u=a(498);function x(n,i){1&n&&t._uU(0,"7-Tage-Inzidenz")}function O(n,i){1&n&&(t._uU(0,"COVID-19 F\xe4lle in den letzten sieben Tagen (je 100T Einwohner). "),t._UZ(1,"br"),t._UZ(2,"br"),t._uU(3," Die kurzzeitig gehypte Hospitalisierungsinzidenz hat sich aufgrund des gro\xdfen Meldeverzugs der Krankenh\xe4user als unzuverl\xe4ssige Metrik erwiesen. "))}function A(n,i){if(1&n&&t._UZ(0,"app-incidence-tag",4),2&n){const e=t.oxw();t.Q6J("incidence",e.germany.incidence)}}function y(n,i){1&n&&t._uU(0,"Neuinfektionen")}function P(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.germany.newCases)," ")}}function q(n,i){1&n&&t._uU(0,"F\xe4lle insgesamt")}function M(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.germany.totalCases)," ")}}function D(n,i){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es haben sich ",t.xi3(1,1,e.percentInfected,2),"% der Deutschen mit COVID-19 infiziert. ")}}function U(n,i){1&n&&t._uU(0,"Tote insgesamt")}function N(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.germany.totalDeaths)," ")}}function Y(n,i){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es sind ",t.xi3(1,1,e.percentDeaths,2),"% der infizierten Deutschen an der Krankheit gestorben. ")}}function W(n,i){1&n&&t._uU(0,"Mind. einmal Geimpfte")}function w(n,i){1&n&&t._uU(0," Wir halten es f\xfcr naheliegend, dass sich eine Person, die mind. einmal geimpft wurde auch regelm\xe4\xdfig boostern lassen wird. Die tats\xe4chliche Zahl der vollst\xe4ndig immunisierten Personen wird sich also in kurzer Zeit der Zahl der mind. einmal Geimpften angleichen.")}function G(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw();t.hij("",e.vaccination.percentAtLeastOnceVaccinated,"%")}}let z=(()=>{class n{constructor(){this.percentInfected=0,this.percentDeaths=0}ngOnInit(){this.percentInfected=this.germany.totalCases/83106896*100,this.percentDeaths=this.germany.totalDeaths/this.germany.totalCases*100}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-germany-table"]],inputs:{germany:"germany",vaccination:"vaccination"},decls:51,vars:0,consts:[[1,"table","mt-05"],[1,"col"],["title",""],["desc",""],[3,"incidence"]],template:function(e,o){1&e&&(t.TgZ(0,"app-divider"),t._uU(1,"Deutschland"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"app-col-content"),t.YNc(5,x,1,0,"ng-template",null,2,t.W1O),t.YNc(7,O,4,0,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"app-col-content"),t.YNc(11,A,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"app-col-content"),t.YNc(15,y,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(17,"div",1),t.TgZ(18,"app-col-content"),t.YNc(19,P,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(21,"div",1),t.TgZ(22,"app-col-content"),t.YNc(23,q,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(25,"div",1),t.TgZ(26,"app-col-content"),t.YNc(27,M,2,3,"ng-template",null,2,t.W1O),t.YNc(29,D,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(31,"div",1),t.TgZ(32,"app-col-content"),t.YNc(33,U,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(35,"div",1),t.TgZ(36,"app-col-content"),t.YNc(37,N,2,3,"ng-template",null,2,t.W1O),t.YNc(39,Y,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(41,"div",1),t.TgZ(42,"app-col-content"),t.YNc(43,W,1,0,"ng-template",null,2,t.W1O),t.YNc(45,w,1,0,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(47,"div",1),t.TgZ(48,"app-col-content"),t.YNc(49,G,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.qZA())},directives:[s.X,p,d.T],pipes:[m.J,u.L],styles:[".table[_ngcontent-%COMP%]{display:grid;grid-template-columns:60% 40%;--border-radius: 5px;--border: 1px solid #e6e6e6}.col[_ngcontent-%COMP%]{text-align:center;border:var(--border);border-top:none;display:flex;align-items:center;justify-content:center}.col[_ngcontent-%COMP%]   app-col-content[_ngcontent-%COMP%]{flex:1}.col[_ngcontent-%COMP%]:nth-child(1), .col[_ngcontent-%COMP%]:nth-child(2){border-top:var(--border)}.col[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(2){border-start-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:last-child{border-end-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-last-child(2){border-end-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}.col[_ngcontent-%COMP%]:nth-child(even){border-left:none}"]}),n})();function E(n,i){1&n&&t._uU(0," 7-Tage-Inzidenz ")}function I(n,i){if(1&n&&t._UZ(0,"app-incidence-tag",4),2&n){const e=t.oxw();t.Q6J("incidence",e.bavaria.incidence)}}function j(n,i){1&n&&t._uU(0,"F\xe4lle insgesamt")}function B(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.bavaria.totalCases)," ")}}function F(n,i){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es haben sich ",t.xi3(1,1,e.percentInfected,2),"% der Bayern mit COVID-19 infiziert. ")}}function J(n,i){1&n&&t._uU(0,"Tote insgesamt")}function L(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.bavaria.totalDeaths)," ")}}function k(n,i){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es sind ",t.xi3(1,1,e.percentDeaths,2),"% der infizierten Bayern an der Krankheit gestorben. ")}}function H(n,i){1&n&&t._uU(0,"Mind. einmal Geimpfte")}function Q(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw();t.hij("",e.vaccination.bavaria_percentAtLeastOnceVaccinated,"%")}}let S=(()=>{class n{constructor(){this.percentInfected=0,this.percentDeaths=0}ngOnInit(){this.percentInfected=this.bavaria.totalCases/13124737*100,this.percentDeaths=this.bavaria.totalDeaths/this.bavaria.totalCases*100}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bavaria-table"]],inputs:{bavaria:"bavaria",vaccination:"vaccination"},decls:39,vars:0,consts:[[1,"table","mt-05"],[1,"col"],["title",""],["desc",""],[3,"incidence"]],template:function(e,o){1&e&&(t.TgZ(0,"app-divider"),t._uU(1,"Bayern"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"app-col-content"),t.YNc(5,E,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"app-col-content"),t.YNc(9,I,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"app-col-content"),t.YNc(13,j,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(15,"div",1),t.TgZ(16,"app-col-content"),t.YNc(17,B,2,3,"ng-template",null,2,t.W1O),t.YNc(19,F,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(21,"div",1),t.TgZ(22,"app-col-content"),t.YNc(23,J,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(25,"div",1),t.TgZ(26,"app-col-content"),t.YNc(27,L,2,3,"ng-template",null,2,t.W1O),t.YNc(29,k,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(31,"div",1),t.TgZ(32,"app-col-content"),t.YNc(33,H,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(35,"div",1),t.TgZ(36,"app-col-content"),t.YNc(37,Q,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.qZA())},directives:[s.X,p,d.T],pipes:[m.J,u.L],styles:[".table[_ngcontent-%COMP%]{display:grid;grid-template-columns:60% 40%;--border-radius: 5px}.col[_ngcontent-%COMP%]{text-align:center;border:1px solid #e6e6e6;border-top:none;display:flex;align-items:center;justify-content:center}.col[_ngcontent-%COMP%]   app-col-content[_ngcontent-%COMP%]{flex:1}.col[_ngcontent-%COMP%]:nth-child(1), .col[_ngcontent-%COMP%]:nth-child(2){border-top:1px solid #e6e6e6}.col[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(2){border-start-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:last-child{border-end-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-last-child(2){border-end-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}.col[_ngcontent-%COMP%]:nth-child(even){border-left:none}"]}),n})();var X=a(5382),$=a(6515);function V(n,i){1&n&&t._uU(0," Name ")}function K(n,i){1&n&&t._uU(0," 7-Tage-Inzidenz ")}function R(n,i){1&n&&t._uU(0," F\xe4lle insges. ")}function tt(n,i){1&n&&t._uU(0," Tote insges. ")}function nt(n,i){if(1&n&&(t._uU(0),t.ALo(1,"districtName")),2&n){const e=t.oxw().$implicit;t.hij(" ",t.lcZ(1,1,e)," ")}}function et(n,i){if(1&n&&t._UZ(0,"app-incidence-tag",5),2&n){const e=t.oxw().$implicit;t.Q6J("incidence",e.incidence)}}function it(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw().$implicit;t.hij(" ",t.lcZ(1,1,e.totalCases)," ")}}function ot(n,i){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw().$implicit;t.hij(" ",t.lcZ(1,1,e.totalDeaths)," ")}}const at=function(n){return{"fw-5":n}};function ct(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"app-col-content"),t.YNc(3,nt,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(5,"div",1),t.TgZ(6,"app-col-content"),t.YNc(7,et,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"app-col-content"),t.YNc(11,it,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"app-col-content"),t.YNc(15,ot,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.BQk()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(1,at,e.code===o.favoriteDistrictCode))}}let lt=(()=>{class n{constructor(e){this.settingsService=e,this.favoriteDistrictCode=this.settingsService.settings.favoriteDistrictCode}ngOnInit(){this.districts=this.districts.sort((e,o)=>e.incidence-o.incidence)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(X.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-districts-table"]],inputs:{districts:"districts"},decls:20,vars:1,consts:[[1,"table","mt-05"],[1,"col"],["title",""],[4,"ngFor","ngForOf"],[1,"col",3,"ngClass"],[3,"incidence"]],template:function(e,o){1&e&&(t.TgZ(0,"app-divider"),t._uU(1,"St\xe4dte und Landkreise"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"app-col-content"),t.YNc(5,V,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"app-col-content"),t.YNc(9,K,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"app-col-content"),t.YNc(13,R,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(15,"div",1),t.TgZ(16,"app-col-content"),t.YNc(17,tt,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.YNc(19,ct,17,3,"ng-container",3),t.qZA()),2&e&&(t.xp6(19),t.Q6J("ngForOf",o.districts))},directives:[s.X,p,l.sg,l.mk,d.T],pipes:[$.h,m.J],styles:[".table[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;--border-radius: 5px;--border: 1px solid #e6e6e6}.col[_ngcontent-%COMP%]{text-align:center;border:var(--border);border-top:none;border-right:none;display:flex;align-items:center;justify-content:center}.col[_ngcontent-%COMP%]   app-col-content[_ngcontent-%COMP%]{flex:1}.col[_ngcontent-%COMP%]:nth-child(4n){border-right:var(--border)}.col[_ngcontent-%COMP%]:nth-child(1), .col[_ngcontent-%COMP%]:nth-child(2), .col[_ngcontent-%COMP%]:nth-child(3), .col[_ngcontent-%COMP%]:nth-child(4){border-top:var(--border);background-color:#fafafa}.col[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(4){border-start-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:last-child{border-end-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-last-child(4){border-end-start-radius:var(--border-radius)}"]}),n})(),rt=(()=>{class n{transform(e){return e.map(o=>o[0])}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"districts",type:n,pure:!0}),n})();function st(n,i){if(1&n&&(t.TgZ(0,"section",1),t.TgZ(1,"h1"),t._uU(2,"Home"),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"app-germany-table",2),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"app-bavaria-table",4),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"app-districts-table",5),t.ALo(9,"districts"),t.qZA(),t.qZA()),2&n){const e=i.ngIf;t.xp6(4),t.Q6J("germany",e.germanyHistory[0])("vaccination",e.vaccination),t.xp6(2),t.Q6J("bavaria",e.bavariaHistory[0])("vaccination",e.vaccination),t.xp6(2),t.Q6J("districts",t.lcZ(9,5,e.listOfDistrictHistories))}}const pt=[{path:"",component:(()=>{class n{constructor(e){this.dataService=e,this.data$=this.dataService.data$}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","mt-1",4,"ngIf"],[1,"mt-1"],[3,"germany","vaccination"],[1,"mt-2"],[3,"bavaria","vaccination"],[3,"districts"]],template:function(e,o){1&e&&(t.YNc(0,st,10,7,"section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.data$))},directives:[l.O5,z,S,lt],pipes:[l.Ov,rt],styles:[".covid-daily-btn[_ngcontent-%COMP%]{position:absolute;top:70px}"]}),n})()}];let dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.m,_.Bz.forChild(pt)],_.Bz]}),n})()}}]);