(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e83f31b"],{"89a93":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=57)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}n.d(t,"a",function(){return i})},11:function(e,t){e.exports=n("2bb5")},26:function(e,t){e.exports=n("92fa")},42:function(e,t){e.exports=n("c284")},57:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{class:["el-upload-list","el-upload-list--"+e.listType,{"is-disabled":e.disabled}],attrs:{tag:"ul",name:"el-list"}},e._l(e.files,function(t){return n("li",{key:t.uid,class:["el-upload-list__item","is-"+t.status,e.focusing?"focusing":""],attrs:{tabindex:"0"},on:{keydown:function(n){if(!("button"in n)&&e._k(n.keyCode,"delete",[8,46],n.key,["Backspace","Delete","Del"]))return null;!e.disabled&&e.$emit("remove",t)},focus:function(t){e.focusing=!0},blur:function(t){e.focusing=!1},click:function(t){e.focusing=!1}}},[e._t("default",["uploading"!==t.status&&["picture-card","picture"].indexOf(e.listType)>-1?n("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:t.url,alt:""}}):e._e(),n("a",{staticClass:"el-upload-list__item-name",on:{click:function(n){e.handleClick(t)}}},[n("i",{staticClass:"el-icon-document"}),e._v(e._s(t.name)+"\n      ")]),n("label",{staticClass:"el-upload-list__item-status-label"},[n("i",{class:{"el-icon-upload-success":!0,"el-icon-circle-check":"text"===e.listType,"el-icon-check":["picture-card","picture"].indexOf(e.listType)>-1}})]),e.disabled?e._e():n("i",{staticClass:"el-icon-close",on:{click:function(n){e.$emit("remove",t)}}}),e.disabled?e._e():n("i",{staticClass:"el-icon-close-tip"},[e._v(e._s(e.t("el.upload.deleteTip")))]),"uploading"===t.status?n("el-progress",{attrs:{type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:e.parsePercentage(t.percentage)}}):e._e(),"picture-card"===e.listType?n("span",{staticClass:"el-upload-list__item-actions"},[e.handlePreview&&"picture-card"===e.listType?n("span",{staticClass:"el-upload-list__item-preview",on:{click:function(n){e.handlePreview(t)}}},[n("i",{staticClass:"el-icon-zoom-in"})]):e._e(),e.disabled?e._e():n("span",{staticClass:"el-upload-list__item-delete",on:{click:function(n){e.$emit("remove",t)}}},[n("i",{staticClass:"el-icon-delete"})])]):e._e()],{file:t})],2)}),0)},r=[];i._withStripped=!0;var s=n(6),o=n.n(s),a=n(42),l=n.n(a),u={name:"ElUploadList",mixins:[o.a],data:function(){return{focusing:!1}},components:{ElProgress:l.a},props:{files:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},handlePreview:Function,listType:String},methods:{parsePercentage:function(e){return parseInt(e,10)},handleClick:function(e){this.handlePreview&&this.handlePreview(e)}}},c=u,d=n(0),p=Object(d["a"])(c,i,r,!1,null,null,null);p.options.__file="packages/upload/src/upload-list.vue";var f=p.exports,h=n(26),g=n.n(h);function v(e,t,n){var i=void 0;i=n.response?""+(n.response.error||n.response):n.responseText?""+n.responseText:"fail to post "+e+" "+n.status;var r=new Error(i);return r.status=n.status,r.method="post",r.url=e,r}function y(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(n){return t}}function m(e){if("undefined"!==typeof XMLHttpRequest){var t=new XMLHttpRequest,n=e.action;t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var i=new FormData;e.data&&Object.keys(e.data).forEach(function(t){i.append(t,e.data[t])}),i.append(e.filename,e.file,e.file.name),t.onerror=function(t){e.onError(t)},t.onload=function(){if(t.status<200||t.status>=300)return e.onError(v(n,e,t));e.onSuccess(y(t))},t.open("post",n,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var r=e.headers||{};for(var s in r)r.hasOwnProperty(s)&&null!==r[s]&&t.setRequestHeader(s,r[s]);return t.send(i),t}}var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-upload-dragger",class:{"is-dragover":e.dragover},on:{drop:function(t){return t.preventDefault(),e.onDrop(t)},dragover:function(t){return t.preventDefault(),e.onDragover(t)},dragleave:function(t){t.preventDefault(),e.dragover=!1}}},[e._t("default")],2)},_=[];b._withStripped=!0;var x={name:"ElUploadDrag",props:{disabled:Boolean},inject:{uploader:{default:""}},data:function(){return{dragover:!1}},methods:{onDragover:function(){this.disabled||(this.dragover=!0)},onDrop:function(e){if(!this.disabled&&this.uploader){var t=this.uploader.accept;this.dragover=!1,t?this.$emit("file",[].slice.call(e.dataTransfer.files).filter(function(e){var n=e.type,i=e.name,r=i.indexOf(".")>-1?"."+i.split(".").pop():"",s=n.replace(/\/.*$/,"");return t.split(",").map(function(e){return e.trim()}).filter(function(e){return e}).some(function(e){return/\..+$/.test(e)?r===e:/\/\*$/.test(e)?s===e.replace(/\/\*$/,""):!!/^[^\/]+\/[^\/]+$/.test(e)&&n===e})})):this.$emit("file",e.dataTransfer.files)}}}},w=x,C=Object(d["a"])(w,b,_,!1,null,null,null);C.options.__file="packages/upload/src/upload-dragger.vue";var k,S,F=C.exports,O={inject:["uploader"],components:{UploadDragger:F},props:{type:String,action:{type:String,required:!0},name:{type:String,default:"file"},data:Object,headers:Object,withCredentials:Boolean,multiple:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,drag:Boolean,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},fileList:Array,autoUpload:Boolean,listType:String,httpRequest:{type:Function,default:m},disabled:Boolean,limit:Number,onExceed:Function},data:function(){return{mouseover:!1,reqs:{}}},methods:{isImage:function(e){return-1!==e.indexOf("image")},handleChange:function(e){var t=e.target.files;t&&this.uploadFiles(t)},uploadFiles:function(e){var t=this;if(this.limit&&this.fileList.length+e.length>this.limit)this.onExceed&&this.onExceed(e,this.fileList);else{var n=Array.prototype.slice.call(e);this.multiple||(n=n.slice(0,1)),0!==n.length&&n.forEach(function(e){t.onStart(e),t.autoUpload&&t.upload(e)})}},upload:function(e){var t=this;if(this.$refs.input.value=null,!this.beforeUpload)return this.post(e);var n=this.beforeUpload(e);n&&n.then?n.then(function(n){var i=Object.prototype.toString.call(n);if("[object File]"===i||"[object Blob]"===i){for(var r in"[object Blob]"===i&&(n=new File([n],e.name,{type:e.type})),e)e.hasOwnProperty(r)&&(n[r]=e[r]);t.post(n)}else t.post(e)},function(){t.onRemove(null,e)}):!1!==n?this.post(e):this.onRemove(null,e)},abort:function(e){var t=this.reqs;if(e){var n=e;e.uid&&(n=e.uid),t[n]&&t[n].abort()}else Object.keys(t).forEach(function(e){t[e]&&t[e].abort(),delete t[e]})},post:function(e){var t=this,n=e.uid,i={headers:this.headers,withCredentials:this.withCredentials,file:e,data:this.data,filename:this.name,action:this.action,onProgress:function(n){t.onProgress(n,e)},onSuccess:function(i){t.onSuccess(i,e),delete t.reqs[n]},onError:function(i){t.onError(i,e),delete t.reqs[n]}},r=this.httpRequest(i);this.reqs[n]=r,r&&r.then&&r.then(i.onSuccess,i.onError)},handleClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},handleKeydown:function(e){e.target===e.currentTarget&&(13!==e.keyCode&&32!==e.keyCode||this.handleClick())}},render:function(e){var t=this.handleClick,n=this.drag,i=this.name,r=this.handleChange,s=this.multiple,o=this.accept,a=this.listType,l=this.uploadFiles,u=this.disabled,c=this.handleKeydown,d={class:{"el-upload":!0},on:{click:t,keydown:c}};return d.class["el-upload--"+a]=!0,e("div",g()([d,{attrs:{tabindex:"0"}}]),[n?e("upload-dragger",{attrs:{disabled:u},on:{file:l}},[this.$slots.default]):this.$slots.default,e("input",{class:"el-upload__input",attrs:{type:"file",name:i,multiple:s,accept:o},ref:"input",on:{change:r}})])}},T=O,P=Object(d["a"])(T,k,S,!1,null,null,null);P.options.__file="packages/upload/src/upload.vue";var E=P.exports,$=n(11),j=n.n($);function R(){}var U,D,L={name:"ElUpload",mixins:[j.a],components:{ElProgress:l.a,UploadList:f,Upload:E},provide:function(){return{uploader:this}},inject:{elForm:{default:""}},props:{action:{type:String,required:!0},headers:{type:Object,default:function(){return{}}},data:Object,multiple:Boolean,name:{type:String,default:"file"},drag:Boolean,dragger:Boolean,withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:String,type:{type:String,default:"select"},beforeUpload:Function,beforeRemove:Function,onRemove:{type:Function,default:R},onChange:{type:Function,default:R},onPreview:{type:Function},onSuccess:{type:Function,default:R},onProgress:{type:Function,default:R},onError:{type:Function,default:R},fileList:{type:Array,default:function(){return[]}},autoUpload:{type:Boolean,default:!0},listType:{type:String,default:"text"},httpRequest:Function,disabled:Boolean,limit:Number,onExceed:{type:Function,default:R}},data:function(){return{uploadFiles:[],dragOver:!1,draging:!1,tempIndex:1}},computed:{uploadDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},watch:{listType:function(e){"picture-card"!==e&&"picture"!==e||(this.uploadFiles=this.uploadFiles.map(function(e){if(!e.url&&e.raw)try{e.url=URL.createObjectURL(e.raw)}catch(t){console.error("[Element Error][Upload]",t)}return e}))},fileList:{immediate:!0,handler:function(e){var t=this;this.uploadFiles=e.map(function(e){return e.uid=e.uid||Date.now()+t.tempIndex++,e.status=e.status||"success",e})}}},methods:{handleStart:function(e){e.uid=Date.now()+this.tempIndex++;var t={status:"ready",name:e.name,size:e.size,percentage:0,uid:e.uid,raw:e};if("picture-card"===this.listType||"picture"===this.listType)try{t.url=URL.createObjectURL(e)}catch(n){return void console.error("[Element Error][Upload]",n)}this.uploadFiles.push(t),this.onChange(t,this.uploadFiles)},handleProgress:function(e,t){var n=this.getFile(t);this.onProgress(e,n,this.uploadFiles),n.status="uploading",n.percentage=e.percent||0},handleSuccess:function(e,t){var n=this.getFile(t);n&&(n.status="success",n.response=e,this.onSuccess(e,n,this.uploadFiles),this.onChange(n,this.uploadFiles))},handleError:function(e,t){var n=this.getFile(t),i=this.uploadFiles;n.status="fail",i.splice(i.indexOf(n),1),this.onError(e,n,this.uploadFiles),this.onChange(n,this.uploadFiles)},handleRemove:function(e,t){var n=this;t&&(e=this.getFile(t));var i=function(){n.abort(e);var t=n.uploadFiles;t.splice(t.indexOf(e),1),n.onRemove(e,t)};if(this.beforeRemove){if("function"===typeof this.beforeRemove){var r=this.beforeRemove(e,this.uploadFiles);r&&r.then?r.then(function(){i()},R):!1!==r&&i()}}else i()},getFile:function(e){var t=this.uploadFiles,n=void 0;return t.every(function(t){return n=e.uid===t.uid?t:null,!n}),n},abort:function(e){this.$refs["upload-inner"].abort(e)},clearFiles:function(){this.uploadFiles=[]},submit:function(){var e=this;this.uploadFiles.filter(function(e){return"ready"===e.status}).forEach(function(t){e.$refs["upload-inner"].upload(t.raw)})},getMigratingConfig:function(){return{props:{"default-file-list":"default-file-list is renamed to file-list.","show-upload-list":"show-upload-list is renamed to show-file-list.","thumbnail-mode":"thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan"}}}},beforeDestroy:function(){this.uploadFiles.forEach(function(e){e.url&&0===e.url.indexOf("blob:")&&URL.revokeObjectURL(e.url)})},render:function(e){var t=this,n=void 0;this.showFileList&&(n=e(f,{attrs:{disabled:this.uploadDisabled,listType:this.listType,files:this.uploadFiles,handlePreview:this.onPreview},on:{remove:this.handleRemove}},[function(e){if(t.$scopedSlots.file)return t.$scopedSlots.file({file:e.file})}]));var i={props:{type:this.type,drag:this.drag,action:this.action,multiple:this.multiple,"before-upload":this.beforeUpload,"with-credentials":this.withCredentials,headers:this.headers,name:this.name,data:this.data,accept:this.accept,fileList:this.uploadFiles,autoUpload:this.autoUpload,listType:this.listType,disabled:this.uploadDisabled,limit:this.limit,"on-exceed":this.onExceed,"on-start":this.handleStart,"on-progress":this.handleProgress,"on-success":this.handleSuccess,"on-error":this.handleError,"on-preview":this.onPreview,"on-remove":this.handleRemove,"http-request":this.httpRequest},ref:"upload-inner"},r=this.$slots.trigger||this.$slots.default,s=e("upload",i,[r]);return e("div",["picture-card"===this.listType?n:"",this.$slots.trigger?[s,this.$slots.default]:s,this.$slots.tip,"picture-card"!==this.listType?n:""])}},B=L,q=Object(d["a"])(B,U,D,!1,null,null,null);q.options.__file="packages/upload/src/index.vue";var I=q.exports;I.install=function(e){e.component(I.name,I)};t["default"]=I},6:function(e,t){e.exports=n("6b7c")}})},"92fa":function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function i(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce(function(e,t){var r,s,o,a,l;for(o in t)if(r=e[o],s=t[o],r&&n.test(o))if("class"===o&&("string"===typeof r&&(l=r,e[o]=r={},r[l]=!0),"string"===typeof s&&(l=s,t[o]=s={},s[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(a in s)r[a]=i(r[a],s[a]);else if(Array.isArray(r))e[o]=r.concat(s);else if(Array.isArray(s))e[o]=[r].concat(s);else for(a in s)r[a]=s[a];else e[o]=t[o];return e},{})}},c284:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=119)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}n.d(t,"a",function(){return i})},119:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-progress",class:["el-progress--"+e.type,e.status?"is-"+e.status:"",{"el-progress--without-text":!e.showText,"el-progress--text-inside":e.textInside}],attrs:{role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},["line"===e.type?n("div",{staticClass:"el-progress-bar"},[n("div",{staticClass:"el-progress-bar__outer",style:{height:e.strokeWidth+"px"}},[n("div",{staticClass:"el-progress-bar__inner",style:e.barStyle},[e.showText&&e.textInside?n("div",{staticClass:"el-progress-bar__innerText"},[e._v(e._s(e.content))]):e._e()])])]):n("div",{staticClass:"el-progress-circle",style:{height:e.width+"px",width:e.width+"px"}},[n("svg",{attrs:{viewBox:"0 0 100 100"}},[n("path",{staticClass:"el-progress-circle__track",style:e.trailPathStyle,attrs:{d:e.trackPath,stroke:"#e5e9f2","stroke-width":e.relativeStrokeWidth,fill:"none"}}),n("path",{staticClass:"el-progress-circle__path",style:e.circlePathStyle,attrs:{d:e.trackPath,stroke:e.stroke,fill:"none","stroke-linecap":e.strokeLinecap,"stroke-width":e.percentage?e.relativeStrokeWidth:0}})])]),e.showText&&!e.textInside?n("div",{staticClass:"el-progress__text",style:{fontSize:e.progressTextSize+"px"}},[e.status?n("i",{class:e.iconClass}):[e._v(e._s(e.content))]],2):e._e()])},r=[];i._withStripped=!0;var s={name:"ElProgress",props:{type:{type:String,default:"line",validator:function(e){return["line","circle","dashboard"].indexOf(e)>-1}},percentage:{type:Number,default:0,required:!0,validator:function(e){return e>=0&&e<=100}},status:{type:String,validator:function(e){return["success","exception","warning"].indexOf(e)>-1}},strokeWidth:{type:Number,default:6},strokeLinecap:{type:String,default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:[String,Array,Function],default:""},format:Function},computed:{barStyle:function(){var e={};return e.width=this.percentage+"%",e.backgroundColor=this.getCurrentColor(this.percentage),e},relativeStrokeWidth:function(){return(this.strokeWidth/this.width*100).toFixed(1)},radius:function(){return"circle"===this.type||"dashboard"===this.type?parseInt(50-parseFloat(this.relativeStrokeWidth)/2,10):0},trackPath:function(){var e=this.radius,t="dashboard"===this.type;return"\n        M 50 50\n        m 0 "+(t?"":"-")+e+"\n        a "+e+" "+e+" 0 1 1 0 "+(t?"-":"")+2*e+"\n        a "+e+" "+e+" 0 1 1 0 "+(t?"":"-")+2*e+"\n        "},perimeter:function(){return 2*Math.PI*this.radius},rate:function(){return"dashboard"===this.type?.75:1},strokeDashoffset:function(){var e=-1*this.perimeter*(1-this.rate)/2;return e+"px"},trailPathStyle:function(){return{strokeDasharray:this.perimeter*this.rate+"px, "+this.perimeter+"px",strokeDashoffset:this.strokeDashoffset}},circlePathStyle:function(){return{strokeDasharray:this.perimeter*this.rate*(this.percentage/100)+"px, "+this.perimeter+"px",strokeDashoffset:this.strokeDashoffset,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"}},stroke:function(){var e=void 0;if(this.color)e=this.getCurrentColor(this.percentage);else switch(this.status){case"success":e="#13ce66";break;case"exception":e="#ff4949";break;case"warning":e="#e6a23c";break;default:e="#20a0ff"}return e},iconClass:function(){return"warning"===this.status?"el-icon-warning":"line"===this.type?"success"===this.status?"el-icon-circle-check":"el-icon-circle-close":"success"===this.status?"el-icon-check":"el-icon-close"},progressTextSize:function(){return"line"===this.type?12+.4*this.strokeWidth:.111111*this.width+2},content:function(){return"function"===typeof this.format?this.format(this.percentage)||"":this.percentage+"%"}},methods:{getCurrentColor:function(e){return"function"===typeof this.color?this.color(e):"string"===typeof this.color?this.color:this.getLevelColor(e)},getLevelColor:function(e){for(var t=this.getColorArray().sort(function(e,t){return e.percentage-t.percentage}),n=0;n<t.length;n++)if(t[n].percentage>e)return t[n].color;return t[t.length-1].color},getColorArray:function(){var e=this.color,t=100/e.length;return e.map(function(e,n){return"string"===typeof e?{color:e,progress:(n+1)*t}:e})}}},o=s,a=n(0),l=Object(a["a"])(o,i,r,!1,null,null,null);l.options.__file="packages/progress/src/progress.vue";var u=l.exports;u.install=function(e){e.component(u.name,u)};t["default"]=u}})}}]);