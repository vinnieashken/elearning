(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{291:function(e,t,a){"use strict";a.r(t),function(e){var r=a(1),n=a.n(r),c=a(8),o=a(25),l=a(23),s=a(61),i=a(191);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(t){var a=this,u=t.history.location.state,d=Object(r.useState)(void 0!==u&&u.hasOwnProperty("next")?u.next:"".concat(c.d,"exams/modules"));Object(o.b)({type:c.i,payload:d});var p=m(Object(r.useState)([]),2),b=p[0],y=p[1],h=m(Object(r.useState)({}),2),f=(h[0],h[1],m(Object(r.useState)(!1),2)),E=(f[0],f[1],m(Object(r.useState)(!0),2)),S=E[0],w=E[1],v=m(Object(r.useState)(!1),2),g=(v[0],v[1]),T=m(Object(r.useState)(""),2),N=(T[0],T[1]),O=m(Object(r.useState)(""),2),j=(O[0],O[1]),x="".concat(window.origin).concat(t.history.location.pathname);Object(r.useEffect)((function(){P()}),[]);var P=function(){e.ajax({url:"".concat(c.a,"/payments/subscriptions"),method:"GET",error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. ";405===e.status?r="Sorry an error has occurred. We are working on it. (405)":e.hasOwnProperty("responseText")&&(r=JSON.parse(e.responseText).message),w(!1),g(!0),N("alert alert-danger"),j(r)}.bind(a),success:function(e){y(e),w(!1)}.bind(a)})};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.Helmet,null,n.a.createElement("link",{rel:"canonical",href:x}),n.a.createElement("meta",{name:"keywords",content:"Tutor-Soma Tu, Standard E-learning, Membership Plans"}),n.a.createElement("meta",{name:"author",content:"Standard Group"}),n.a.createElement("meta",{name:"description",content:"Tutor-Soma Tu Membership Plans"}),n.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Membership Plans : The Standard"}),n.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Membership Plans "}),n.a.createElement("meta",{property:"twitter:url",content:x}),n.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Membership Plans : The Standard"}),n.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Membership Plans "}),n.a.createElement("meta",{property:"og:url",content:x})),n.a.createElement("div",{id:"about",className:"section-padding mt-5 pricing"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"section-title wow fadeInDown animated mt-5","data-wow-delay":"0.3s"},"Our Membership Plans"))),n.a.createElement("div",{className:"row"},S?n.a.createElement("div",{className:"col-md-12"},n.a.createElement(s.a,null)):b.map((function(e){return n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"card daily"},n.a.createElement("h5",{className:"card-header text-center"},e.subscription),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-center"},"Ksh. ",e.cost),n.a.createElement("h6",{className:"card-title text-center"},"Also Recieve"),n.a.createElement("p",{className:"card-text text-center"},"- Complimentary e-paper.",n.a.createElement("br",null),"- Regular email bulletins."),n.a.createElement("div",{className:"text-center"},n.a.createElement(l.b,{to:{pathname:"".concat(c.d,"subscription/payment"),state:{plan:e}},className:"btn btn-primary"},"Select Plan")))))}))))))}}.call(this,a(60))}}]);