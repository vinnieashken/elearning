(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{48:function(e,a,t){"use strict";t.r(a),function(e){var r=t(0),n=t.n(r),l=t(17),c=t(11),s=t(16);function m(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,n=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(t.push(c.value),!a||t.length!==a);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return o(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}a.default=function(a){var t=this,o=a.history.location.state,i=m(Object(r.useState)(!1),2),p=i[0],u=i[1],d=m(Object(r.useState)(!(void 0===o||!o.hasOwnProperty("message"))&&o.message),2),E=d[0],N=d[1],v=m(Object(r.useState)(void 0!==o&&o.hasOwnProperty("next")?o.next:"".concat(c.b)),2),f=v[0],g=(v[1],m(Object(r.useState)(void 0!==o&&o.hasOwnProperty("messageType")?o.messageType:""),2)),b=g[0],h=g[1],y=m(Object(r.useState)(void 0!==o&&o.hasOwnProperty("response")?o.response:""),2),w=y[0],x=y[1],k=m(Object(r.useState)("password"),2);k[0],k[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:""},n.a.createElement("nav",{className:"navbar navbar-expand-md bg-white sticky-top pb-3"},n.a.createElement("div",{className:"collapse navbar-collapse flex-column  text-center",id:"navbar"},n.a.createElement("ul",{className:"navbar-nav w-100 justify-content-center px-3 "},n.a.createElement("li",null,n.a.createElement("a",{href:"".concat(c.d),className:"logo"},n.a.createElement("img",{src:"".concat(c.d,"/static/landing/img/logo.png"),className:"logoimg",alt:"Standard E-Learning"})))))),n.a.createElement("div",{className:"container-fluid container-application"},n.a.createElement("div",{className:"main-content position-relative"},n.a.createElement("div",{className:"page-content"},n.a.createElement("div",{className:"min-vh-100 py-5 d-flex align-items-center"},n.a.createElement("div",{className:"w-100"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-sm-8 col-lg-5"},n.a.createElement("div",{className:"card shadow zindex-100 mb-0"},n.a.createElement("div",{className:"card-body px-md-5 py-5"},n.a.createElement("div",{className:"mb-5"},n.a.createElement("h6",{className:"h3"},"Create account"),n.a.createElement("p",{className:"text-muted mb-0"},"Made with love for students.")),n.a.createElement("span",{className:"clearfix"}),n.a.createElement("form",{role:"form",onSubmit:function(r){r.preventDefault(),u(!0),N(!1);var n=new FormData(e("form#register")[0]);e.ajax({url:"".concat(c.a,"/app/register"),method:"post",data:n,processData:!1,contentType:!1,error:function(a,t,r){var n="Sorry an error has occurred. We are working on it. ".concat(a.status);try{n=JSON.parse(a.responseText).message}catch(e){}u(!1),N(!0),h("alert alert-danger"),x(n),e("html, body").animate({scrollTop:0},200)}.bind(t),success:function(e){u(!1),localStorage.setItem("token",e.access_token),a.history.push({pathname:"".concat(f)})}.bind(t)})},id:"register"},E&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:b,role:"alert"},n.a.createElement("div",{className:"alert-message"},w))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"form-control-label"},"Full Name"),n.a.createElement("div",{className:"input-group input-group-merge"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"full name"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"form-control-label"},"Email address"),n.a.createElement("div",{className:"input-group input-group-merge"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"name@example.com"}))),n.a.createElement("div",{className:"form-group mb-4"},n.a.createElement("label",{className:"form-control-label"},"Password"),n.a.createElement("div",{className:"input-group input-group-merge"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"********"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("a",{href:"#","data-toggle":"password-text","data-target":"#input-password"},n.a.createElement("i",{className:"fa fa-eye"})))))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"form-control-label"},"Confirm password"),n.a.createElement("div",{className:"input-group input-group-merge"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control",name:"password_confirmation",placeholder:"********"}))),n.a.createElement("div",{className:"my-4"},n.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},n.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"check-terms",required:!0}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"check-terms"},"I agree to the ",n.a.createElement("a",{href:"#"},"terms and conditions"))),n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"check-privacy",required:!0}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"check-privacy"},"I agree to the ",n.a.createElement("a",{href:"#"},"privacy policy")))),n.a.createElement("div",{className:"mt-4"},p?n.a.createElement("div",{className:"text-center"},n.a.createElement(s.a,{color:"#6e00ff"})):n.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary btn-icon rounded-pill"},n.a.createElement("span",{className:"btn-inner--text"},"Create my account"),n.a.createElement("span",{className:"btn-inner--icon"},n.a.createElement("i",{className:"fa fa-long-arrow-alt-right"})))))),n.a.createElement("div",{className:"card-footer px-md-5"},n.a.createElement("small",null,"Already have an acocunt?"),n.a.createElement(l.b,{to:"".concat(c.c,"signin"),className:"small font-weight-bold"},"Sign in")))))))))),n.a.createElement("footer",{style:{color:"#000000",background:"linear-gradient(to bottom right, #510812, #bf1e2d)"},className:""},n.a.createElement("ul",{className:"nav from text-center bg-light "},n.a.createElement("li",{className:"nav-item mt-2 mr-1 "},n.a.createElement("a",{className:"nav-link px-0 ",href:"# "},"VAS from ")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link px-0 ",href:"# "},n.a.createElement("img",{src:"https://vas.standardmedia.co.ke/front-end/images/STANDARD-REDESIGN-LOGO.png",className:"bottomlogo mt-2"})))),n.a.createElement("div",{className:"card text-center "},n.a.createElement("div",{className:"card-header p-2 "},n.a.createElement("div",{className:"container "},n.a.createElement("ul",{className:"nav text-center "},n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link ",href:"# "},"DIGGER")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link ",href:"# "},"BTV")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link ",href:"# "},"TRAVELOG")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"PULSER")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#services "},"FARMERS")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"EVE WOMAN")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#services "},"FM VYBEZ")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"SPICE RADIO")),n.a.createElement("li",{className:"nav-item "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#services "},"RADIO MAISHA")),n.a.createElement("li",{className:"nav-item border-0 "},n.a.createElement("a",{className:"nav-link page-scroll ",href:"#slider-area "},"CORPORATE"))))),n.a.createElement("div",{className:"card-body p-2 "},n.a.createElement("span",null,"© Copyright 2020 - Standard Group PLC"))))))}}.call(this,t(180))}}]);