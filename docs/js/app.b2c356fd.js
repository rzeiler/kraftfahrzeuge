(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},a={app:0},i=[];function o(e){return c.p+"js/"+({login:"login",settings:"settings"}[e]||e)+"."+{login:"3749e9cf",settings:"7946425b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1,settings:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({login:"login",settings:"settings"}[e]||e)+"."+{login:"0c3c9e93",settings:"a13f36f2"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kraftfahrzeuge/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("transition",{attrs:{duration:800,name:"slide"}},[n("router-view")],1),e.error?n("div",{staticClass:"toast"},[n("div",[e._v(" "+e._s(e.error)+" ")]),n("span",{staticClass:"close",on:{click:e.close}},[e._v("✕")])]):e._e()],1)},a=[],i=n("5530"),o=n("2f62"),c={components:{},computed:Object(i["a"])({},Object(o["b"])(["userProfile","error"])),methods:{close:function(){this.$store.commit("setError","")}}},l=c,u=(n("a634"),n("2877")),d=Object(u["a"])(l,s,a,!1,null,"42cc56c3",null),f=d.exports,h=(n("45fc"),n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[e.showNav?n("SiteNav"):e._e(),n("h1",[e._v("Fahrzeuge")]),n("div",{staticClass:"types"},e._l(e.types,(function(t){return n("div",{key:t,staticClass:"type",class:{active:e.selectedType===t},on:{click:function(n){return e.filter(t)}}},[e._v(" "+e._s(t)+" ")])})),0),e.vehicles.length?n("div",{staticClass:"horizontal"},e._l(e.getVehicles,(function(e){return n("Card",{key:e.id,attrs:{to:{name:"vehicle",params:{id:e.id}},title:e.title,mileage:e.mileage,nextcheck:e.nextcheck,image:e.image}})})),1):n("div",[n("p",{staticClass:"no-results"},[e._v("There are currently no posts")])]),n("router-link",{staticClass:"plus",attrs:{to:{name:"vehicle",params:{id:"new"}}}},[n("svg",{attrs:{width:"50px",height:"50px",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("line",{attrs:{x1:"5",x2:"45",y1:"25",y2:"25","stroke-width":e.plus.width,"stroke-linecap":"round"}}),n("line",{attrs:{x1:"26",x2:"26",y1:"5",y2:"45","stroke-width":e.plus.width,"stroke-linecap":"round"}})])]),n("div",{staticClass:"modal fade show",style:e.modal,attrs:{id:"staticBackdrop","data-bs-backdrop":"static",tabindex:"-1"}},[e._m(0)])],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[e._v("Modal title")]),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),n("div",{staticClass:"modal-body"},[n("p",[e._v("Modal body text goes here.")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[e._v(" Close ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v("Save changes")])])])])}],g=(n("4de4"),n("c975"),n("b64b"),n("96cf"),n("1da1")),b=n("c1df"),v=n.n(b),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"card",style:e.background,attrs:{to:e.to}},[n("div"),n("div",{staticClass:"card-title"},[n("b",[e._v(e._s(e.title))])]),n("div",{staticClass:"card-title"},[n("b",[e._v(e._s(e.mileage))]),e._v(" Kilometer ")]),n("svg",{attrs:{width:"100%",height:"20",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("line",{attrs:{x1:"1%",x2:"99%",y1:e.y,y2:e.y,stroke:"#ffffff44","stroke-width":"10","stroke-linecap":"round"}}),n("line",{attrs:{x1:"1%",x2:e.x2,y1:e.y,y2:e.y,stroke:"#ff0000aa","stroke-width":"10","stroke-linecap":"round"}})])])},w=[],k={props:{title:null,imageUrl:null,mileage:null,nextcheck:null,to:null,image:null},data:function(){return{y:10}},computed:{background:function(){var e={"background-image":"url('".concat(this.image,"')")};return console.log("background",e),e},x2:function(){var e=v()(this.nextcheck.toDate()),t=v()(void 0),n=e.diff(t,"days");return"".concat(100-n/730*100-1,"%")}}},y=k,x=Object(u["a"])(y,j,w,!1,null,null,null),C=x.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{attrs:{viewBox:"0 0 100 80",width:"40",height:"40"},on:{click:function(t){return e.menu()}}},[n("rect",{attrs:{y:"30",width:"80",height:"10",rx:"8"}}),n("rect",{attrs:{y:"60",width:"100",height:"10",rx:"8"}})]),e.showMenu?n("div",{staticClass:"menu"},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[e._v("Fahrzeuge")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/settings"}},[e._v("Einstellungen")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(t){return e.logout()}}},[e._v("Abmelden")])],1):e._e()])},P=[],O={data:function(){return{showMenu:!1}},methods:{menu:function(){this.showMenu=!this.showMenu,document.body.style.overflow=this.showMenu?"hidden":"unset"},logout:function(){this.$store.dispatch("logout")}}},z=O,M=Object(u["a"])(z,_,P,!1,null,null,null),R=M.exports,A={components:{Card:C,SiteNav:R},data:function(){return{plus:{color:"#000000",width:2},types:["Pkw","Krad","Alle"],selectedType:"Alle",styleVehicle:{position:"absolute",top:0,left:0,width:"0px",height:"0px"},vehicle:null,modal:{display:"none"},post:{title:"",milage:0,nextcheck:null,oil:{change:null,type:""}},swipeActions:0,showCommentModal:!1,selectedPost:{},showPostModal:!1,fullPost:{},postComments:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["userProfile","vehicles"])),{},{showNav:function(){return Object.keys(this.userProfile).length>1},getVehicles:function(){var e=this;return"Alle"!=this.selectedType?this.vehicles.filter((function(t){return t.type.toLowerCase().indexOf(e.selectedType.toLowerCase())>-1})):this.vehicles}}),methods:{filter:function(e){this.selectedType=e},edit:function(e,t){var n=t.target.getBoundingClientRect();console.log(n.top),this.styleVehicle={position:"absolute",top:"".concat(n.top,"px"),left:"".concat(n.left,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px"),margin:0},this.vehicle=e,this.styleVehicle={position:"absolute",margin:0,marginTop:"".concat(-n.top,"px"),marginLeft:"".concat(-n.left,"px"),width:"100vw",height:"100vh"}},createVehicle:function(){this.modal.display="block"},last:function(e){return e[e.length-1]},createPost:function(){this.post.content=""},toggleCommentModal:function(e){this.showCommentModal=!this.showCommentModal,this.showCommentModal?this.selectedPost=e:this.selectedPost={}},viewPost:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.fullPost=e,t.showPostModal=!0;case 2:case"end":return n.stop()}}),n)})))()},closePostModal:function(){this.postComments=[],this.showPostModal=!1}},filters:{json:function(e){return JSON.stringify(e)},formatDate:function(e){if(!e)return"-";v.a.locale("de");var t=e.toDate();return v()(t).format("MM.YYYY")}}},E=A,$=(n("ae05"),Object(u["a"])(E,m,p,!1,null,"0fd4d757",null)),L=$.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.vehicle?n("div",{attrs:{id:"vehicle"}},[e.showModal?e._e():n("form",[n("router-link",{staticClass:"close",attrs:{to:"/"}},[e._v("✕")]),n("div",{staticClass:"image",style:e.background,on:{click:e.changeImage}},[n("svg",{attrs:{x:"0px",y:"0px",viewBox:"0 0 117.74 122.88"}},[n("g",[n("path",{attrs:{d:"M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"}})])]),n("input",{ref:"image",attrs:{type:"file",accept:"image/*"},on:{change:e.previewFile}})]),n("label",{staticClass:"form-label",attrs:{for:"title"}},[e._v("Marke")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.vehicle.title,expression:"vehicle.title",modifiers:{trim:!0}}],attrs:{type:"text",id:"title",placeholder:"Skoda..."},domProps:{value:e.vehicle.title},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"title",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("label",{staticClass:"form-label",attrs:{for:"mileage"}},[e._v("Kilometerstand")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.vehicle.mileage,expression:"vehicle.mileage",modifiers:{trim:!0}}],attrs:{type:"number",id:"mileage",placeholder:"10312..."},domProps:{value:e.vehicle.mileage},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"mileage",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("label",{staticClass:"form-label",attrs:{for:"nextcheck"}},[e._v("HU / AU Termin")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.vehicle.nextcheck,expression:"vehicle.nextcheck",modifiers:{trim:!0}}],attrs:{type:"Date",id:"nextcheck",defaultValue:"01.01.2020",placeholder:"12.2.2022..."},domProps:{value:e.vehicle.nextcheck},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"nextcheck",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("div",{staticClass:"spacer"}),e.vehicle.uid?n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.update()}}},[e._v(" Ändern ")]):n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.create()}}},[e._v(" Hinzufügen ")]),e.vehicle.uid?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.confirmDelete}},[e._v(" Löschen ")]):e._e()],1),e.showModal?n("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[n("h1",[e._v("Achtung")]),n("h2",[e._v("Soll das Fahrzeug wirklich gelöscht werden?")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.confirmDelete}},[e._v(" Abbrechen ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.remove()}}},[e._v(" Löschen ")])]):e._e()]):e._e()},S=[],D=(n("99af"),n("7db0"),n("dc59")),N={title:null,mileage:null,nextcheck:null,uid:null,image:null,oil:[]},T={components:{},data:function(){return{showModal:!1}},computed:{vehicle:function(){var e=this,t=this.$route.params.id;if("new"!=t){var n=this.$store.state.vehicles.find((function(t){return t.id===e.$route.params.id}));if(n){var r=new Date(1e3*n.nextcheck.seconds),s=document.body;return s.style.backgroundImage="url(".concat(n.image,")"),s.style.backgroundRepeat="no-repeat",s.style.backgroundSize="200% 200%",s.style.backgroundPosition="center",s.style.backdropFilter="blur(40px)",{title:n.title,mileage:n.mileage,nextcheck:v()(r).format("YYYY-MM-DD"),uid:n.uid,image:n.image,oil:[]}}return N}return N},background:function(){var e={"background-image":"url('".concat(this.vehicle.image,"')")};return e}},methods:{changeImage:function(){this.$refs.image.click()},confirmDelete:function(){this.showModal=!this.showModal},remove:function(){var e=this;this.$store.dispatch("removeVehicle",{key:this.$route.params.id}).then((function(){e.$router.push({path:"/"})}))},create:function(){var e=this;this.$store.dispatch("createVehicle",{title:this.vehicle.title,mileage:this.vehicle.mileage,nextcheck:v()(this.vehicle.nextcheck).toDate()}).then((function(){e.$router.push({path:"/"})}))},update:function(){var e=this;this.$store.dispatch("updateVehicle",{key:this.$route.params.id,title:this.vehicle.title,mileage:this.vehicle.mileage,nextcheck:v()(this.vehicle.nextcheck).toDate()}).then((function(){e.$router.push({path:"/"})}),(function(e){console.log(e)}))},previewFile:function(e){var t=this,n=e.target.files[0],r=D["c"].ref("vehicleImages/".concat(D["a"].currentUser.uid,"/").concat(this.$route.params.id)).put(n);r.on("state_changed",(function(e){t.uploadValue=e.bytesTransferred/e.totalBytes*100}),(function(e){console.log(e.message)}),(function(){r.snapshot.ref.getDownloadURL().then((function(e){console.log("url",e)}))}))},createImage:function(e){console.log(e)},fileReaderLoaded:function(e){var t=new Image;t.onload=function(){},t.src=this.result}},mounted:function(){},destroyed:function(){var e=document.body;e.style.backgroundImage="unset",e.style.backdropFilter="unset"},filters:{json:function(e){return JSON.stringify(e)},formatDate:function(e){if(!e)return"-";v.a.locale("de");var t=e.toDate();return v()(t).format("MM.YYYY")}}},V=T,I=(n("9fc1"),Object(u["a"])(V,U,S,!1,null,"f7eb8998",null)),B=I.exports;r["a"].use(h["a"]);var Y=[{path:"/",name:"Dashboard",component:L,meta:{requiresAuth:!0}},{path:"/vehicle/:id",name:"vehicle",component:B,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}},{path:"/register",name:"register",component:function(){return n.e("settings").then(n.bind(null,"73cf"))},meta:{requiresAuth:!1}}],q=new h["a"]({mode:"history",base:"/kraftfahrzeuge/",routes:Y});q.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!D["a"].currentUser?n("/login"):n()}));var F=q;n("4160"),n("b0c0"),n("159b");r["a"].use(o["a"]),D["a"].onAuthStateChanged((function(e){e?D["d"].orderBy("createdOn","desc").where("uid","==",e.uid).onSnapshot((function(t){var n=[];console.log("user.uid",e.uid,t),t.forEach((function(t){var r=t.data();r.id=t.id,r.image="../bmw.jpg",D["c"].ref("vehicleImages/".concat(e.uid,"/").concat(r.id)).getDownloadURL().then((function(e){r.image=e})),n.push(r),console.log(r)})),K.commit("setPosts",n)})):K.commit("setPosts",[])}));var H,K=new o["a"].Store({state:{userProfile:{},vehicles:[],error:null},mutations:{setError:function(e,t){e.error=t},setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t},setPosts:function(e,t){e.vehicles=t},setVehicle:function(e,t){e.vehicle=t}},actions:{login:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.dispatch,s=e.commit,D["a"].signInWithEmailAndPassword(t.email,t.password).then((function(e){r("fetchUserProfile",e)})).catch((function(e){s("setError",e.message)}));case 2:case"end":return n.stop()}}),n)})))()},removeVehicle:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,D["d"].doc(t.key).delete();case 3:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.dispatch,s=e.commit,D["a"].createUserWithEmailAndPassword(t.email,t.password).then((function(e){D["b"].doc(e.uid).set({name:t.name,title:t.title}).then((function(){r("fetchUserProfile",e)}))})).catch((function(e){s("setError",e.message)}));case 2:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,D["b"].doc(t.uid).get();case 3:s=n.sent,r("setUserProfile",s.data()),"/login"===F.currentRoute.path&&F.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,D["a"].signOut();case 3:n("setUserProfile",{}),F.push("/login");case 5:case"end":return t.stop()}}),t)})))()},getVehicle:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.state,s=e.commit,s("setVehicle",r.vehicles.find((function(e){return e.id===t})));case 2:case"end":return n.stop()}}),n)})))()},createVehicle:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,e.commit,n.next=3,D["d"].add({createdOn:new Date,title:t.title,mileage:t.mileage,nextcheck:t.nextcheck,uid:D["a"].currentUser.uid,userName:r.userProfile.name,oil:[]});case 3:case"end":return n.stop()}}),n)})))()},updateVehicle:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,e.commit,n.next=3,D["d"].doc(t.key).update({title:t.title,mileage:t.mileage,nextcheck:t.nextcheck,uid:D["a"].currentUser.uid,userName:r.userProfile.name,oil:[]});case 3:case"end":return n.stop()}}),n)})))()},updateProfile:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,s=D["a"].currentUser.uid,n.next=4,D["b"].doc(s).update({name:t.name,title:t.title});case 4:n.sent,r("fetchUserProfile",{uid:s});case 6:case"end":return n.stop()}}),n)})))()}},getters:{getVehicleById:function(e){return function(t){return e.vehicles.find((function(e){return e.id===t}))}}}}),J=K,W=(n("7e7d"),n("9483"));Object(W["a"])("".concat("/kraftfahrzeuge/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,D["a"].onAuthStateChanged((function(e){H||(H=new r["a"]({router:F,store:J,render:function(e){return e(f)}}).$mount("#app")),e&&J.dispatch("fetchUserProfile",e)}))},"7e7d":function(e,t,n){},8347:function(e,t,n){},8494:function(e,t,n){},"99e9":function(e,t,n){},"9fc1":function(e,t,n){"use strict";var r=n("8494"),s=n.n(r);s.a},a634:function(e,t,n){"use strict";var r=n("8347"),s=n.n(r);s.a},ae05:function(e,t,n){"use strict";var r=n("99e9"),s=n.n(r);s.a},dc59:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return o}));var r=n("59ca"),s=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyCHkAhk2eavnRa2fOnvoumEHi8kYchXr2s",authDomain:"rzebase.firebaseapp.com",databaseURL:"https://rzebase-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rzebase",storageBucket:"rzebase.appspot.com",messagingSenderId:"197958182195",appId:"1:197958182195:web:30104558df2f057c5d8a46",measurementId:"G-F5C854895Y"});r["initializeApp"](s);var a=r["firestore"](),i=r["auth"](),o=r["storage"](),c=a.collection("users"),l=a.collection("vehicles")}});
//# sourceMappingURL=app.b2c356fd.js.map