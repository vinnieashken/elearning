(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{54:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var r=a(14),n=a(6);function c(t){return function(a){return e.ajax({url:"".concat(n.a,"/academy/subscription/active"),data:{user_id:t.user_id},method:"get",headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(e,t,a){}.bind(this),success:function(e){a({type:r.c,payload:e})}.bind(this)})}}}).call(this,a(51))},56:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),c=a(23),s=a(6),o=a(54),l=a(22);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,m=void 0!==t.history.location.state?t.history.location.state:{},u=i(Object(r.useState)(!1),2),d=u[0],p=u[1],f=i(Object(r.useState)(!(void 0===m||!m.hasOwnProperty("message"))&&m.message),2),y=f[0],b=f[1],v=i(Object(r.useState)(void 0!==m&&m.hasOwnProperty("next")?m.next:"/academy"),2),h=v[0],E=(v[1],i(Object(r.useState)(void 0!==m&&m.hasOwnProperty("messageType")?m.messageType:""),2)),g=E[0],w=E[1],N=i(Object(r.useState)(void 0!==m&&m.hasOwnProperty("response")?m.response:""),2),S=N[0],O=N[1],j=i(Object(r.useState)("password"),2),x=(j[0],j[1],i(Object(r.useState)("email"),2));x[0],x[1];Object(r.useEffect)((function(e){localStorage.removeItem("ac_user")}),[]);var A=Object(l.b)();return n.a.createElement("div",{className:"d-flex justify-content-center w-100"},n.a.createElement("div",{className:"container d-flex flex-column"},n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100"},n.a.createElement("div",{className:"d-table-cell align-middle"},n.a.createElement("div",{className:"text-center mt-4"}),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"m-sm-4"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"h2"},"TutorSoma Academy.."),n.a.createElement("p",{className:"lead"},"Sign in to your account to continue")),n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),p(!0),b(!1),e.ajax({url:"".concat(s.a,"/academy/login"),method:"post",data:{username:e("#email").val(),password:e("#password").val()},headers:{appkey:"ELE-2020-XCZ3"},error:function(t,a,r){var n="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{n=JSON.parse(t.responseText).message}catch(e){}p(!1),b(!0),w("alert alert-danger"),O(n),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){A({type:s.e,payload:!0}),t.setUser(e),A(Object(o.a)(e)),localStorage.setItem("ac_user",JSON.stringify(e)),t.history.push({pathname:"".concat(h),state:{user:e}})}.bind(a)})}},y&&n.a.createElement("div",{className:g,role:"alert"},n.a.createElement("div",{className:"alert-message"},S)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{className:"form-control form-control-lg",type:"email",id:"email",placeholder:"Enter your email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{className:"form-control form-control-lg",type:"password",id:"password",placeholder:"Enter your password"})),d?n.a.createElement("div",{className:"text-center mt-3"},n.a.createElement(c.a,{color:"#cf2027"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center mt-3"},n.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success"},"Sign in")),n.a.createElement("div",{className:"text-center"})))))))))))}}.call(this,a(51))}}]);