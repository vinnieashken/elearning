(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{212:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),c=a(7),s=(a(20),a(19)),o=a(184),l=(a(191),a(21));function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,m=t.history.location.state,u=i(Object(r.useState)(!1),2),d=u[0],p=u[1],b=i(Object(r.useState)(!(void 0===m||!m.hasOwnProperty("message"))&&m.message),2),f=b[0],y=b[1],g=i(Object(r.useState)(void 0!==m&&m.hasOwnProperty("next")?m.next:"".concat(c.d,"exams/modules")),2),v=(g[0],g[1],i(Object(r.useState)(void 0!==m&&m.hasOwnProperty("messageType")?m.messageType:""),2)),E=v[0],h=v[1],w=i(Object(r.useState)(void 0!==m&&m.hasOwnProperty("response")?m.response:""),2),N=w[0],O=w[1],S=i(Object(r.useState)("password"),2);S[0],S[1],"".concat(window.origin).concat(t.history.location.pathname),Object(l.b)();Object(r.useEffect)((function(){}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"about",className:"section-padding mt-5 pricing login"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p(!0),y(!1),e.ajax({url:"".concat(c.a,"/app/password/reset"),method:"post",data:{email:e("#email").val(),redirect_url:"https://tutorsoma.standardmedia.co.ke/signin"},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{r=JSON.parse(e.responseText).message}catch(e){}p(!1),y(!0),h("alert alert-danger"),O(r)}.bind(a),success:function(e){p(!1),y(!0),h("alert alert-success"),O(e.message)}.bind(a)})}},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"WELCOME"),n.a.createElement("div",{className:"card-body"},f?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:E,role:"alert"},n.a.createElement("div",{className:"alert-message"},N)))):"",n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Email",id:"email","aria-label":"Email","aria-describedby":"basic-addon1"})),d?n.a.createElement(o.a,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Reset Password")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Have an Account?",n.a.createElement("br",null),n.a.createElement(s.b,{class:"green",to:"".concat(c.d,"signin")},"Sign in")))))))))))}}.call(this,a(55))}}]);