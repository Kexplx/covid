"use strict";(self.webpackChunkinzidenz=self.webpackChunkinzidenz||[]).push([[596],{1596:(M,c,o)=>{o.r(c),o.d(c,{HistoryModule:()=>L});var m=o(3617),t=o(3556),g=o(6984),h=o(6019);const l_red="rgb(255, 99, 132)";var d=o(8466),y=o(6339),u=o(8582);const f=["canvas"];let p=(()=>{class s{constructor(e){this.thousandPointsPipe=e,this.showLegend=!1,this.paddingTop=0,this.paddingBot=0}ngOnChanges(){this.chart&&(this.chart.destroy(),this.drawChart())}ngAfterViewInit(){this.drawChart()}ngOnDestroy(){var e;null===(e=this.chart)||void 0===e||e.destroy()}drawChart(){d.kL.register(...d.zX);const a={type:"line",data:{labels:this.labels,datasets:this.datasets.map(n=>({datalabels:{color:"black",formatter:r=>this.thousandPointsPipe.transform(r),align:"top",padding:3,font:{size:11,weight:500,family:"Segoe UI"}},borderWidth:2,pointRadius:3,pointBorderWidth:2,tension:.4,borderColor:n.color,pointBackgroundColor:r=>0===r.dataIndex?"white":n.color,data:n.data,label:n.label}))},plugins:[y.Z],options:{plugins:{legend:{display:this.showLegend,position:"bottom",labels:{pointStyle:"circle",boxHeight:5,boxWidth:5,usePointStyle:!0}},tooltip:{enabled:!1}},scales:{y:{display:!1,suggestedMax:Math.max(...this.datasets.map(n=>n.data).flat())+this.paddingTop,suggestedMin:Math.min(...this.datasets.map(n=>n.data).flat())-this.paddingBot},x:{display:!0,grid:{display:!0,drawBorder:!0,drawTicks:!0}}},layout:{padding:{top:0,bottom:0,right:20,left:20}},animation:!1}};this.chart=new d.kL(this.canvas.nativeElement,a)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(u.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-line-chart"]],viewQuery:function(e,a){if(1&e&&t.Gf(f,5),2&e){let n;t.iGM(n=t.CRH())&&(a.canvas=n.first)}},inputs:{rawData:"rawData",labels:"labels",showLegend:"showLegend",datasets:"datasets",paddingTop:"paddingTop",paddingBot:"paddingBot"},features:[t.TTD],decls:3,vars:0,consts:[[1,"mt-1",2,"overflow","auto"],["canvas",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",null,1),t.qZA())},styles:[""]}),s})();const v=function(s){return[s]};let C=(()=>{class s{constructor(){this.dataset={data:[],color:l_red},this.labels=[]}ngOnInit(){this.dataset.data=this.germanyHistory.map(e=>Math.round(e.incidence)).reverse(),this.labels=this.germanyHistory.map(e=>{const a=new Date(e.lastUpdated);return`${a.getDate()}.${a.getMonth()+1}`}).reverse()}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-germany-history"]],inputs:{germanyHistory:"germanyHistory"},decls:3,vars:6,consts:[[3,"datasets","paddingTop","paddingBot","labels"]],template:function(e,a){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Deutschland"),t.qZA(),t._UZ(2,"app-line-chart",0)),2&e&&(t.xp6(2),t.Q6J("datasets",t.VKq(4,v,a.dataset))("paddingTop",20)("paddingBot",10)("labels",a.labels))},directives:[p],styles:[""]}),s})();var H=o(6515),T=o(5382),b=o(3386);const Z=function(s){return[s]};let D=(()=>{class s{constructor(e,a){this.districtNamePipe=e,this.settingsService=a,this.options=[],this.initialValue=this.settingsService.settings.favoriteDistrictCode,this.dataset={data:[],color:l_red},this.labels=[]}ngOnInit(){this.options=this.listOfDistrictHistories.map(e=>{const a=e[0];return{name:this.districtNamePipe.transform(a),value:a.code}}),this.prepareChartData(this.initialValue)}onSelect(e){this.prepareChartData(e.value)}prepareChartData(e){const a=this.listOfDistrictHistories.find(n=>n[0].code===e);this.dataset.data=a.map(n=>Math.round(n.incidence)).reverse(),this.labels=a.map(n=>/(\d+\.\d+).*/.exec(n.lastUpdated)[1]).reverse()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(H.h),t.Y36(T.g))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-district-history"]],inputs:{listOfDistrictHistories:"listOfDistrictHistories"},decls:5,vars:8,consts:[["width","175px",3,"options","initialValue","appSelect"],[3,"datasets","paddingTop","paddingBot","labels"]],template:function(e,a){1&e&&(t.TgZ(0,"header"),t.TgZ(1,"h3"),t._uU(2,"St\xe4dte und Landkreise"),t.qZA(),t.TgZ(3,"app-select",0),t.NdJ("appSelect",function(r){return a.onSelect(r)}),t.qZA(),t.qZA(),t._UZ(4,"app-line-chart",1)),2&e&&(t.xp6(3),t.Q6J("options",a.options)("initialValue",a.initialValue),t.xp6(1),t.Q6J("datasets",t.VKq(6,Z,a.dataset))("paddingTop",20)("paddingBot",10)("labels",a.labels))},directives:[b.H,p],styles:["header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;align-items:center}"]}),s})();const w=function(s){return[s]};let O=(()=>{class s{constructor(){this.dataset={data:[],color:"rgb(153, 102, 255)"},this.labels=[]}ngOnInit(){const e=this.germanyHistory.filter(a=>void 0!==a.newCases).length;this.dataset.data=this.germanyHistory.slice(0,e).map(a=>Math.round(a.newCases)).reverse(),this.labels=this.germanyHistory.slice(0,e).map(a=>{const n=new Date(a.lastUpdated);return`${n.getDate()}.${n.getMonth()+1}`}).reverse()}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-germany-new-infections"]],inputs:{germanyHistory:"germanyHistory"},decls:3,vars:6,consts:[[3,"datasets","paddingTop","paddingBot","labels"]],template:function(e,a){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Deutschland"),t.qZA(),t._UZ(2,"app-line-chart",0)),2&e&&(t.xp6(2),t.Q6J("datasets",t.VKq(4,w,a.dataset))("paddingTop",1e3)("paddingBot",1e3)("labels",a.labels))},directives:[p],styles:[""]}),s})();function U(s,i){if(1&s&&(t.TgZ(0,"section",1),t.TgZ(1,"h1",2),t._uU(2,"Historie"),t.qZA(),t.TgZ(3,"h2",2),t._uU(4,"7-Tage-Inzidenz"),t.qZA(),t._UZ(5,"app-germany-history",3),t.TgZ(6,"div",1),t._UZ(7,"app-district-history",4),t.qZA(),t.TgZ(8,"h2",5),t._uU(9,"Neuinfektionen"),t.qZA(),t._UZ(10,"app-germany-new-infections",3),t.qZA()),2&s){const e=i.ngIf;t.xp6(5),t.Q6J("germanyHistory",e.germanyHistory),t.xp6(2),t.Q6J("listOfDistrictHistories",e.listOfDistrictHistories),t.xp6(3),t.Q6J("germanyHistory",e.germanyHistory)}}let A=(()=>{class s{constructor(e){this.dataService=e,this.data$=this.dataService.data$}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(g.D))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-history"]],decls:2,vars:3,consts:[["class","mt-1",4,"ngIf"],[1,"mt-1"],[1,"mb-1"],[3,"germanyHistory"],[3,"listOfDistrictHistories"],[1,"mb-1","mt-2"]],template:function(e,a){1&e&&(t.YNc(0,U,11,3,"section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,a.data$))},directives:[h.O5,C,D,O],pipes:[h.Ov],styles:[""]}),s})();var B=o(1382);const I=[{path:"",component:A}];let L=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[B.m,m.Bz.forChild(I)]]}),s})()}}]);