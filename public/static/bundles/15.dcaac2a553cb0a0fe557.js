(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{275:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),c=a(9),s=(a(20),a(19));function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,i=o(Object(r.useState)([]),2),l=i[0],u=i[1],m=o(Object(r.useState)({}),2),d=(m[0],m[1],o(Object(r.useState)(!1),2)),p=(d[0],d[1],o(Object(r.useState)(!1),2)),b=(p[0],p[1]),f=o(Object(r.useState)(!1),2),y=(f[0],f[1]),h=o(Object(r.useState)(""),2),v=(h[0],h[1]),w=o(Object(r.useState)(""),2),E=(w[0],w[1]);Object(r.useEffect)((function(){S()}),[]);var S=function(){e.ajax({url:"".concat(c.a,"/payments/subscriptions"),method:"GET",error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. ";405===e.status?r="Sorry an error has occurred. We are working on it. (405)":e.hasOwnProperty("responseText")&&(r=JSON.parse(e.responseText).message),b(!1),y(!0),v("alert alert-danger"),E(r)}.bind(a),success:function(e){u(e),b(!1)}.bind(a)})};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"about",className:"section-padding mt-5 pricing"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"Our Membership Plans"))),n.a.createElement("div",{className:"row"},l.map((function(e){return n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"card daily"},n.a.createElement("h5",{className:"card-header text-center"},e.subscription),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-center"},"Ksh. ",e.cost),n.a.createElement("h6",{className:"card-title text-center"},"Also Recieve"),n.a.createElement("p",{className:"card-text text-center"},"- Complimentary e-paper.",n.a.createElement("br",null),"- Regular email bulletins."),n.a.createElement("div",{className:"text-center"},n.a.createElement(s.b,{to:t.user.hasOwnProperty("id")?"".concat(c.d,"subscription/payment"):{pathname:"".concat(c.d,"signin"),state:{next:"".concat(c.d,"subscription/payment")}},className:"btn btn-primary"},"Select Plan")))))}))))))}}.call(this,a(56))}}]);