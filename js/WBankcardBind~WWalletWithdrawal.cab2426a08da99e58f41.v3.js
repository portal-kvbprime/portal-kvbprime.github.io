(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WBankcardBind~WWalletWithdrawal"],{"0a7e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warning-text-com"},[a("div",{staticClass:"warning-text-wrapper"},[a("p",{staticClass:"warning-text"},[t._v("\n        "+t._s(t.$t("pay.Desc.Text0"))+"\n      ")]),t._v(" "),a("p",{staticClass:"warning-text warning-expand",class:{"warning-expand-active":"down"===t.showMore}},[t._v("\n        "+t._s(t.$t("pay.Desc.Text1"))+"\n      ")])])])},i=[],r=a("d225"),c=a("b0b4"),s=a("308d"),o=a("6bb5"),d=a("4e2b"),l=a("9ab4"),u=a("60a3"),b=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.showMore="up",t}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"showMoreDetail",value:function(){"up"===this.showMore?this.showMore="down":this.showMore="up"}}]),e}(u["d"]);b=Object(l["a"])([Object(u["a"])({})],b);var p=b,f=p,v=(a("d5f3"),a("2877")),m=Object(v["a"])(f,n,i,!1,null,"550ba6ce",null);e["a"]=m.exports},"0ac2":function(t,e,a){"use strict";var n=a("61f4"),i=a.n(n);i.a},"18cb":function(t,e,a){"use strict";var n=a("768b"),i=(a("96cf"),a("3b8d")),r=a("d225"),c=a("b0b4"),s=a("308d"),o=a("6bb5"),d=a("4e2b"),l=a("9ab4"),u=a("60a3"),b=a("4bb5"),p=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"loadBankcard",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={SearchCondition:{CardType:0},PageIndex:1,PageSize:10},t.next=4,this.loadBankcardList(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$message.error("loadBankcardList error:"+t.t0.message);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeMount",value:function(){this.loadBankcard()}},{key:"bankcard",get:function(){var t=Object(n["a"])(this.bankcardList,1),e=t[0];return e&&3!==e.Audit?e:null}},{key:"isFinishReview",get:function(){var t=this.bankcard;return!(!t||1!==t.Audit)}},{key:"isReview",get:function(){var t=this.bankcard;return!(!t||2!==t.Audit)}}]),e}(u["d"]);Object(l["a"])([Object(b["a"])("BankcardStore").State],p.prototype,"bankcardList",void 0),Object(l["a"])([Object(b["a"])("BankcardStore").Action],p.prototype,"loadBankcardList",void 0),p=Object(l["a"])([u["a"]],p);var f,v,m=p,j=m,y=a("2877"),O=Object(y["a"])(j,f,v,!1,null,null,null);e["a"]=O.exports},"4d50":function(t,e,a){"use strict";var n={UK:{Link1:"/document/uk/client-agreement.pdf",Link2:"/document/uk/website&third-party-terms.pdf ",Link3:"/document/uk/risk-disclosure.pdf",Link4:"/document/uk/privacy-policy.pdf",Link5:"/document/uk/MA-Agreement-individual.pdf",Link6:""},CN:{Link1:"https://storage.googleapis.com/kvb/files/%E5%AE%A2%E6%88%B7%E6%9D%A1%E6%AC%BE%E4%B8%8E%E6%9D%A1%E4%BB%B6.pdf",Link2:"https://storage.googleapis.com/kvb/files/Cookie%E6%94%BF%E7%AD%96.pdf",Link3:"https://storage.googleapis.com/kvb/files/%E9%A3%8E%E9%99%A9%E6%8A%AB%E9%9C%B2.pdf",Link4:"https://storage.googleapis.com/kvb/files/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96.pdf",Link5:"/document/cn/MA-Agreement-individual.pdf",Link6:"/document/cn/nb/create-eos.pdf"},INT:{Link1:"https://storage.googleapis.com/kvb/files/Terms%20%26%20Conditions.pdf",Link2:"https://storage.googleapis.com/kvb/files/Cookies%20Policy.pdf",Link3:"https://storage.googleapis.com/kvb/files/Risk%20Disclosure-May5.pdf",Link4:"https://storage.googleapis.com/kvb/files/Privacy%20Policy%20Statement-May5.pdf",Link5:"/document/int/MA-Agreement-individual.pdf",Link6:"/document/int/nb/create-eos.pdf"}};e["a"]=n},"61f4":function(t,e,a){},"73b5":function(t,e,a){},"8aa4":function(t,e,a){},"9c94":function(t,e,a){"use strict";var n=a("8aa4"),i=a.n(n);i.a},aafb:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-data-com",class:{"label-data-com-important":t.isImportant}},[a("span",{staticClass:"ld-l"},[t._v(t._s(t.labelName))]),t._v(" "),a("span",{staticClass:"ld-d",class:{"ld-d-important":t.isImportant}},[t._v(t._s(t.data))])])},i=[],r=a("d225"),c=a("308d"),s=a("6bb5"),o=a("4e2b"),d=a("9ab4"),l=a("60a3"),u=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(l["d"]);Object(d["a"])([Object(l["c"])({default:function(){return!1}})],u.prototype,"isImportant",void 0),Object(d["a"])([Object(l["c"])({default:function(){return""}})],u.prototype,"labelName",void 0),Object(d["a"])([Object(l["c"])({default:function(){return""}})],u.prototype,"data",void 0),u=Object(d["a"])([Object(l["a"])({})],u);var b=u,p=b,f=(a("bcd0"),a("2877")),v=Object(f["a"])(p,n,i,!1,null,"0773e8d4",null);e["a"]=v.exports},b0a9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friendly-remind-com"},[a("FormItemGroup",[a("span",{staticClass:"friendly-remind-text"},[t._v(t._s(t.$t("pay.Global.Hint")))]),t._v(" "),a("ul",{staticClass:"friendly-remind-list"},[a("li",{staticClass:"friendly-remind-item"},[t._v("\n        1、"),a("span",{staticClass:"fr-item1 fr-item-important"},[t._v(t._s(t.$t("pay.FriendlyRemind1.FR1")))])]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        2、"+t._s(t.$t("pay.FriendlyRemind1.FR2"))+"\n      ")]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        3、"+t._s(t.$t("pay.FriendlyRemind1.FR3"))+"\n      ")]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        4、"+t._s(t.$t("pay.FriendlyRemind1.FR4"))+"\n      ")]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        5、"+t._s(t.$t("pay.FriendlyRemind1.FR5"))+"\n      ")]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        6、"+t._s(t.$t("pay.FriendlyRemind1.FR6"))+"\n      ")]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        7、"+t._s(t.$t("pay.FriendlyRemind1.FR7"))+"\n      ")]),t._v(" "),a("li",{staticClass:"friendly-remind-item"},[t._v("\n        8、"+t._s(t.$t("pay.FriendlyRemind1.FR8"))+"\n      ")])])])],1)},i=[],r=a("d225"),c=a("b0b4"),s=a("308d"),o=a("6bb5"),d=a("4e2b"),l=a("9ab4"),u=a("60a3"),b=a("b77e"),p=a("4d50"),f=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"openPdf",value:function(){window.open(this.ENV_STATIC_FILE+p["a"][this.ENV_TYPE].Link6)}}]),e}(u["d"]);f=Object(l["a"])([Object(u["a"])({components:{FormItemGroup:b["a"]}})],f);var v=f,m=v,j=(a("d8e1"),a("2877")),y=Object(j["a"])(m,n,i,!1,null,"43751784",null);e["a"]=y.exports},b81b:function(t,e,a){},bcd0:function(t,e,a){"use strict";var n=a("73b5"),i=a.n(n);i.a},d5f3:function(t,e,a){"use strict";var n=a("b81b"),i=a.n(n);i.a},d8e1:function(t,e,a){"use strict";var n=a("f101"),i=a.n(n);i.a},f101:function(t,e,a){},f70e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pay-header-com"},[a("p",{staticClass:"pay-header-title"},[t._v("\n    "+t._s(t.$attrs.title)+"\n  ")])])},i=[],r=a("d225"),c=a("308d"),s=a("6bb5"),o=a("4e2b"),d=a("9ab4"),l=a("60a3"),u=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(l["d"]);u=Object(d["a"])([Object(l["a"])({})],u);var b=u,p=b,f=(a("9c94"),a("2877")),v=Object(f["a"])(p,n,i,!1,null,"3f81ae4c",null);e["a"]=v.exports},f859:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"free-container bf-container",style:"padding: "+t.paddingValue+"; margin: "+t.marginValue+"; background-color: "+t.bgc+"; box-shadow:"+t.shadow+" border:"+t.border+" "+t.custom},[t._t("default")],2)},i=[],r=(a("28a5"),a("d225")),c=a("b0b4"),s=a("308d"),o=a("6bb5"),d=a("4e2b"),l=a("9ab4"),u=a("60a3"),b=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"paddingValue",get:function(){var t=this.padding.split(" "),e=t[0]+"px "+t[1]+"px "+t[2]+"px "+t[3]+"px";return e}},{key:"marginValue",get:function(){var t=this.margin.split(" "),e=t[0]+"px "+t[1]+"px "+t[2]+"px "+t[3]+"px";return e}}]),e}(u["d"]);Object(l["a"])([Object(u["c"])({default:function(){return"0 0 0 0"}})],b.prototype,"padding",void 0),Object(l["a"])([Object(u["c"])({default:function(){return"0 0 0 0"}})],b.prototype,"margin",void 0),Object(l["a"])([Object(u["c"])({default:function(){return"transparent"}})],b.prototype,"bgc",void 0),Object(l["a"])([Object(u["c"])({default:function(){return""}})],b.prototype,"shadow",void 0),Object(l["a"])([Object(u["c"])({default:function(){return""}})],b.prototype,"border",void 0),Object(l["a"])([Object(u["c"])({default:function(){return""}})],b.prototype,"custom",void 0),b=Object(l["a"])([Object(u["a"])({})],b);var p=b,f=p,v=(a("0ac2"),a("2877")),m=Object(v["a"])(f,n,i,!1,null,"6d33761a",null);e["a"]=m.exports}}]);