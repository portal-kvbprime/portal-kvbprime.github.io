(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b66c22f"],{"0c93":function(t,e,i){"use strict";var n=i("3695"),o=i.n(n);o.a},"217c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-view",{staticClass:"account-info",attrs:{title:t.$t("profile.PageTitle.AccountInfo")}},[i("form-item-group",[i("submit-msg-box",{attrs:{data:t.submitBox},on:{isClick:t.isClick}})],1)],1)},o=[],c=i("d225"),a=i("b0b4"),s=i("308d"),u=i("6bb5"),r=i("4e2b"),l=i("9ab4"),f=i("60a3"),p=i("4bb5"),m=i("67c2"),b=i("8c67"),d=i("2f3f"),h=i("b77e"),v=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(a["a"])(e,[{key:"beforeMount",value:function(){this.handlerBoxData()}},{key:"isClick",value:function(){this.isVaildID?this.$router.push({name:"dashboard"}):this.$router.push({name:this.accountPath.account})}},{key:"handlerBoxData",value:function(){var t=[{title:[this.$t("profile.AccountInfo.SubmitBox.CommitDataClient.CommitTitle")],content:[this.$t("profile.AccountInfo.SubmitBox.CommitDataClient.Commit1"),this.$t("profile.AccountInfo.SubmitBox.CommitDataClient.Commit2")]}],e=[{title:[this.$t("profile.AccountInfo.SubmitBox.CommitDataIB.CommitTitle")],content:[this.$t("profile.AccountInfo.SubmitBox.CommitDataIB.Commit1"),this.$t("profile.AccountInfo.SubmitBox.CommitDataIB.Commit2"),this.$t("profile.AccountInfo.SubmitBox.CommitDataIB.Commit3"),this.$t("profile.AccountInfo.SubmitBox.CommitDataIB.Commit4")]}];this.submitBox={header:{title:this.isVaildID?[this.$t("profile.AccountInfo.SubmitBox.Vaild.Header")]:[this.$t("profile.AccountInfo.SubmitBox.Header")],type:"success"},body:this.isVaildID?[""]:[this.$t("profile.AccountInfo.SubmitBox.Body")],commit:this.isClient?t:e,btn:{type:"default",text:this.$t("profile.AccountInfo.SubmitBox.Btn")}}}},{key:"accountPath",get:function(){return 2===this.accountInfo.AccountType?m["a"]:m["b"]}},{key:"isClient",get:function(){var t=this.accountInfo.AccountType;return 2===t}},{key:"isVaildID",get:function(){var t=this.accountInfo.IdCardIdentityType;return 2===t}}]),e}(f["d"]);Object(l["a"])([Object(p["a"])("AccountStore").State],v.prototype,"accountInfo",void 0),v=Object(l["a"])([Object(f["a"])({metaInfo:function(){return{title:"KVB PRIME"}},components:{AppView:b["a"],SubmitMsgBox:d["a"],FormItemGroup:h["a"]}})],v);var y=v,C=y,I=i("2877"),x=Object(I["a"])(C,n,o,!1,null,"39648c6b",null);e["default"]=x.exports},"2f3f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"submit-msg-box"},[i("div",{staticClass:"title-wrap"},[t._t("title",[i("h2",{class:["title",t.data.header.type]},t._l(t.data.header.title,function(e){return i("span",{key:e},[t._v(t._s(e))])}),0)])],2),t._v(" "),i("div",{staticClass:"content-wrap"},[t._t("content",t._l(t.data.body,function(e){return i("p",{key:e,staticClass:"content-txt"},[t._v(t._s(e))])}))],2),t._v(" "),t._l(t.data.commit,function(e,n){return i("div",{key:e.title+n,staticClass:"commit-wrap"},[i("h2",{staticClass:"commit-title"},t._l(e.title,function(e){return i("span",{key:e},[t._v(t._s(e))])}),0),t._v(" "),t._l(e.content,function(e){return i("p",{key:e,staticClass:"content-txt"},[t._v(t._s(e))])})],2)}),t._v(" "),i("div",{staticClass:"btn-wrap"},[t._t("btn",[i("el-button",{staticClass:"g-main-btn",attrs:{round:"",type:t.data.btn.type?t.data.btn.type:"default"},on:{click:t.emitUp}},[t._v("\n        "+t._s(t.data.btn.text)+"\n      ")])])],2)],2)},o=[],c=i("d225"),a=i("b0b4"),s=i("308d"),u=i("6bb5"),r=i("4e2b"),l=i("9ab4"),f=i("60a3"),p=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(a["a"])(e,[{key:"emitUp",value:function(){this.$emit("isClick")}}]),e}(f["d"]);Object(l["a"])([Object(f["c"])({default:{header:{title:[""],type:""},body:[""],commit:[{title:[""],content:[""]}],btn:{type:"",text:""}}})],p.prototype,"data",void 0),p=Object(l["a"])([f["a"]],p);var m=p,b=m,d=(i("0c93"),i("2877")),h=Object(d["a"])(b,n,o,!1,null,"497891d1",null);e["a"]=h.exports},3695:function(t,e,i){},"67c2":function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o});var n={picture:"profile-client-picture",contact:"profile-client-contact",account:"profile-client-account-info",accountWallet:"profile-client-account-info-wallet",accountSuccess:"profile-client-account-info-success",address:"profile-client-address-info",addressSuccess:"profile-client-address-info-success",phone:"profile-client-contact-phone",verify:"profile-client-verify"},o={picture:"profile-picture",contact:"profile-contact",account:"profile-account-info",accountWallet:"profile-account-info-wallet",accountSuccess:"profile-account-info-success",phone:"profile-contact-phone",verify:"profile-verify"}}}]);