(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{47:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n=t(0),r=t.n(n),l=t(11),s=(t(23),t(16));function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return o(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function m(e){var a=e.history.location.state,t=c(Object(n.useState)(!1),2),o=(t[0],t[1],c(Object(n.useState)(!(void 0===a||!a.hasOwnProperty("message"))&&a.message),2)),m=(o[0],o[1],c(Object(n.useState)(void 0!==a&&a.hasOwnProperty("next")?a.next:"".concat(l.a)),2)),i=m[0],p=(m[1],c(Object(n.useState)(void 0!==a&&a.hasOwnProperty("messageType")?a.messageType:""),2)),u=(p[0],p[1],c(Object(n.useState)(void 0!==a&&a.hasOwnProperty("response")?a.response:""),2)),d=(u[0],u[1],c(Object(n.useState)("password"),2));d[0],d[1];Object(n.useEffect)((function(){localStorage.clear()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"application application-offset ready"},r.a.createElement("div",{className:"container-fluid container-application"},r.a.createElement("div",{className:"main-content position-relative"},r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"min-vh-100 py-5 d-flex align-items-center"},r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-8 col-lg-4"},r.a.createElement("div",{className:"card shadow zindex-100 mb-0"},r.a.createElement("div",{className:"card-body px-md-5 py-5"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("h6",{className:"h3"},"Login"),r.a.createElement("p",{className:"text-muted mb-0"},"Sign in to your account to continue.")),r.a.createElement("span",{className:"clearfix"}),r.a.createElement("form",{role:"form",onSubmit:function(a){a.preventDefault(),e.history.push({pathname:"".concat(i)})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},"Email address"),r.a.createElement("div",{className:"input-group input-group-merge"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-user"}))),r.a.createElement("input",{type:"email",className:"form-control",id:"input-email",placeholder:"name@example.com"}))),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},r.a.createElement("div",null,r.a.createElement("label",{className:"form-control-label"},"Password")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("a",{href:"#!",className:"small text-muted text-underline--dashed border-primary"},"Lost password?"))),r.a.createElement("div",{className:"input-group input-group-merge"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-key"}))),r.a.createElement("input",{type:"password",className:"form-control",id:"input-password",placeholder:"Password"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("a",{href:"#","data-toggle":"password-text","data-target":"#input-password"},r.a.createElement("i",{className:"fa fa-eye"})))))),r.a.createElement("div",{className:"mt-4"},r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary btn-icon rounded-pill"},r.a.createElement("span",{className:"btn-inner--text"},"Sign in"),r.a.createElement("span",{className:"btn-inner--icon"},r.a.createElement("i",{className:"fa fa-long-arrow-alt-right"})))))),r.a.createElement("div",{className:"card-footer px-md-5"},r.a.createElement("small",null,"Not registered?"),r.a.createElement(s.b,{to:"".concat(l.b,"register"),className:"small font-weight-bold"},"Create account"))))))))))))}}}]);