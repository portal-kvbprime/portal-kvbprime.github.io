(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03de8b7d"],{"1f14":function(t,e,r){"use strict";var a,i,n,o,s,c,l,u,p,m,d,b,f,v;r.d(e,"c",function(){return i}),r.d(e,"f",function(){return n}),r.d(e,"g",function(){return o}),r.d(e,"e",function(){return s}),r.d(e,"d",function(){return p}),r.d(e,"a",function(){return b}),r.d(e,"b",function(){return f}),function(t){t[t["ascending"]=0]="ascending",t[t["descending"]=1]="descending"}(a||(a={})),function(t){t[t["All"]=0]="All",t[t["BliyPay"]=1]="BliyPay",t[t["OfflinePay"]=2]="OfflinePay",t[t["Transfer"]=3]="Transfer",t[t["NewBit"]=4]="NewBit",t[t["Usdt"]=5]="Usdt",t[t["LocalBank"]=6]="LocalBank",t[t["PM"]=7]="PM"}(i||(i={})),function(t){t["UnKnow"]="0",t["NotArrived"]="1",t["Arrived"]="3|5",t["Invalid"]="4"}(n||(n={})),function(t){t[t["All"]=0]="All",t[t["BackCard"]=1]="BackCard",t[t["Transfer"]=2]="Transfer",t[t["NewBit"]=3]="NewBit",t[t["Usdt"]=5]="Usdt",t[t["LocalBank"]=6]="LocalBank",t[t["PM"]=7]="PM"}(o||(o={})),function(t){t["All"]="0",t["UnReview"]="1|2|3",t["Reviewed"]="2",t["Paying"]="3",t["Paid"]="4",t["Invalid"]="5"}(s||(s={})),function(t){t[t["USDCNY"]=0]="USDCNY"}(c||(c={})),function(t){t[t["BlockTranshub"]=1]="BlockTranshub",t[t["Alipay"]=2]="Alipay",t[t["BliyPay"]=3]="BliyPay",t[t["PayTrust"]=3]="PayTrust",t[t["USDT"]=4]="USDT",t[t["NganLuong"]=99]="NganLuong",t[t["BankcardTransfer"]=1]="BankcardTransfer"}(l||(l={})),function(t){t[t["CNY"]=0]="CNY",t[t["HKD"]=1]="HKD",t[t["USD"]=2]="USD",t[t["TWD"]=3]="TWD",t[t["NB"]=4]="NB"}(u||(u={})),function(t){t[t["UUID"]=1]="UUID",t[t["MT4Account"]=2]="MT4Account"}(p||(p={})),function(t){t[t["None"]=0]="None",t[t["Sales"]=1]="Sales",t[t["Client"]=2]="Client",t[t["AAA"]=3]="AAA",t[t["AA"]=4]="AA",t[t["A"]=5]="A",t[t["B"]=6]="B"}(m||(m={})),function(t){t[t["None"]=0]="None",t[t["Disabled"]=1]="Disabled",t[t["Succuss"]=3]="Succuss"}(d||(d={})),function(t){t[t["None"]=0]="None",t[t["Prime"]=1]="Prime",t[t["Ecn"]=2]="Ecn"}(b||(b={})),function(t){t[t["None"]=0]="None",t[t["Direct"]=1]="Direct"}(f||(f={})),function(t){t[t["NO"]=0]="NO",t[t["NOTrade"]=1]="NOTrade",t[t["NotFirstTime"]=2]="NotFirstTime"}(v||(v={}))},"2f71":function(t,e,r){},3076:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pop-section",class:{isShow:t.value}},[r("div",{staticClass:"pop-box",class:{"is-upgrade":t.isUpgrade}},[r("div",{staticClass:"pop-content"},[t._t("default")],2)])])},i=[],n=r("d225"),o=r("308d"),s=r("6bb5"),c=r("4e2b"),l=r("9ab4"),u=r("60a3"),p=function(t){function e(){return Object(n["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(u["d"]);Object(l["a"])([Object(u["c"])({default:function(){return!1}})],p.prototype,"value",void 0),Object(l["a"])([Object(u["c"])({default:function(){return!1}})],p.prototype,"isUpgrade",void 0),p=Object(l["a"])([u["a"]],p);var m=p,d=m,b=(r("8efa"),r("2877")),f=Object(b["a"])(d,a,i,!1,null,"320bafbb",null);e["a"]=f.exports},"8efa":function(t,e,r){"use strict";var a=r("a51e"),i=r.n(a);i.a},a51e:function(t,e,r){},b911:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",t._g(t._b({attrs:{"close-on-click-modal":!1,"append-to-body":!0,"show-close":!1,"custom-class":"app-confirm"},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{staticClass:"app-confirm__header"},[t.isShowClose?r("span",{staticClass:"app-confirm__header-control",on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}},[r("i",{staticClass:"app-confirm__header-control-icon el-icon-close"})]):t._e(),t._v(" "),r("div",{staticClass:"el-dialog__title"},[t._v(t._s(t.title))]),t._v(" "),t.buttonSlotLabel?r("el-button",{staticClass:"app-confirm__header-button",attrs:{disabled:t.btnSlotDisabled,size:"small",type:"default",round:""},on:{click:function(e){return t.$emit("secondConfirm")}}},[t._v(t._s(t.buttonSlotLabel))]):t._e(),t._v(" "),t.confirmLabel?r("el-button",{staticClass:"app-confirm__header-button",attrs:{disabled:t.confirmDisabled,size:"small",type:"primary",round:""},on:{click:function(e){return t.$emit("confirm")}}},[t._v(t._s(t.confirmLabel))]):t._e()],1)]},proxy:!0}])},"el-dialog",t.$attrs,!1),t.$listeners),[t._v(" "),t._t("default")],2)},i=[],n=r("d225"),o=r("b0b4"),s=r("308d"),c=r("6bb5"),l=r("4e2b"),u=r("9ab4"),p=r("60a3"),m=function(t){function e(){return Object(n["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"handleClose",value:function(){this.$emit("close"),this.$emit("update:visible",!1)}}]),e}(p["d"]);Object(u["a"])([Object(p["c"])({default:function(){return""}})],m.prototype,"title",void 0),Object(u["a"])([Object(p["c"])({default:function(){return""}})],m.prototype,"confirmLabel",void 0),Object(u["a"])([Object(p["c"])({default:function(){return""}})],m.prototype,"buttonSlotLabel",void 0),Object(u["a"])([Object(p["c"])({default:function(){return!1}})],m.prototype,"btnSlotDisabled",void 0),Object(u["a"])([Object(p["c"])({default:function(){return!0}})],m.prototype,"isShowClose",void 0),Object(u["a"])([Object(p["c"])({default:function(){return!1}})],m.prototype,"confirmDisabled",void 0),m=Object(u["a"])([p["a"]],m);var d=m,b=d,f=(r("bc83"),r("2877")),v=Object(f["a"])(b,a,i,!1,null,null,null);e["a"]=v.exports},bc83:function(t,e,r){"use strict";var a=r("2f71"),i=r.n(a);i.a},c52d:function(t,e,r){},db18:function(t,e,r){"use strict";var a=r("dd38"),i=r.n(a);i.a},dd38:function(t,e,r){},de0b:function(t,e){t.exports="data:image/png;base64,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"},e007:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isAppReady?r("app-view",{staticClass:"customer-list",attrs:{title:t.convertText("report.CustomerList.Title")}},[r("report-table-switch",{attrs:{slot:"options",columns:t.columns,"button-text":"report.Global.Button.ColumnFilter"},slot:"options"}),t._v(" "),r("report-view",{staticClass:"customer-table",attrs:{loading:t.isLoading,"row-operation":t.rowOperation,data:t.clientList,columns:t.columns,queries:t.queryItems,"expand-key":"MTAccount"},on:{search:t.handleSearch,"current-change":t.handlePageChange,"cell-click":t.handleCellClick,"sort-change":t.handleSortChange}}),t._v(" "),r("el-dialog",{staticClass:"pop-type-set",attrs:{visible:t.dialogVisible,"append-to-body":"","close-on-click-modal":!1,"show-close":!1,"custom-class":"customer-list-dialog"},on:{"update:visible":function(e){t.dialogVisible=e},closed:t.onCloseDialog}},[t.step1?r("div",[r("h3",{staticClass:"dialog-title"},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.WarnText0")))]),t._v(" "),r("div",{staticClass:"img-box"},[r("img",{staticClass:"warn-img",attrs:{src:t.wangimg,alt:"warning"}})]),t._v(" "),r("div",{staticClass:"wanging-content"},[r("p",{staticClass:"wanging-text"},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.WarnText1")))]),t._v(" "),r("p",{staticClass:"wanging-text"},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.WarnText2")))])]),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"info",round:""},on:{click:t.closePopFn}},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.OffDialog")))]),t._v(" "),r("el-button",{class:{"disabled-class":t.Time},attrs:{type:"primary",round:""},on:{click:t.toNextStep}},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.SubmitBtn"))+" "),t.Time?r("span",[t._v("( "+t._s(t.Time+"S")+" )")]):t._e()])],1)]):t._e(),t._v(" "),t.step2?r("div",[r("h3",{staticClass:"dialog-title"},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.Title")))]),t._v(" "),t.IBtradeList.prime.length>1?r("div",{staticClass:"point-select prime-select"},[r("form-item",{attrs:{label:t.convertText("report.CustomerList.Operation.Edit.Prime")}},[r("el-select",{attrs:{value:t.handlerShowData(t.formData.NewPrimeMtGroup,"prime"),placeholder:t.convertText("report.CustomerList.Operation.Edit.Select")},on:{change:function(e){return t.setFormData(e,"NewPrimeMtGroup")}}},t._l(t.IBtradeList.prime,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:!(!t.clientTradeFilter.prime.MtGroup||""!==e.value)}})}),1)],1)],1):t._e(),t._v(" "),t.IBtradeList.ecn.length>1?r("div",{staticClass:"point-select ecn-select"},[r("form-item",{attrs:{label:t.convertText("report.CustomerList.Operation.Edit.Ecn")}},[r("el-select",{attrs:{value:t.handlerShowData(t.formData.NewECNMtGroup,"ecn"),placeholder:t.convertText("report.CustomerList.Operation.Edit.Select")},on:{change:function(e){return t.setFormData(e,"NewECNMtGroup")}}},t._l(t.IBtradeList.ecn,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:!(!t.clientTradeFilter.ecn.MtGroup||""!==e.value)}})}),1)],1)],1):t._e(),t._v(" "),r("ul",{staticClass:"commit-wrap"},t._l(t.dialogText,function(e){return r("li",{key:e,staticClass:"commit-item"},[r("span",{staticClass:"commit-text"},[t._v(t._s(e))])])}),0),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"info",round:""},on:{click:t.closePopFn}},[t._v(t._s(t.convertText("report.CustomerList.Operation.Edit.OffDialog")))]),t._v(" "),r("el-button",{class:{"disabled-class":t.Time},attrs:{type:"primary",round:"",loading:t.isChangeGroupApiLoading},on:{click:t.handlerSubmit}},[t._v("\n                    "+t._s(t.convertText("report.CustomerList.Operation.Edit.SubmitBtn"))+" "),t.Time?r("span",[t._v("( "+t._s(t.Time+"S")+" )")]):t._e()])],1)]):t._e()]),t._v(" "),r("app-confirm",{staticClass:"control-copytrade",attrs:{visible:t.visible,title:"COPYTRADE","confirm-label":t.$t("global.Confirmed")},on:{close:t.handleCloseControl,confirm:t.handleConfirmControl}},[r("div",{staticClass:"pop-copytrade-control"},[r("div",{staticClass:"pop-copytrade-content"},[r("p",{staticClass:"copytrade-text"},[t._v(t._s(t.convertText("accountManagement.SettingCopyTrade.Content")))])]),t._v(" "),r("div",{staticClass:"radio-list",on:{click:function(){t.control="1"}}},[r("p",[t._v(t._s(t.convertText("accountManagement.SettingCopyTrade.Open")))]),t._v(" "),r("el-radio",{staticClass:"control-radio-label",attrs:{label:"1"},model:{value:t.control,callback:function(e){t.control=e},expression:"control"}})],1),t._v(" "),r("div",{staticClass:"radio-list",on:{click:function(){t.control="0"}}},[r("p",[t._v(t._s(t.convertText("accountManagement.SettingCopyTrade.Close")))]),t._v(" "),r("el-radio",{staticClass:"control-radio-label",attrs:{label:"0"},model:{value:t.control,callback:function(e){t.control=e},expression:"control"}})],1)])])],1):t._e()},i=[],n=(r("8e6e"),r("456d"),r("75fc")),o=(r("ac6a"),r("7514"),r("bd86")),s=(r("96cf"),r("3b8d")),c=r("d225"),l=r("b0b4"),u=r("308d"),p=r("6bb5"),m=r("4e2b"),d=r("9ab4"),b=r("60a3"),f=r("4bb5"),v=r("02b4"),h=r("5e04"),g=r("66cf"),C=r("58d1"),y=r("9726"),O=r("8c67"),A=r("b911"),T=r("5e31"),w=r("7929"),S=r("fb29"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pop-confirm"},[r("div",{staticClass:"pop-title"},[t._v("\n    "+t._s(t.popTitle)+"\n  ")]),t._v(" "),r("div",{staticClass:"pop-content"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"pop-bottom"},[r("el-button",{staticClass:"pop-btn cancel-btn",attrs:{round:""},on:{click:t.handleCancel}},[t._v(t._s(t.$t("pay.Global.Cancel")))]),t._v(" "),r("el-button",{staticClass:"pop-btn submit-btn",attrs:{disabled:!!t.timer.time,round:""},on:{click:t.handleSubmit}},[t._v(t._s(t.$t("pay.Global.Confirm"))+" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.timer.time,expression:"timer.time"}]},[t._v("("+t._s(t.timer.time)+"s)")])])],1)])},L=[],x=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.timer={time:0,obj:null},t}return Object(m["a"])(e,t),Object(l["a"])(e,[{key:"handleAccountChange",value:function(){this.value&&this.Time()}},{key:"Time",value:function(){var t=this;clearInterval(this.timer.obj),this.timer.time=5,this.timer.obj=setInterval(function(){t.timer.time-1||clearInterval(t.timer.obj),--t.timer.time},1e3)}},{key:"handleCancel",value:function(){this.$emit("close")}},{key:"handleSubmit",value:function(){this.timer.time||(this.$emit("submit"),this.$emit("close"))}},{key:"beforeMount",value:function(){this.Time()}}]),e}(b["d"]);Object(d["a"])([Object(b["c"])({default:function(){return!1}})],x.prototype,"value",void 0),Object(d["a"])([Object(b["c"])({default:function(){return""}})],x.prototype,"popTitle",void 0),Object(d["a"])([Object(b["e"])("value")],x.prototype,"handleAccountChange",null),x=Object(d["a"])([b["a"]],x);var k=x,N=k,j=(r("ff10"),r("2877")),I=Object(j["a"])(N,D,L,!1,null,"deb44884",null),P=I.exports,U=r("3076"),B=r("9eb8"),E=r("1f14"),_=[{type:B["b"].Select,prop:"DirectStatus",label:"report.CustomerList.Query.DirectStatus.Label",default:E["b"].None,options:[{label:"report.CustomerList.Query.DirectStatus.Default",value:E["b"].None},{label:"report.CustomerList.Query.DirectStatus.Option1",value:E["b"].Direct}]},{type:B["b"].Text,prop:"MemberName",label:"report.CustomerList.Query.Account.Label",default:"",nonzero:!0}],M=[{prop:"UUID",label:"UUID",visible:!0,visibleLocked:!0,width:100},{prop:"MemberName",label:"report.CustomerList.Column.MemberName",visible:!0,fit:!0,width:110},{prop:"TotalCustomer",label:"MT4",align:"center",class:function(t){return isNaN(+t)?"":+t>0?"cell-clickable":""},visible:!0,width:120},{prop:"SuperiorUUID",label:"report.CustomerList.Column.SuperiorUUID",visible:!1,width:110,formatter:function(t){if(!t)return"";var e=t+"";return e}},{prop:"BindBankCardStatus",label:"report.CustomerList.Column.BindBankCardStatus",visible:!0,width:120,formatter:h["a"].bindBankCardStatus},{prop:"AccountStatus",label:"report.CustomerList.Column.AccountStatus",visible:!1,width:130,formatter:h["a"].accountStatus},{prop:"Mobile",label:"report.CustomerList.Column.Phone",visible:!0,align:"center",fit:!0,width:160,sortable:!0},{prop:"Email",label:"report.CustomerList.Column.Email",visible:!0,align:"center",fit:!0,width:172,sortable:!0},{prop:"TradeBalance",label:"report.CustomerList.Column.TradeBalance",visible:!1,align:"right",width:120,formatter:h["a"].numberWithDigits},{prop:"WalletBalance",label:"report.CustomerList.Column.WalletBalance",visible:!1,align:"right",width:125,formatter:h["a"].numberWithDigits},{prop:"CreateTimeStamps",label:"report.CustomerList.Column.CreateTimeStamps",visible:!0,align:"center",width:172,sortable:!0,formatter:h["a"].dateTime},{prop:"LastLoginTimeStamp",label:"report.CustomerList.Column.LastLoginTimeStamp",visible:!0,align:"center",width:172,sortable:!0,formatter:h["a"].dateTime}],G=r("de0b"),R=r.n(G);function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach(function(e){Object(o["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var K=new v["a"],q=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.isLoading=!1,t.isChangeGroupApiLoading=!1,t.rowOperation={},t.queries=_,t.columns=M,t.dialogVisible=!1,t.parser=h["a"],t.wangimg=R.a,t.visible=!1,t.timerReload=null,t.comparedSet=0,t.control="",t.queryData={MemberName:"",DirectStatus:0,Pager:{PageIndex:1,PageSize:10,OrderBy:[]}},t.Time=5,t.timer=null,t.step1=!0,t.step2=!1,t.editAccoutData={},t.formData={NewPrimeMtGroup:"",NewECNMtGroup:"",UUID:""},t.IBtradeList={ecn:[],prime:[]},t.dialogText=[],t.isAppReady=!1,t.isOpenConfirmPop=!1,t.sendDataControl={SubUid:0,CopyTradeStatus:0},t}return Object(m["a"])(e,t),Object(l["a"])(e,[{key:"beforeMount",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("beforeMount"),t.prev=1,t.next=4,this.getInviteList();case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](1),t.abrupt("return",this.$message.error(t.t0.message));case 9:this.initData(),this.handlerRowOperation(),this.isAppReady=!0;case 12:case"end":return t.stop()}},t,this,[[1,6]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"saveQueries",value:function(){this.queries=Object(g["i"])(this.queries,V({},this.queryData))}},{key:"handlePageChange",value:function(t){this.queryData.Pager.PageIndex=t,this.reloadList()}},{key:"handleSearch",value:function(t){var e=t.DirectStatus,r=t.MemberName;this.queryData.MemberName=r.trim(),this.queryData.DirectStatus=e,this.queryData.Pager.PageIndex=1,this.reloadList()}},{key:"handleSortChange",value:function(t){var e=t.SortName,r=t.SortOrder;console.log("handleSortChange"),this.queryData.Pager.PageIndex=1,void 0!==r&&(this.queryData.Pager.OrderBy=[{Field:e,Type:r}]),this.reloadList()}},{key:"reloadList",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=V({SearchCondition:{MemberName:this.queryData.MemberName,DirectStatus:this.queryData.DirectStatus}},this.queryData.Pager),this.isLoading=!0,t.prev=2,t.next=5,this.getClientList(e);case 5:this.saveQueries(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.$message.error(t.t0.message);case 11:return t.prev=11,this.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}},t,this,[[2,8,11,14]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"toNextStep",value:function(){if(this.Time)return!1;this.step2=!0,this.step1=!1,this.Time=5,this.tiemFn(+this.Time)}},{key:"onCloseDialog",value:function(){this.step2=!1,this.step1=!0,this.Time=5,clearTimeout(this.timer)}},{key:"closePopFn",value:function(){this.dialogVisible=!1}},{key:"handlerSubmit",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.Time){t.next=2;break}return t.abrupt("return",!1);case 2:if(this.formData.NewPrimeMtGroup||this.formData.NewECNMtGroup){t.next=4;break}return t.abrupt("return",this.$message.error(this.convertText("report.CustomerList.Operation.Edit.SelectError")));case 4:this.isOpenConfirmPop=!0,this.submit();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"submit",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isChangeGroupApiLoading=!0,t.prev=1,t.next=4,K.changeAccountMTGroup(this.formData);case 4:this.closePopFn(),this.reloadList(),this.$message.success(this.convertText("report.CustomerList.Operation.Edit.SubmitBtn")),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),this.$message.error(t.t0.message);case 12:return t.prev=12,this.isOpenConfirmPop=!1,this.isChangeGroupApiLoading=!1,t.finish(12);case 16:case"end":return t.stop()}},t,this,[[1,9,12,16]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"handlerRowOperation",value:function(){var t=this;this.rowOperation={label:"",width:80,align:"right",actions:[{label:"",class:function(){return"el-icon-edit"},callback:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(r){var a,i,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=r.SuperiorUUID,i=r.UUID,n=t.accountInfo.UUID,!a||!n||n!==a){e.next=21;break}return e.prev=3,t.isLoading=!0,e.next=7,t.getClientTradeList({UUID:i});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),t.$message.error(e.t0.message);case 12:return e.prev=12,t.isLoading=!1,e.finish(12);case 15:return t.formData.NewPrimeMtGroup=t.clientTradeFilter.prime.MtGroup,t.formData.NewECNMtGroup=t.clientTradeFilter.ecn.MtGroup,t.formData.UUID=i,t.tiemFn(+t.Time),t.dialogVisible=!0,e.abrupt("return");case 21:case"end":return e.stop()}},e,null,[[3,9,12,15]])}));function r(t){return e.apply(this,arguments)}return r}(),permission:function(e){var r=e.SuperiorUUID,a=e.TotalCustomer,i=t.accountInfo.UUID;return a&&r&&i&&i===r}},{label:"",class:function(){return"icon-operation"},callback:function(e){var r=e.MemberID,a=e.CopyTradeStatus;t.visible=!0,1===a?(t.control="1",t.comparedSet=1):(t.control="0",t.comparedSet=2),t.sendDataControl.SubUid=r},permission:function(e){var r=e.SuperiorUUID,a=(e.TotalCustomer,t.accountInfo.UUID);return r&&a&&a===r}}]}}},{key:"tiemFn",value:function(t){var e=this;t>=0&&(this.timer=setTimeout(function(){t--,e.Time=t,e.tiemFn(t)},1e3)),t<=0&&(this.Time="",clearTimeout(this.timer))}},{key:"setFormData",value:function(t,e){this.formData[e]=t}},{key:"handlerShowData",value:function(t,e){var r=this.IBtradeList[e].find(function(e){return e.value===t});if(!r){var a=this.clientTradeFilter[e],i=a.MtGroup,n=a.Spread,o=a.Commission;return this.formatSC(i,n,o)}return r.value}},{key:"formatSC",value:function(t,e,r){var a=this.parser.mtGroupType(t),i=this.convertText("report.CustomerList.Operation.Edit.Spread"),n=this.convertText("report.CustomerList.Operation.Edit.Commission");return"".concat(a,": ").concat(i).concat(e,"/").concat(n).concat(r)}},{key:"handleCellClick",value:function(t){var e=Object.assign({},t),r=(e.label,e.value,e.prop,e.row);this.$router.push({name:"management-customer-info",params:{account:r.UUID,name:r.MemberName}})}},{key:"initData",value:function(){var t=this,e=this.inviteList,r=e.clinetEcnList,a=e.clinetPrimeList;this.IBtradeList.ecn=r.map(function(e){var r=e.InviterMTGroup,a=void 0===r?"":r,i=e.Spread,n=e.Commission;return{label:t.formatSC(a,i,n),value:e.InviterMTGroup}}),this.IBtradeList.prime=a.map(function(e){var r=e.InviterMTGroup,a=void 0===r?"":r,i=e.Spread,n=e.Commission;return{label:t.formatSC(a,i,n),value:e.InviterMTGroup}}),this.IBtradeList.prime.unshift({label:this.convertText("report.CustomerList.Operation.Edit.Select"),value:""}),this.IBtradeList.ecn.unshift({label:this.convertText("report.CustomerList.Operation.Edit.Select"),value:""}),this.dialogText=[this.convertText("report.CustomerList.Operation.Edit.TextItem0"),this.convertText("report.CustomerList.Operation.Edit.TextItem1"),this.convertText("report.CustomerList.Operation.Edit.TextItem2"),this.convertText("report.CustomerList.Operation.Edit.TextItem3")]}},{key:"handleCloseControl",value:function(){this.visible=!1}},{key:"handleConfirmControl",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(1===+this.control?this.sendDataControl.CopyTradeStatus=1:this.sendDataControl.CopyTradeStatus=2,!(1===+this.control&&1===this.comparedSet||0===+this.control&&2===this.comparedSet)){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,K.setCopyTradeVisuable(this.sendDataControl);case 6:this.visible=!1,this.$message.success(this.convertText("accountManagement.SettingCopyTrade.Success")),this.timerReload=setTimeout(this.reloadPage,2e3),t.next=15;break;case 11:return t.prev=11,t.t0=t["catch"](3),t.abrupt("return",this.$message.error(t.t0.message));case 15:return t.prev=15,this.$router.push({name:"management-customer-list"}),this.visible=!1,t.finish(15);case 19:case"end":return t.stop()}},t,this,[[3,11,15,19]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"reloadPage",value:function(){this.$router.go(0)}},{key:"beforeDestroy",value:function(){clearTimeout(this.timerReload)}},{key:"filterQueryData",get:function(){return V({},this.queryData.SearchCondition,{},this.queryData.Pager)}},{key:"clientTradeFilter",get:function(){var t=new y["a"],e=new y["a"],r=new y["a"];return this.clientTradeList.forEach(function(a){var i=h["a"].mtGroupType(a.MtGroup).toLocaleLowerCase();i.indexOf("prime")>-1?e=a:i.indexOf("ecn")>-1?t=a:r=a}),{ecn:t,prime:e,other:r}}},{key:"queryItems",get:function(){var t=Object(n["a"])(this.queries);return t}}]),e}(Object(b["b"])(C["a"]));Object(d["a"])([Object(f["a"])("AccountStore").State],q.prototype,"accountInfo",void 0),Object(d["a"])([Object(f["a"])("UserStore").State],q.prototype,"inviteList",void 0),Object(d["a"])([Object(f["a"])("UserStore").Action],q.prototype,"getInviteList",void 0),Object(d["a"])([Object(f["a"])("ClientManagementStore").State],q.prototype,"clientList",void 0),Object(d["a"])([Object(f["a"])("ClientManagementStore").Action],q.prototype,"getClientList",void 0),Object(d["a"])([Object(f["a"])("ClientManagementStore").State],q.prototype,"clientTradeList",void 0),Object(d["a"])([Object(f["a"])("ClientManagementStore").Action],q.prototype,"getClientTradeList",void 0),q=Object(d["a"])([Object(b["a"])({metaInfo:function(){return{title:"KVB PRIME"}},components:{AppView:O["a"],ReportTableSwitch:T["a"],ReportView:w["a"],FormItem:S["a"],SecondPop:P,PopTemplate:U["a"],AppConfirm:A["a"]}})],q);var Y=q,W=Y,z=(r("db18"),Object(j["a"])(W,a,i,!1,null,"1574a32e",null));e["default"]=z.exports},ff10:function(t,e,r){"use strict";var a=r("c52d"),i=r.n(a);i.a}}]);