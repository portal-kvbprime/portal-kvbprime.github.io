(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WUSDTverify"],{"16a0":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-view",{staticClass:"wallet-ethereum",attrs:{title:"ethereum.WalletEthereum.Title"}},[r("div",{staticClass:"remark"},[e._v(e._s(e.remark.title))]),e._v(" "),r("form-item-group",[r("form-item",{attrs:{label:"erc20"===e.formData.tokenName?"ERC-20(USDT)":"TRC-20(USDT)","invalid-text":e.errMsg.token}},[r("el-input",{staticClass:"paste-address",attrs:{value:e.formData.token,maxlength:"42",placeholder:e.convertText("ethereum.EthereumRegister.Form.Remark.Address")},nativeOn:{"!paste":function(t){return e.pasteToken(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteToken(t)}}}),e._v(" "),e.errMsg.token?r("template",{slot:"append"},[e._v("\n        "+e._s(e.errMsg.token)+"\n      ")]):e._e()],2),e._v(" "),r("form-item",{attrs:{label:"ethereum.WalletEthereum.Redirect.updataQrCode"}},[r("el-input",{attrs:{type:"text",readonly:""},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),e._v(" "),r("div",{attrs:{slot:"option"},slot:"option"},[r("el-upload",{attrs:{action:"#",accept:"image/png, image/jpeg, image/png","show-file-list":!1,"before-upload":e.beforeUpload,"http-request":e.upload}},[r("el-button",{attrs:{round:"",size:"mini"}},[e._v("\n            "+e._s(e.$t("ethereum.WalletEthereum.Redirect.select"))+"\n          ")])],1)],1)],1),e._v(" "),r("form-item",{attrs:{label:"ethereum.EthereumRegister.Form.Label.Email",text:e.formData.email}}),e._v(" "),r("form-item",{attrs:{label:"ethereum.EthereumRegister.Form.Label.Code"}},[r("el-input",{attrs:{maxlength:"10"},model:{value:e.formData.verifycode,callback:function(t){e.$set(e.formData,"verifycode",t)},expression:"formData.verifycode"}}),e._v(" "),r("countdown-button",{attrs:{slot:"option",size:"mini",label:"pay.Btn.Get","click-handler":e.countdown,disabled:!e.canGetVerifycode},slot:"option"})],1)],1),e._v(" "),r("div",{staticClass:"justify-center"},[r("el-button",{staticClass:"submit",attrs:{type:"primary",round:"",disabled:!e.canSubmit},on:{click:e.submit}},[e._v("\n      "+e._s(e.$t("ethereum.WalletEthereum.Redirect.submit"))+"\n    ")])],1)],1)},n=[],o=(r("7f7f"),r("a481"),r("6762"),r("96cf"),r("3b8d")),i=r("d225"),s=r("b0b4"),c=r("308d"),u=r("6bb5"),l=r("4e2b"),m=r("9ab4"),d=r("60a3"),f=r("4bb5"),h=r("8c67"),p=r("b77e"),b=r("fb29"),v=r("89a93"),g=r.n(v),k=r("6e90"),y=r("58d1"),w=r("82e0"),D=r("843e"),R=r("ddde"),j=r("a29b"),O=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.formData={tokenName:"trc20",token:"",qrcodeUrl:"",email:"",verifycode:""},e.fileName="",e.reg={erc20:/^0x[0-9a-fA-F]{40}$/,trc20:/^T[0-9a-zA-Z]{33}$/},e}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"beforeMount",value:function(){this.defaultTokenName&&(this.formData.tokenName=this.defaultTokenName),this.formData.email=this.accountInfo.Email}},{key:"pasteToken",value:function(e){var t=(e.clipboardData||window.clipboardData).getData("text")||"";t&&(this.formData.token=t)}},{key:"deleteToken",value:function(){this.formData.token=""}},{key:"countdown",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=new D["a"],a={LoginName:this.formData.email,ReceiverType:2,PhoneArea:this.accountInfo.RegisterArea},e.prev=2,e.next=5,r.getVerifyCode(a);case 5:t(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),this.$message.error(e.t0.messge);case 11:case"end":return e.stop()}},e,this,[[2,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"beforeUpload",value:function(e){var t=e.size>10485760;t&&this.$message.error(this.$t("global.RuleMsg.UploadSize"));var r=["image/png","image/jpeg","image/png"],a=!r.includes(e.type);a&&this.$message.error(this.$t("ethereum.EthereumRegister.Form.Remark.file"))}},{key:"upload",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var r,a,n,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.file,a=new FormData,n=r.type.replace("image/","file."),a.set("file",r,n),o=new R["a"],e.prev=5,e.next=8,o.UploadFile(a);case 8:i=e.sent,this.formData.qrcodeUrl=i,this.fileName=r.name,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](5),this.$message.error(e.t0.message);case 16:case"end":return e.stop()}},e,this,[[5,13]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"submit",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n,o,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.formData,r=t.tokenName,a=t.token,n=t.verifycode,o=t.qrcodeUrl,i={Account:a,VerifyCode:n,Type:"erc20"===r?w["a"].USDT:w["a"].USDTTrc20,QRCodeUrl:o},s=new j["a"],e.prev=3,e.next=6,s.bindDigitalCurrencyAccount(i);case 6:this.$router.push("/pay-ethereum"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),this.$message.error(e.t0.message);case 12:case"end":return e.stop()}},e,this,[[3,9]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"errMsg",get:function(){return{token:this.errMsgToken}}},{key:"errMsgToken",get:function(){var e=this.formData,t=e.tokenName,r=e.token,a=!!r&&!this.reg[t].test(r),n={erc20:this.$t("ethereum.EthereumRegister.Form.InvalidMessage.Address"),trc20:this.$t("ethereum.EthereumRegister.Form.InvalidMessage.trcInvalid")};return a?n[t]:""}},{key:"remark",get:function(){var e={erc20:this.$t("ethereum.EthereumRegister.Form.Remark.erc20"),trc20:this.$t("ethereum.EthereumRegister.Form.Remark.trc20")};return{title:this.$t("ethereum.EthereumRegister.Form.Remark.tips"),token:e[this.formData.tokenName]}}},{key:"defaultTokenName",get:function(){return"trc20"}},{key:"canGetVerifycode",get:function(){return!!this.formData.email&&!this.errMsg.token}},{key:"canSubmit",get:function(){var e=this.formData,t=e.verifycode,r=e.qrcodeUrl;return!this.errMsg.token&&!!t&&!!r}}]),t}(Object(d["b"])(y["a"]));Object(m["a"])([Object(f["a"])("AccountStore").State],O.prototype,"accountInfo",void 0),O=Object(m["a"])([Object(d["a"])({components:{AppView:h["a"],FormItemGroup:p["a"],FormItem:b["a"],ElUpload:g.a,CountdownButton:k["a"]}})],O);var _=O,T=_,x=(r("2105"),r("2877")),C=Object(x["a"])(T,a,n,!1,null,"6da1c658",null);t["default"]=C.exports},2105:function(e,t,r){"use strict";var a=r("60d7"),n=r.n(a);n.a},"60d7":function(e,t,r){},"6e90":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-button",e._b({staticClass:"countdown-button",class:{"countdown-button--running":e.isRunning},attrs:{type:e.isRunning?"default":"primary",round:""},on:{click:e.handleClick}},"el-button",e.$attrs,!1),[e.seconds>0?[e._v(e._s(e.seconds)+"s")]:[e._v(e._s(e.convertText(e.label)))]],2)},n=[],o=r("d225"),i=r("b0b4"),s=r("308d"),c=r("6bb5"),u=r("4e2b"),l=r("9ab4"),m=r("60a3"),d=r("58d1"),f=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.seconds=0,e.countdownManager={timer:0,timeout:0},e}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"startCountdown",value:function(){var e=this,t=500,r=this.wait,a=this.isRunning,n=function r(){var a=e.countdownManager.timeout-Date.now();clearTimeout(e.countdownManager.timer),a>0?(e.seconds=Math.ceil(a/1e3),e.countdownManager.timer=setTimeout(r,t)):e.seconds=0};a||(this.countdownManager.timeout=Date.now()+1e3*r,this.countdownManager.timer=setTimeout(n,t))}},{key:"handleClick",value:function(){var e=this,t=this.clickHandler;if(t)return t(function(){return e.startCountdown()});this.startCountdown()}},{key:"beforeDestroy",value:function(){clearTimeout(this.countdownManager.timer)}},{key:"isRunning",get:function(){return this.seconds>0}}]),t}(Object(m["b"])(d["a"]));Object(l["a"])([Object(m["c"])()],f.prototype,"clickHandler",void 0),Object(l["a"])([Object(m["c"])({default:function(){return"Get"}})],f.prototype,"label",void 0),Object(l["a"])([Object(m["c"])({default:function(){return 30}})],f.prototype,"wait",void 0),f=Object(l["a"])([Object(m["a"])({components:{I18nConverter:d["a"]},inheritAttrs:!1})],f);var h=f,p=h,b=(r("a9a7"),r("2877")),v=Object(b["a"])(p,a,n,!1,null,"e1243ba0",null);t["a"]=v.exports},a9a7:function(e,t,r){"use strict";var a=r("c44a"),n=r.n(a);n.a},c44a:function(e,t,r){}}]);