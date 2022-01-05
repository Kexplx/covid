"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[594],{4594:(N,h,r)=>{r.r(h),r.d(h,{HistoryModule:()=>F});var g=r(9897),t=r(3556),u=r(6984),c=r(6019);const l_red="rgb(255, 99, 132)";var p=r(8466),y=r(6339),f=r(8582);const C=["canvas"];let d=(()=>{class n{constructor(e){this.thousandPointsPipe=e,this.showLegend=!1}ngOnChanges(){this.chart&&(this.chart.destroy(),this.drawChart())}ngAfterViewInit(){this.drawChart()}ngOnDestroy(){var e;null===(e=this.chart)||void 0===e||e.destroy()}drawChart(){p.kL.register(...p.zX);const e={labels:this.labels,datasets:this.datasets.map(o=>({datalabels:{color:"black",formatter:a=>this.thousandPointsPipe.transform(a),align:"top",padding:3,font:{size:11,weight:500,family:"Segoe UI"}},borderWidth:2,pointRadius:3,pointBorderWidth:2,tension:.4,borderColor:o.color,pointBackgroundColor:a=>0===a.dataIndex?"white":o.color,data:o.data,label:o.label}))};this.chart=new p.kL(this.canvas.nativeElement,{type:"line",data:e,plugins:[y.Z],options:{plugins:{legend:{display:this.showLegend,position:"bottom",labels:{pointStyle:"circle",boxHeight:5,boxWidth:5,usePointStyle:!0}},tooltip:{enabled:!1}},scales:{y:{display:!1},x:{display:!0,grid:{display:!0,drawBorder:!0,drawTicks:!0}}},layout:{padding:{top:15,bottom:0,right:20,left:20}},animation:!1}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-line-chart"]],viewQuery:function(e,s){if(1&e&&t.Gf(C,5),2&e){let o;t.iGM(o=t.CRH())&&(s.canvas=o.first)}},inputs:{rawData:"rawData",labels:"labels",showLegend:"showLegend",datasets:"datasets"},features:[t.TTD],decls:3,vars:0,consts:[[1,"mt-1",2,"overflow","auto"],["canvas",""]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",null,1),t.qZA())},styles:[""]}),n})();const v=function(n){return[n]};let b=(()=>{class n{constructor(){this.dataset={data:[],color:l_red},this.labels=[]}ngOnInit(){this.dataset.data=this.germanyHistory.map(e=>Math.round(e.incidence)).reverse(),this.labels=this.germanyHistory.map(e=>{const s=new Date(e.lastUpdated),o=s.getMonth()+1<10?`0${s.getMonth()+1}`:s.getMonth()+1;return`${s.getDate()<10?`0${s.getDate()}`:s.getDate()}.${o}`}).reverse()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-germany-history"]],inputs:{germanyHistory:"germanyHistory"},decls:3,vars:4,consts:[[3,"datasets","labels"]],template:function(e,s){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Deutschland"),t.qZA(),t._UZ(2,"app-line-chart",0)),2&e&&(t.xp6(2),t.Q6J("datasets",t.VKq(2,v,s.dataset))("labels",s.labels))},directives:[d],styles:[""]}),n})();var O=r(7879),D=r(5382),_=r(5077),w=r(2629);function T(n,i){1&n&&t._UZ(0,"img",6)}const Z=function(){return{transform:"rotate(-270deg)"}};function H(n,i){1&n&&t._UZ(0,"img",7),2&n&&t.Q6J("ngStyle",t.DdM(1,Z))}function x(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",1),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onOptionClick(a)}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function S(n,i){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,x,2,1,"li",8),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.optionsToDisplay)}}const M=function(n){return{width:n}};let I=(()=>{class n{constructor(e){this.document=e,this.width="190px",this.appSelect=new t.vpe,this.optionsToDisplay=[],this.selectedOption={name:"",value:""},this.isOpen=!1,this.subsink=new w.Y}ngOnInit(){this.optionsToDisplay=[...this.options],this.initialValue&&(this.selectedOption=this.options.find(e=>e.value===this.initialValue),this.removeSelectedFromOptions()),document.addEventListener("click",()=>this.isOpen=!1),this.subsink.sink=(0,_.R)(this.document,"click").subscribe(()=>this.isOpen=!1)}ngOnDestroy(){this.subsink.unsubscribe()}removeSelectedFromOptions(){this.optionsToDisplay=[...this.options];const e=this.optionsToDisplay.indexOf(this.selectedOption);this.optionsToDisplay.splice(e,1)}onOptionClick(e){this.selectedOption=e,this.removeSelectedFromOptions(),this.isOpen=!1,this.appSelect.emit(e)}onClick(){this.isOpen=!this.isOpen}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.K0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-select"]],inputs:{options:"options",initialValue:"initialValue",width:"width"},outputs:{appSelect:"appSelect"},decls:8,vars:9,consts:[[2,"position","relative",3,"ngStyle"],[3,"click"],[1,"btn-content"],["src","assets/icons/caret-down.svg","alt","Caret Down",4,"ngIf"],["src","assets/icons/caret-down.svg","alt","Caret Right",3,"ngStyle",4,"ngIf"],[4,"ngIf"],["src","assets/icons/caret-down.svg","alt","Caret Down"],["src","assets/icons/caret-down.svg","alt","Caret Right",3,"ngStyle"],[3,"click",4,"ngFor","ngForOf"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(a){return s.onClick(),a.stopImmediatePropagation()}),t.TgZ(2,"div",2),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.YNc(5,T,1,0,"img",3),t.YNc(6,H,1,2,"img",4),t.qZA(),t.qZA(),t.YNc(7,S,2,1,"ul",5),t.qZA()),2&e&&(t.Q6J("ngStyle",t.VKq(7,M,s.width)),t.xp6(1),t.ekj("open",s.isOpen),t.xp6(3),t.Oqu(s.selectedOption.name),t.xp6(1),t.Q6J("ngIf",s.isOpen),t.xp6(1),t.Q6J("ngIf",!s.isOpen),t.xp6(1),t.Q6J("ngIf",s.isOpen))},directives:[c.PC,c.O5,c.sg],styles:["button[_ngcontent-%COMP%]{padding:5px 14px 5px 9px;text-align:left;font-size:.8rem;border:1px solid rgb(230,230,230);background-color:#fafafa;border-radius:5px;width:inherit;font-weight:500;cursor:pointer}button.open[_ngcontent-%COMP%]{border-end-end-radius:0;border-end-start-radius:0}.btn-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;align-items:center}.btn-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17px;height:17px}ul[_ngcontent-%COMP%]{width:100%;position:absolute;overflow:auto;height:149px;z-index:10}li[_ngcontent-%COMP%]{padding:8px 14px 8px 10px;border:1px solid rgb(230,230,230);border-top:0;font-size:.8rem;background-color:#fafafa;cursor:pointer}li[_ngcontent-%COMP%]:hover{background-color:#e6e6e6}li[_ngcontent-%COMP%]:is(:last-child){border-end-end-radius:5px;border-end-start-radius:5px}"]}),n})();const A=function(n){return[n]};let U=(()=>{class n{constructor(e,s){this.districtTypePipe=e,this.settingsService=s,this.options=[],this.dataset={data:[],color:l_red},this.labels=[],this.initalDistrictCode=0}ngOnInit(){this.options=this.listOfDistrictHistories.map(e=>{const s=e[0];return{name:`${s.name} ${this.districtTypePipe.transform(s.type)}`,value:s.code}}),this.initalDistrictCode=this.settingsService.settings.favoriteDistrictCode||this.options[0].value,this.prepareChartData(this.initalDistrictCode)}onSelect(e){this.prepareChartData(e.value)}prepareChartData(e){const s=this.listOfDistrictHistories.find(o=>o[0].code===e);this.dataset.data=s.map(o=>Math.round(o.incidence)).reverse(),this.labels=s.map(o=>{const a=new Date(o.lastUpdated),m=a.getMonth()+1<10?`0${a.getMonth()+1}`:a.getMonth()+1;return`${a.getDate()<10?`0${a.getDate()}`:a.getDate()}.${m}`}).reverse()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.H),t.Y36(D.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-district-history"]],inputs:{listOfDistrictHistories:"listOfDistrictHistories"},decls:5,vars:6,consts:[["width","175px",3,"options","initialValue","appSelect"],[3,"datasets","labels"]],template:function(e,s){1&e&&(t.TgZ(0,"header"),t.TgZ(1,"h3"),t._uU(2,"St\xe4dte und Landkreise"),t.qZA(),t.TgZ(3,"app-select",0),t.NdJ("appSelect",function(a){return s.onSelect(a)}),t.qZA(),t.qZA(),t._UZ(4,"app-line-chart",1)),2&e&&(t.xp6(3),t.Q6J("options",s.options)("initialValue",s.initalDistrictCode),t.xp6(1),t.Q6J("datasets",t.VKq(4,A,s.dataset))("labels",s.labels))},directives:[I,d],styles:["header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;align-items:center}"]}),n})();const J=function(n){return[n]};let P=(()=>{class n{constructor(){this.dataset={data:[],color:"rgb(153, 102, 255)"},this.labels=[]}ngOnInit(){this.dataset.data=this.germanyHistory.map(e=>Math.round(e.newCases)).reverse(),this.labels=this.germanyHistory.map(e=>{const s=new Date(e.lastUpdated),o=s.getMonth()+1<10?`0${s.getMonth()+1}`:s.getMonth()+1;return`${s.getDate()<10?`0${s.getDate()}`:s.getDate()}.${o}`}).reverse()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-germany-new-infections"]],inputs:{germanyHistory:"germanyHistory"},decls:3,vars:4,consts:[[3,"datasets","labels"]],template:function(e,s){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Deutschland"),t.qZA(),t._UZ(2,"app-line-chart",0)),2&e&&(t.xp6(2),t.Q6J("datasets",t.VKq(2,J,s.dataset))("labels",s.labels))},directives:[d],styles:[""]}),n})();function $(n,i){if(1&n&&(t.TgZ(0,"section",1),t.TgZ(1,"h1",2),t._uU(2,"Historie"),t.qZA(),t.TgZ(3,"h2",2),t._uU(4,"7-Tage-Inzidenz"),t.qZA(),t._UZ(5,"app-germany-history",3),t.TgZ(6,"div",1),t._UZ(7,"app-district-history",4),t.qZA(),t.TgZ(8,"h2",5),t._uU(9,"Neuinfektionen"),t.qZA(),t._UZ(10,"app-germany-new-infections",3),t.qZA()),2&n){const e=i.ngIf;t.xp6(5),t.Q6J("germanyHistory",e.germanyHistory),t.xp6(2),t.Q6J("listOfDistrictHistories",e.listOfDistrictHistories),t.xp6(3),t.Q6J("germanyHistory",e.germanyHistory)}}let k=(()=>{class n{constructor(e){this.dataService=e,this.data$=this.dataService.data$}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-history"]],decls:2,vars:3,consts:[["class","mt-1",4,"ngIf"],[1,"mt-1"],[1,"mb-1"],[3,"germanyHistory"],[3,"listOfDistrictHistories"],[1,"mb-1","mt-2"]],template:function(e,s){1&e&&(t.YNc(0,$,11,3,"section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,s.data$))},directives:[c.O5,b,U,P],pipes:[c.Ov],styles:[""]}),n})();var Q=r(1382);const L=[{path:"",component:k}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Q.m,g.Bz.forChild(L)]]}),n})()}}]);