(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{221:function(e,a,t){"use strict";t.r(a),function(e){var r=t(1),n=t.n(r),l=t(23),s=t(8),c=t(24),m=t(195),o=t(25);function i(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,n=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return u(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}a.default=function(a){var t=this,u=a.history.location.state,p=i(Object(r.useState)(!1),2),d=p[0],E=p[1],N=i(Object(r.useState)(!(void 0===u||!u.hasOwnProperty("message"))&&u.message),2),g=N[0],f=N[1],b=i(Object(r.useState)(void 0!==u&&u.hasOwnProperty("next")?u.next:"".concat(s.d,"exams/modules")),2),v=b[0],y=(b[1],i(Object(r.useState)(void 0!==u&&u.hasOwnProperty("messageType")?u.messageType:""),2)),h=y[0],w=y[1],x=i(Object(r.useState)(void 0!==u&&u.hasOwnProperty("response")?u.response:""),2),S=x[0],O=x[1],j=i(Object(r.useState)("password"),2),P=(j[0],j[1],Object(o.b)());return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"about",className:"section-padding mt-5 pricing login"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-10 col-sm-12"},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"REGISTER SCHOOL"),n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),E(!0),f(!1);var n=new FormData(e("form#register")[0]);e.ajax({url:"".concat(s.a,"/institution/register"),method:"post",data:n,processData:!1,contentType:!1,error:function(a,t,r){var n="Sorry an error has occurred. We are working on it. ".concat(a.status);try{n=JSON.parse(a.responseText).message}catch(e){}E(!1),f(!0),w("alert alert-danger"),O(n),e("html, body").animate({scrollTop:0},200)}.bind(t),success:function(e){localStorage.setItem("user",JSON.stringify(e)),P(Object(m.b)(e)),a.setUser(e),a.history.push({pathname:"".concat(v),state:{user:e}}),E(!1)}.bind(t)})},id:"register"},n.a.createElement("div",{className:"card-body"},g?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:h,role:"alert"},n.a.createElement("div",{className:"alert-message"},S)))):"",n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Institution Name"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-institution"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Institution Name",name:"institution_name",required:!0}))),n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Address"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-address-card"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Address",name:"institution_address"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Your Name"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Your Name",name:"name",required:!0}))),n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Phone Number"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-mobile"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Phone Number",name:"institution_phone"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Email"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-envelope"}))),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Email",name:"email",required:!0}))),n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Password"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Password",name:"password",required:!0})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-md-6  mb-3 mt-3"},n.a.createElement("label",null,"Confirm Password"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Confirm Password","aria-label":"Confirm Password",name:"password_confirmation",required:!0})))),n.a.createElement("p",{className:"card-text grey"},n.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",id:"terms",required:!0}),n.a.createElement("label",{htmlFor:"terms"},"I agree to the terms and conditions")),n.a.createElement("p",{className:"card-text grey"},n.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",id:"policy",required:!0}),n.a.createElement("label",{htmlFor:"policy"},"I agree to the privacy policy")),n.a.createElement("div",{className:"text-center mt-2"},d?n.a.createElement(c.a,null):n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Register")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Forgot Password?",n.a.createElement(l.b,{class:"green",to:"".concat(s.d,"reset")}," Reset Password")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Have an Account?",n.a.createElement("br",null),n.a.createElement(l.b,{class:"green",to:"".concat(s.d,"signin")},"Sign in"))))))))))}}.call(this,t(60))}}]);