(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{194:function(e,a,t){"use strict";(function(e){t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c}));var n=t(7);function r(a){return function(t){if(!["dkarimi@standardmedia.co.ke","mshahi@standardmedia.co.ke","lkinyanjui@standardmedia.co.ke"].includes(a.email.toLowerCase()))return t({type:n.e,payload:!0}),e.ajax({url:"".concat(n.a,"/payments/subscription/user/").concat(a.id),method:"get",dataType:"json",error:function(e,a,r){t({type:n.e,payload:!1})}.bind(this),success:function(e){t({type:n.j,payload:e})}.bind(this)});t({type:n.j,payload:{id:1}})}}function c(){return function(a){return e.ajax({url:"".concat(n.a,"/subjects/list"),method:"get",dataType:"json",success:function(e){a({type:n.h,payload:e})}.bind(this)})}}}).call(this,t(57))},303:function(e,a,t){"use strict";t.r(a),function(e){var n=t(1),r=t.n(n),c=t(23),o=t(9),l=t(28),s=t.n(l),i=t(59),m=t(29),d=t(7),u=t(25),p=t(194);t(24);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var g=s()({loader:function(){return t.e(22).then(t.bind(null,217))},loading:i.a}),b=s()({loader:function(){return t.e(26).then(t.bind(null,218))},loading:i.a}),w=s()({loader:function(){return t.e(25).then(t.bind(null,219))},loading:i.a}),y=s()({loader:function(){return t.e(24).then(t.bind(null,220))},loading:i.a}),v=s()({loader:function(){return t.e(21).then(t.bind(null,221))},loading:i.a}),x=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(28),t.e(17)]).then(t.bind(null,222))},loading:m.a}),N=s()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(8)]).then(t.bind(null,228))},loading:m.a}),O=s()({loader:function(){return Promise.all([t.e(1),t.e(19)]).then(t.bind(null,286))},loading:m.a}),P=s()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(16)]).then(t.bind(null,287))},loading:m.a}),k=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,288))},loading:m.a}),S=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(18)]).then(t.bind(null,289))},loading:m.a}),j=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,290))},loading:m.a}),T=s()({loader:function(){return Promise.all([t.e(1),t.e(15)]).then(t.bind(null,291))},loading:m.a}),A=s()({loader:function(){return t.e(23).then(t.bind(null,292))},loading:m.a}),I=s()({loader:function(){return t.e(20).then(t.bind(null,293))},loading:i.a}),R=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6)]).then(t.bind(null,294))},loading:i.a}),L=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(5)]).then(t.bind(null,296))},loading:i.a}),C=s()({loader:function(){return Promise.all([t.e(3),t.e(13),t.e(14)]).then(t.bind(null,298))},loading:i.a}),M=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,301))},loading:i.a}),G=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,302))},loading:i.a});a.default=function(a){var t=this,l=E(Object(n.useState)(!0),2),s=l[0],m=l[1],f=E(Object(n.useState)(!1),2),F=(f[0],f[1]),U=E(Object(n.useState)(""),2),D=(U[0],U[1]),J=E(Object(n.useState)(""),2),q=(J[0],J[1]),H=E(Object(n.useState)(localStorage.hasOwnProperty("user")?JSON.parse(localStorage.getItem("user")):{}),2),V=H[0],B=H[1],W=E(Object(n.useState)([]),2),X=W[0],z=W[1],K=Object(u.c)((function(e){return e.subscription})),$=Object(u.c)((function(e){return e.subjects})),Q=Object(u.c)((function(e){return e.loadingSubscription})),Y=E(Object(n.useState)({}),2),Z=Y[0],_=Y[1],ee=Object(u.b)();Object(n.useEffect)((function(e){V.hasOwnProperty("name")&&a.location.pathname!=="".concat(d.d,"signin")&&a.location.pathname!=="".concat(d.d,"signup")&&ee(Object(p.b)(V)),ee(Object(p.a)()),ae(),te()}),[]);var ae=function(){e.ajax({url:"".concat(d.a,"/payments/subscriptions"),method:"GET",error:function(e,a,t){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}F(!0),D("alert alert-danger"),q(n)}.bind(t),success:function(e){var a=e.filter((function(e){return 1===e.days}));a.length>0&&_(a[0])}.bind(t)})},te=function(){e.ajax({url:"".concat(d.a,"/classes/list"),method:"GET",error:function(e,a,t){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}m(!1),F(!0),D("alert alert-danger"),q(n)}.bind(t),success:function(e){z(e),m(!1)}.bind(t)})},ne=function(a){e(".sidenav").toggleClass("toggled")},re=function(e){localStorage.clear(),B({}),ee({type:d.i,payload:[]}),a.history.push({pathname:"".concat(d.d,"signin"),state:{next:a.location.pathname}})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"header-wrap"},r.a.createElement("nav",{className:"navbar navbar-expand-md text-white  fixed-top scrolling-navbar indigo"},r.a.createElement("div",{className:"w-100 d-block d-lg-none d-md-none ml-2"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("span",{style:{fontSize:"20px",cursor:"pointer"},className:"float-right opennav",onClick:ne},"☰"),r.a.createElement("img",{className:"w-25 float-left logotop",src:"".concat(d.g,"/static/new/img/logo.png"),alt:""})),r.a.createElement("button",{"aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar","data-toggle":"collapse",type:"button"})),r.a.createElement("div",{className:"sidenav",id:"mySidenav"},r.a.createElement("a",{href:"#",className:"closebtn border-0",onClick:ne},"× "),r.a.createElement(c.b,{to:"".concat(d.d)},"HOME"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"CLASSES",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},X.slice(0,4).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(d.d,"exams/classes/").concat(e.id,"/subjects")},e.class))})))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"SUBJECTS",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},$.slice(0,4).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(d.d,"exams/subjects/").concat(e.id,"/modules")},e.subject))})))),r.a.createElement(c.b,{to:"".concat(d.d,"exams/modules")},"EXAMINATION PAPERS"),V.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(d.d,"profile")},"PROFILE"),r.a.createElement("a",{href:"#",onClick:re},"LOGOUT")):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(d.d,"signin")},"LOGIN"),r.a.createElement(c.b,{to:"".concat(d.d,"signup")},"REGISTER"))),r.a.createElement("div",{className:"collapse navbar-collapse flex-column ",id:"navbar"},r.a.createElement("ul",{className:"navbar-nav justify-content-around w-75"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"".concat(d.d)},r.a.createElement("img",{className:"logo",src:"".concat(d.g,"/static/new/img/logo.png"),alt:"".concat(d.b)}))),r.a.createElement("li",{className:"nav-item active mt-4"},r.a.createElement(c.b,{className:"nav-link",to:d.d},"HOME ")),r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement("a",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"http://example.com",id:"navbarDropdownMenuLink"},"CLASSES"),r.a.createElement("div",{"aria-labelledby":"navbarDropdownMenuLink",className:"dropdown-menu"},X.slice(0,4).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(d.d,"exams/classes/").concat(e.id,"/subjects")},e.class)})))),r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement("a",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"http://example.com",id:"navbarDropdownMenuLink"},"SUBJECTS"),r.a.createElement("div",{"aria-labelledby":"navbarDropdownMenuLink",className:"dropdown-menu"},$.slice(0,4).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(d.d,"exams/subjects/").concat(e.id,"/modules")},e.subject)})))),r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link",to:"".concat(d.d,"exams/modules")},"EXAMINATION PAPERS ")),V.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,void 0!==V.institution&&V.institution.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,parseInt(V.owner)||parseInt(V.teacher)?r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(c.b,{className:"nav-link dropdown-toggle",to:"".concat(d.d,"profile"),id:"reports","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"REPORTS"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"reports"},r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(d.d,"students")},"Registered Students "),r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(d.d,"teachers")},"Registered Teachers "),r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(d.d,"exams/mine")},"My Papers"))):""):"",r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(c.b,{className:"nav-link dropdown-toggle",to:"".concat(d.d,"profile"),id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fa fa-user-circle"}," ")," Hello ",V.name),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(d.d,"profile")},"PROFILE"),r.a.createElement("a",{href:"#",onClick:re,className:"dropdown-item"},"LOGOUT")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login",to:"".concat(d.d,"signin")},"LOGIN")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login ",to:"".concat(d.d,"signup")},"SIGN UP")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login ",to:"".concat(d.d,"initialSetup")},"REGISTER SCHOOL")),Z.hasOwnProperty("cost")>0?r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login",to:"".concat(d.d,"signin")},"Get ",Z.days," day for Ksh.",Z.cost," ")):""))))),s||Q?r.a.createElement(i.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:a.match.url,render:function(e){return r.a.createElement(x,h({},e,{user:V,subjects:$}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"signin"),render:function(e){return r.a.createElement(g,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"school"),render:function(e){return r.a.createElement(b,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"reset"),render:function(e){return r.a.createElement(w,e)}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"signup"),render:function(e){return r.a.createElement(y,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"initialSetup"),render:function(e){return r.a.createElement(v,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"profile"),render:function(e){return V.hasOwnProperty("id")?r.a.createElement(N,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/classes"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(k,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(S,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/classes/:class/subjects"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(S,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/modules"),render:function(e){return r.a.createElement(j,h({},e,{user:V}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects/:subject/modules"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(j,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/done"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(P,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/mine"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(M,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/edit/:exam"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(I,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/:exam"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(O,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/:exam/performance"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(G,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"questions/question/new"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(C,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"questions/question/:question/edit"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(C,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"students"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(L,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"teachers"),render:function(e){return V.hasOwnProperty("id")?K.hasOwnProperty("id")?r.a.createElement(R,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"subscriptions"),render:function(e){return V.hasOwnProperty("id")?r.a.createElement(T,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"subscription/payment"),render:function(e){return V.hasOwnProperty("id")?r.a.createElement(A,h({},e,{user:V})):e.history.push({pathname:"".concat(d.d,"signin"),state:{next:e.location.pathname}})}})),r.a.createElement("ul",{className:"nav from text-center bg-light d-flex"},r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link px-0 fromtext",href:"#"},"E-Learning from",r.a.createElement("img",{src:"".concat(d.g,"/static/app/images/thestandardlogo.png"),alt:d.b,className:"footerlogo"})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto col-xs-12"},r.a.createElement("ul",{className:"nav nav-inline "},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.btvkenya.ke/"},"BTV")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.evewoman.co.ke/"},"EVE WOMAN")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.spicefm.co.ke/"},"SPICE RADIO")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"http://www.travelog.ke/"},"TRAVEL")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.farmers.co.ke/"},"FARMERS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.digger.co.ke/"},"DIGGER")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.vas.standardmedia.co.ke/"},"VAS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.newsstand.standardmedia.co.ke/"},"EPAPER")),r.a.createElement("li",{className:"nav-item border-0"},r.a.createElement("a",{className:"nav-link",href:"https://www.standardmedia.co.ke/corporate"},"CORPORATE")))))),r.a.createElement("div",{id:"copyright"},r.a.createElement("div",{className:"container text-center p-0"},r.a.createElement("div",{className:"row p-0"},r.a.createElement("div",{className:"col-12 mx-auto p-0"},r.a.createElement("p",{className:"text-center"},"© 2020 The Standard Group PLC All rights reserved")))))),r.a.createElement("a",{href:"#",className:"back-to-top"},r.a.createElement("i",{className:"fa fa-arrow-up"})))))}}.call(this,t(57))},59:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(1),r=t.n(n),c=t(24);function o(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"200px"}},r.a.createElement(c.a,{color:"#cf2027"}))}}}]);