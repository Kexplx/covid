"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[774],{9774:(y,l,a)=>{a.r(l),a.d(l,{ContactModule:()=>I});var u=a(160),e=a(3556),d=a(5583),h=a(8051),g=a(4522);let m=(()=>{class n{constructor(t,i){this.http=t,this.environment=i}sendFeedback(t){if(!t.trim())return d.E;const i={text:t,submittedDate:(new Date).toISOString()};return this.http.post(`${this.environment.api}/feedback`,i)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.eN),e.LFG(h.b))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),p=(()=>{class n{constructor(){this.cache=new Map}get(t){return this.cache.has(t)?this.cache.get(t):null}set(t,i){this.cache.set(t,i)}delete(t){this.cache.delete(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var o=a(9133),f=a(8119),c=a(6019),Z=a(539);function v(n,s){1&n&&(e.TgZ(0,"ol",0),e.TgZ(1,"li",3),e._uU(2,"1. Klicken Sie auf das "),e._UZ(3,"img",4),e._uU(4," Symbol in Ihrem Browser"),e.qZA(),e.TgZ(5,"li",3),e._uU(6,"2. W\xe4hlen Sie im folgenden Men\xfc "),e.TgZ(7,"span",5),e._uU(8,'"Zum Startbildschirm hinzuf\xfcgen"'),e.qZA(),e._uU(9," aus und folgen Sie den Anweisungen auf Ihrem Bildschirm"),e.qZA(),e.TgZ(10,"li",3),e._uU(11,"3. Das "),e._UZ(12,"img",6),e._uU(13," Symbol sollte dann auf Ihrem Startbildschirm erscheinen"),e.qZA(),e.qZA())}function C(n,s){1&n&&(e.TgZ(0,"ol",0),e.TgZ(1,"li",3),e._uU(2,"1. Klicken Sie auf das "),e._UZ(3,"img",7),e._uU(4," Symbol in Safari"),e.qZA(),e.TgZ(5,"li",3),e._uU(6,"2. W\xe4hlen Sie im folgenden Men\xfc "),e.TgZ(7,"span",5),e._uU(8,'"Zum Home-Bildschirm"'),e.qZA(),e._uU(9," aus und folgen Sie den Anweisungen auf Ihrem Bildschirm"),e.qZA(),e.TgZ(10,"li",3),e._uU(11,"3. Das "),e._UZ(12,"img",6),e._uU(13," Symbol sollte dann auf Ihrem Home-Bildschirm erscheinen"),e.qZA(),e.qZA())}let b=(()=>{class n{constructor(){this.browserType=browserType,this.isIos=!1}ngOnInit(){"safari"===this.browserType&&(this.isIos=!0)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-install-tutorial"]],decls:6,vars:5,consts:[[1,"mt-1"],[1,"mt-05"],["class","mt-1",4,"ngIf"],[1,"ml-1"],["src","assets/icons/ellipsis-v-solid.svg"],[1,"fw-5"],["src","assets/icons/favicon-32x32.png"],["src","assets/icons/iphone-share.svg"]],template:function(t,i){1&t&&(e.TgZ(0,"h3",0),e._uU(1),e.qZA(),e.TgZ(2,"p",1),e._uU(3),e.qZA(),e.YNc(4,v,14,0,"ol",2),e.YNc(5,C,14,0,"ol",2)),2&t&&(e.xp6(1),e.hij("Gibt es die App auch in meinem ",i.isIos?"App":"Play"," Store?"),e.xp6(2),e.AsE(" Nein, diese App ist nur als Webseite verf\xfcgbar. Um dennoch vom Komfort einer nativen ",i.isIos?"iPhone":"Android"," App zu profitieren, k\xf6nnen Sie diese Seite mit den folgenden Schritten zu ihrem ",i.isIos?"Home-Bildschirm":"Startbildschirm"," hinzuf\xfcgen:\n"),e.xp6(1),e.Q6J("ngIf",!i.isIos),e.xp6(1),e.Q6J("ngIf",i.isIos))},directives:[c.O5],styles:["img[_ngcontent-%COMP%]{width:15px;height:15px;vertical-align:middle}p[_ngcontent-%COMP%]{line-height:.9rem;text-align:justify}li[_ngcontent-%COMP%]{line-height:.9rem}"]}),n})();var A=a(3998);function T(n,s){1&n&&e._UZ(0,"app-alert",14)}let S=(()=>{class n{constructor(t,i){var r;this.feedbackService=t,this.cache=i,this.feedback=null!==(r=this.cache.get("feedback"))&&void 0!==r?r:"",this.showSuccess=!1}ngOnDestroy(){this.cache.set("feedback",this.feedback)}onSend(){this.showSuccess=!1,this.feedback&&this.feedbackService.sendFeedback(this.feedback).subscribe({complete:()=>{this.showSuccess=!0,this.feedback="",this.cache.delete("feedback")}})}onShare(){navigator.share({url:"https://kexplx.github.io/covid"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m),e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-contact"]],decls:36,vars:3,consts:[[1,"mt-1"],[1,"mb-1"],["href","https://github.com/Kexplx/covid","target","_blank"],["src","assets/icons/github-brands.svg","alt","GitHub"],[3,"click"],["src","assets/icons/share-alt-solid.svg","alt","Share"],[1,"fg-secondary"],["placeholder","Ihre Anmerkungen hier...",3,"ngModel","ngModelChange"],[1,"mt-1","ta-right","mb-2"],["text","Senden",3,"disabled","appClick"],["text","Anmerkungen wurden erfolgreich gesendet",4,"ngIf"],[1,"mt-2"],[1,"mt-05"],["href","https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=GEN,BEZ,cases,deaths,last_update,cases7_per_100k,bl,AdmUnitId&returnGeometry=false&f=json"],["text","Anmerkungen wurden erfolgreich gesendet"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0),e.TgZ(1,"h1",1),e._uU(2," Kontakt "),e.TgZ(3,"a",2),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"a",4),e.NdJ("click",function(){return i.onShare()}),e._UZ(6,"img",5),e.qZA(),e.qZA(),e.TgZ(7,"p",6),e._uU(8," Haben Sie Feedback zur App, eine Featureanfrage oder generelle Anmerkungen? \xdcber dieses Formular k\xf6nnen Sie uns erreichen. Bitte geben Sie ihre E-Mail Adresse an, falls eine Antwort gew\xfcnscht wird. "),e.qZA(),e.TgZ(9,"div",0),e.TgZ(10,"textarea",7),e.NdJ("ngModelChange",function(F){return i.feedback=F}),e.qZA(),e.qZA(),e.TgZ(11,"div",8),e.TgZ(12,"app-button",9),e.NdJ("appClick",function(){return i.onSend()}),e.qZA(),e.qZA(),e.YNc(13,T,1,0,"app-alert",10),e.TgZ(14,"div",11),e.TgZ(15,"app-divider"),e._uU(16,"H\xe4ufige Fragen"),e.qZA(),e._UZ(17,"app-install-tutorial"),e.TgZ(18,"h3",0),e._uU(19,"Wann werden die Daten aktualisiert?"),e.qZA(),e.TgZ(20,"p",12),e._uU(21," Jeden Tag "),e.TgZ(22,"u"),e._uU(23,"um 5:00 Uhr morgens"),e.qZA(),e._uU(24,". Wenn Probleme mit den Datenquellen des RKI auftreten, werden die Daten erst im Laufe des Tages aktualisiert. Erfahrungsmem\xe4\xdf kommen solche Probleme ca. einmal alle 2 - 3 Monate vor. "),e.qZA(),e.TgZ(25,"h3",0),e._uU(26,"Woher stammen die Daten?"),e.qZA(),e.TgZ(27,"p",12),e._uU(28," Wir beziehen unsere Daten aus f\xfcnf offenen Datenquellen, bereitgestellt vom RKI in Form von APIs und CSV Dateien ("),e.TgZ(29,"a",13),e._uU(30,"Beispiel: API f\xfcr St\xe4dte und Landkreise"),e.qZA(),e._uU(31,".) "),e.qZA(),e.TgZ(32,"h3",0),e._uU(33,"Wo ist die Hospitalisierungsinzidenz?"),e.qZA(),e.TgZ(34,"p",12),e._uU(35," Die kurzzeitig gehypte Hospitalisierungsinzidenz hat sich aufgrund des gro\xdfen Meldeverzugs der Krankenh\xe4user als unzuverl\xe4ssig erwiesen. Au\xdferdem kommt hinzu, dass die Hospitalisierungsinzidenz nur auf L\xe4nderebene erhoben wird, weshalb wir sie vorerst aus unserem Datensatz entfernt haben. "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Q6J("ngModel",i.feedback),e.xp6(2),e.Q6J("disabled",!i.feedback),e.xp6(1),e.Q6J("ngIf",i.showSuccess))},directives:[o.Fj,o.JJ,o.On,f.r,c.O5,Z.X,b,A.w],styles:["div[_ngcontent-%COMP%]{display:grid}textarea[_ngcontent-%COMP%]{padding:20px;resize:vertical;height:100px;outline:none;border:1px solid rgb(220,220,220);border-radius:5px}h1[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto;justify-content:start;grid-gap:0 8px;gap:0 8px}h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}p[_ngcontent-%COMP%]{line-height:.9rem;text-align:justify}"]}),n})();var k=a(1382);const U=[{path:"",component:S}];let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[k.m,u.Bz.forChild(U)]]}),n})()}}]);