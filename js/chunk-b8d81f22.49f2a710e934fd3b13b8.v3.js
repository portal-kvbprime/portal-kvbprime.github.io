(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8d81f22"],{"0c7d":function(t,e,a){},"2a7a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isNewsVisible?a("div",{directives:[{name:"show",rawName:"v-show",value:t.showNews,expression:"showNews"}],staticClass:"user-news"},[a("a",{staticClass:"user-news__close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}},[a("i",{staticClass:"el-icon-close"})]),t._v(" "),a("div",{staticClass:"user-news__item-wrapper",style:t.translateStyle},t._l(t.articleList,function(e){return a("div",{key:e.ID,ref:"item",refInFor:!0,staticClass:"user-news__item"},[a("div",{staticClass:"user-news__item-inner",on:{click:t.handleItemClick}},[a("div",{staticClass:"user-news__item-title"},[t._v(t._s(e.Title))]),t._v(" "),a("div",{staticClass:"user-news__item-time"},[t._v(t._s(t.publishTimeText(e.PublishTime)))])]),t._v(" "),t._t("default")],2)}),0)]):t._e()},n=[],o=(a("a481"),a("ac6a"),a("96cf"),a("3b8d")),s=a("d225"),i=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),d=a("9ab4"),h=a("60a3"),p=a("4bb5"),f=a("ce75"),y=a("66cf"),v=a("5e04"),b=a("768e"),m=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.storageKey="app-news-visible",t.showNews=!0,t.timer=null,t.activeIndex=0,t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"publishTimeText",value:function(t){var e=new Date(t);return v["a"].timeDate(~~(e.getTime()/1e3))}},{key:"initTimer",value:function(){var t=this,e=1,a=5,r=this.delay,n=this.$refs.item;if(n&&n.length){var o=1e3*((r>e?r:a)-e);this.timer=setInterval(function(){t.activeIndex=(t.activeIndex+1)%n.length},o)}}},{key:"handleClose",value:function(){localStorage.setItem(this.storageKey,String(Object(y["d"])({day:1}))),this.showNews=!1}},{key:"handleItemClick",value:function(){this.$router.push({name:"notice"})}},{key:"beforeMount",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.activeIndex=0,e=localStorage.getItem(this.storageKey)||"",e)try{a=new Date(e),this.showNews=!(a.getTime()>=Date.now())}catch(n){}return t.prev=3,t.next=6,this.getNewsArticleList({id:b["a"][this.ENV_TYPE],index:1,size:5,customerType:this.isNormalUser?1:2,platformType:2,languageType:+b["b"][this.$store.state.I18nStore.locale]});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](3),this.showNews=!1;case 11:this.$nextTick(function(){return r.initTimer()});case 12:case"end":return t.stop()}},t,this,[[3,8]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeDestroy",value:function(){clearInterval(this.timer)}},{key:"isNewsVisible",get:function(){var t=this.showNews,e=this.articleNewsList.Items;return t&&e&&e.length>0}},{key:"articleList",get:function(){var t=this.articleNewsList.Items;return t||[]}},{key:"translateStyle",get:function(){var t=this.activeIndex,e=this.$refs.item,a="transform: translateY(-{offset}px)";return e&&e.length?(e.forEach(function(e,r){r===t&&(a=a.replace("{offset}",e.offsetTop))}),a):""}}]),e}(Object(h["b"])(f["a"]));Object(d["a"])([Object(p["a"])("ArticleStore").State],m.prototype,"articleNewsList",void 0),Object(d["a"])([Object(p["a"])("ArticleStore").Action],m.prototype,"getNewsArticleList",void 0),Object(d["a"])([Object(h["c"])({default:function(){return 0}})],m.prototype,"delay",void 0),m=Object(d["a"])([h["a"]],m);var g=m,O=g,w=(a("c68f"),a("2877")),A=Object(w["a"])(O,r,n,!1,null,"10585a11",null);e["a"]=A.exports},"368e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-view",{staticClass:"demo-setting",attrs:{title:"修改賬戶設定"}},[a("user-news"),t._v(" "),a("form-item-group",[a("form-item",{attrs:{label:"賬戶類型"}},[a("el-select",{model:{value:t.data.AccountType,callback:function(e){t.$set(t.data,"AccountType",e)},expression:"data.AccountType"}},t._l(t.accountTypes,function(t,e){return a("el-option",{key:e,attrs:{value:e,label:t}})}),1)],1),t._v(" "),a("form-item",{attrs:{label:"賬戶狀態"}},[a("el-select",{model:{value:t.data.ProcessingType,callback:function(e){t.$set(t.data,"ProcessingType",e)},expression:"data.ProcessingType"}},t._l(t.processingTypes,function(t,e){return a("el-option",{key:e,attrs:{value:e,label:t}})}),1)],1),t._v(" "),t.showTradeSetting?a("form-item",{attrs:{label:"實盤賬戶",trigger:!1}},[a("div",{staticClass:"demo-setting__enable-trade"},[a("el-radio-group",{model:{value:t.data.EnableTrade,callback:function(e){t.$set(t.data,"EnableTrade",e)},expression:"data.EnableTrade"}},[a("el-radio",{attrs:{label:!0}},[t._v("有")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("無")])],1)],1)]):[a("form-item",{attrs:{label:"身份驗證狀態"}},[a("el-select",{model:{value:t.data.IDCardStatus,callback:function(e){t.$set(t.data,"IDCardStatus",e)},expression:"data.IDCardStatus"}},t._l(t.IDCardStatusList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e+1}})}),1)],1),t._v(" "),a("form-item",{attrs:{label:"地址驗證狀態"}},[a("el-select",{model:{value:t.data.AddressStatus,callback:function(e){t.$set(t.data,"AddressStatus",e)},expression:"data.AddressStatus"}},t._l(t.AddressStatusList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e+1}})}),1)],1)],t._v(" "),t.showAccountCount?a("form-item",{attrs:{label:"實盤賬戶數量"}},[a("el-select",{model:{value:t.data.AccountCount,callback:function(e){t.$set(t.data,"AccountCount",e)},expression:"data.AccountCount"}},[a("el-option",{attrs:{value:0,label:"0"}}),t._v(" "),t._l(t.maxAccountCount,function(t){return a("el-option",{key:t,attrs:{value:t,label:t}})})],2)],1):t._e(),t._v(" "),a("div",{staticClass:"demo-setting__action"},[a("el-button",{staticClass:"demo-setting__action-button",attrs:{type:"info",round:""},on:{click:t.init}},[t._v("取消")]),t._v(" "),a("el-button",{staticClass:"demo-setting__action-button",attrs:{type:"primary",round:""},on:{click:t.handleReset}},[t._v("更新")])],1)],2)],1)},n=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("d225"),i=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),d=a("9ab4"),h=a("60a3"),p=a("4bb5"),f=a("8c67"),y=a("1ea7"),v=a("fb29"),b=a("b77e"),m=a("5e04"),g=a("2a7a"),O=a("87dc");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function A(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(a,!0).forEach(function(e){Object(o["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var T=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.maxAccountCount=20,t.accountTypes=[],t.processingTypes=["無","註冊Demo賬號","設置賬號密碼","上傳個人信息","上傳賬戶設置","確認開戶","審核失敗","審核成功"],t.IDCardStatusList=["未认证","审核中","审核通过","审核失败"],t.AddressStatusList=["未认证","审核中","审核通过","审核失败"],t.data={AccountCount:0,AccountType:0,ProcessingType:0,EnableTrade:!1,IDCardStatus:O["c"].IDCardNoCertified,AddressStatus:O["b"].AddressNoCertified},t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"createMt4AccountItem",value:function(){var t=["GrOup-1","GRouP-2","gROUp-3","GRouP-4","GrOUP-5"],e=[25,100,200];return{ImageType:Math.round(5*Math.random()),MTAccount:Math.floor(1e5*Math.random()),Leverage:e[Math.floor(Math.random()*e.length)],MTGroup:t[Math.floor(Math.random()*t.length)],Balance:1e5*Math.random(),Credit:1e5*Math.random(),Equity:1e5*Math.random(),Margin:1e5*Math.random(),FreeMargin:1e5*Math.random(),BizDay:Math.floor(Date.now()/1e3-10*Math.random()*365*24*60*60-567648e3),Readonly:!!Math.round(1*Math.random()),Status:Math.round(1*Math.random()),IsDemo:!!Math.round(1*Math.random()),CreateTimeStamps:Math.floor(Date.now()/1e3-30*Math.random()*24*60*60),UpdateTimeStamps:Math.floor(Date.now()/1e3-30*Math.random()*24*60*60)}}},{key:"handleReset",value:function(){var t=this.data,e=t.AccountType,a=t.ProcessingType,r=(t.EnableTrade,t.IDCardStatus),n=t.AddressStatus,o=A({},this.accountInfo);o.AccountType=e,o.ProcessingType=a,a===O["e"].ReviewSuccess?(o.IDCardStatus=O["c"].IDCardCertified,o.AddressStatus=O["b"].AddressCertified):(o.IDCardStatus=r,o.AddressStatus=n);var s=this.data.AccountCount;o.IsMultipleAccount=s>1,this.setAccountInfo(o);for(var i=[],c=0;c<s;c++)i.push(this.createMt4AccountItem());this.setMt4AccountList(i),this.init()}},{key:"init",value:function(){var t=this.Mt4AccountList,e=void 0===t?[]:t,a=this.accountInfo,r=a.AccountType,n=a.ProcessingType,o=a.IDCardStatus,s=void 0===o?1:o,i=a.AddressStatus,c=void 0===i?1:i;this.data.AccountType=r,this.data.ProcessingType=n,this.data.IDCardStatus=s,this.data.AddressStatus=c,this.data.AccountCount=0,e.length?(this.data.EnableTrade=!0,this.data.AccountCount=e.length):this.data.EnableTrade=!1}},{key:"beforeMount",value:function(){for(var t=0;t<=5;t++)this.accountTypes.push(m["a"].accountType(t)||"未定義");this.init()}},{key:"onEnableTradeChange",value:function(t){this.isNormalAccount,this.isAgentAccount;var e=this.Mt4AccountList,a=void 0===e?[]:e;this.data;this.data.AccountCount=t?a.length||1:0}},{key:"isNormalAccount",get:function(){var t=this.data.AccountType;return 2===t}},{key:"isAgentAccount",get:function(){var t=this.data.AccountType;return 1===t||t>2}},{key:"showTradeSetting",get:function(){var t=this.data,e=t.ProcessingType,a=(t.AccountType,e===O["e"].ReviewSuccess);return!!a||(this.data.EnableTrade=!1,this.data.AccountCount=0,!1)}},{key:"showAccountCount",get:function(){var t=this.isNormalAccount,e=this.data;return t&&e.EnableTrade}}]),e}(h["d"]);Object(d["a"])([Object(p["a"])("AccountStore").State],T.prototype,"accountInfo",void 0),Object(d["a"])([Object(p["a"])("AccountStore").Mutation],T.prototype,"setAccountInfo",void 0),Object(d["a"])([Object(p["a"])("MulAccountUpgradeControllerStore").State],T.prototype,"Mt4AccountList",void 0),Object(d["a"])([Object(p["a"])("MulAccountUpgradeControllerStore").Mutation],T.prototype,"setMt4AccountList",void 0),Object(d["a"])([Object(h["e"])("data.EnableTrade")],T.prototype,"onEnableTradeChange",null),T=Object(d["a"])([Object(h["a"])({components:{AppView:f["a"],AppCard:y["a"],UserNews:g["a"],FormItem:v["a"],FormItemGroup:b["a"]}})],T);var S=T,j=S,D=(a("5e4c"),a("2877")),k=Object(D["a"])(j,r,n,!1,null,"28f65898",null);e["default"]=k.exports},"5e4c":function(t,e,a){"use strict";var r=a("ce5b"),n=a.n(r);n.a},"66cf":function(t,e,a){"use strict";a.d(e,"d",function(){return u}),a.d(e,"a",function(){return l}),a.d(e,"g",function(){return d}),a.d(e,"e",function(){return h}),a.d(e,"b",function(){return p}),a.d(e,"i",function(){return f}),a.d(e,"c",function(){return y}),a.d(e,"h",function(){return b}),a.d(e,"f",function(){return g});a("8e6e"),a("456d");var r=a("bd86"),n=(a("ac6a"),a("28a5"),a("768b")),o=a("5a0c"),s=a.n(o);function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,a=t.year,r=void 0===a?0:a,n=t.month,o=void 0===n?0:n,s=t.day,i=void 0===s?0:s,c=t.hour,u=void 0===c?0:c,l=t.minute,d=void 0===l?0:l,h=t.second,p=void 0===h?0:h,f=t.millisecond,y=void 0===f?0:f;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),new Date(e.getFullYear()+r,e.getMonth()+o,e.getDate()+i,e.getHours()+u,e.getMinutes()+d,e.getSeconds()+p,e.getMilliseconds()+y)},l=/^(nearly|previous)-\d+-(day|week|month|year)$/,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(t=t.toLowerCase(),l.test(t)){var r=t.split("-"),o=Object(n["a"])(r,3),s=o[0],i=o[1],c=o[2],d=+i,h=e,p=u({day:0},e);if("previous"===s){var f=e.getMonth(),y=e.getDate(),v=e.getDay();switch(c){case"day":p=u({day:-1*d}),h=u({day:0},p);break;case"week":d?(p=u({day:-7*(d-1)-v+a-1}),h=u({day:-7*d+1},p)):h=u({day:-1*v+a},p);break;case"month":d?(p=u({day:-1*y}),h=u({month:-1*d,day:-1*y+1})):h=u({day:-1*y+1},p);break;case"year":d?(p=u({month:-1*f,day:-1*y}),h=u({year:-1*d,day:1},p)):h=u({month:-1*f,day:-1*y+1},p);break}}else d=-d,h=u({day:("day"===c?d:"week"===c?7*d:0)+1,month:"month"===c?d:0,year:"year"===c?d:0},p);return p.setHours(23),p.setMinutes(59),p.setSeconds(59),[h,p]}return"all"===t?[u({day:0},new Date("2015/01/01")),u({day:0})]:[]},h=[{text:"report.Global.Query.Times.Option1",shortcut:"previous-0-day"},{text:"report.Global.Query.Times.Option2",shortcut:"previous-1-day"},{text:"report.Global.Query.Times.Option3",shortcut:"previous-0-week"},{text:"report.Global.Query.Times.Option4",shortcut:"previous-1-week"},{text:"report.Global.Query.Times.Option5",shortcut:"previous-0-month"},{text:"report.Global.Query.Times.Option6",shortcut:"previous-1-month"},{text:"report.Global.Query.Times.Option7",shortcut:"nearly-3-month"}],p=h.concat([{text:"report.Global.Query.Times.Option8",shortcut:"all"}]),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[];return t.forEach(function(t){var r=c({},t),n=e[r.prop];void 0!==n&&(r.default=n),r.nonzero&&0===r.default&&(r.default=""),a.push(r)}),a},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(t=u({hour:23,minute:59,second:59},t)),s()(t).unix()},v={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz=%&",hash:"?pqr1sY2AZef9DE8By7FzG6jkm5lHI4Px3wvJiQtuKRCSLgh0T@oMU&bcdNVOWanX",textShuffle:function(t,e,a){return t.split("").map(function(t){var r=e.indexOf(t);return-1===r?t:a.charAt(r)}).join("")}},b={encode:function(t){try{Object.keys(t).forEach(function(e){t[e]=encodeURI(String(t[e]))});var e=v.chars,a=v.hash,r=v.textShuffle,n=JSON.stringify(t),o=btoa(n);return r(o,e,a)}catch(s){return""}},decode:function(t){try{var e=v.chars,a=v.hash,r=v.textShuffle,n=r(t,a,e),o=atob(n);return JSON.parse(decodeURI(o))}catch(s){return{}}}},m="ReportKeep:",g={remove:function(t){sessionStorage.removeItem(m+t)},save:function(t,e){sessionStorage.setItem(m+t,JSON.stringify(e))},restore:function(t,e){var a={queryData:{},queryDays:[]};try{var r=JSON.parse(sessionStorage.getItem(m+t)||"{}");Object.keys(e.queryData).map(function(t){var n=JSON.parse(JSON.stringify(e.queryData[t]));a.queryData[t]=n,void 0!==r.queryData[t]&&(a.queryData[t]=r.queryData[t])}),Array.isArray(r.queryDays)&&(a.queryDays[1]=new Date(r.queryDays[1]),a.queryDays[0]=new Date(r.queryDays[0]))}catch(n){}return a}}},c68f:function(t,e,a){"use strict";var r=a("0c7d"),n=a.n(r);n.a},ce5b:function(t,e,a){}}]);