(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(e,a,t){"use strict";(function(e){t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c}));var n=t(8);function r(a){return function(t){if(![2,3].includes(parseInt(a.user_id)))return t({type:n.e,payload:!0}),e.ajax({url:"".concat(n.a,"/payments/subscription/user/").concat(a.id),method:"get",dataType:"json",error:function(e,a,r){t({type:n.e,payload:!1})}.bind(this),success:function(e){t({type:n.j,payload:e})}.bind(this)});t({type:n.j,payload:{id:1}})}}function c(){return function(a){return e.ajax({url:"".concat(n.a,"/subjects/list"),method:"get",dataType:"json",success:function(e){a({type:n.h,payload:e})}.bind(this)})}}}).call(this,t(60))},301:function(e,a,t){"use strict";t.r(a),function(e){var n=t(1),r=t.n(n),c=t(23),l=t(9),o=t(30),s=t.n(o),i=t(61),m=t(31),u=t(8),d=t(25),p=t(195);t(24);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var b=s()({loader:function(){return t.e(19).then(t.bind(null,217))},loading:i.a}),g=s()({loader:function(){return t.e(23).then(t.bind(null,218))},loading:i.a}),v=s()({loader:function(){return t.e(22).then(t.bind(null,219))},loading:i.a}),w=s()({loader:function(){return t.e(21).then(t.bind(null,220))},loading:i.a}),y=s()({loader:function(){return t.e(18).then(t.bind(null,221))},loading:i.a}),N=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,222))},loading:m.a}),x=s()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(13)]).then(t.bind(null,227))},loading:m.a}),O=s()({loader:function(){return Promise.all([t.e(1),t.e(16)]).then(t.bind(null,285))},loading:m.a}),P=s()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(11)]).then(t.bind(null,286))},loading:m.a}),k=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(10)]).then(t.bind(null,287))},loading:m.a}),S=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(14)]).then(t.bind(null,288))},loading:m.a}),j=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(6)]).then(t.bind(null,289))},loading:m.a}),T=s()({loader:function(){return Promise.all([t.e(1),t.e(24)]).then(t.bind(null,291))},loading:m.a}),A=s()({loader:function(){return t.e(20).then(t.bind(null,292))},loading:m.a}),I=s()({loader:function(){return t.e(17).then(t.bind(null,293))},loading:i.a}),L=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8)]).then(t.bind(null,294))},loading:i.a}),R=s()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,296))},loading:i.a}),C=s()({loader:function(){return Promise.all([t.e(3),t.e(9),t.e(15)]).then(t.bind(null,298))},loading:i.a});a.default=function(a){var t=this,o=E(Object(n.useState)(!0),2),s=o[0],m=o[1],f=E(Object(n.useState)(!1),2),G=(f[0],f[1]),M=E(Object(n.useState)(""),2),F=(M[0],M[1]),U=E(Object(n.useState)(""),2),D=(U[0],U[1]),J=E(Object(n.useState)(localStorage.hasOwnProperty("user")?JSON.parse(localStorage.getItem("user")):{}),2),q=J[0],H=J[1],V=E(Object(n.useState)([]),2),B=V[0],W=V[1],X=Object(d.c)((function(e){return e.subscription})),z=Object(d.c)((function(e){return e.subjects})),K=Object(d.c)((function(e){return e.loadingSubscription})),$=E(Object(n.useState)({}),2),_=$[0],Q=$[1],Y=Object(d.b)();Object(n.useEffect)((function(e){q.hasOwnProperty("name")&&a.location.pathname!=="".concat(u.d,"signin")&&a.location.pathname!=="".concat(u.d,"signup")&&Y(Object(p.b)(q)),Y(Object(p.a)()),Z(),ee()}),[]);var Z=function(){e.ajax({url:"".concat(u.a,"/payments/subscriptions"),method:"GET",error:function(e,a,t){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}G(!0),F("alert alert-danger"),D(n)}.bind(t),success:function(e){var a=e.filter((function(e){return 1===e.days}));a.length>0&&Q(a[0])}.bind(t)})},ee=function(){e.ajax({url:"".concat(u.a,"/classes/list"),method:"GET",error:function(e,a,t){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}m(!1),G(!0),F("alert alert-danger"),D(n)}.bind(t),success:function(e){W(e),m(!1)}.bind(t)})},ae=function(a){e(".sidenav").toggleClass("toggled")},te=function(e){localStorage.clear(),H({}),Y({type:u.i,payload:[]}),a.history.push({pathname:"".concat(u.d,"signin"),state:{next:a.location.pathname}})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"header-wrap"},r.a.createElement("nav",{className:"navbar navbar-expand-md bg-white fixed-top scrolling-navbar indigo py-3"},r.a.createElement("div",{className:"w-100 d-block d-lg-none d-md-none mr-md-5"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("span",{style:{fontSize:"20px",cursor:"pointer"},className:"float-right opennav",onClick:ae},"☰"),r.a.createElement("img",{src:"".concat(u.g,"/static/app/images/logo.png"),className:"w-25 float-left",alt:u.b})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"})),r.a.createElement("div",{id:"mySidenav",className:"sidenav"},r.a.createElement("a",{href:"#",className:"closebtn border-0",onClick:ae},"×"),r.a.createElement("a",{href:"#"},"HOME"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"CLASSES",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},B.slice(0,4).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(u.d,"exams/classes/").concat(e.id,"/subjects")},e.class))})))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"SUBJECTS",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},z.slice(0,4).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(u.d,"exams/subjects/").concat(e.id,"/modules")},e.subject))})))),r.a.createElement(c.b,{to:"".concat(u.d,"exams/modules")},"EXAMINATION PAPERS"),q.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(u.d,"profile")},"PROFILE"),r.a.createElement("a",{href:"#",onClick:te},"LOGOUT")):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(u.d,"signin")},"LOGIN"),r.a.createElement(c.b,{to:"".concat(u.d,"signup")},"REGISTER"))),r.a.createElement("div",{className:"collapse navbar-collapse flex-column ",id:"navbar"},r.a.createElement("ul",{className:"navbar-nav  w-100 justify-content-center p-0"},r.a.createElement("li",{className:"nav-item active p-0 m-0"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("img",{src:"".concat(u.g,"/static/app/images/logo.png"),className:"w-75",alt:u.b})))),r.a.createElement("ul",{className:"navbar-nav justify-content-around w-75"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(c.b,{className:"nav-link",to:u.d},"HOME ")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CLASSES"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},B.slice(0,4).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"exams/classes/").concat(e.id,"/subjects")},e.class)})))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"SUBJECTS"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},z.slice(0,4).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"exams/subjects/").concat(e.id,"/modules")},e.subject)})))),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.d,"exams/modules")},"EXAMINATION PAPERS ")),q.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,void 0!==q.institution&&q.institution.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,parseInt(q.owner)||parseInt(q.teacher)?r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.d,"students")},"STUDENTS ")):"",parseInt(q.owner)||parseInt(q.teacher)?r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.d,"teachers")},"TEACHERS ")):""):"",r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(c.b,{className:"nav-link dropdown-toggle",to:"".concat(u.d,"profile"),id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fa fa-user-circle"}," ")," Hello ",q.name),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.d,"profile")},"PROFILE"),r.a.createElement("a",{href:"#",onClick:te,className:"dropdown-item"},"LOGOUT")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login",to:"".concat(u.d,"signin")},"LOGIN")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login ",to:"".concat(u.d,"signup")},"SIGN UP")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login ",to:"".concat(u.d,"initialSetup")},"REGISTER SCHOOL")),_.hasOwnProperty("cost")>0?r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"nav-link login",to:"".concat(u.d,"signin")},"Get ",_.days," day for Ksh.",_.cost," ")):""))))),s||K?r.a.createElement(i.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:a.match.url,render:function(e){return r.a.createElement(N,h({},e,{user:q,subjects:z}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"signin"),render:function(e){return r.a.createElement(b,h({},e,{setUser:H}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"school"),render:function(e){return r.a.createElement(g,h({},e,{setUser:H}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"reset"),render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"signup"),render:function(e){return r.a.createElement(w,h({},e,{setUser:H}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"initialSetup"),render:function(e){return r.a.createElement(y,h({},e,{setUser:H}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"profile"),render:function(e){return q.hasOwnProperty("id")?r.a.createElement(x,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/classes"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(k,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(S,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/classes/:class/subjects"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(S,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/modules"),render:function(e){return r.a.createElement(j,h({},e,{user:q}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects/:subject/modules"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(j,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/done"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(P,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/edit/:exam"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(I,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/:exam"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(O,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"questions/question/new"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(C,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"questions/question/:question/edit"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(C,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"students"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(R,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"teachers"),render:function(e){return q.hasOwnProperty("id")?X.hasOwnProperty("id")?r.a.createElement(L,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"subscriptions"),render:function(e){return q.hasOwnProperty("id")?r.a.createElement(T,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"subscription/payment"),render:function(e){return q.hasOwnProperty("id")?r.a.createElement(A,h({},e,{user:q})):e.history.push({pathname:"".concat(u.d,"signin"),state:{next:e.location.pathname}})}})),r.a.createElement("ul",{className:"nav from text-center bg-light d-flex"},r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link px-0 fromtext",href:"#"},"E-Learning from",r.a.createElement("img",{src:"".concat(u.g,"/static/app/images/thestandardlogo.png"),alt:u.b,className:"footerlogo"})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto col-xs-12"},r.a.createElement("ul",{className:"nav nav-inline "},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.btvkenya.ke/"},"BTV")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.evewoman.co.ke/"},"EVE WOMAN")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.spicefm.co.ke/"},"SPICE RADIO")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"http://www.travelog.ke/"},"TRAVEL")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.farmers.co.ke/"},"FARMERS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.digger.co.ke/"},"DIGGER")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.vas.standardmedia.co.ke/"},"VAS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.newsstand.standardmedia.co.ke/"},"EPAPER")),r.a.createElement("li",{className:"nav-item border-0"},r.a.createElement("a",{className:"nav-link",href:"https://www.standardmedia.co.ke/corporate"},"CORPORATE")))))),r.a.createElement("div",{id:"copyright"},r.a.createElement("div",{className:"container text-center p-0"},r.a.createElement("div",{className:"row p-0"},r.a.createElement("div",{className:"col-12 mx-auto p-0"},r.a.createElement("p",{className:"text-center"},"© 2020 The Standard Group PLC All rights reserved")))))),r.a.createElement("a",{href:"#",className:"back-to-top"},r.a.createElement("i",{className:"fa fa-arrow-up"})))))}}.call(this,t(60))},61:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(1),r=t.n(n),c=t(24);function l(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"200px"}},r.a.createElement(c.a,{color:"#cf2027"}))}}}]);