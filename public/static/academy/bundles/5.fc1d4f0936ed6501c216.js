(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{53:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),c=t(23);function l(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"200px"}},r.a.createElement(c.a,{color:"#cf2027"}))}},54:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return c}));var n=t(14),r=t(6);function c(a){return function(t){return e.ajax({url:"".concat(r.a,"/academy/subscription/active"),data:{user_id:a.user_id},method:"get",headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(e,a,t){}.bind(this),success:function(e){t({type:n.c,payload:e})}.bind(this)})}}}).call(this,t(51))},72:function(e,a,t){"use strict";t.r(a),function(e){var n=t(0),r=t.n(n),c=t(21),l=t(8),i=t(16),s=t.n(i),o=t(53),m=t(22),u=t(6),d=(t(54),t(14));t(23);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return p(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var g=s()({loader:function(){return t.e(4).then(t.bind(null,57))},loading:o.a}),h=s()({loader:function(){return t.e(9).then(t.bind(null,56))},loading:o.a}),E=(s()({loader:function(){return t.e(7).then(t.bind(null,58))},loading:o.a}),s()({loader:function(){return Promise.all([t.e(2),t.e(11)]).then(t.bind(null,59))},loading:o.a})),v=s()({loader:function(){return t.e(3).then(t.bind(null,69))},loading:o.a}),y=s()({loader:function(){return t.e(8).then(t.bind(null,71))},loading:o.a});a.default=function(a){var t=this,i=Object(m.b)(),s=b(Object(n.useState)(localStorage.hasOwnProperty("ac_user")?JSON.parse(localStorage.getItem("ac_user")):{}),2),p=s[0],N=s[1],x=Object(m.c)((function(e){return e.academy.subscription})),k=b(Object(n.useState)(!0),2),w=k[0],S=k[1],j=b(Object(n.useState)(!0),2),O=j[0],_=j[1];Object(n.useEffect)((function(e){T(),p.hasOwnProperty("id")&&"/academy/login"!==a.location.pathname?C():_(!1)}),[]);var C=function(){e.ajax({url:"".concat(u.a,"/academy/subscription/active"),method:"get",data:{user_id:p.id},headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(e,a,t){_(!1)}.bind(t),success:function(e){i({type:d.c,payload:e}),_(!1)}.bind(t)})},T=function(){e.ajax({url:"".concat(u.a,"/academy/video"),method:"get",headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(e,a,t){S(!1)}.bind(t),success:function(e){i({type:d.a,payload:e}),S(!1)}.bind(t)})},A=function(a){e("#mySidenav").toggleClass("toggled")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"mySidenav",className:"sidenav"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-transparent navbar-light bg-light py-4 flex-column"},r.a.createElement("a",{href:"#",className:"closebtn",onClick:A},"×"),r.a.createElement("a",{className:"navbar-brand text-dark",href:"#"},r.a.createElement("img",{src:"".concat(u.g,"/static/academy/assets/images/videosite/logo2.png"),className:"img-left img-fluid"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-action":"offcanvas-open","data-target":"#navbar_main","aria-controls":"navbar_main","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"},r.a.createElement("i",{className:"fas fa-align-justify"}))),r.a.createElement("div",{className:"navbar-collapse offcanvas-collapse",id:"navbar_main"},r.a.createElement("ul",{className:"nav flex-column navbar-nav"},r.a.createElement("li",{className:"nav-item mt-4"},r.a.createElement(c.b,{className:"nav-link active text-dark border-formart",to:"/academy/category/latest"},r.a.createElement("h6",null,r.a.createElement("strong",null,"LATEST")))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link text-dark border-formart",to:"/academy/category/trending"},r.a.createElement("h6",null,r.a.createElement("strong",null,"TRENDING")))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link  text-dark border-formart",to:"/academy/category/featured"},r.a.createElement("h6",null,r.a.createElement("strong",null,"FEATURED")))),r.a.createElement("li",{className:"nav-item mt-5"},r.a.createElement("a",{href:"https://github.com/webpixels/boomerang-ui-kit/archive/master.zip",target:"_blank",className:"nav-link d-lg-none bg-green text-white button-design"},"SUBSCRIBE"),r.a.createElement("a",{href:"https://github.com/webpixels/boomerang-ui-kit/archive/master.zip",target:"_blank",className:"btn btn-sm bg-green text-white d-none d-lg-inline-flex button-design"},"SUBSCRIBE")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link nav-link-icon",href:"https://instagram.com/webpixelsofficial/",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram text-success"}),r.a.createElement("span",{className:"ml-2 text-green"},"Instagram"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link nav-link-icon",href:"https://web.facebook.com/webpixels",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook text-success"}),r.a.createElement("span",{className:"ml-2 text-dark"},"Facebook"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link nav-link-icon",href:"https://dribbble.com/webpixels",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin text-success"}),r.a.createElement("span",{className:"ml-2 text-dark"},"Linkedin"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link nav-link-icon",href:"https://github.com/webpixels",target:"_blank"},r.a.createElement("i",{className:"fab fa-twitter text-success"}),r.a.createElement("span",{className:"ml-2 text-dark"},"Twitter"))))))),r.a.createElement("div",{id:"main"},w?r.a.createElement(o.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"menu-bar",onClick:A},r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})," MENU"),r.a.createElement("section",{className:"search-area d-block bg-dark pt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("div",{className:"mx-3 form-group"},r.a.createElement("div",{className:"input-group mb-4"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":""},r.a.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search ...","aria-label":"Search keyword","aria-describedby":"basic-addon1"}))))))),O?r.a.createElement(o.a,null):r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:a.match.url,render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"/signin"),render:function(e){return r.a.createElement(h,f({},e,{setUser:N}))}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"/subscribe"),render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"/category/:category"),render:function(e){return r.a.createElement(y,e)}}),r.a.createElement(l.a,{exact:!0,path:"".concat(a.match.url,"/:video/:slug"),render:function(e){return p.hasOwnProperty("id")?x.hasOwnProperty("id")?r.a.createElement(v,e):e.history.push({pathname:"/academy/subscribe",state:{next:e.location.pathname}}):e.history.push({pathname:"/academy/signin",state:{next:e.location.pathname}})}})))))}}.call(this,t(51))}}]);