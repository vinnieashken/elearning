(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{334:function(e,t,a){"use strict";a.r(t),function(e){var r=a(1),n=a.n(r),c=a(6),s=a(59),o=(a(26),a(62)),l=a.n(o),i=a(63),m=a.n(i),u=(a(56),a(61));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var h=o.Search.SearchBar;t.default=function(t){var a=this,o=p(Object(r.useState)(!1),2),i=o[0],E=o[1],f=p(Object(r.useState)([]),2),y=f[0],v=f[1],b=p(Object(r.useState)(!1),2),g=b[0],w=b[1],S=p(Object(r.useState)(""),2),N=S[0],T=S[1],j=p(Object(r.useState)(""),2),O=j[0],C=j[1],x=p(Object(r.useState)({}),2),A=(x[0],x[1],p(Object(r.useState)(t.user),2)),F=(A[0],A[1],"".concat(window.origin).concat(t.history.location.pathname));Object(r.useEffect)((function(){k()}),[]);var k=function(){E(!0),e.ajax({url:"".concat(c.a,"/publishers/payments/").concat(t.user.institution.id),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{r=JSON.parse(e.responseText).message}catch(e){}E(!1),w(!0),T("alert alert-danger"),C(r)}.bind(a),success:function(e){v(e),E(!1)}.bind(a)})};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"application"},n.a.createElement(u.Helmet,null,n.a.createElement("link",{rel:"canonical",href:F}),n.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili"}),n.a.createElement("meta",{name:"author",content:"Standard Group"}),n.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more"}),n.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Classes : The Standard"}),n.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Classes "}),n.a.createElement("meta",{property:"twitter:url",content:F}),n.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Classes : The Standard"}),n.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Classes "}),n.a.createElement("meta",{property:"og:url",content:F}))),n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{id:"about",className:"section-padding profile"},n.a.createElement("div",{className:"container"},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center","data-wow-delay":"0.3s"},"".concat(t.user.institution.name).toUpperCase()," PAYMENT REPORT"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},i?n.a.createElement(s.a,null):g?n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:N,role:"alert"},n.a.createElement("div",{className:"alert-message"},O))):n.a.createElement(l.a,{keyField:"id",data:y,columns:[{dataField:"transactionid",text:"Receipt. No.",sort:!0},{dataField:"name",text:"Student",sort:!0},{dataField:"amount",text:"Amount",sort:!0}],search:!0},(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row  mb-3"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(h,d({className:"float-left mb-3 form-control-sm"},e.searchProps)))),n.a.createElement(m.a,d({},e.baseProps,{headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},wrapperClasses:"table-responsive"})))}))))))))}}.call(this,a(57))}}]);