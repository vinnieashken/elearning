(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{234:function(e,t,a){"use strict";a.r(t),function(e){var r=a(1),n=a.n(r),s=a(23),c=a(7),l=a(24),o=a(196),i=a(25);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,u=t.history.location.state,p=m(Object(r.useState)(!1),2),d=p[0],g=p[1],E=m(Object(r.useState)(!(void 0===u||!u.hasOwnProperty("message"))&&u.message),2),f=E[0],b=E[1],v=m(Object(r.useState)(void 0!==u&&u.hasOwnProperty("next")?u.next:"".concat(c.e,"exams/modules")),2),y=v[0],N=(v[1],m(Object(r.useState)(void 0!==u&&u.hasOwnProperty("messageType")?u.messageType:""),2)),h=N[0],w=N[1],x=m(Object(r.useState)(void 0!==u&&u.hasOwnProperty("response")?u.response:""),2),S=x[0],O=x[1],j=m(Object(r.useState)("password"),2),k=(j[0],j[1],Object(i.b)());return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{id:"about",className:"section-padding pricing login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"SIGN UP"),n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),g(!0),b(!1);var n=new FormData(e("form#register")[0]);e.ajax({url:"".concat(c.a,"/app/register"),method:"post",data:n,processData:!1,contentType:!1,error:function(t,a,r){var n="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{n=JSON.parse(t.responseText).message}catch(e){}g(!1),b(!0),w("alert alert-danger"),O(n),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){localStorage.setItem("user",e);var a=JSON.parse(e);k(Object(o.c)(a)),t.setUser(a),t.history.push({pathname:"".concat(y),state:{user:a}}),g(!1)}.bind(a)})},id:"register"},n.a.createElement("div",{className:"card-body"},f?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:h,role:"alert"},n.a.createElement("div",{className:"alert-message"},S)))):"",n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Full Name",name:"name"})),n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"@")),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Email",name:"email"})),n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Password",name:"password"})),n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Confirm Password","aria-label":"Confirm Password",name:"password_confirmation"})),n.a.createElement("p",{className:"card-text grey"},n.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",required:!0}),"I agree to the terms and conditions"),n.a.createElement("p",{className:"card-text grey"},n.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",required:!0}),"I agree to the privacy policy"),n.a.createElement("div",{className:"text-center mt-2"},d?n.a.createElement(l.a,null):n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Register")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Forgot Password?",n.a.createElement(s.b,{class:"green",to:"".concat(c.e,"reset")}," Reset Password")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Have an Account?",n.a.createElement("br",null),n.a.createElement(s.b,{class:"green",to:"".concat(c.e,"signin")},"Sign in"))))))))))}}.call(this,a(57))}}]);