"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[996],{4996:(x,i,c)=>{c.r(i),c.d(i,{ContactModule:()=>S});var d=c(3617),e=c(3556),l=c(8260),h=c(4522);let u=(()=>{class t{constructor(n){this.http=n}sendFeedback(n){const a={text:n,submittedDate:(new Date).toISOString()};return this.http.post(`${l.N.api}/feedback`,a)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(h.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),p=(()=>{class t{constructor(){this.cache=new Map}get(n){return this.cache.has(n)?this.cache.get(n):null}set(n,a){this.cache.set(n,a)}delete(n){this.cache.delete(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=c(9133),g=c(8119),f=c(6019),m=c(3998);function C(t,o){1&t&&e._UZ(0,"app-alert",11)}let v=(()=>{class t{constructor(n,a){var r;this.feedbackService=n,this.cache=a,this.feedback=null!==(r=this.cache.get("feedback"))&&void 0!==r?r:"",this.showSuccess=!1}ngOnDestroy(){this.cache.set("feedback",this.feedback)}onSend(){this.showSuccess=!1,this.feedback&&this.feedbackService.sendFeedback(this.feedback).subscribe({complete:()=>{this.showSuccess=!0,this.feedback="",this.cache.delete("feedback")}})}onShare(){navigator.share({url:"https://kexplx.github.io/covid"})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u),e.Y36(p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact"]],decls:14,vars:3,consts:[[1,"mt-1"],[1,"mb-1"],["href","https://github.com/Kexplx/covid","target","_blank"],["src","assets/icons/github-brands.svg","alt","GitHub"],[3,"click"],["src","assets/icons/share-alt-solid.svg","alt","Share"],[1,"fg-secondary"],["placeholder","Ihre Anmerkungen hier...",3,"ngModel","ngModelChange"],[1,"mt-1","ta-right","mb-2"],["text","Senden",3,"disabled","appClick"],["text","Anmerkungen wurden erfolgreich gesendet",4,"ngIf"],["text","Anmerkungen wurden erfolgreich gesendet"]],template:function(n,a){1&n&&(e.TgZ(0,"section",0),e.TgZ(1,"h1",1),e._uU(2," Kontakt "),e.TgZ(3,"a",2),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"a",4),e.NdJ("click",function(){return a.onShare()}),e._UZ(6,"img",5),e.qZA(),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"Haben Sie Feedback zur App, einen Feature-Wunsch oder generelle Anmerkungen? \xdcber dieses Formular k\xf6nnen Sie uns erreichen."),e.qZA(),e.TgZ(9,"div",0),e.TgZ(10,"textarea",7),e.NdJ("ngModelChange",function(Z){return a.feedback=Z}),e.qZA(),e.qZA(),e.TgZ(11,"div",8),e.TgZ(12,"app-button",9),e.NdJ("appClick",function(){return a.onSend()}),e.qZA(),e.qZA(),e.YNc(13,C,1,0,"app-alert",10),e.qZA()),2&n&&(e.xp6(10),e.Q6J("ngModel",a.feedback),e.xp6(2),e.Q6J("disabled",!a.feedback),e.xp6(1),e.Q6J("ngIf",a.showSuccess))},directives:[s.Fj,s.JJ,s.On,g.r,f.O5,m.w],styles:["div[_ngcontent-%COMP%]{display:grid}textarea[_ngcontent-%COMP%]{padding:20px;resize:vertical;height:100px;outline:none;border:1px solid rgb(220,220,220);border-radius:5px}h1[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto;justify-content:start;grid-gap:0 8px;gap:0 8px}h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}"]}),t})();var b=c(1382);const k=[{path:"",component:v}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[b.m,d.Bz.forChild(k)]]}),t})()}}]);