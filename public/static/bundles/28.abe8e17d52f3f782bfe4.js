(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{234:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return u}));var r=a(1),n=a.n(r),c=a(6),s=a(26),l=a(25),o=(a(59),a(65)),i=a(27);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function u(t){var a=this,d=t.history.location.state,u=m(Object(r.useState)(!1),2),p=u[0],g=u[1],b=m(Object(r.useState)(!(void 0===d||!d.hasOwnProperty("message"))&&d.message),2),v=b[0],y=b[1],f=m(Object(r.useState)(void 0!==d&&d.hasOwnProperty("next")?d.next:"".concat(c.d,"exams/modules")),2),E=f[0],h=(f[1],m(Object(r.useState)(void 0!==d&&d.hasOwnProperty("messageType")?d.messageType:""),2)),N=h[0],w=h[1],S=m(Object(r.useState)(void 0!==d&&d.hasOwnProperty("response")?d.response:""),2),O=S[0],x=S[1],j=m(Object(r.useState)("password"),2),T=(j[0],j[1],Object(i.b)());return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{id:"about",className:"section-padding pricing login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},n.a.createElement("form",{onSubmit:function(r){r.preventDefault(),g(!0),y(!1);var n=e("#login_code").val();e.ajax({url:"".concat(c.a,"/institution/student/login/").concat(n),headers:{appkey:"ELE-2020-XCZ3"},method:"get",error:function(t,a,r){var n="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{n=JSON.parse(t.responseText).message}catch(e){}g(!1),y(!0),w("alert alert-danger"),x(n),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){T({type:c.f,payload:!0}),T(Object(o.d)(e)),t.setUser(e),localStorage.setItem("user",JSON.stringify(e)),t.history.push({pathname:"".concat(E),state:{user:e}})}.bind(a)})},autoComplete:"off"},n.a.createElement("div",{className:"card weekly"},n.a.createElement("h5",{className:"card-header text-center"},"STUDENT LOGIN"),n.a.createElement("div",{className:"card-body"},v?n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:N,role:"alert"},n.a.createElement("div",{className:"alert-message"},O)))):"",n.a.createElement("div",{className:"input-group mb-3 mt-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-key"}))),n.a.createElement("input",{type:"password",className:"form-control loginput",placeholder:"Login Code",id:"login_code","aria-label":"Login Code","aria-describedby":"basic-addon1"})),p?n.a.createElement("div",{className:"text-center"},n.a.createElement(s.a,{color:"#cf2027"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")),n.a.createElement("h6",{className:"card-title text-center mt-4"},n.a.createElement(l.b,{class:"green",to:"".concat(c.d,"initialSetup")},"Register School")),n.a.createElement("h6",{className:"card-title text-center mt-4"},"Not a student?",n.a.createElement(l.b,{class:"green",to:"".concat(c.d,"signin")}," Login Here")))))))))))}}.call(this,a(57))}}]);