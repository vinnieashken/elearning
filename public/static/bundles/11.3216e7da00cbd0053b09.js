(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(e,a,t){"use strict";(function(e){t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return o}));var n=t(7);function r(a){return function(t){if(a.email&&["dkarimi@standardmedia.co.ke","mshahi@standardmedia.co.ke","lkinyanjui@standardmedia.co.ke","dennismwagiru@ymail.com","mbuthiaw001@gmail.com"].includes(a.email.toLowerCase()))t({type:n.k,payload:{id:1}});else{if(11!==parseInt(a.institution_id)||1!==parseInt(a.owner)&&1!==parseInt(a.teacher))return t({type:n.f,payload:!0}),e.ajax({url:"".concat(n.a,"/payments/subscription/user/").concat(a.user_id),method:"get",dataType:"json",error:function(e,a,r){t({type:n.f,payload:!1})}.bind(this),success:function(e){t({type:n.k,payload:e})}.bind(this)});t({type:n.k,payload:{id:1}})}}}function c(){return function(a){return e.ajax({url:"".concat(n.a,"/subjects/list"),method:"get",dataType:"json",success:function(e){a({type:n.i,payload:e})}.bind(this)})}}function o(){return function(a){return e.ajax({url:"".concat(n.a,"/classes/list"),method:"get",dataType:"json",success:function(e){a({type:n.c,payload:e})}.bind(this)})}}}).call(this,t(57))},335:function(e,a,t){"use strict";t.r(a),function(e){var n=t(1),r=t.n(n),c=t(23),o=t(9),s=t(28),l=t.n(s),i=t(59),m=t(29),u=t(7),d=t(25),p=t(194);t(24);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var b=l()({loader:function(){return t.e(23).then(t.bind(null,231))},loading:i.a}),g=l()({loader:function(){return t.e(28).then(t.bind(null,232))},loading:i.a}),w=l()({loader:function(){return t.e(27).then(t.bind(null,233))},loading:i.a}),y=l()({loader:function(){return t.e(26).then(t.bind(null,234))},loading:i.a}),v=l()({loader:function(){return t.e(25).then(t.bind(null,235))},loading:i.a}),x=l()({loader:function(){return t.e(22).then(t.bind(null,236))},loading:i.a}),N=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(30),t.e(18)]).then(t.bind(null,237))},loading:m.a}),O=l()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(10)]).then(t.bind(null,243))},loading:m.a}),k=l()({loader:function(){return Promise.all([t.e(1),t.e(20)]).then(t.bind(null,301))},loading:m.a}),P=l()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(17)]).then(t.bind(null,302))},loading:m.a}),S=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8)]).then(t.bind(null,303))},loading:m.a}),j=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(19)]).then(t.bind(null,304))},loading:m.a}),T=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(5)]).then(t.bind(null,305))},loading:m.a}),I=l()({loader:function(){return Promise.all([t.e(1),t.e(16)]).then(t.bind(null,322))},loading:m.a}),A=l()({loader:function(){return t.e(24).then(t.bind(null,323))},loading:m.a}),L=l()({loader:function(){return t.e(21).then(t.bind(null,324))},loading:i.a}),D=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,325))},loading:i.a}),R=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6)]).then(t.bind(null,327))},loading:i.a}),M=l()({loader:function(){return Promise.all([t.e(3),t.e(14),t.e(15)]).then(t.bind(null,329))},loading:i.a}),F=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,332))},loading:i.a}),C=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,333))},loading:i.a}),U=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(9)]).then(t.bind(null,334))},loading:i.a});a.default=function(a){var t=this,s=E(Object(n.useState)(!0),2),l=s[0],m=s[1],f=E(Object(n.useState)(!1),2),G=(f[0],f[1]),H=E(Object(n.useState)(""),2),_=(H[0],H[1]),J=E(Object(n.useState)(""),2),W=(J[0],J[1]),q=E(Object(n.useState)(localStorage.hasOwnProperty("user")?JSON.parse(localStorage.getItem("user")):{}),2),K=q[0],B=q[1],X=Object(d.c)((function(e){return e.classes})),Y=Object(d.c)((function(e){return e.subscription})),z=Object(d.c)((function(e){return e.subjects})),V=Object(d.c)((function(e){return e.loadingSubscription})),$=E(Object(n.useState)({}),2),Q=$[0],Z=$[1],ee=Object(d.b)();Object(n.useEffect)((function(e){K.hasOwnProperty("name")&&a.location.pathname!=="".concat(u.e,"signin")&&a.location.pathname!=="".concat(u.e,"signup")&&ee(Object(p.c)(K)),ee(Object(p.a)()),ee(Object(p.b)()),ae()}),[]);var ae=function(){e.ajax({url:"".concat(u.a,"/payments/subscriptions"),method:"GET",error:function(e,a,t){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}m(!1),G(!0),_("alert alert-danger"),W(n)}.bind(t),success:function(e){var a=e.filter((function(e){return 1===e.days}));a.length>0&&Z(a[0]),m(!1)}.bind(t)})},te=function(a){e(".sidenav").toggleClass("toggled")},ne=function(e){localStorage.clear(),B({}),ee({type:u.j,payload:[]}),a.history.push({pathname:"".concat(u.e,"signin"),state:{next:a.location.pathname}})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"header-wrap"},r.a.createElement("nav",{className:"navbar navbar-expand-md text-white  fixed-top scrolling-navbar indigo top-nav-collapse"},r.a.createElement("div",{className:"w-100 d-block d-lg-none d-md-none ml-2"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("span",{style:{fontSize:"20px",cursor:"pointer"},className:"float-right opennav",onClick:te},"☰"),r.a.createElement("img",{className:"w-25 float-left logotop",src:"".concat(u.h,"/static/new/img/logo.png"),alt:""})),r.a.createElement("button",{"aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar","data-toggle":"collapse",type:"button"})),r.a.createElement("div",{className:"sidenav",id:"mySidenav"},r.a.createElement("a",{href:"#",className:"closebtn border-0",onClick:te},"× "),r.a.createElement(c.b,{to:"".concat(u.e)},"HOME"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"CLASSES",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},X.filter((function(e){return[2,6,7,8].includes(e.id)})).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(u.e,"exams/classes/").concat(e.id,"/subjects")},e.class))})))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:" dropdown-toggle","data-toggle":"dropdown"},"SUBJECTS",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},z.filter((function(e){return[2,4,5,6,7,8].includes(e.id)})).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(u.e,"exams/subjects/").concat(e.id,"/modules")},e.subject))})))),r.a.createElement(c.b,{to:"".concat(u.e,"exams/modules")},"EXAMINATION PAPERS"),K.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(u.e,"profile")},"PROFILE"),r.a.createElement("a",{href:"#",onClick:ne},"LOGOUT")):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"".concat(u.e,"signin")},"LOGIN"),r.a.createElement(c.b,{to:"".concat(u.e,"signup")},"REGISTER"))),r.a.createElement("div",{className:"collapse navbar-collapse flex-column ",id:"navbar",style:{background:"#1865f1"}},r.a.createElement("ul",{className:"navbar-nav justify-content-around w-90"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.e)},r.a.createElement("img",{className:"logo",src:"".concat(u.h,"/static/new/img/logo.png"),alt:"".concat(u.b)}))),r.a.createElement("li",{className:"nav-item active mt-4"},r.a.createElement(c.b,{className:"nav-link",to:u.e},"HOME ")),r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement("a",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"http://example.com",id:"navbarDropdownMenuLink"},"CLASSES"),r.a.createElement("div",{"aria-labelledby":"navbarDropdownMenuLink",className:"dropdown-menu"},X.filter((function(e){return[2,6,7,8].includes(e.id)})).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.e,"exams/classes/").concat(e.id,"/subjects")},e.class)})))),r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement("a",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"http://example.com",id:"navbarDropdownMenuLink"},"SUBJECTS"),r.a.createElement("div",{"aria-labelledby":"navbarDropdownMenuLink",className:"dropdown-menu"},z.filter((function(e){return[2,4,5,6,7,8].includes(e.id)})).map((function(e){return r.a.createElement(c.b,{className:"dropdown-item ",to:"".concat(u.e,"exams/subjects/").concat(e.id,"/modules")},e.subject)})))),r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.e,"exams/modules")},"EXAMINATION PAPERS ")),K.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,void 0!==K.institution&&K.institution.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,parseInt(K.owner)||parseInt(K.teacher)?r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement(c.b,{className:"nav-link dropdown-toggle",to:"".concat(u.e,"profile"),id:"reports","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"REPORTS"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"reports"},r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.e,"students")},"Registered Students "),r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.e,"teachers")},"Registered Teachers "),r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.e,"exams/mine")},"My Papers"),r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.e,"report/payments")},"Payments"))):"",r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement("a",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"http://example.com",id:"navbarDropdownMenuLink"},"HOW IT WORKS"),r.a.createElement("div",{"aria-labelledby":"navbarDropdownMenuLink",className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item ",target:"_blank",href:"https://tutorsoma.standardmedia.co.ke/docs/Design.pdf"},"For Students"),r.a.createElement("a",{className:"dropdown-item ",target:"_blank",href:"https://tutorsoma.standardmedia.co.ke/docs/2Design.pdf"},"For Teachers"),r.a.createElement("a",{className:"dropdown-item ",target:"_blank",href:"https://tutorsoma.standardmedia.co.ke/docs/3Design.pdf"},"For Your School's Students")))):"",r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement(c.b,{className:"nav-link dropdown-toggle",to:"".concat(u.e,"profile"),id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fa fa-user-circle"}," ")," Hello ",K.name),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(c.b,{className:"dropdown-item",to:"".concat(u.e,"profile")},"PROFILE"),r.a.createElement("a",{href:"#",onClick:ne,className:"dropdown-item"},"LOGOUT")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.e,"signin")},"LOGIN")),r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link ",to:"".concat(u.e,"signup")},"SIGN UP")),r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link ",to:"".concat(u.e,"initialSetup")},"REGISTER SCHOOL")),r.a.createElement("li",{className:"nav-item dropdown mt-4"},r.a.createElement("a",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"http://example.com",id:"navbarDropdownMenuLink"},"HOW IT WORKS"),r.a.createElement("div",{"aria-labelledby":"navbarDropdownMenuLink",className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item ",target:"_blank",href:"https://tutorsoma.standardmedia.co.ke/docs/Design.pdf"},"For Students"),r.a.createElement("a",{className:"dropdown-item ",target:"_blank",href:"https://tutorsoma.standardmedia.co.ke/docs/2Design.pdf"},"For Teachers"),r.a.createElement("a",{className:"dropdown-item ",target:"_blank",href:"https://tutorsoma.standardmedia.co.ke/docs/3Design.pdf"},"For Your School's Students"))),Q.hasOwnProperty("cost")>0?r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link",to:"".concat(u.e,"signin")},"Get ",Q.days," day for Ksh.",Q.cost," ")):""))))),l||V?r.a.createElement(i.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:a.match.url,render:function(e){return r.a.createElement(N,h({},e,{user:K,subjects:z}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"signin"),render:function(e){return r.a.createElement(b,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"otp"),render:function(e){return r.a.createElement(g,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"school"),render:function(e){return r.a.createElement(w,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"reset"),render:function(e){return r.a.createElement(y,e)}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"signup"),render:function(e){return r.a.createElement(v,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"initialSetup"),render:function(e){return r.a.createElement(x,h({},e,{setUser:B}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"profile"),render:function(e){return K.hasOwnProperty("id")?r.a.createElement(O,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/classes"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(S,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(j,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/classes/:class/subjects"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(j,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/modules"),render:function(e){return r.a.createElement(T,h({},e,{user:K}))}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/subjects/:subject/modules"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(T,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/done"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(P,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/mine"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(F,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/edit/:exam"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(L,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/:exam"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(k,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"exams/exam/:exam/performance"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(C,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"questions/question/new"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(M,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"questions/question/:question/edit"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(M,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"students"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(R,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"teachers"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(D,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"report/payments"),render:function(e){return K.hasOwnProperty("id")?Y.hasOwnProperty("id")?r.a.createElement(U,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"subscriptions"),state:{next:e.location.pathname}}):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"subscriptions"),render:function(e){return K.hasOwnProperty("id")?r.a.createElement(I,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"subscription/payment"),render:function(e){return K.hasOwnProperty("id")?r.a.createElement(A,h({},e,{user:K})):e.history.push({pathname:"".concat(u.e,"signin"),state:{next:e.location.pathname}})}}),r.a.createElement(o.a,{exact:!0,path:"".concat(a.match.url,"*"),render:function(e){return r.a.createElement(N,h({},e,{user:K,subjects:z}))}})),r.a.createElement("ul",{className:"nav from text-center bg-light d-flex"},r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link px-0 fromtext",href:"#"},"Tutor Soma from",r.a.createElement("img",{src:"".concat(u.h,"/static/app/images/thestandardlogo.png"),alt:u.b,className:"footerlogo"})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:" bg-grey pl-3 w-100"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row  bg-grey w-100"},r.a.createElement("div",{className:"mx-auto col-xs-12"},r.a.createElement("ul",{className:"nav nav-inline "},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"http://www.standardmedia.co.ke/"},"THE STANDARD |")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"https://www.standardmedia.co.ke/ktnnews"},"KTN NEWS |")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"https://www.standardmedia.co.ke/radiomaisha"},"RADIO MAISHA |")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.vas.standardmedia.co.ke/"},"VAS |")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://newsstand.standardmedia.co.ke/"},"E-PAPER |")),r.a.createElement("li",{className:"nav-item border-0"},r.a.createElement("a",{className:"nav-link",href:"https://www.standardmedia.co.ke/corporate"},"CORPORATE |"))))))),r.a.createElement("nav",{className:"text-center bg-black"},r.a.createElement("ul",{className:"navbar-nav justify-content-center p-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"text-white",href:"https://new.standardmedia.co.ke/privacy-policy"},"Privacy policy")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"text-white",href:" https://new.standardmedia.co.ke/terms-and-conditions"},"Terms & Conditions")),r.a.createElement("li",{className:"nav-item"},"© 2020 Standard Group PLC")))),r.a.createElement("a",{href:"#",className:"back-to-top"},r.a.createElement("i",{className:"fa fa-arrow-up"})))))}}.call(this,t(57))},59:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(1),r=t.n(n),c=t(24);function o(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"200px"}},r.a.createElement(c.a,{color:"#cf2027"}))}}}]);