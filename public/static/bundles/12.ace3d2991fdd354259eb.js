(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{209:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return d}));var r=a(0),n=a.n(r),s=a(7),c=(a(20),a(19)),l=a(184),o=a(191),i=a(21);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function d(t){var a=this,u=t.history.location.state,d=m(Object(r.useState)(!1),2),p=d[0],b=d[1],f=m(Object(r.useState)(!(void 0===u||!u.hasOwnProperty("message"))&&u.message),2),y=f[0],g=f[1],v=m(Object(r.useState)(void 0!==u&&u.hasOwnProperty("next")?u.next:"".concat(s.d,"exams/modules")),2),E=v[0],h=(v[1],m(Object(r.useState)(void 0!==u&&u.hasOwnProperty("messageType")?u.messageType:""),2)),N=h[0],w=h[1],O=m(Object(r.useState)(void 0!==u&&u.hasOwnProperty("response")?u.response:""),2),S=O[0],j=O[1],x=m(Object(r.useState)("password"),2),A=(x[0],x[1],Object(i.b)());Object(r.useEffect)((function(){localStorage.clear(),t.setUser({}),A({type:s.h,payload:[]})}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"about",className:"section-padding mt-5 pricing login"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),b(!0),g(!1);var n=e("#email").val(),c=e("#password").val();e.ajax({url:"".concat(s.a,"/app/login"),method:"post",data:{username:n,password:c},error:function(t,a,r){var n=JSON.parse(t.responseText).message;405===t.status&&(n="Sorry an error has occurred. We are working on it. (405)"),b(!1),g(!0),w("alert alert-danger"),j(n),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){var a=JSON.parse(e);A(Object(o.b)(a)),t.setUser(a),localStorage.setItem("user",e),t.history.push({pathname:"".concat(E),state:{user:a}}),b(!1)}.bind(a)})}},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"WELCOME"),n.a.createElement("div",{className:"card-body"},y?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:N,role:"alert"},n.a.createElement("div",{className:"alert-message"},S)))):"",n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Username",id:"email","aria-label":"Username","aria-describedby":"basic-addon1"})),n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Password",id:"password","aria-label":"Password","aria-describedby":"basic-addon1"})),p?n.a.createElement(l.a,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Not yet registered?",n.a.createElement("br",null),n.a.createElement(c.b,{class:"green",to:"".concat(s.d,"signup")},"Register")))))))))))}}.call(this,a(56))}}]);