(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{47:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return o}));var n=t(0),r=t.n(n),l=t(11),s=t(16),c=t(17);function m(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return i(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function o(a){var t=this,i=a.history.location.state,o=m(Object(n.useState)(!1),2),d=o[0],p=o[1],u=m(Object(n.useState)(!(void 0===i||!i.hasOwnProperty("message"))&&i.message),2),E=u[0],v=u[1],N=m(Object(n.useState)(void 0!==i&&i.hasOwnProperty("next")?i.next:"".concat(l.b,"/exams/modules")),2),f=N[0],g=(N[1],m(Object(n.useState)(void 0!==i&&i.hasOwnProperty("messageType")?i.messageType:""),2)),b=g[0],h=g[1],y=m(Object(n.useState)(void 0!==i&&i.hasOwnProperty("response")?i.response:""),2),w=y[0],S=y[1],x=m(Object(n.useState)("password"),2),O=x[0],k=x[1];Object(n.useEffect)((function(){localStorage.clear()}),[]);var A=function(e,a){k(e?"text":"password")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("nav",{className:"navbar navbar-expand-md bg-white sticky-top pb-3"},r.a.createElement("div",{className:"collapse navbar-collapse flex-column  text-center",id:"navbar"},r.a.createElement("ul",{className:"navbar-nav w-100 justify-content-center px-3 "},r.a.createElement("li",null,r.a.createElement("a",{href:"".concat(l.d),className:"logo"},r.a.createElement("img",{src:"".concat(l.d,"/static/landing/img/logo.png"),className:"logoimg",alt:"Standard E-Learning"})))))),r.a.createElement("div",{className:"container-fluid container-application"},r.a.createElement("div",{className:"main-content position-relative"},r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:" py-5 d-flex align-items-center"},r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-8 col-lg-4"},r.a.createElement("div",{className:"card shadow zindex-100 mb-0"},r.a.createElement("div",{className:"card-body px-md-5 py-5"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("h6",{className:"h3"},"Login"),r.a.createElement("p",{className:"text-muted mb-0"},"Sign in to your account to continue.")),r.a.createElement("span",{className:"clearfix"}),r.a.createElement("form",{role:"form",onSubmit:function(n){n.preventDefault(),p(!0),v(!1);var r=e("#email").val(),s=e("#password").val();e.ajax({url:"".concat(l.a,"/app/login"),method:"post",data:{username:r,password:s},error:function(a,t,n){var r=JSON.parse(a.responseText).message;405===a.status&&(r="Sorry an error has occurred. We are working on it. (405)"),p(!1),v(!0),h("alert alert-danger"),S(r),e("html, body").animate({scrollTop:0},200)}.bind(t),success:function(e){localStorage.setItem("user",e),a.history.push({pathname:"".concat(f),state:{user:JSON.parse(e)}}),p(!1)}.bind(t)})}},E&&r.a.createElement("div",{className:b,role:"alert"},r.a.createElement("div",{className:"alert-message"},w)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},"Email address"),r.a.createElement("div",{className:"input-group input-group-merge"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-user"}))),r.a.createElement("input",{type:"email",className:"form-control",id:"email"}))),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},r.a.createElement("div",null,r.a.createElement("label",{className:"form-control-label"},"Password"))),r.a.createElement("div",{className:"input-group input-group-merge"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-key"}))),r.a.createElement("input",{type:O,className:"form-control",id:"password",placeholder:"Password"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",onMouseUp:A.bind(this,!1),onMouseDown:A.bind(this,!0),onMouseLeave:A.bind(this,!1)},r.a.createElement("i",{className:"fa fa-eye"}))))),r.a.createElement("div",{className:"mt-4"},d?r.a.createElement("div",{className:"text-center"},r.a.createElement(s.a,{color:"#6e00ff"})):r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary btn-icon rounded-pill"},r.a.createElement("span",{className:"btn-inner--text"},"Sign in"),r.a.createElement("span",{className:"btn-inner--icon"},r.a.createElement("i",{className:"fa fa-long-arrow-alt-right"})))))),r.a.createElement("div",{className:"card-footer px-md-5"},r.a.createElement("small",null,"Not registered?"),r.a.createElement(c.b,{to:"".concat(l.c,"signup"),className:"small font-weight-bold"},"Create account")))))))))),r.a.createElement("footer",{style:{color:"#000000",background:"linear-gradient(to bottom right, #510812, #bf1e2d)"},className:""},r.a.createElement("ul",{className:"nav from text-center bg-light "},r.a.createElement("li",{className:"nav-item mt-2 mr-1 "},r.a.createElement("a",{className:"nav-link px-0 ",href:"# "},"VAS from ")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link px-0 ",href:"# "},r.a.createElement("img",{src:"https://vas.standardmedia.co.ke/front-end/images/STANDARD-REDESIGN-LOGO.png",className:"bottomlogo mt-2"})))),r.a.createElement("div",{className:"card text-center "},r.a.createElement("div",{className:"card-header p-2 "},r.a.createElement("div",{className:"container "},r.a.createElement("ul",{className:"nav text-center "},r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link ",href:"# "},"DIGGER")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link ",href:"# "},"BTV")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link ",href:"# "},"TRAVELOG")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"PULSER")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#services "},"FARMERS")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"EVE WOMAN")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#services "},"FM VYBEZ")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"SPICE RADIO")),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#services "},"RADIO MAISHA")),r.a.createElement("li",{className:"nav-item border-0 "},r.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"CORPORATE"))))),r.a.createElement("div",{className:"card-body p-2 "},r.a.createElement("span",null,"© Copyright 2020 - Standard Group PLC"))))))}}.call(this,t(180))}}]);