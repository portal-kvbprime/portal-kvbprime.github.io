(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["openAccountFinancialInfo"],{"06a9":function(e,t,a){"use strict";var l=a("768b"),n=(a("ac6a"),a("396f")),i=["kyc.BooleanAnswer.False","kyc.BooleanAnswer.True"],o=[],r=[];n["a"].forEach(function(e){var t={title:e.title,list:[]},a={title:e.title,list:[]};e.list.forEach(function(e){var n=Object(l["a"])(e,3),i=n[0],o=n[1],r=n[2];t.list.push({label:i,value:o,remark:r}),a.list.push({label:"".concat(i," +").concat(r),value:r})}),o.push(t),r.push(a)});var c=[{label:"kyc.LeverageRatio.Option1",value:100},{label:"kyc.LeverageRatio.Option2",value:200},{label:"kyc.LeverageRatio.Option3",value:400},{label:"kyc.LeverageRatio.Option4",value:800}],u=[{label:"kyc.RegulatoryAuthority.Option1",value:"Seychelles"},{label:"kyc.RegulatoryAuthority.Option2",value:"FCA"},{label:"kyc.RegulatoryAuthority.Option3",value:"GM"}],s=[{label:"kyc.GenderTitle.Option1",value:1},{label:"kyc.GenderTitle.Option2",value:2},{label:"kyc.GenderTitle.Option3",value:3},{label:"kyc.GenderTitle.Option4",value:4},{label:"kyc.GenderTitle.Option5",value:5},{label:"kyc.GenderTitle.Option6",value:6},{label:"kyc.GenderTitle.Option7",value:7},{label:"kyc.GenderTitle.Option8",value:8}],p=Object.assign([],s.slice(2,8)),O=Object.assign([],s.slice(0,2)),d=[{label:"kyc.IdentityDocuments.Option1",value:3},{label:"kyc.IdentityDocuments.Option2",value:2},{label:"kyc.IdentityDocuments.Option3",value:1}],b=[{label:"kyc.EmployeeStatus.Option1",value:"1"},{label:"kyc.EmployeeStatus.Option2",value:"2"},{label:"kyc.EmployeeStatus.Option3",value:"3"},{label:"kyc.EmployeeStatus.Option4",value:"4"},{label:"kyc.EmployeeStatus.Option5",value:"5"}],y=[{label:"kyc.IncomeSources.Option1",value:"1"},{label:"kyc.IncomeSources.Option2",value:"2"},{label:"kyc.IncomeSources.Option3",value:"3"},{label:"kyc.IncomeSources.Option4",value:"4"},{label:"kyc.IncomeSources.Option5",value:"5"},{label:"kyc.IncomeSources.Option6",value:"6"}],v=[{label:"kyc.FieldOfStudy.Option1",value:"1"},{label:"kyc.FieldOfStudy.Option2",value:"2"},{label:"kyc.FieldOfStudy.Option3",value:"3"},{label:"kyc.FieldOfStudy.Option4",value:"4"},{label:"kyc.FieldOfStudy.Option5",value:"5"},{label:"kyc.FieldOfStudy.Option6",value:"6"},{label:"kyc.FieldOfStudy.Option7",value:"7"},{label:"kyc.FieldOfStudy.Option8",value:"8"},{label:"kyc.FieldOfStudy.Option9",value:"9"},{label:"kyc.FieldOfStudy.Option10",value:"10"},{label:"kyc.FieldOfStudy.Option11",value:"11"},{label:"kyc.FieldOfStudy.Option12",value:"12"},{label:"kyc.FieldOfStudy.Option13",value:"13"},{label:"kyc.FieldOfStudy.Option14",value:"14"},{label:"kyc.FieldOfStudy.Option15",value:"15"},{label:"kyc.FieldOfStudy.Option16",value:"16"},{label:"kyc.FieldOfStudy.Option17",value:"17"},{label:"kyc.FieldOfStudy.Option18",value:"18"},{label:"kyc.FieldOfStudy.Option19",value:"19"},{label:"kyc.FieldOfStudy.Option20",value:"20"},{label:"kyc.FieldOfStudy.Option21",value:"21"},{label:"kyc.FieldOfStudy.Option22",value:"22"},{label:"kyc.FieldOfStudy.Option23",value:"23"},{label:"kyc.FieldOfStudy.Option24",value:"24"},{label:"kyc.FieldOfStudy.Option25",value:"25"},{label:"kyc.FieldOfStudy.Option26",value:"26"},{label:"kyc.FieldOfStudy.Option27",value:"27"},{label:"kyc.FieldOfStudy.Option28",value:"28"},{label:"kyc.FieldOfStudy.Option29",value:"29"},{label:"kyc.FieldOfStudy.Option30",value:"30"},{label:"kyc.FieldOfStudy.Option31",value:"31"},{label:"kyc.FieldOfStudy.Option32",value:"32"},{label:"kyc.FieldOfStudy.Option33",value:"33"},{label:"kyc.FieldOfStudy.Option34",value:"34"},{label:"kyc.FieldOfStudy.Option35",value:"35"},{label:"kyc.FieldOfStudy.Option36",value:"36"},{label:"kyc.FieldOfStudy.Option37",value:"37"},{label:"kyc.FieldOfStudy.Option38",value:"38"},{label:"kyc.FieldOfStudy.Option39",value:"39"},{label:"kyc.FieldOfStudy.Option40",value:"40"},{label:"kyc.FieldOfStudy.Option41",value:"41"},{label:"kyc.FieldOfStudy.Option42",value:"42"},{label:"kyc.FieldOfStudy.Option43",value:"43"},{label:"kyc.FieldOfStudy.Option44",value:"44"},{label:"kyc.FieldOfStudy.Option45",value:"45"},{label:"kyc.FieldOfStudy.Option46",value:"46"},{label:"kyc.FieldOfStudy.Option47",value:"47"},{label:"kyc.FieldOfStudy.Option48",value:"48"},{label:"kyc.FieldOfStudy.Option49",value:"49"},{label:"kyc.FieldOfStudy.Option50",value:"50"},{label:"kyc.FieldOfStudy.Option51",value:"51"},{label:"kyc.FieldOfStudy.Option52",value:"52"},{label:"kyc.FieldOfStudy.Option53",value:"53"}],f=Object.assign([],v.slice(0,15)),k=Object.assign([],v.slice(15,v.length)),g=[{label:"kyc.PositionTitle.Option1",value:"1"},{label:"kyc.PositionTitle.Option2",value:"2"},{label:"kyc.PositionTitle.Option3",value:"3"},{label:"kyc.PositionTitle.Option4",value:"4"},{label:"kyc.PositionTitle.Option5",value:"5"}],h=[{label:"kyc.LevelOfEducation.Option1",value:"1"},{label:"kyc.LevelOfEducation.Option2",value:"2"},{label:"kyc.LevelOfEducation.Option3",value:"3"},{label:"kyc.LevelOfEducation.Option4",value:"4"},{label:"kyc.LevelOfEducation.Option5",value:"5"},{label:"kyc.LevelOfEducation.Option6",value:"6"}],m=[{label:"kyc.AssetsRange.Option1",value:"1"},{label:"kyc.AssetsRange.Option2",value:"2"},{label:"kyc.AssetsRange.Option3",value:"3"},{label:"kyc.AssetsRange.Option4",value:"4"},{label:"kyc.AssetsRange.Option5",value:"5"}],S=Object.assign([],m),j=Object.assign([],m),T=Object.assign([],m),F=[{label:"kyc.TimesOfTrading.Option1",value:"1"},{label:"kyc.TimesOfTrading.Option2",value:"2"},{label:"kyc.TimesOfTrading.Option3",value:"3"},{label:"kyc.TimesOfTrading.Option4",value:"4"}],A=[{label:"kyc.CountsOfTrading.Option1",value:"1"},{label:"kyc.CountsOfTrading.Option2",value:"2"},{label:"kyc.CountsOfTrading.Option3",value:"3"},{label:"kyc.CountsOfTrading.Option4",value:"4"}],I=Object.assign([],F),x=Object.assign([],A),w=Object.assign([],F),R=Object.assign([],A),V=Object.assign([],F),W=Object.assign([],A),C=[{label:"kyc.TheWayOfTrading.Option1",value:"1"},{label:"kyc.TheWayOfTrading.Option2",value:"2"},{label:"kyc.TheWayOfTrading.Option3",value:"3"}],D=[{label:"kyc.Purpose.Option1",value:"1"},{label:"kyc.Purpose.Option2",value:"2"},{label:"kyc.Purpose.Option3",value:"3"}],P=[{label:"kyc.DealingFunds.Option1",value:"1"},{label:"kyc.DealingFunds.Option2",value:"2"},{label:"kyc.DealingFunds.Option3",value:"3"},{label:"kyc.DealingFunds.Option4",value:"4"}],L=[{label:"kyc.LeverageAns.Option1",value:"1"},{label:"kyc.LeverageAns.Option2",value:"2"},{label:"kyc.LeverageAns.Option3",value:"3"}],N=[{label:"kyc.TypeOfClosingOrder.Option1",value:"1"},{label:"kyc.TypeOfClosingOrder.Option2",value:"2"},{label:"kyc.TypeOfClosingOrder.Option3",value:"3"}],E=[{label:"kyc.WhatIsAYard.Option1",value:"1"},{label:"kyc.WhatIsAYard.Option2",value:"2"},{label:"kyc.WhatIsAYard.Option3",value:"3"},{label:"kyc.WhatIsAYard.Option4",value:"4"}],B=[{label:"kyc.WhatShortPosition.Option1",value:"1"},{label:"kyc.WhatShortPosition.Option2",value:"2"},{label:"kyc.WhatShortPosition.Option3",value:"3"},{label:"kyc.WhatShortPosition.Option4",value:"4"}],$=[{label:"kyc.WhatBIDPrice.Option1",value:"1"},{label:"kyc.WhatBIDPrice.Option2",value:"2"},{label:"kyc.WhatBIDPrice.Option3",value:"3"},{label:"kyc.WhatBIDPrice.Option4",value:"4"}],_=[{label:"kyc.InvestmentGoal.Option1",value:"1"},{label:"kyc.InvestmentGoal.Option2",value:"2"},{label:"kyc.InvestmentGoal.Option3",value:"3"},{label:"kyc.InvestmentGoal.Option4",value:"4"}],G=[{label:"kyc.Understanding.Option1",value:"1"},{label:"kyc.Understanding.Option2",value:"2"},{label:"kyc.Understanding.Option3",value:"3"}],q=[{label:"kyc.WhyOpenAccount.Option1",value:"1"},{label:"kyc.WhyOpenAccount.Option2",value:"2"},{label:"kyc.WhyOpenAccount.Option3",value:"3"},{label:"kyc.WhyOpenAccount.Option4",value:"4"}],K=[{label:"kyc.TradeExp.Option1",value:"1"},{label:"kyc.TradeExp.Option2",value:"2"}],M=[{label:"kyc.Ans18Times.Option1",value:"1"},{label:"kyc.Ans18Times.Option2",value:"2"},{label:"kyc.Ans18Times.Option3",value:"3"}],U=[{label:"kyc.Ans18Counts.Option1",value:"1"},{label:"kyc.Ans18Counts.Option2",value:"2"}],Y=[{label:"kyc.BelowApply.Option1",value:"1"},{label:"kyc.BelowApply.Option2",value:"2"},{label:"kyc.BelowApply.Option3",value:"3"},{label:"kyc.BelowApply.Option4",value:"4"},{label:"kyc.BelowApply.Option5",value:"5"}],J=[{label:"kyc.ClientType.Option1",value:"1"},{label:"kyc.ClientType.Option2",value:"2"}],H=[{label:"kyc.AccountType.Option1",value:1},{label:"kyc.AccountType.Option2",value:2}],z=[{label:"leverage.TradeYear.Option1",value:"1"},{label:"leverage.TradeYear.Option2",value:"2"},{label:"leverage.TradeYear.Option3",value:"3"},{label:"leverage.TradeYear.Option4",value:"4"}],Q=[{label:"leverage.TradeTime.Option1",value:"1"},{label:"leverage.TradeTime.Option2",value:"2"},{label:"leverage.TradeTime.Option3",value:"3"},{label:"leverage.TradeTime.Option4",value:"4"}],X=[{label:"leverage.TradeNetWorth.Option1",value:"1"},{label:"leverage.TradeNetWorth.Option2",value:"2"},{label:"leverage.TradeNetWorth.Option3",value:"3"},{label:"leverage.TradeNetWorth.Option4",value:"4"},{label:"leverage.TradeNetWorth.Option5",value:"5"}];t["a"]={booleanAnswer:i,country:o,phoneArea:r,leverageRatio:c,regulatoryAuthority:u,genderTitle:s,genderTitleByUK:p,genderTitleByCN:O,identityDocuments:d,employeeStatus:b,incomeSources:y,fieldOfStudy:v,fieldOfStudyByCN:f,fieldOfStudyByUK:k,positionTitle:g,levelOfEducation:h,annualIncome:S,netWorth:j,netLiquidAssets:T,timesOfTrading:F,timesOfTradingAns1:I,timesOfTradingAns2:w,timesOfTradingAns3:V,countsOfTrading:A,countsOfTradingAns1:x,countsOfTradingAns2:R,countsOfTradingAns3:W,theWayOfTrading:C,purpose:D,dealingFunds:P,leverageAns:L,typeOfClosingOrder:N,whatIsAYard:E,whatShortPosition:B,whatBIDPrice:$,investmentGoal:_,understanding:G,clientType:J,accountType:H,leverForexExpYear:z,leverForexTradeFrequency:Q,leverNetWorth:X,whyOpenAccount:q,tradeExp:K,Ans18ExpTimes:M,Ans18ExpCounts:U,BelowApply:Y}},"0ac2":function(e,t,a){"use strict";var l=a("61f4"),n=a.n(l);n.a},"0ae4":function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return n});a("456d"),a("ac6a");var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,l=[];return a&&Object.keys(t).forEach(function(e,n){var i={KycType:a,KycKey:e,KycValue:JSON.stringify(t[e])};l[n]=i}),e&&sessionStorage.setItem(e,JSON.stringify(t)),l},n=function(e,t){var a=e.$router,l=e.$route,n=l.query,i=n.from,o=n.origin;return o?a.push({path:o,query:l.query}):i?a.push({name:i}):a.push(t)}},1361:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BoxContainerForSide",{attrs:{title:e.convertText("createAccount.Titles.Financial"),"extend-callback":e.goBack}},[a("form-item-group",[a("SelectValidator",{ref:"AnnualIncome",attrs:{labelName:e.convertText("createAccount.Financial.Annualincome"),selectorConfig:e.dataOptions,ruleList:["notSelect"]},model:{value:e.sendFormData.AnnualIncome,callback:function(t){e.$set(e.sendFormData,"AnnualIncome",t)},expression:"sendFormData.AnnualIncome"}}),e._v(" "),a("SelectValidator",{ref:"NetWorth",attrs:{labelName:e.convertText("createAccount.Financial.Netassets"),selectorConfig:e.dataOptions,ruleList:["notSelect"]},model:{value:e.sendFormData.NetWorth,callback:function(t){e.$set(e.sendFormData,"NetWorth",t)},expression:"sendFormData.NetWorth"}}),e._v(" "),a("SelectValidator",{ref:"NetLiquidAssets",attrs:{labelName:e.convertText("createAccount.Financial.NetLiquidAssets"),selectorConfig:e.dataOptions,ruleList:["notSelect"]},model:{value:e.sendFormData.NetLiquidAssets,callback:function(t){e.$set(e.sendFormData,"NetLiquidAssets",t)},expression:"sendFormData.NetLiquidAssets"}}),e._v(" "),a("div",{staticClass:"btn-wrapper"},[a("el-button",{staticClass:"g-main-btn el-btn-with-loading",attrs:{round:"",type:e.btnType,loading:e.isBtnLoading},on:{click:function(t){return e.postData(e.sendFormData)}}},[e._v("\n          "+e._s(e.isFromConfirmPage?e.convertText("createAccount.BtnContinue"):e.convertText("createAccount.Person.BtnNext"))+"\n        ")])],1)],1)],1)},n=[],i=(a("ac6a"),a("96cf"),a("3b8d")),o=a("d225"),r=a("b0b4"),c=a("308d"),u=a("6bb5"),s=a("4e2b"),p=a("9ab4"),O=a("60a3"),d=a("4bb5"),b=a("8c67"),y=a("f859"),v=a("fb29"),f=a("b77e"),k=a("06a9"),g=a("0ae4"),h=a("fe23"),m=a("fd56"),S=a("b334"),j=a("e76c"),T=a("8a2f"),F=a("58d1"),A=new T["a"],I=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.decideGoHomePage=S["e"],e.returnI18nText=S["k"],e.isFromConfirmPage=!1,e.name="financial-info",e.kycType=7,e.loadImg=Object(S["a"])(),e.isBtnLoading=!1,e.sendFormData={AnnualIncome:"",NetWorth:"",NetLiquidAssets:""},e.dataOptions={type:"select",placeholder:"",defaultValue:"",options:k["a"].annualIncome},e.registerConfig=k["a"],e}return Object(s["a"])(t,e),Object(r["a"])(t,[{key:"postData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==this.isBtnLoading){e.next=2;break}return e.abrupt("return");case 2:if(a=this.validateForm(this.$refs),a){e.next=5;break}return e.abrupt("return",this.$message.error(this.convertText("global.RuleMsg.Incomplete")));case 5:return l=Object(g["b"])(name,this.sendFormData,this.kycType),e.prev=6,this.loadImg.open(),this.isBtnLoading=!0,e.next=11,A.getSaveAccKycInfo(l);case 11:e.sent,e.next=18;break;case 14:return e.prev=14,e.t0=e["catch"](6),this.loadImg.close(),e.abrupt("return",this.$message.error(this.convertText(e.t0.message)));case 18:return e.prev=18,this.loadImg.close(),this.isBtnLoading=!1,e.finish(18);case 22:Object(g["a"])(this,"/open-account-trade-exp");case 23:case"end":return e.stop()}},e,this,[[6,14,18,22]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"beforeMount",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.accountInfo.ProcessingType,this.decideGoHomePage(t),this.$route.query.from&&(this.isFromConfirmPage=!0),this.initData();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"initData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={kycType:7},a={},this.sendFormData=Object.assign(this.sendFormData,a),e.prev=3,this.loadImg.open(),e.next=7,A.getAccKycInfo(t);case 7:l=e.sent,l.forEach(function(e){var t=e.KycKey,l=e.KycValue;a[t]=JSON.parse(l)}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),this.loadImg.close();case 14:return e.prev=14,this.loadImg.close(),e.finish(14);case 17:this.sendFormData=Object.assign(this.sendFormData,a);case 18:case"end":return e.stop()}},e,this,[[3,11,14,17]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.dataOptions.options=this.returnI18nText(this,this.dataOptions.options)}},{key:"goBack",value:function(){Object(g["a"])(this,"/open-account-job-info")}},{key:"btnType",get:function(){return this.sendFormData.AnnualIncome&&this.sendFormData.NetWorth&&this.sendFormData.NetLiquidAssets?"primary":"default"}}]),t}(Object(O["b"])(j["a"],F["a"]));Object(p["a"])([Object(d["a"])("AccountStore").State],I.prototype,"accountInfo",void 0),I=Object(p["a"])([Object(O["a"])({components:{AppView:b["a"],BoxContainerForSide:h["a"],FreeContainer:y["a"],FormItem:v["a"],FormItemGroup:f["a"],SelectValidator:m["a"]}})],I);var x=I,w=x,R=(a("4386"),a("2877")),V=Object(R["a"])(w,l,n,!1,null,"6e566d78",null);t["default"]=V.exports},"1a3d":function(e,t,a){"use strict";var l=a("a653"),n=a.n(l);n.a},4386:function(e,t,a){"use strict";var l=a("c69d"),n=a.n(l);n.a},"61f4":function(e,t,a){},"8a2f":function(e,t,a){"use strict";a("96cf");var l=a("3b8d"),n=a("d225"),i=a("b0b4"),o=a("308d"),r=a("6bb5"),c=a("4e2b"),u=a("9ab4"),s=a("b214"),p=a.n(s),O=function(e){function t(){return Object(n["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"getSaveAccInfo",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSaveAccKycInfo",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAccKycInfo",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSaveAccProfile",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p.a);Object(u["a"])([Object(s["PostRequest"])("/api/Upgrade/SaveAccountInfo")],O.prototype,"getSaveAccInfo",null),Object(u["a"])([Object(s["PostRequest"])("/api/Upgrade/SaveAccountKycInfo")],O.prototype,"getSaveAccKycInfo",null),Object(u["a"])([Object(s["GetRequest"])("/api/Upgrade/GetKycInfoByType")],O.prototype,"getAccKycInfo",null),Object(u["a"])([Object(s["PostRequest"])("/api/Upgrade/SaveAccountProfile")],O.prototype,"getSaveAccProfile",null),O=Object(u["a"])([s["ServiceRequest"]],O),t["a"]=O},a653:function(e,t,a){},c69d:function(e,t,a){},f859:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"free-container bf-container",style:"padding: "+e.paddingValue+"; margin: "+e.marginValue+"; background-color: "+e.bgc+"; box-shadow:"+e.shadow+" border:"+e.border+" "+e.custom},[e._t("default")],2)},n=[],i=(a("28a5"),a("d225")),o=a("b0b4"),r=a("308d"),c=a("6bb5"),u=a("4e2b"),s=a("9ab4"),p=a("60a3"),O=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"paddingValue",get:function(){var e=this.padding.split(" "),t=e[0]+"px "+e[1]+"px "+e[2]+"px "+e[3]+"px";return t}},{key:"marginValue",get:function(){var e=this.margin.split(" "),t=e[0]+"px "+e[1]+"px "+e[2]+"px "+e[3]+"px";return t}}]),t}(p["d"]);Object(s["a"])([Object(p["c"])({default:function(){return"0 0 0 0"}})],O.prototype,"padding",void 0),Object(s["a"])([Object(p["c"])({default:function(){return"0 0 0 0"}})],O.prototype,"margin",void 0),Object(s["a"])([Object(p["c"])({default:function(){return"transparent"}})],O.prototype,"bgc",void 0),Object(s["a"])([Object(p["c"])({default:function(){return""}})],O.prototype,"shadow",void 0),Object(s["a"])([Object(p["c"])({default:function(){return""}})],O.prototype,"border",void 0),Object(s["a"])([Object(p["c"])({default:function(){return""}})],O.prototype,"custom",void 0),O=Object(s["a"])([Object(p["a"])({})],O);var d=O,b=d,y=(a("0ac2"),a("2877")),v=Object(y["a"])(b,l,n,!1,null,"6d33761a",null);t["a"]=v.exports},fd56:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-item",{attrs:{label:e.$attrs.labelName,"invalid-text":""!==e.errMsg?e.errMsg:""}},[a("el-select",e._b({staticClass:"custom-selector",attrs:{placeholder:e.selectorConfig.placeholder},on:{input:function(t){return e.$emit("input",e.innerValue)},change:e.getValidatorResultWithErrMsg,blur:e.getValidatorResultWithErrMsg},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"el-select",e.$attrs,!1),e._l(e.allOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)],1)},n=[],i=a("75fc"),o=a("d225"),r=a("b0b4"),c=a("308d"),u=a("6bb5"),s=a("4e2b"),p=a("9ab4"),O=a("60a3"),d=a("fb29"),b=a("b103"),y=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.innerValue=e.value,e.isPassValidate=!1,e.errMsg="",e}return Object(s["a"])(t,e),Object(r["a"])(t,[{key:"returnI18n",value:function(e){return this.$t(e)}},{key:"getValidatorResult",value:function(){if(0!==this.ruleList.length){var e={value:{value:this.innerValue,otherValue:this.$attrs.otherValue||""},inputName:this.$attrs.labelName,ruleList:this.ruleList},t=new b["a"](this);t.add(e);var a=t.start();return a.isPass?this.isPassValidate=!0:this.isPassValidate=!1,a}}},{key:"getValidatorResultWithErrMsg",value:function(){var e=this.getValidatorResult();e.isPass?this.errMsg="":this.errMsg=e.errInfo}},{key:"beforeMount",value:function(){this.$on("getValidatorResultWithErrMsg",this.getValidatorResultWithErrMsg),this.$on("getValidatorResult",this.getValidatorResult)}},{key:"setValue",value:function(){this.innerValue=this.value}},{key:"allOptions",get:function(){this.innerValue=this.selectorConfig.defaultValue;var e=[{label:this.$t("global.Select"),value:-1,disabled:!0}];return this.selectorConfig.options&&(e=[].concat(Object(i["a"])(e),Object(i["a"])(this.selectorConfig.options))),e}}]),t}(O["d"]);Object(p["a"])([Object(O["c"])({default:function(){return{placeholder:"",options:[]}}})],y.prototype,"selectorConfig",void 0),Object(p["a"])([Object(O["c"])({default:function(){return[]}})],y.prototype,"ruleList",void 0),Object(p["a"])([Object(O["c"])({default:function(){return""}})],y.prototype,"value",void 0),Object(p["a"])([Object(O["e"])("value")],y.prototype,"setValue",null),y=Object(p["a"])([Object(O["a"])({components:{FormItem:d["a"]}})],y);var v=y,f=v,k=(a("1a3d"),a("2877")),g=Object(k["a"])(f,l,n,!1,null,"24e06bf4",null);t["a"]=g.exports},fe23:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-view",e._b({staticClass:"box-container-for-side"},"app-view",e.$attrs,!1),[a("template",{slot:"options"},[e._t("options")],2),e._v(" "),e._t("default"),e._v(" "),a("user-sidebar",{attrs:{slot:"aside"},slot:"aside"})],2)},n=[],i=a("d225"),o=a("308d"),r=a("6bb5"),c=a("4e2b"),u=a("9ab4"),s=a("60a3"),p=a("4bb5"),O=a("8c67"),d=a("1667"),b=a("4529"),y=a("cd21"),v=a("40107"),f=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(s["d"]);Object(u["a"])([Object(p["a"])("AccountStore").State],f.prototype,"accountInfo",void 0),f=Object(u["a"])([Object(s["a"])({components:{AppView:O["a"],UserSidebar:d["a"],AgentUserInfo:b["a"],TransactionAccounts:y["a"],DepositRanklist:v["a"]},inheritAttrs:!1})],f);var k=f,g=k,h=a("2877"),m=Object(h["a"])(g,l,n,!1,null,null,null);t["a"]=m.exports}}]);