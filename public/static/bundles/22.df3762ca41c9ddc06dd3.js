(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{232:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return y}));var r=a(1),n=a.n(r),c=a(6),s=a(26),l=a(25),o=(a(59),a(65)),i=a(27);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function y(t){var a=this,m=void 0!==t.history.location.state?t.history.location.state:{},d=p(Object(r.useState)(!1),2),b=d[0],y=d[1],E=p(Object(r.useState)(!(void 0===m||!m.hasOwnProperty("message"))&&m.message),2),f=E[0],g=E[1],h=p(Object(r.useState)(void 0!==m&&m.hasOwnProperty("next")?m.next:"".concat(c.d,"exams/modules")),2),v=h[0],N=(h[1],p(Object(r.useState)(void 0!==m&&m.hasOwnProperty("messageType")?m.messageType:""),2)),O=N[0],w=N[1],j=p(Object(r.useState)(void 0!==m&&m.hasOwnProperty("response")?m.response:""),2),x=j[0],S=j[1],P=p(Object(r.useState)("password"),2),k=(P[0],P[1],p(Object(r.useState)("email"),2)),A=k[0],L=k[1],T=Object(i.b)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{id:"about",className:"section-padding pricing login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),y(!0),g(!1);var n={},s="".concat(c.a,"/app/login");"email"===A?(n.username=e("#email").val(),n.password=e("#password").val()):(n.phone=e("#phone").val(),s="".concat(c.a,"/app/otp/request")),e.ajax({url:s,method:"post",data:n,headers:{appkey:"ELE-2020-XCZ3"},error:function(t,a,r){var n="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{n=JSON.parse(t.responseText).message}catch(e){}y(!1),g(!0),w("alert alert-danger"),S(n),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){if("otp"===A)t.history.push({pathname:"".concat(c.d,"otp"),state:u({},n,{next:v})});else{var a=e;T({type:c.f,payload:!0}),T(Object(o.d)(a)),t.setUser(a),localStorage.setItem("user",JSON.stringify(e)),t.history.push({pathname:"".concat(v),state:{user:a}})}}.bind(a)})}},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"WELCOME"),n.a.createElement("div",{className:"card-body"},f?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:O,role:"alert"},n.a.createElement("div",{className:"alert-message"},x)))):"","otp"===A?n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-mobile"}))),n.a.createElement("input",{type:"text",className:"form-control loginput",placeholder:"Phone Number",id:"phone",required:!0,"aria-label":"Phone","aria-describedby":"basic-addon1"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Email",id:"email",required:!0,"aria-label":"Email","aria-describedby":"basic-addon1"})),n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Password",id:"password",required:!0,"aria-label":"Password","aria-describedby":"basic-addon1"}))),b?n.a.createElement("div",{className:"text-center"},n.a.createElement(s.a,{color:"#cf2027"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")),"otp"===A?n.a.createElement("h6",{className:"card-title text-center mt-4"},n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(e){L("email")}},"Login Using Your Email")):n.a.createElement("h6",{className:"card-title text-center mt-4"},n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(e){L("otp")}},"Login Using Your Phone Number")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Login To Your",n.a.createElement(l.b,{class:"green",to:"".concat(c.d,"school")}," Student Account")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Forgot Password?",n.a.createElement(l.b,{class:"green",to:"".concat(c.d,"reset")}," Reset Password")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Not yet registered?",n.a.createElement("br",null),n.a.createElement(l.b,{class:"green",to:"".concat(c.d,"signup")},"Register")))))))))))}}.call(this,a(57))}}]);