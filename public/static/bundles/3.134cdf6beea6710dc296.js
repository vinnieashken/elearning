(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),c=t(20);function l(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"100px"}},r.a.createElement(c.a,{color:"#cf2027"}))}},191:function(e,a,t){"use strict";(function(e){t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c}));var n=t(7);function r(a){return function(t){return e.ajax({url:"".concat(n.a,"/payments/subscription/user/").concat(a.id),method:"get",dataType:"json",success:function(e){t({type:n.i,payload:e})}.bind(this)})}}function c(){return function(a){return e.ajax({url:"".concat(n.a,"/subjects/list"),method:"get",dataType:"json",success:function(e){a({type:n.g,payload:e})}.bind(this)})}}}).call(this,t(56))},277:function(e,a,t){"use strict";t.r(a),function(e){var n=t(0),r=t.n(n),c=t(19),l=t(8),s=t(26),o=t.n(s),i=t(184),m=t(27),u=t(7),d=t(21),p=t(191);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var g=o()({loader:function(){return t.e(12).then(t.bind(null,209))},loading:i.a}),b=o()({loader:function(){return t.e(14).then(t.bind(null,210))},loading:i.a}),v=o()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,211))},loading:m.a}),w=o()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,212))},loading:m.a}),N=(o()({loader:function(){return t.e(11).then(t.bind(null,270))},loading:m.a}),o()({loader:function(){return t.e(10).then(t.bind(null,271))},loading:m.a})),y=o()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,272))},loading:m.a}),x=o()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,273))},loading:m.a}),O=o()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,274))},loading:m.a}),k=o()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,196))},loading:m.a}),j=o()({loader:function(){return t.e(15).then(t.bind(null,275))},loading:m.a}),S=o()({loader:function(){return t.e(13).then(t.bind(null,276))},loading:m.a});a.default=function(a){var t=this,s=E(Object(n.useState)(!0),2),o=s[0],m=s[1],f=E(Object(n.useState)(!1),2),P=(f[0],f[1]),A=E(Object(n.useState)(""),2),T=(A[0],A[1]),I=E(Object(n.useState)(""),2),L=(I[0],I[1]),R=E(Object(n.useState)(localStorage.hasOwnProperty("user")?JSON.parse(localStorage.getItem("user")):{}),2),M=R[0],C=R[1],G=E(Object(n.useState)([]),2),F=G[0],D=G[1],U=Object(d.c)((function(e){return e.subscription})),J=Object(d.c)((function(e){return e.subjects})),V=Object(d.b)();Object(n.useEffect)((function(e){M.hasOwnProperty("name")&&a.location.pathname!=="".concat(u.d,"signin")&&a.location.pathname!=="".concat(u.d,"signup")&&V(Object(p.b)(M)),V(Object(p.a)()),B()}),[]);var B=function(){e.ajax({url:"".concat(u.a,"/classes/list"),method:"GET",error:function(e,a,t){var n=JSON.parse(e.responseText).message;405===e.status&&(n="Sorry an error has occurred. We are working on it. (405)"),m(!1),P(!0),T("alert alert-danger"),L(n)}.bind(t),success:function(e){D(e),m(!1)}.bind(t)})},H=function(a){e(".sidenav").toggleClass("toggled")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"header-wrap"},r.a.createElement("nav",{className:"navbar navbar-expand-md bg-white fixed-top scrolling-navbar indigo"},r.a.createElement("div",{className:"w-100 d-block d-lg-none d-md-none mr-5"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("span",{style:{fontSize:"20px",cursor:"pointer"},className:"float-right mr-3 opennav",onClick:H},"☰"),r.a.createElement("img",{src:"".concat(u.f,"/static/app/images/logo.png"),className:"w-25 float-left",alt:u.b})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"})),r.a.createElement("div",{id:"mySidenav",className:"sidenav"},r.a.createElement("a",{href:"#",className:"closebtn border-0",onClick:H},"×"),r.a.createElement("a",{href:"#"},"HOME"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"CLASSES",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},F.slice(0,4).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(u.d,"exams/classes/").concat(e.id,"/subjects")},e.class))})))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"SUBJECTS",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},J.slice(0,4).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(u.d,"exams/subjects/").concat(e.id,"/modules")},e.subject))})))),r.a.createElement(c.b,{to:"".concat(u.d,"exams/modules")},"EXAMINATION PAPERS"),M.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(u.d,"profile")},"PROFILE"),r.a.createElement(c.b,{to:"".concat(u.d,"signin")},"LOGOUT")):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(u.d,"signin")},"LOGIN"),r.a.createElement(c.b,{to:"".concat(u.d,"signup")},"REGISTER"))),r.a.createElement("div",{className:"collapse navbar-collapse flex-column ",id:"navbar"},r.a.createElement("ul",{className:"navbar-nav  w-100 justify-content-center p-0"},r.a.createElement("li",{className:"nav-item active p-0 m-0"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("img",{src:"".concat(u.f,"/static/app/images/logo.png"),className:"w-75",alt:u.b})))),r.a.createElement("ul",{className:"navbar-nav justify-content-around w-75"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(c.b,{className:"nav-link",to:u.d},"HOME ")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CLASSES"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},F.slice(0,4).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"exams/classes/").concat(e.id,"/subjects")},e.class)})))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"SUBJECTS"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},J.slice(0,4).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"exams/subjects/").concat(e.id,"/modules")},e.subject)})))),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.d,"exams/modules")},"EXAMINATION PAPERS ")),M.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(c.b,{className:"nav-link dropdown-toggle",to:"".concat(u.d,"profile"),id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fa fa-user-circle"}," ")," Hello ",M.name),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"profile")},"PROFILE"),r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"signin")},"LOGOUT")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login ",to:"".concat(u.d,"signup")},"REGISTER")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login",to:"".concat(u.d,"signin")},"LOGIN")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login",to:"".concat(u.d,"signin")},"Get 1 day for Ksh.30 "))))))),o?r.a.createElement(i.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:a.match.url,render:function(e){return r.a.createElement(v,h({},e,{user:M,subjects:J}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"signin"),render:function(e){return r.a.createElement(g,h({},e,{setUser:C}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"signup"),render:function(e){return r.a.createElement(b,h({},e,{setUser:C}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"profile"),render:function(e){return M.hasOwnProperty("id")?r.a.createElement(w,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/classes"),render:function(e){return M.hasOwnProperty("id")?U.hasOwnProperty("id")?r.a.createElement(x,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects"),render:function(e){return M.hasOwnProperty("id")?U.hasOwnProperty("id")?r.a.createElement(O,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/classes/:class/subjects"),render:function(e){return M.hasOwnProperty("id")?U.hasOwnProperty("id")?r.a.createElement(O,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/modules"),render:function(e){return M.hasOwnProperty("id")?r.a.createElement(k,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects/:subject/modules"),render:function(e){return M.hasOwnProperty("id")?r.a.createElement(k,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/done"),render:function(e){return M.hasOwnProperty("id")?U.hasOwnProperty("id")?r.a.createElement(y,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/:module"),render:function(e){return M.hasOwnProperty("id")?r.a.createElement(N,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"subscriptions"),render:function(e){return M.hasOwnProperty("id")?r.a.createElement(j,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"subscription/payment"),render:function(e){return M.hasOwnProperty("id")?r.a.createElement(S,h({},e,{user:M})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}})),r.a.createElement("ul",{className:"nav from text-center bg-light d-flex"},r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link px-0 fromtext",href:"#"},"E-Learning from",r.a.createElement("img",{src:"".concat(u.f,"/static/app/images/thestandardlogo.png"),alt:u.b,className:"footerlogo"})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto col-xs-12"},r.a.createElement("ul",{className:"nav nav-inline "},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.btvkenya.ke/"},"BTV")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.evewoman.co.ke/"},"EVE WOMAN")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.spicefm.co.ke/"},"SPICE RADIO")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"http://www.travelog.ke/"},"TRAVEL")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.farmers.co.ke/"},"FARMERS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.digger.co.ke/"},"DIGGER")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.vas.standardmedia.co.ke/"},"VAS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.newsstand.standardmedia.co.ke/"},"EPAPER")),r.a.createElement("li",{className:"nav-item border-0"},r.a.createElement("a",{className:"nav-link",href:"https://www.standardmedia.co.ke/corporate"},"CORPORATE")))))),r.a.createElement("div",{id:"copyright"},r.a.createElement("div",{className:"container text-center p-0"},r.a.createElement("div",{className:"row p-0"},r.a.createElement("div",{className:"col-12 mx-auto p-0"},r.a.createElement("p",{className:"text-center"},"© 2020 The Standard Group PLC All rights reserved")))))),r.a.createElement("a",{href:"#",className:"back-to-top"},r.a.createElement("i",{className:"fa fa-arrow-up"})))))}}.call(this,t(56))}}]);