(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Contact"],{"5a05":function(t,e,n){},6244:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-view",{attrs:{title:t.$t("profile.PageTitle.Contact")}},[n("div",{staticClass:"tab-content"},[n("app-menu",t._l(t.formData,function(e){return n("app-menu-item",{key:e.title,attrs:{type:"borderd",action:e.route}},[n("div",{staticClass:"tab-meun-content"},[n("div",[n("div",{staticClass:"tab-meun-title"},[t._v(t._s(e.label))]),t._v(" "),n("div",{staticClass:"tab-meun-text"},[t._v(t._s(e.value))])]),t._v(" "),e.btnStyle?n("div",[n("span",{class:[e.btnStyle.class]},[t._v(t._s(e.btnStyle.text))])]):t._e()])])}),1)],1)])},a=[],o=(n("96cf"),n("3b8d")),i=n("d225"),r=n("b0b4"),u=n("308d"),l=n("6bb5"),s=n("4e2b"),f=n("9ab4"),p=n("60a3"),b=n("4bb5"),v=n("67c2"),d=n("8c67"),h=n("2e69"),m=n("63bd"),y=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.formData=[],t}return Object(s["a"])(e,t),Object(r["a"])(e,[{key:"init",value:function(){var t=this,e=this.accountInfo,n=e.Email,c=e.Mobile;e.MobilePrefix;this.formData=[{label:this.$t("profile.Email"),value:n},{label:this.$t("profile.Phone"),value:this.mobileData.value,btnStyle:{text:this.mobileData.text,class:this.mobileData.class},route:{name:"",callback:function(){if(!c)return t.$router.push({name:t.accountPath.phone,params:{to:"add"}});t.$router.push({name:t.accountPath.verify})}}},{label:"",value:""}]}},{key:"beforeMount",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),t.prev=1,t.next=4,this.getAccountInfo();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.error(t.t0.message);case 9:case"end":return t.stop()}},t,this,[[1,6]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"mobileData",get:function(){var t=this.accountInfo,e=t.Mobile,n=t.MobilePrefix;return e?{value:"+".concat(n," ").concat(e),text:this.$t("profile.Contact.EditPhone"),class:"tab-meun-text-btn--edit"}:{value:"",text:this.$t("profile.Contact.AddPhone"),class:"tab-meun-text-btn--add"}}},{key:"accountPath",get:function(){return 2===this.accountInfo.AccountType?v["a"]:v["b"]}}]),e}(p["d"]);Object(f["a"])([Object(b["a"])("AccountStore").State],y.prototype,"accountInfo",void 0),Object(f["a"])([Object(b["a"])("AccountStore").Action],y.prototype,"getAccountInfo",void 0),y=Object(f["a"])([Object(p["a"])({metaInfo:function(){return{title:"KVB PRIME"}},components:{AppView:d["a"],AppMenu:m["a"],AppMenuItem:h["a"]}})],y);var x=y,j=x,w=(n("88ca"),n("2877")),O=Object(w["a"])(j,c,a,!1,null,"25617c44",null);e["default"]=O.exports},"67c2":function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a});var c={picture:"profile-client-picture",contact:"profile-client-contact",account:"profile-client-account-info",accountWallet:"profile-client-account-info-wallet",accountSuccess:"profile-client-account-info-success",address:"profile-client-address-info",addressSuccess:"profile-client-address-info-success",phone:"profile-client-contact-phone",verify:"profile-client-verify"},a={picture:"profile-picture",contact:"profile-contact",account:"profile-account-info",accountWallet:"profile-account-info-wallet",accountSuccess:"profile-account-info-success",phone:"profile-contact-phone",verify:"profile-verify"}},"88ca":function(t,e,n){"use strict";var c=n("5a05"),a=n.n(c);a.a}}]);