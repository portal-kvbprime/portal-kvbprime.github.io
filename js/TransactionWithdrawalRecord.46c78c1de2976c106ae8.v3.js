(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TransactionWithdrawalRecord"],{"0e4a":function(e,t,a){},"1f14":function(e,t,a){"use strict";var r,i,n,o,l,u,c,d,s,h,p,b,w,f;a.d(t,"c",function(){return i}),a.d(t,"f",function(){return n}),a.d(t,"g",function(){return o}),a.d(t,"e",function(){return l}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return b}),a.d(t,"b",function(){return w}),function(e){e[e["ascending"]=0]="ascending",e[e["descending"]=1]="descending"}(r||(r={})),function(e){e[e["All"]=0]="All",e[e["BliyPay"]=1]="BliyPay",e[e["OfflinePay"]=2]="OfflinePay",e[e["Transfer"]=3]="Transfer",e[e["NewBit"]=4]="NewBit",e[e["Usdt"]=5]="Usdt",e[e["LocalBank"]=6]="LocalBank",e[e["PM"]=7]="PM"}(i||(i={})),function(e){e["UnKnow"]="0",e["NotArrived"]="1",e["Arrived"]="3|5",e["Invalid"]="4"}(n||(n={})),function(e){e[e["All"]=0]="All",e[e["BackCard"]=1]="BackCard",e[e["Transfer"]=2]="Transfer",e[e["NewBit"]=3]="NewBit",e[e["Usdt"]=5]="Usdt",e[e["LocalBank"]=6]="LocalBank",e[e["PM"]=7]="PM"}(o||(o={})),function(e){e["All"]="0",e["UnReview"]="1|2|3",e["Reviewed"]="2",e["Paying"]="3",e["Paid"]="4",e["Invalid"]="5"}(l||(l={})),function(e){e[e["USDCNY"]=0]="USDCNY"}(u||(u={})),function(e){e[e["BlockTranshub"]=1]="BlockTranshub",e[e["Alipay"]=2]="Alipay",e[e["BliyPay"]=3]="BliyPay",e[e["PayTrust"]=3]="PayTrust",e[e["USDT"]=4]="USDT",e[e["NganLuong"]=99]="NganLuong",e[e["BankcardTransfer"]=1]="BankcardTransfer"}(c||(c={})),function(e){e[e["CNY"]=0]="CNY",e[e["HKD"]=1]="HKD",e[e["USD"]=2]="USD",e[e["TWD"]=3]="TWD",e[e["NB"]=4]="NB"}(d||(d={})),function(e){e[e["UUID"]=1]="UUID",e[e["MT4Account"]=2]="MT4Account"}(s||(s={})),function(e){e[e["None"]=0]="None",e[e["Sales"]=1]="Sales",e[e["Client"]=2]="Client",e[e["AAA"]=3]="AAA",e[e["AA"]=4]="AA",e[e["A"]=5]="A",e[e["B"]=6]="B"}(h||(h={})),function(e){e[e["None"]=0]="None",e[e["Disabled"]=1]="Disabled",e[e["Succuss"]=3]="Succuss"}(p||(p={})),function(e){e[e["None"]=0]="None",e[e["Prime"]=1]="Prime",e[e["Ecn"]=2]="Ecn"}(b||(b={})),function(e){e[e["None"]=0]="None",e[e["Direct"]=1]="Direct"}(w||(w={})),function(e){e[e["NO"]=0]="NO",e[e["NOTrade"]=1]="NOTrade",e[e["NotFirstTime"]=2]="NotFirstTime"}(f||(f={}))},"7eb2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-view",{staticClass:"withdrawal-record",attrs:{title:e.title}},[a("report-table-switch",{attrs:{slot:"options",columns:e.columns,"button-text":"report.Global.Button.ColumnFilter"},slot:"options"}),e._v(" "),a("report-view",{attrs:{loading:e.isLoading,data:e.withdrawRecord,columns:e.columns,queries:e.queries,"expand-key":"ID"},on:{search:e.handleSearch,"current-change":e.handlePageChange,"sort-change":e.handleSortChange}})],1)},i=[],n=(a("7f7f"),a("28a5"),a("96cf"),a("3b8d")),o=a("d225"),l=a("b0b4"),u=a("308d"),c=a("6bb5"),d=a("4e2b"),s=a("9ab4"),h=a("60a3"),p=a("4bb5"),b=a("ce75"),w=a("db45"),f=a("8c67"),m=a("66cf"),v=a("5e31"),y=a("7929"),g=a("5e04"),W=a("9eb8"),S=a("1f14"),A=[{type:W["b"].DateRange,prop:"days",label:"report.Global.Query.Times.Label",default:Object(m["g"])("nearly-1-week"),shortcuts:m["b"]},{type:W["b"].Select,prop:"WithdrawlType",label:"",default:S["g"].All,options:[{label:"report.WithdrawalRecord.Query.WithdrawTypeAll",value:S["g"].All},{label:"enum.WithdrawType.Bank",value:S["g"].BackCard},{label:"enum.WithdrawType.DigitalWallet",value:S["g"].NewBit},{label:"enum.WithdrawType.USDT",value:S["g"].Usdt}]},{type:W["b"].Select,prop:"WithdrawalStatus",label:"report.WithdrawalRecord.Column.Status",default:"0",options:[{label:"report.WithdrawalRecord.Query.WithdrawalStatusAll",value:S["e"].All},{label:"enum.WithdrawStatus.UnReview",value:S["e"].UnReview},{label:"enum.WithdrawStatus.Paid",value:S["e"].Paid},{label:"enum.WithdrawStatus.Invalid",value:S["e"].Invalid}]}],D=[{type:W["b"].DateRange,prop:"days",label:"report.Global.Query.Times.Label",default:Object(m["g"])("nearly-1-week"),shortcuts:m["b"]},{type:W["b"].Select,prop:"WithdrawlType",label:"",default:S["g"].All,options:[{label:"report.WithdrawalRecord.Query.WithdrawTypeAll",value:S["g"].All},{label:"enum.WithdrawType.Bank",value:S["g"].BackCard},{label:"enum.WithdrawType.DigitalWallet",value:S["g"].NewBit},{label:"enum.WithdrawType.USDT",value:S["g"].Usdt}]},{type:W["b"].Select,prop:"WithdrawalStatus",label:"report.WithdrawalRecord.Column.Status",default:"0",options:[{label:"report.WithdrawalRecord.Query.WithdrawalStatusAll",value:S["e"].All},{label:"enum.WithdrawStatus.UnReview",value:S["e"].UnReview},{label:"enum.WithdrawStatus.Paid",value:S["e"].Paid},{label:"enum.WithdrawStatus.Invalid",value:S["e"].Invalid}]},{type:W["b"].Text,prop:"Account",label:"report.MAList.Query.Account.Label",default:"",nonzero:!0}],R=[{prop:"ID",label:"report.WithdrawalRecord.Column.Number",visible:!0,visibleLocked:!0,align:"left",width:95},{prop:"WithdrawalType",label:"report.WithdrawalRecord.Column.Type",visible:!0,align:"center",width:80,formatter:g["a"].withdrawlType},{prop:"USDAmount",label:"report.WithdrawalRecord.Column.WithdrawAmount",visible:!0,width:165,align:"right",fit:!0,formatter:g["a"].number},{prop:"WithdrawCurrency",label:"report.WithdrawalRecord.Column.WithdrawCurrency",visible:!1,align:"center",width:180,formatter:function(e,t){var a=t||{},r=a.Currency,i=void 0===r?"":r;return i?"USD":""}},{prop:"RMBAmount",label:"report.WithdrawalRecord.Column.ArrivedAmount",visible:!0,width:165,align:"right",sortable:!0,fit:!0,formatter:g["a"].numberWithDigits},{prop:"Currency",label:"report.WithdrawalRecord.Column.ArrivedCoin",align:"center",visible:!0,width:160},{prop:"WithdrawalStatus",label:"report.WithdrawalRecord.Column.Status",visible:!0,width:100,align:"center",sortable:!1,formatter:g["a"].withdrawlStatus},{prop:"Rate",label:"report.WithdrawalRecord.Column.Rate",visible:!1,width:140,align:"center",sortable:!0,formatter:g["a"].numberWithDigits},{prop:"BankCardNo",label:"report.WithdrawalRecord.Column.WithdrawAccount",visible:!1,width:150,align:"center"},{prop:"Fee",label:"report.WithdrawalRecord.Column.Fee",visible:!1,width:140,align:"center",sortable:!0,formatter:g["a"].number},{prop:"CreateTime",label:"report.WithdrawalRecord.Column.Time",visible:!0,width:160,align:"center",sortable:!0,formatter:g["a"].dateTime}],T=[{prop:"ID",label:"report.WithdrawalRecord.Column.Number",visible:!0,visibleLocked:!0,width:95},{prop:"Account",label:"report.WithdrawalRecord.Column.MT4",visible:!0,width:150,html:function(e){return"<div>\n        <p>".concat(e.Account,"</p>\n        <p>").concat(e.AccountName,"</p>\n      </div>")}},{prop:"WithdrawalType",label:"report.WithdrawalRecord.Column.Type",visible:!0,width:85,formatter:g["a"].withdrawlType},{prop:"WithdrawalStatus",label:"report.WithdrawalRecord.Column.Status",visible:!1,width:70,align:"center",sortable:!1,formatter:g["a"].withdrawlStatus},{prop:"USDAmount",label:"report.WithdrawalRecord.Column.WithdrawAmount",visible:!0,width:165,align:"right",formatter:g["a"].number,html:function(e){return"<div>\n        <p>".concat(g["a"].number(e.USDAmount,e),"</p>\n        <p>").concat(e.Currency?"USD":"","</p>\n      </div>")}},{prop:"RMBAmount",label:"report.WithdrawalRecord.Column.ArrivedAmount",visible:!0,width:165,align:"right",sortable:!0,html:function(e){return"<div>\n        <p>".concat(g["a"].numberWithDigits(e.RMBAmount,e),"</p>\n        <p>").concat(e.Currency,"</p>\n      </div>")}},{prop:"Rate",label:"report.WithdrawalRecord.Column.Rate",visible:!1,width:140,align:"right",sortable:!0,formatter:g["a"].numberWithDigits},{prop:"Fee",label:"report.WithdrawalRecord.Column.Fee",visible:!1,width:140,align:"right",sortable:!0,formatter:g["a"].number},{prop:"CreateTime",label:"report.WithdrawalRecord.Column.Time",visible:!0,width:159,align:"center",sortable:!0,formatter:g["a"].dateTime}],C=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.isLoading=!1,e.columns=[],e.queries=[],e.queryDays=[],e.queryData={SearchCondition:{StartDate:0,EndDate:0,WithdrawlType:0,WithdrawalStatus:[0],Account:""},PageIndex:1,PageSize:10,OrderBy:[]},e.ibUUID="",e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"saveQueries",value:function(){}},{key:"reloadList",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.isOwnRecord,t=this.isNormalUser,this.isOwnRecord&&(this.queryData.SearchCondition.Account=t?"":this.ibUUID),e.prev=3,e.next=6,this.getWithdrawRecord(this.queryData);case 6:this.saveQueries(),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](3);case 11:return e.prev=11,this.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}},e,this,[[3,9,11,14]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"handleSearch",value:function(e){var t=e.days,a=e.WithdrawlType,r=e.WithdrawalStatus,i=void 0===r?this.queryData.SearchCondition.WithdrawalStatus.join("|"):r,n=e.Account;this.queryDays=t,this.queryData.PageIndex=1,isNaN(+a)||(this.queryData.SearchCondition.WithdrawlType=a),this.queryData.SearchCondition.Account=n,this.queryData.SearchCondition.WithdrawalStatus=i.split("|").map(function(e){return+e}),this.queryData.SearchCondition.StartDate=Object(m["c"])(t&&t[0]),this.queryData.SearchCondition.EndDate=Object(m["c"])(t&&t[1],!0),this.reloadList()}},{key:"handlePageChange",value:function(e){this.queryData.PageIndex=e,this.reloadList()}},{key:"handleSortChange",value:function(e){var t=e.SortName,a=e.SortOrder;this.queryData.PageIndex=1,this.queryData.OrderBy=[],void 0!==a&&(this.queryData.OrderBy=[{Field:t,Type:a}]),this.reloadList()}},{key:"beforeMount",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAccountInfo();case 2:t=this.accountInfo.UUID,this.ibUUID=t||"",console.log(this.ibUUID,"ibUUID"),this.reloadList(),"transaction-withdraw-record"!==this.$route.name?(this.queries=A.filter(function(e){if("WithdrawlType"===e.prop){var t=e.options;e.options=t&&t.filter(function(e){return"CN"===a.ENV_TYPE||3!==e.value})}return!0}),this.columns=R):(this.queryData.SearchCondition.WithdrawalStatus=[0],this.queries=D.filter(function(e){if("WithdrawlType"===e.prop){var t=e.options;e.options=t&&t.filter(function(e){return"CN"===a.ENV_TYPE||3!==e.value})}return!0}),this.columns=T);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"title",get:function(){this.isOwnRecord;var e=this.isNormalUser;return this.isOwnRecord?e?"report.WithdrawalRecord.Title.Record":"report.WithdrawalRecord.Title.Details":"report.WithdrawalRecord.Title.Record"}}]),t}(Object(h["b"])(b["a"],w["a"]));Object(s["a"])([Object(p["a"])("FundStore").State],C.prototype,"withdrawRecord",void 0),Object(s["a"])([Object(p["a"])("FundStore").Action],C.prototype,"getWithdrawRecord",void 0),Object(s["a"])([Object(p["a"])("AccountStore").State],C.prototype,"accountInfo",void 0),Object(s["a"])([Object(p["a"])("AccountStore").Action],C.prototype,"getAccountInfo",void 0),C=Object(s["a"])([Object(h["a"])({components:{AppView:f["a"],ReportTableSwitch:v["a"],ReportView:y["a"]}})],C);var O=C,U=O,N=(a("e0d6"),a("2877")),B=Object(N["a"])(U,r,i,!1,null,"e1cd6cb8",null);t["default"]=B.exports},db45:function(e,t,a){"use strict";a("7f7f");var r=a("d225"),i=a("b0b4"),n=a("308d"),o=a("6bb5"),l=a("4e2b"),u=a("9ab4"),c=a("60a3"),d=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"isOwnRecord",get:function(){var e=this.$route.name,t=void 0===e?"":e;return/^pay-/.test(t)}}]),t}(c["d"]);d=Object(u["a"])([c["a"]],d);var s,h,p=d,b=p,w=a("2877"),f=Object(w["a"])(b,s,h,!1,null,null,null);t["a"]=f.exports},e0d6:function(e,t,a){"use strict";var r=a("0e4a"),i=a.n(r);i.a}}]);