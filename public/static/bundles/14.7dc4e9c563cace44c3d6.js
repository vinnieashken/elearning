(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),s=a(19),c=a(7),l=a(20),o=a(191),m=a(21);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,p=t.history.location.state,u=i(Object(r.useState)(!1),2),d=u[0],g=u[1],f=i(Object(r.useState)(!(void 0===p||!p.hasOwnProperty("message"))&&p.message),2),b=f[0],y=f[1],E=i(Object(r.useState)(void 0!==p&&p.hasOwnProperty("next")?p.next:"".concat(c.d,"exams/modules")),2),N=E[0],v=(E[1],i(Object(r.useState)(void 0!==p&&p.hasOwnProperty("messageType")?p.messageType:""),2)),h=v[0],w=v[1],x=i(Object(r.useState)(void 0!==p&&p.hasOwnProperty("response")?p.response:""),2),S=x[0],O=x[1],j=i(Object(r.useState)("password"),2),k=(j[0],j[1],Object(m.b)());return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"about",className:"section-padding mt-5 pricing login"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"SIGN UP"),n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),g(!0),y(!1);var n=new FormData(e("form#register")[0]);e.ajax({url:"".concat(c.a,"/app/register"),method:"post",data:n,processData:!1,contentType:!1,error:function(t,a,r){var n="Sorry an error has occurred. We are working on it. ".concat(t.status);try{n=JSON.parse(t.responseText).message}catch(e){}g(!1),y(!0),w("alert alert-danger"),O(n),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){localStorage.setItem("user",e);var a=JSON.parse(e);k(Object(o.b)(a)),t.setUser(a),t.history.push({pathname:"".concat(N),state:{user:a}}),g(!1)}.bind(a)})},id:"register"},n.a.createElement("div",{className:"card-body"},b?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:h,role:"alert"},n.a.createElement("div",{className:"alert-message"},S)))):"",n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Full Name",name:"name"})),n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"@")),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Email",name:"email"})),n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Password",name:"password"})),n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Confirm Password","aria-label":"Confirm Password",name:"password_confirmation"})),n.a.createElement("p",{className:"card-text grey"},n.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",required:!0}),"I agree to the terms and conditions"),n.a.createElement("p",{className:"card-text grey"},n.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",required:!0}),"I agree to the privacy policy"),n.a.createElement("div",{className:"text-center mt-2"},d?n.a.createElement(l.a,null):n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Register")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Forgot Password?",n.a.createElement(s.b,{class:"green",to:"".concat(c.d,"reset")}," Reset Password")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Have an Account?",n.a.createElement("br",null),n.a.createElement(s.b,{class:"green",to:"".concat(c.d,"signin")},"Sign in"))))))))))}}.call(this,a(55))}}]);