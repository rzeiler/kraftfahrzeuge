(function(e){function t(t){for(var s,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},a={app:0},i=[];function o(e){return c.p+"js/"+({login:"login",settings:"settings"}[e]||e)+"."+{login:"43df2a15",settings:"573fba04"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var s="css/"+({login:"login",settings:"settings"}[e]||e)+"."+{login:"78fa25da",settings:"31d6cfe0"}[e]+".css",a=c.p+s,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kraftfahrzeuge/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"220f":function(e,t,n){},"2d5a":function(e,t,n){"use strict";var s=n("220f"),r=n.n(s);r.a},"42ec":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id="4678"},"51cc":function(e,t,n){"use strict";var s=n("c798"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[e.showNav?n("SiteNav"):e._e(),n("transition",{attrs:{duration:800,name:"slide"}},[n("router-view")],1)],1)},a=[],i=(n("b64b"),n("5530")),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-between p-2"},[n("div",{staticClass:"dropdown mt-2"},[e._m(0),n("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton1"}},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[e._v("Liste")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/settings"}},[e._v("Einstellungen")])],1),n("li",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(t){return e.logout()}}},[e._v("Abmelden")])])])]),n("h1",{staticClass:"display-1 pe-2"})])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn btn-flat",attrs:{type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown"}},[n("i",{staticClass:"fas fa-bars"})])}],u={methods:{logout:function(){this.$store.dispatch("logout")}}},d=u,f=n("2877"),h=Object(f["a"])(d,c,l,!1,null,null,null),m=h.exports,p={components:{SiteNav:m},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["userProfile"])),{},{showNav:function(){return Object.keys(this.userProfile).length>1}})},b=p,v=(n("b9fd"),Object(f["a"])(b,r,a,!1,null,"28748292",null)),g=v.exports,j=(n("45fc"),n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("transition",{attrs:{name:"fade"}},[e.showCommentModal?n("CommentModal",{attrs:{post:e.selectedPost},on:{close:function(t){return e.toggleCommentModal()}}}):e._e()],1),n("div",[n("h1",[e._v("Fahrzeuge")]),n("div",{staticClass:"types"},e._l(e.types,(function(t){return n("div",{key:t,staticClass:"type",class:{active:e.selectedType===t},on:{click:function(n){return e.filter(t)}}},[e._v(" "+e._s(t)+" ")])})),0),n("div",[e.vehicles.length?n("div",{staticClass:"scroll horizontal"},[n("div",{staticClass:"card dummy"}),e._l(e.getVehicles,(function(e){return n("router-link",{key:e.id,attrs:{to:{name:"vehicle",params:{id:e.id}}}},[n("Card",{attrs:{to:{name:"vehicle",params:{id:"new"}},title:e.title,mileage:e.mileage,nextcheck:e.nextcheck}})],1)})),n("div",{staticClass:"card dummy"})],2):n("div",[n("p",{staticClass:"no-results"},[e._v("There are currently no posts")])]),n("router-link",{staticClass:"plus",attrs:{to:{name:"vehicle",params:{id:"new"}}}},[n("svg",{attrs:{width:"50px",height:"50px",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("line",{attrs:{x1:"5",x2:"45",y1:"25",y2:"25","stroke-width":e.plus.width,"stroke-linecap":"round"}}),n("line",{attrs:{x1:"26",x2:"26",y1:"5",y2:"45","stroke-width":e.plus.width,"stroke-linecap":"round"}})])])],1),n("div",{staticClass:"modal fade show",style:e.modal,attrs:{id:"staticBackdrop","data-bs-backdrop":"static",tabindex:"-1"}},[e._m(0)])])],1)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[e._v("Modal title")]),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),n("div",{staticClass:"modal-body"},[n("p",[e._v("Modal body text goes here.")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[e._v(" Close ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v(" Save changes ")])])])])}],k=(n("4de4"),n("c975"),n("96cf"),n("1da1")),x=n("c1df"),C=n.n(x),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div"),n("div",{staticClass:"card-title"},[n("b",[e._v(e._s(e.title))])]),n("div",{staticClass:"card-title"},[n("b",[e._v(e._s(e.mileage))]),e._v(" Kilometer ")]),n("svg",{attrs:{width:"100%",height:"20",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("line",{attrs:{x1:"5%",x2:"95%",y1:e.y,y2:e.y,stroke:"#ffffff44","stroke-width":"10","stroke-linecap":"round"}}),n("line",{attrs:{x1:"5%",x2:e.x2,y1:e.y,y2:e.y,stroke:"#ff0000aa","stroke-width":"10","stroke-linecap":"round"}})])])},P=[],O={props:{title:null,imageUrl:null,mileage:null,nextcheck:null},data:function(){return{y:10}},computed:{x2:function(){console.log(this.nextcheck);var e=C()(this.nextcheck.toDate()),t=C()(void 0),n=e.diff(t,"days");return"".concat(100-n/730*100-5,"%")}}},z=O,M=Object(f["a"])(z,_,P,!1,null,null,null),E=M.exports,R={components:{Card:E},data:function(){return{plus:{color:"#000000",width:2},types:["Pkw","Krad","Alle"],selectedType:"Alle",styleVehicle:{position:"absolute",top:0,left:0,width:"0px",height:"0px"},vehicle:null,modal:{display:"none"},post:{title:"",milage:0,nextcheck:null,oil:{change:null,type:""}},swipeActions:0,showCommentModal:!1,selectedPost:{},showPostModal:!1,fullPost:{},postComments:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["userProfile","vehicles"])),{},{getVehicles:function(){var e=this;return"Alle"!=this.selectedType?this.vehicles.filter((function(t){return t.type.toLowerCase().indexOf(e.selectedType.toLowerCase())>-1})):this.vehicles}}),methods:{filter:function(e){this.selectedType=e},edit:function(e,t){var n=t.target.getBoundingClientRect();console.log(n.top),this.styleVehicle={position:"absolute",top:"".concat(n.top,"px"),left:"".concat(n.left,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px"),margin:0},this.vehicle=e,this.styleVehicle={position:"absolute",margin:0,marginTop:"".concat(-n.top,"px"),marginLeft:"".concat(-n.left,"px"),width:"100vw",height:"100vh"}},createVehicle:function(){this.modal.display="block"},last:function(e){return e[e.length-1]},createPost:function(){this.post.content=""},toggleCommentModal:function(e){this.showCommentModal=!this.showCommentModal,this.showCommentModal?this.selectedPost=e:this.selectedPost={}},viewPost:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.fullPost=e,t.showPostModal=!0;case 2:case"end":return n.stop()}}),n)})))()},closePostModal:function(){this.postComments=[],this.showPostModal=!1}},filters:{json:function(e){return JSON.stringify(e)},formatDate:function(e){if(!e)return"-";C.a.locale("de");var t=e.toDate();return C()(t).format("MM.YYYY")}}},$=R,A=(n("6f10"),Object(f["a"])($,w,y,!1,null,"303651bc",null)),U=A.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.vehicle?n("div",[e.showModal?e._e():n("form",[n("label",{staticClass:"form-label",attrs:{for:"title"}},[e._v("Marke")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.vehicle.title,expression:"vehicle.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"title",id:"title",placeholder:"Skoda..."},domProps:{value:e.vehicle.title},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"title",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("label",{staticClass:"form-label",attrs:{for:"mileage"}},[e._v("Kilometerstand")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.vehicle.mileage,expression:"vehicle.mileage",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"number",id:"mileage",placeholder:"10312..."},domProps:{value:e.vehicle.mileage},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"mileage",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("label",{staticClass:"form-label",attrs:{for:"nextcheck"}},[e._v("HU / AU Termin")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.vehicle.nextcheck,expression:"vehicle.nextcheck",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"Date",id:"nextcheck",defaultValue:"01.01.2020",placeholder:"12.2.2022..."},domProps:{value:e.vehicle.nextcheck},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"nextcheck",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.vehicle.uid?n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.update()}}},[e._v(" Ändern ")]):n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.create()}}},[e._v(" Hinzufügen ")]),e.vehicle.uid?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.confirmDelete}},[e._v(" Löschen ")]):e._e()]),e.showModal?n("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[n("h1",[e._v("Achtung")]),n("h2",[e._v("Soll das Fahrzeug wirklich gelöscht werden?")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.confirmDelete}},[e._v(" Abbrechen ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.remove()}}},[e._v(" Löschen ")])]):e._e()]):e._e()},D=[],N=(n("7db0"),n("dc59")),V={title:null,mileage:null,nextcheck:null,uid:null,oil:[]},T={components:{},data:function(){return{showModal:!1}},computed:{vehicle:function(){var e=this,t=this.$route.params.id;if("new"!=t){var n=this.$store.state.vehicles.find((function(t){return t.id===e.$route.params.id}));if(n){var s=new Date(1e3*n.nextcheck.seconds);return{title:n.title,mileage:n.mileage,nextcheck:C()(s).format("YYYY-MM-DD"),uid:n.uid,oil:[]}}return V}return V}},methods:{confirmDelete:function(){this.showModal=!this.showModal},remove:function(){var e=this;this.$store.dispatch("removeVehicle",{key:this.$route.params.id}).then((function(){e.$router.push({path:"/"})}))},create:function(){var e=this;this.$store.dispatch("createVehicle",{title:this.vehicle.title,mileage:this.vehicle.mileage,nextcheck:C()(this.vehicle.nextcheck).toDate()}).then((function(){e.$router.push({path:"/"})}))},update:function(){var e=this;this.$store.dispatch("updateVehicle",{key:this.$route.params.id,title:this.vehicle.title,mileage:this.vehicle.mileage,nextcheck:C()(this.vehicle.nextcheck).toDate()}).then((function(){e.$router.push({path:"/"})}),(function(e){console.log(e)}))}},mounted:function(){},filters:{json:function(e){return JSON.stringify(e)},formatDate:function(e){if(!e)return"-";C.a.locale("de");var t=e.toDate();return C()(t).format("MM.YYYY")}}},L=T,Y=(n("2d5a"),n("51cc"),Object(f["a"])(L,S,D,!1,null,"2bd15baa",null)),B=Y.exports;s["a"].use(j["a"]);var q=[{path:"/",name:"Dashboard",component:U,meta:{requiresAuth:!0}},{path:"/vehicle/:id",name:"vehicle",component:B,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}}],I=new j["a"]({mode:"history",base:"/kraftfahrzeuge/",routes:q});I.beforeEach((function(e,t,n){var s=e.matched.some((function(e){return e.meta.requiresAuth}));s&&!N["a"].currentUser?n("/login"):n()}));var F=I;n("4160"),n("b0c0"),n("159b");s["a"].use(o["a"]),N["a"].onAuthStateChanged((function(e){e?N["c"].orderBy("createdOn","desc").where("uid","==",e.uid).onSnapshot((function(t){var n=[];console.log("user.uid",e.uid,t),t.forEach((function(e){var t=e.data();t.id=e.id,n.push(t),console.log(t)})),K.commit("setPosts",n)})):K.commit("setPosts",[])}));var H,K=new o["a"].Store({state:{userProfile:{},vehicles:[],item:null,error:null},mutations:{setError:function(e,t){e.error=t},setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t},setPosts:function(e,t){e.vehicles=t},setVehicle:function(e,t){e.vehicle=t}},actions:{login:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,n.next=3,N["a"].signInWithEmailAndPassword(t.email,t.password);case 3:r=n.sent,a=r.user,s("fetchUserProfile",a);case 6:case"end":return n.stop()}}),n)})))()},removeVehicle:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,N["c"].doc(t.key).delete();case 3:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=e.dispatch,r=e.commit,N["a"].createUserWithEmailAndPassword(t.email,t.password).then((function(e){N["b"].doc(e.uid).set({name:t.name,title:t.title}).then((function(){s("fetchUserProfile",e)}))}),(function(e){r("setError",e.message)}));case 2:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,n.next=3,N["b"].doc(t.uid).get();case 3:r=n.sent,s("setUserProfile",r.data()),"/login"===F.currentRoute.path&&F.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,N["a"].signOut();case 3:n("setUserProfile",{}),F.push("/login");case 5:case"end":return t.stop()}}),t)})))()},getVehicle:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=e.state,r=e.commit,console.log("getVehicle"),r("setVehicle",s.vehicles.find((function(e){return e.id===t})));case 3:case"end":return n.stop()}}),n)})))()},createVehicle:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.state,e.commit,n.next=3,N["c"].add({createdOn:new Date,title:t.title,mileage:t.mileage,nextcheck:t.nextcheck,uid:N["a"].currentUser.uid,userName:s.userProfile.name,oil:[]});case 3:case"end":return n.stop()}}),n)})))()},updateVehicle:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.state,e.commit,n.next=3,N["c"].doc(t.key).update({title:t.title,mileage:t.mileage,nextcheck:t.nextcheck,uid:N["a"].currentUser.uid,userName:s.userProfile.name,oil:[]});case 3:case"end":return n.stop()}}),n)})))()},updateProfile:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,r=N["a"].currentUser.uid,n.next=4,N["b"].doc(r).update({name:t.name,title:t.title});case 4:n.sent,s("fetchUserProfile",{uid:r});case 6:case"end":return n.stop()}}),n)})))()}},getters:{getVehicleById:function(e){return function(t){return e.vehicles.find((function(e){return e.id===t}))}}}}),J=K;n("7e7d");s["a"].config.productionTip=!1,N["a"].onAuthStateChanged((function(e){H||(H=new s["a"]({router:F,store:J,render:function(e){return e(g)}}).$mount("#app")),e&&J.dispatch("fetchUserProfile",e)}))},"656a":function(e,t,n){},"6f10":function(e,t,n){"use strict";var s=n("42ec"),r=n.n(s);r.a},"7e7d":function(e,t,n){},b9fd:function(e,t,n){"use strict";var s=n("656a"),r=n.n(s);r.a},c798:function(e,t,n){},dc59:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var s=n("59ca"),r=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyCHkAhk2eavnRa2fOnvoumEHi8kYchXr2s",authDomain:"rzebase.firebaseapp.com",databaseURL:"https://rzebase-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rzebase",storageBucket:"rzebase.appspot.com",messagingSenderId:"197958182195",appId:"1:197958182195:web:30104558df2f057c5d8a46",measurementId:"G-F5C854895Y"});s["initializeApp"](r);var a=s["firestore"](),i=s["auth"](),o=a.collection("users"),c=a.collection("vehicles")}});
//# sourceMappingURL=app.aaa111ea.js.map