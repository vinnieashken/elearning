(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{233:function(e,t,a){"use strict";a.r(t),function(e){var r=a(1),n=a.n(r),c=a(7),s=a(24),l=a(23),i=(a(59),a(196),a(25));function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,m=t.history.location.state,d=o(Object(r.useState)(!1),2),u=d[0],p=d[1],v=o(Object(r.useState)(!(void 0===m||!m.hasOwnProperty("message"))&&m.message),2),b=v[0],E=v[1],f=o(Object(r.useState)(void 0!==m&&m.hasOwnProperty("next")?m.next:"".concat(c.e,"exams/modules")),2),g=(f[0],f[1],o(Object(r.useState)(void 0!==m&&m.hasOwnProperty("messageType")?m.messageType:""),2)),y=g[0],h=g[1],N=o(Object(r.useState)(void 0!==m&&m.hasOwnProperty("response")?m.response:""),2),w=N[0],O=N[1],S=o(Object(r.useState)("password"),2);S[0],S[1],"".concat(window.origin).concat(t.history.location.pathname),Object(i.b)();Object(r.useEffect)((function(){}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{id:"about",className:"section-padding pricing login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p(!0),E(!1),e.ajax({url:"".concat(c.a,"/app/password/reset"),method:"post",data:{email:e("#email").val(),redirect_url:"https://tutorsoma.standardmedia.co.ke/signin"},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{r=JSON.parse(e.responseText).message}catch(e){}p(!1),E(!0),h("alert alert-danger"),O(r)}.bind(a),success:function(e){p(!1),E(!0),h("alert alert-success"),O(JSON.parse(e).message)}.bind(a)})}},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"WELCOME"),n.a.createElement("div",{className:"card-body"},b?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:y,role:"alert"},n.a.createElement("div",{className:"alert-message"},w)))):"",n.a.createElement("div",{className:"input-group mb-3 mt-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-user"}))),n.a.createElement("input",{type:"email",className:"form-control loginput",placeholder:"Email",id:"email","aria-label":"Email","aria-describedby":"basic-addon1"})),u?n.a.createElement("div",{className:"text-center"},n.a.createElement(s.a,{color:"#cf2027"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Reset Password")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Have an Account?",n.a.createElement("br",null),n.a.createElement(l.b,{class:"green",to:"".concat(c.e,"signin")},"Sign in")))))))))))}}.call(this,a(57))}}]);