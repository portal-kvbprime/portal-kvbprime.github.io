(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a06e71c"],{"086f":function(t,e,i){"use strict";var n=i("4b4b"),r=i.n(n);r.a},4198:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items?i("app-view",{staticClass:"notice",attrs:{title:t.items.Summary}},[i("div",{ref:"promotion",staticClass:"promotion-wrap"},[i("img",{staticClass:"banner-img",attrs:{src:t.imgStyle,alt:""}}),t._v(" "),i("div",{staticClass:"btn-wrap"},[i("p",{staticClass:"promotion-sub-title"},[t._v(t._s(t.items.Title))]),t._v(" "),i("div",{staticClass:"btn-block"},[t.isBtnShow?i("el-button",{class:["btn-default",{"btn-join":t.isParticipation||t.isDemo}],attrs:{round:""},on:{click:t.goJoin}},[t._v(t._s(t.btnText))]):t._e()],1)]),t._v(" "),i("div",{staticClass:"list-block"},[i("div",{domProps:{innerHTML:t._s(t.items.Content)}})])]),t._v(" "),i("ApplyDialog",{attrs:{activityId:t.activityId,visible:t.showApplyDialog},on:{close:function(e){t.showApplyDialog=!1}}})],1):t._e()},r=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),s=(i("7514"),i("28a5"),i("96cf"),i("3b8d")),c=i("d225"),o=i("b0b4"),u=i("308d"),l=i("6bb5"),p=i("4e2b"),b=i("9ab4"),y=i("60a3"),v=i("8c67"),h=i("ad41"),f=i.n(h),d=i("ecdf"),O=i.n(d),g=i("4bb5"),m=i("58d1"),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"u-text"},[i("div",{staticClass:"u-text__main",domProps:{innerHTML:t._s(t.coverText)}})])},A=[],w=(i("a481"),function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),Object(o["a"])(e,[{key:"coverText",get:function(){var t=/[*]{2}([^*]+)[*]{2}/g;return this.text.replace(t,function(t,e,i,n){return'<span class="highlight">'+e+"</span>"})}}]),e}(y["d"]));Object(b["a"])([Object(y["c"])({default:""})],w.prototype,"text",void 0),Object(b["a"])([Object(y["c"])({default:""})],w.prototype,"type",void 0),w=Object(b["a"])([y["a"]],w);var S=w,k=S,x=(i("d026"),i("2877")),D=Object(x["a"])(k,j,A,!1,null,"3331ca75",null),I=D.exports,P=i("ce75"),U=i("87dc"),T=i("2baf"),_=i("a97b");function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function B(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var E=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.showApplyDialog=!1,t}return Object(p["a"])(e,t),Object(o["a"])(e,[{key:"goJoin",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isDemo){t.next=4;break}return e={Title:"",Message:this.$t("app.ActivtyExit.Msg.ErrorAccount")},this.$alert(e.Message,e.Title,{showClose:!1,callback:function(t){if(U["e"].AccountConfirm!==i.accountInfo.ProcessingType)return i.$router.push({name:"open-account-direction"})}}),t.abrupt("return");case 4:if(!this.isParticipation){t.next=6;break}return t.abrupt("return",this.showApplyDialog=!0);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeMount",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getActivitysOfUser();case 3:return this.userActivityArticle.Items.length,e=location.host,i=e.split("."),n=i.slice(i.length-2).join("."),r=-1!==e.indexOf("kvbprime.com")?"https://eventkvb.com":"https://event.".concat(n),a="".concat(r,"/api/v2/ssoLogin"),t.next=11,fetch(a,{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:_["a"].get("token"),lang:this.$store.state.I18nStore.locale})});case 11:t.next=15;break;case 13:t.prev=13,t.t0=t["catch"](0);case 15:case"end":return t.stop()}},t,this,[[0,13]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"isDemo",get:function(){return this.accountInfo.IsDemo}},{key:"isClientUser",get:function(){return 2===this.accountInfo.AccountType}},{key:"btnText",get:function(){return this.isClientUser&&this.activityData.btnStyle?this.activityData.btnStyle.label:"get more"}},{key:"activityId",get:function(){return this.activitysOfUser?this.activitysOfUser.ActivityId:-1}},{key:"items",get:function(){var t=this;return this.userActivityArticle.Items.length?this.userActivityArticle.Items.find(function(e){return String(e.Id)===String(t.Id)})||this.userActivityArticle.Items[0]:null}},{key:"imgStyle",get:function(){if(!this.items)return null;var t=this.items.ThumbnailPath;try{window.innerWidth<630&&this.getUserActivityData&&(t=this.getUserActivityData.PageBannerMobile)}catch(e){}return t}},{key:"activityData",get:function(){var t={label:"",type:"primary",disable:!0},e=this.activitysOfUser,i=e.Status,n={joinBtn:{label:this.$t("app.ActivtyExit.JoinBtn"),type:"primary",disable:!1},warningBtn:{label:this.$t("app.ActivtyExit.WarningBtn"),type:"warning",disable:!0},onJoinBtn:{label:this.$t("app.ActivtyExit.OnJoinBtn"),type:"success",disable:!0}}||{};if(i&&e){var r=this.activitysOfUser,a=r.ParticipationStatus,s=r.AuditStatus;0===s&&(t=n.warningBtn),1===s&&2!==a&&(t=n.onJoinBtn),-1!==a&&2!==s||(t=n.joinBtn),2===a&&(t=null)}return B({},e,{btnStyle:t})}},{key:"isBtnShow",get:function(){return(!this.items||7821!==this.items.Id)&&(2===this.accountInfo.AccountType&&(!!this.activitysOfUser&&(!!this.activitysOfUser.Status&&(2!==this.activitysOfUser.ParticipationStatus&&this.activityData&&this.activityData.btnStyle))))}},{key:"isParticipation",get:function(){return!!this.activitysOfUser&&(!!this.activitysOfUser.Status&&(-1===this.activitysOfUser.ParticipationStatus||2===this.activitysOfUser.AuditStatus))}},{key:"Id",get:function(){return this.$route.query.Id}}]),e}(Object(y["b"])(m["a"],P["a"]));Object(b["a"])([Object(g["a"])("AccountStore").Action],E.prototype,"getAccountInfo",void 0),Object(b["a"])([Object(g["a"])("ActivityStore").State],E.prototype,"activitysOfUser",void 0),Object(b["a"])([Object(g["a"])("ActivityStore").Action],E.prototype,"getActivitysOfUser",void 0),Object(b["a"])([Object(g["a"])("ArticleStore").Getter],E.prototype,"getUserActivityData",void 0),Object(b["a"])([Object(g["a"])("ArticleStore").State],E.prototype,"userActivityArticle",void 0),E=Object(b["a"])([Object(y["a"])({components:{AppView:v["a"],UText:I,ElTable:f.a,ElTableColumn:O.a,ApplyDialog:T["a"]}})],E);var $=E,J=$,M=(i("086f"),Object(x["a"])(J,n,r,!1,null,"51add751",null));e["default"]=M.exports},"4b4b":function(t,e,i){},"666b":function(t,e,i){},d026:function(t,e,i){"use strict";var n=i("666b"),r=i.n(n);r.a}}]);