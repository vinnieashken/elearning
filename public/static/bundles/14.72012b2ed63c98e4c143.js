(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{321:function(e,t,a){"use strict";a.r(t),function(e){var r=a(1),n=a.n(r),s=a(8),c=a(58),l=a(23),o=(a(24),a(62)),i=a.n(o),m=a(63),d=a.n(m),u=(a(56),a(60));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var f=o.Search.SearchBar;t.default=function(t){var a=this,o=E(Object(r.useState)(!0),2),m=o[0],h=o[1],b=E(Object(r.useState)([]),2),y=b[0],v=b[1],g=E(Object(r.useState)(!1),2),w=g[0],S=g[1],N=E(Object(r.useState)(""),2),T=N[0],j=N[1],C=E(Object(r.useState)(""),2),O=C[0],x=C[1],k="".concat(window.origin).concat(t.history.location.pathname);Object(r.useEffect)((function(){F()}),[]);var F=function(){e.ajax({url:"".concat(s.a,"/classes/list"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{r=JSON.parse(e.responseText).message}catch(e){}h(!1),S(!0),j("alert alert-danger"),x(r)}.bind(a),success:function(e){v(e),h(!1)}.bind(a)})};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"application"},n.a.createElement(u.Helmet,null,n.a.createElement("link",{rel:"canonical",href:k}),n.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili"}),n.a.createElement("meta",{name:"author",content:"Standard Group"}),n.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more"}),n.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Classes : The Standard"}),n.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Classes "}),n.a.createElement("meta",{property:"twitter:url",content:k}),n.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Classes : The Standard"}),n.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Classes "}),n.a.createElement("meta",{property:"og:url",content:k}))),n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(s.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{id:"about",className:"section-padding profile"},n.a.createElement("div",{className:"container"},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center mt-5","data-wow-delay":"0.3s"},"Classes"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},m?n.a.createElement(c.a,null):w?n.a.createElement("div",{className:"text-center mt-2"},n.a.createElement("div",{className:T,role:"alert"},n.a.createElement("div",{className:"alert-message"},O))):n.a.createElement(i.a,{keyField:"id",data:y,columns:[{dataField:"class",text:"Class",sort:!0},{dataField:"created_at",text:"Select",sort:!0,formatter:function(e,t){return n.a.createElement("div",{className:"actions ml-3"},n.a.createElement(l.b,{to:"".concat(s.d,"exams/classes/").concat(t.id,"/subjects"),className:"btn btn-sm btn-rounded btn-success-filled"},"Choose Subject"))}}],search:!0},(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row  mb-3"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(f,p({className:"col-md-4 float-right mb-3"},e.searchProps)))),n.a.createElement(d.a,p({},e.baseProps,{headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},wrapperClasses:"table-responsive"})))}))))))))}}.call(this,a(57))}}]);