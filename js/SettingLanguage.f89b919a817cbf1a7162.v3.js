(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SettingLanguage"],{"8ec5":function(e,t,a){},d7e7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.editMode?a("app-view",{staticClass:"language-setup",attrs:{title:"setting.Language.EditorTitle","extend-callback":e.handleCancel}},[a("div",{staticClass:"language-setup-form"},[a("form-item-group",[a("form-item",{attrs:{label:"setting.Language.Label"}},[a("el-select",{model:{value:e.updateLanguage,callback:function(t){e.updateLanguage=t},expression:"updateLanguage"}},e._l(e.languageOptions,function(t){return a("el-option",{key:t.value,attrs:{label:e.convertText(t.label),value:t.value}})}),1)],1)],1),e._v(" "),a("form-item-group",[a("div",{staticClass:"language-setup-action"},[a("el-button",{staticClass:"language-setup-action__button",attrs:{type:"primary",round:"",disabled:!e.canSubmit},on:{click:e.handleChangeLanguage}},[e._v(e._s(e.convertText("setting.Language.FormAction.Save")))])],1)])],1)]):a("app-view",{staticClass:"language-setup",attrs:{title:"setting.Language.Title"}},[a("app-menu",[a("app-menu-item",{staticClass:"language-setup-menu",attrs:{type:"borderd",action:e.menuRoute}},[a("div",{staticClass:"language-setup-cell"},[a("div",{staticClass:"language-setup-cell__label"},[e._v(e._s(e.convertText("setting.Language.Label")))]),e._v(" "),a("div",{staticClass:"language-setup-cell__value"},[e._v(e._s(e.convertText(e.selectedLanguage)))])])])],1)],1)},u=[],i=(a("7514"),a("ac6a"),a("7f7f"),a("a481"),a("3b2b"),a("d225")),o=a("b0b4"),s=a("308d"),l=a("6bb5"),c=a("4e2b"),g=a("9ab4"),r=a("60a3"),p=a("58d1"),d=a("8c67"),b=a("63bd"),v=a("2e69"),m=a("b77e"),f=a("fb29"),h=a("4bb5"),L=a("8d47"),O=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.editMode=!1,e.menuRoute=null,e.updateLanguage="",e}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"handleCancel",value:function(){this.editMode=!1}},{key:"handleChangeLanguage",value:function(){this.setLocalInfo();var e=this.ENV_LANG,t=void 0===e?[]:e,a=this.updateLanguage,n=window.location,u=n.origin,i=n.pathname,o=u,s=new RegExp("^\\/("+t.join("|")+")\\/");Object(L["e"])("lang",a),s.test(i)?o+=i.replace(s,"/".concat(a,"/")):o+="/".concat(a)+i,window.location.replace(o)}},{key:"beforeMount",value:function(){var e=this;this.updateLanguage=this.$store.state.I18nStore.locale,this.menuRoute={name:this.$route.name+"-edit",callback:function(){e.editMode=!0}}}},{key:"languageOptions",get:function(){var e={};e={"zh-CN":"setting.Language.Form.Option1","en-US":"setting.Language.Form.Option3","vi-VN":"setting.Language.Form.Option6","ms-MY":"setting.Language.Form.Option4","id-ID":"setting.Language.Form.Option7"};var t=this.ENV_LANG,a=void 0===t?[]:t,n=[];return a.forEach(function(t){n.push({label:e[t],value:t})}),n}},{key:"selectedLanguage",get:function(){var e=this,t=this.languageOptions.find(function(t){return t.value===e.updateLanguage});return t?t.label:""}},{key:"canSubmit",get:function(){return this.updateLanguage!==this.$store.state.I18nStore.locale}}]),t}(Object(r["b"])(p["a"]));Object(g["a"])([Object(h["a"])("AccountStore").Action],O.prototype,"setLocalInfo",void 0),O=Object(g["a"])([Object(r["a"])({components:{AppView:d["a"],AppMenu:b["a"],AppMenuItem:v["a"],FormItemGroup:m["a"],FormItem:f["a"]}})],O);var _=O,w=_,C=(a("e2c2"),a("2877")),j=Object(C["a"])(w,n,u,!1,null,"8b7d5c40",null);t["default"]=j.exports},e2c2:function(e,t,a){"use strict";var n=a("8ec5"),u=a.n(n);u.a}}]);