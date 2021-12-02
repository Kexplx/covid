"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[445],{2445:(Ot,Z,o)=>{o.r(Z),o.d(Z,{HomeModule:()=>At});var v=o(1382),b=o(3617),t=o(3556),C=o(2965),l=o(6019),s=o(539);const A=["title"],O=["desc"];function y(n,c){if(1&n&&(t.TgZ(0,"p",7),t.TgZ(1,"small",8),t.GkF(2,5),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngTemplateOutlet",e.desc)}}function U(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return a.isExpanded=!a.isExpanded}),t._UZ(1,"img",3),t.TgZ(2,"p",4),t.GkF(3,5),t.qZA(),t.YNc(4,y,3,1,"p",6),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.ekj("faded",!e.isExpanded),t.xp6(1),t.ekj("fw-5",e.isExpanded),t.xp6(1),t.Q6J("ngTemplateOutlet",e.title),t.xp6(1),t.Q6J("ngIf",e.isExpanded)}}function M(n,c){if(1&n&&(t.TgZ(0,"p",4),t.GkF(1,5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",e.title)}}let p=(()=>{class n{constructor(){this.isExpanded=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-col-content"]],contentQueries:function(e,i,a){if(1&e&&(t.Suo(a,A,5),t.Suo(a,O,5)),2&e){let r;t.iGM(r=t.CRH())&&(i.title=r.first),t.iGM(r=t.CRH())&&(i.desc=r.first)}},decls:3,vars:2,consts:[["class","content clickable",3,"click",4,"ngIf","ngIfElse"],["noDesc",""],[1,"content","clickable",3,"click"],["src","assets/icons/info-black.svg","alt","Info",1,"info-icon"],[1,"title"],[3,"ngTemplateOutlet"],["class","desc",4,"ngIf"],[1,"desc"],[1,"fg-secondary"]],template:function(e,i){if(1&e&&(t.YNc(0,U,5,6,"div",0),t.YNc(1,M,2,1,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.desc)("ngIfElse",a)}},directives:[l.O5,l.tP],styles:[".content[_ngcontent-%COMP%]{position:relative}.title[_ngcontent-%COMP%]{padding:10px}.desc[_ngcontent-%COMP%]{padding:0 5px 5px}.clickable[_ngcontent-%COMP%]{cursor:pointer}.info-icon[_ngcontent-%COMP%]{position:absolute;width:4px;left:13px;top:11px}.faded[_ngcontent-%COMP%]{opacity:.3}"]}),n})();var d=o(7707),_=o(8582),x=o(498);function q(n,c){1&n&&t._uU(0,"7-Tage-Inzidenz")}function P(n,c){1&n&&t._uU(0,"COVID-19 F\xe4lle in den letzten sieben Tagen (je 100T Einwohner)")}function V(n,c){if(1&n&&t._UZ(0,"app-incidence-tag",4),2&n){const e=t.oxw();t.Q6J("incidence",e.germany.incidence)}}function N(n,c){1&n&&t._uU(0,"Neuinfektionen")}function Y(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.germany.newCases)," ")}}function j(n,c){1&n&&t._uU(0,"F\xe4lle insgesamt")}function B(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.germany.totalCases)," ")}}function W(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es haben sich ",t.xi3(1,1,e.percentInfected,2),"% der Deutschen mit COVID-19 infiziert. ")}}function D(n,c){1&n&&t._uU(0,"Tote insgesamt")}function L(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.germany.totalDeaths)," ")}}function w(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es sind ",t.xi3(1,1,e.percentDeaths,2),"% der infizierten Deutschen an der Krankheit gestorben. ")}}function G(n,c){1&n&&t._uU(0,"Erstgeimpfte")}function J(n,c){if(1&n&&t._uU(0),2&n){const e=t.oxw();t.hij("",e.vaccination.percentAtLeastOnceVaccinated,"%")}}function z(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round"),t._UZ(2,"br"),t._uU(3),t.ALo(4,"round"),t._UZ(5,"br"),t._uU(6),t.ALo(7,"round"),t._UZ(8,"br"),t._uU(9),t.ALo(10,"round")),2&n){const e=t.oxw();t.hij(" BioNTech - ",t.xi3(1,4,e.firstVaccination_percentBiontech,2),"% "),t.xp6(3),t.hij(" AstraZeneca - ",t.xi3(4,7,e.firstVaccination_percentAstra,2),"% "),t.xp6(3),t.hij(" Moderna - ",t.xi3(7,10,e.firstVaccination_percentModerna,2),"% "),t.xp6(3),t.hij(" Janssen - ",t.xi3(10,13,e.firstVaccination_percentJanssen,2),"% ")}}function F(n,c){1&n&&t._uU(0,"Vollst\xe4ndig Geimpfte")}function I(n,c){if(1&n&&t._uU(0),2&n){const e=t.oxw();t.hij("",e.vaccination.percentFullyVaccinated,"%")}}function E(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round"),t._UZ(2,"br"),t._uU(3),t.ALo(4,"round"),t._UZ(5,"br"),t._uU(6),t.ALo(7,"round")),2&n){const e=t.oxw();t.hij(" BioNTech - ",t.xi3(1,3,e.secondVaccination_percentBiontech,2),"% "),t.xp6(3),t.hij(" Moderna - ",t.xi3(4,6,e.secondVaccination_percentModerna,2),"% "),t.xp6(3),t.hij(" AstraZeneca - ",t.xi3(7,9,e.secondVaccination_percentAstra,2),"% ")}}let H=(()=>{class n{constructor(){this.percentInfected=0,this.percentDeaths=0,this.firstVaccination_percentBiontech=0,this.firstVaccination_percentAstra=0,this.firstVaccination_percentModerna=0,this.firstVaccination_percentJanssen=0,this.secondVaccination_percentBiontech=0,this.secondVaccination_percentAstra=0,this.secondVaccination_percentModerna=0}ngOnInit(){this.percentInfected=this.germany.totalCases/83106896*100,this.percentDeaths=this.germany.totalDeaths/this.germany.totalCases*100;const{numberOfPeopleAtLeastOnceVaccinated:i,numberOfPeopleFullyVaccinated:a}=this.vaccination,{biontech:r,astrazeneca:m,janssen:g,moderne:u}=this.vaccination.vaccinesUsed_firstVaccination;this.firstVaccination_percentBiontech=r/i*100,this.firstVaccination_percentAstra=m/i*100,this.firstVaccination_percentModerna=u/i*100,this.firstVaccination_percentJanssen=g/i*100;const{biontech:f,astrazeneca:T,moderne:h}=this.vaccination.vaccinesUsed_secondVaccination;this.secondVaccination_percentBiontech=f/a*100,this.secondVaccination_percentAstra=T/a*100,this.secondVaccination_percentModerna=h/a*100}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-germany-table"]],inputs:{germany:"germany",vaccination:"vaccination"},decls:61,vars:0,consts:[[1,"table","mt-05"],[1,"col"],["title",""],["desc",""],[3,"incidence"]],template:function(e,i){1&e&&(t.TgZ(0,"app-divider"),t._uU(1,"Deutschland"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"app-col-content"),t.YNc(5,q,1,0,"ng-template",null,2,t.W1O),t.YNc(7,P,1,0,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"app-col-content"),t.YNc(11,V,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"app-col-content"),t.YNc(15,N,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(17,"div",1),t.TgZ(18,"app-col-content"),t.YNc(19,Y,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(21,"div",1),t.TgZ(22,"app-col-content"),t.YNc(23,j,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(25,"div",1),t.TgZ(26,"app-col-content"),t.YNc(27,B,2,3,"ng-template",null,2,t.W1O),t.YNc(29,W,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(31,"div",1),t.TgZ(32,"app-col-content"),t.YNc(33,D,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(35,"div",1),t.TgZ(36,"app-col-content"),t.YNc(37,L,2,3,"ng-template",null,2,t.W1O),t.YNc(39,w,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(41,"div",1),t.TgZ(42,"app-col-content"),t.YNc(43,G,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(45,"div",1),t.TgZ(46,"app-col-content"),t.YNc(47,J,1,1,"ng-template",null,2,t.W1O),t.YNc(49,z,11,16,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(51,"div",1),t.TgZ(52,"app-col-content"),t.YNc(53,F,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(55,"div",1),t.TgZ(56,"app-col-content"),t.YNc(57,I,1,1,"ng-template",null,2,t.W1O),t.YNc(59,E,8,12,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.qZA())},directives:[s.X,p,d.T],pipes:[_.J,x.L],styles:[".table[_ngcontent-%COMP%]{display:grid;grid-template-columns:60% 40%;--border-radius: 5px;--border: 1px solid #e6e6e6}.col[_ngcontent-%COMP%]{text-align:center;border:var(--border);border-top:none;display:flex;align-items:center;justify-content:center}.col[_ngcontent-%COMP%]   app-col-content[_ngcontent-%COMP%]{flex:1}.col[_ngcontent-%COMP%]:nth-child(1), .col[_ngcontent-%COMP%]:nth-child(2){border-top:var(--border)}.col[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(2){border-start-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:last-child{border-end-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-last-child(2){border-end-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}.col[_ngcontent-%COMP%]:nth-child(even){border-left:none}"]}),n})();function Q(n,c){1&n&&t._uU(0," 7-Tage-Inzidenz ")}function k(n,c){if(1&n&&t._UZ(0,"app-incidence-tag",4),2&n){const e=t.oxw();t.Q6J("incidence",e.bavaria.incidence)}}function S(n,c){1&n&&t._uU(0,"F\xe4lle insgesamt")}function X(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.bavaria.totalCases)," ")}}function $(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es haben sich ",t.xi3(1,1,e.percentInfected,2),"% der Bayern mit COVID-19 infiziert. ")}}function K(n,c){1&n&&t._uU(0,"Tote insgesamt")}function R(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw();t.hij(" ",t.lcZ(1,1,e.bavaria.totalDeaths)," ")}}function tt(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round")),2&n){const e=t.oxw();t.hij(" Es sind ",t.xi3(1,1,e.percentDeaths,2),"% der infizierten Bayern an der Krankheit gestorben. ")}}function nt(n,c){1&n&&t._uU(0,"Erstgeimpfte")}function et(n,c){if(1&n&&t._uU(0),2&n){const e=t.oxw();t.hij("",e.vaccination.bavaria_percentAtLeastOnceVaccinated,"%")}}function ct(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round"),t._UZ(2,"br"),t._uU(3),t.ALo(4,"round"),t._UZ(5,"br"),t._uU(6),t.ALo(7,"round"),t._UZ(8,"br"),t._uU(9),t.ALo(10,"round")),2&n){const e=t.oxw();t.hij(" BioNTech - ",t.xi3(1,4,e.firstVaccination_percentBiontech,2),"% "),t.xp6(3),t.hij(" AstraZeneca - ",t.xi3(4,7,e.firstVaccination_percentAstra,2),"% "),t.xp6(3),t.hij(" Moderna - ",t.xi3(7,10,e.firstVaccination_percentModerna,2),"% "),t.xp6(3),t.hij(" Janssen - ",t.xi3(10,13,e.firstVaccination_percentJanssen,2),"% ")}}function it(n,c){1&n&&t._uU(0,"Vollst\xe4ndig Geimpfte")}function at(n,c){if(1&n&&t._uU(0),2&n){const e=t.oxw();t.hij("",e.vaccination.bavaria_percentFullyVaccinated,"%")}}function ot(n,c){if(1&n&&(t._uU(0),t.ALo(1,"round"),t._UZ(2,"br"),t._uU(3),t.ALo(4,"round"),t._UZ(5,"br"),t._uU(6),t.ALo(7,"round")),2&n){const e=t.oxw();t.hij(" BioNTech - ",t.xi3(1,3,e.secondVaccination_percentBiontech,2),"% "),t.xp6(3),t.hij(" Moderna - ",t.xi3(4,6,e.secondVaccination_percentModerna,2),"% "),t.xp6(3),t.hij(" AstraZeneca - ",t.xi3(7,9,e.secondVaccination_percentAstra,2),"% ")}}let rt=(()=>{class n{constructor(){this.percentInfected=0,this.percentDeaths=0,this.firstVaccination_percentBiontech=0,this.firstVaccination_percentAstra=0,this.firstVaccination_percentModerna=0,this.firstVaccination_percentJanssen=0,this.secondVaccination_percentBiontech=0,this.secondVaccination_percentAstra=0,this.secondVaccination_percentModerna=0}ngOnInit(){this.percentInfected=this.bavaria.totalCases/13124737*100,this.percentDeaths=this.bavaria.totalDeaths/this.bavaria.totalCases*100;const{bavaria_numberOfPeopleAtLeastOnceVaccinated:i,bavaria_numberOfPeopleFullyVaccinated:a}=this.vaccination,{biontech:r,astrazeneca:m,janssen:g,moderne:u}=this.vaccination.bavaria_vaccinesUsed_firstVaccination;this.firstVaccination_percentBiontech=r/i*100,this.firstVaccination_percentAstra=m/i*100,this.firstVaccination_percentModerna=u/i*100,this.firstVaccination_percentJanssen=g/i*100;const{biontech:f,astrazeneca:T,moderne:h}=this.vaccination.bavaria_vaccinesUsed_secondVaccination;this.secondVaccination_percentBiontech=f/a*100,this.secondVaccination_percentAstra=T/a*100,this.secondVaccination_percentModerna=h/a*100}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bavaria-table"]],inputs:{bavaria:"bavaria",vaccination:"vaccination"},decls:51,vars:0,consts:[[1,"table","mt-05"],[1,"col"],["title",""],["desc",""],[3,"incidence"]],template:function(e,i){1&e&&(t.TgZ(0,"app-divider"),t._uU(1,"Bayern"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"app-col-content"),t.YNc(5,Q,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"app-col-content"),t.YNc(9,k,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"app-col-content"),t.YNc(13,S,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(15,"div",1),t.TgZ(16,"app-col-content"),t.YNc(17,X,2,3,"ng-template",null,2,t.W1O),t.YNc(19,$,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(21,"div",1),t.TgZ(22,"app-col-content"),t.YNc(23,K,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(25,"div",1),t.TgZ(26,"app-col-content"),t.YNc(27,R,2,3,"ng-template",null,2,t.W1O),t.YNc(29,tt,2,4,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(31,"div",1),t.TgZ(32,"app-col-content"),t.YNc(33,nt,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(35,"div",1),t.TgZ(36,"app-col-content"),t.YNc(37,et,1,1,"ng-template",null,2,t.W1O),t.YNc(39,ct,11,16,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.TgZ(41,"div",1),t.TgZ(42,"app-col-content"),t.YNc(43,it,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(45,"div",1),t.TgZ(46,"app-col-content"),t.YNc(47,at,1,1,"ng-template",null,2,t.W1O),t.YNc(49,ot,8,12,"ng-template",null,3,t.W1O),t.qZA(),t.qZA(),t.qZA())},directives:[s.X,p,d.T],pipes:[_.J,x.L],styles:[".table[_ngcontent-%COMP%]{display:grid;grid-template-columns:60% 40%;--border-radius: 5px}.col[_ngcontent-%COMP%]{text-align:center;border:1px solid #e6e6e6;border-top:none;display:flex;align-items:center;justify-content:center}.col[_ngcontent-%COMP%]   app-col-content[_ngcontent-%COMP%]{flex:1}.col[_ngcontent-%COMP%]:nth-child(1), .col[_ngcontent-%COMP%]:nth-child(2){border-top:1px solid #e6e6e6}.col[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(2){border-start-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:last-child{border-end-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-last-child(2){border-end-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}.col[_ngcontent-%COMP%]:nth-child(even){border-left:none}"]}),n})();var lt=o(5382),st=o(6515);function pt(n,c){1&n&&t._uU(0," Name ")}function dt(n,c){1&n&&t._uU(0," 7-Tage-Inzidenz ")}function _t(n,c){1&n&&t._uU(0," F\xe4lle insges. ")}function mt(n,c){1&n&&t._uU(0," Tote insges. ")}function gt(n,c){if(1&n&&(t._uU(0),t.ALo(1,"districtName")),2&n){const e=t.oxw().$implicit;t.hij(" ",t.lcZ(1,1,e)," ")}}function ut(n,c){if(1&n&&t._UZ(0,"app-incidence-tag",5),2&n){const e=t.oxw().$implicit;t.Q6J("incidence",e.incidence)}}function ft(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw().$implicit;t.hij(" ",t.lcZ(1,1,e.totalCases)," ")}}function Tt(n,c){if(1&n&&(t._uU(0),t.ALo(1,"thousandPoint")),2&n){const e=t.oxw().$implicit;t.hij(" ",t.lcZ(1,1,e.totalDeaths)," ")}}const ht=function(n){return{"fw-5":n}};function Zt(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"app-col-content"),t.YNc(3,gt,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(5,"div",1),t.TgZ(6,"app-col-content"),t.YNc(7,ut,1,1,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"app-col-content"),t.YNc(11,ft,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"app-col-content"),t.YNc(15,Tt,2,3,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.BQk()),2&n){const e=c.$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(1,ht,e.code===i.favoriteDistrictCode))}}let bt=(()=>{class n{constructor(e){this.settingsService=e,this.favoriteDistrictCode=this.settingsService.settings.favoriteDistrictCode}ngOnInit(){this.districts=this.districts.sort((e,i)=>e.incidence-i.incidence)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(lt.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-districts-table"]],inputs:{districts:"districts"},decls:20,vars:1,consts:[[1,"table","mt-05"],[1,"col"],["title",""],[4,"ngFor","ngForOf"],[1,"col",3,"ngClass"],[3,"incidence"]],template:function(e,i){1&e&&(t.TgZ(0,"app-divider"),t._uU(1,"St\xe4dte und Landkreise"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"app-col-content"),t.YNc(5,pt,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"app-col-content"),t.YNc(9,dt,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"app-col-content"),t.YNc(13,_t,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.TgZ(15,"div",1),t.TgZ(16,"app-col-content"),t.YNc(17,mt,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.qZA(),t.YNc(19,Zt,17,3,"ng-container",3),t.qZA()),2&e&&(t.xp6(19),t.Q6J("ngForOf",i.districts))},directives:[s.X,p,l.sg,l.mk,d.T],pipes:[st.h,_.J],styles:[".table[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;--border-radius: 5px;--border: 1px solid #e6e6e6}.col[_ngcontent-%COMP%]{text-align:center;border:var(--border);border-top:none;border-right:none;display:flex;align-items:center;justify-content:center}.col[_ngcontent-%COMP%]   app-col-content[_ngcontent-%COMP%]{flex:1}.col[_ngcontent-%COMP%]:nth-child(4n){border-right:var(--border)}.col[_ngcontent-%COMP%]:nth-child(1), .col[_ngcontent-%COMP%]:nth-child(2), .col[_ngcontent-%COMP%]:nth-child(3), .col[_ngcontent-%COMP%]:nth-child(4){border-top:var(--border);background-color:#fafafa}.col[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-child(4){border-start-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:last-child{border-end-end-radius:var(--border-radius)}.col[_ngcontent-%COMP%]:nth-last-child(4){border-end-start-radius:var(--border-radius)}"]}),n})(),xt=(()=>{class n{transform(e){return e.map(i=>i[0])}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"districts",type:n,pure:!0}),n})();function vt(n,c){if(1&n&&(t.TgZ(0,"section",1),t.TgZ(1,"h1"),t._uU(2,"Home"),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"app-germany-table",2),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"app-bavaria-table",4),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"app-districts-table",5),t.ALo(9,"districts"),t.qZA(),t.qZA()),2&n){const e=c.ngIf;t.xp6(4),t.Q6J("germany",e.germanyHistory[0])("vaccination",e.vaccination),t.xp6(2),t.Q6J("bavaria",e.bavariaHistory[0])("vaccination",e.vaccination),t.xp6(2),t.Q6J("districts",t.lcZ(9,5,e.listOfDistrictHistories))}}const Ct=[{path:"",component:(()=>{class n{constructor(e){this.dataService=e,this.data$=this.dataService.data$}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","mt-1",4,"ngIf"],[1,"mt-1"],[3,"germany","vaccination"],[1,"mt-2"],[3,"bavaria","vaccination"],[3,"districts"]],template:function(e,i){1&e&&(t.YNc(0,vt,10,7,"section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.data$))},directives:[l.O5,H,rt,bt],pipes:[l.Ov,xt],styles:[".covid-daily-btn[_ngcontent-%COMP%]{position:absolute;top:70px}"]}),n})()}];let At=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.m,b.Bz.forChild(Ct)],b.Bz]}),n})()}}]);