(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{318:function(e,t,a){"use strict";a.r(t),function(e){var r=a(1),n=a.n(r),c=a(6),l=a(26),s=a(25),i=(a(56),a(62)),o=a.n(i),m=a(63),d=a.n(m);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var p=i.Search.SearchBar;t.default=function(t){var a=this,i=f(Object(r.useState)(!0),2),m=i[0],b=i[1],v=f(Object(r.useState)([]),2),E=v[0],h=v[1];Object(r.useEffect)((function(){g()}),[]);var g=function(){e.ajax({url:"".concat(c.a,"/modules/user/").concat(t.user.id),headers:{appkey:"ELE-2020-XCZ3"},method:"GET",error:function(e,t,a){var r="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{r=JSON.parse(e.responseText).message}catch(e){}b(!1),setMessage(!0),setMessageType("alert alert-danger"),setResponse(r)}.bind(a),success:function(e){h(e),b(!1)}.bind(a)})};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"sliders"},n.a.createElement("div",{className:"full-width"},n.a.createElement("div",{className:"carousel slide",id:"light-slider"},n.a.createElement("div",{id:"carousel-area"},n.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},n.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),n.a.createElement("div",{className:"page-title"},n.a.createElement("div",{className:"row justify-content-between align-items-center"},n.a.createElement("div",{className:"col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0"},n.a.createElement("div",{className:"d-inline-block"},n.a.createElement("h5",{className:"h4 d-inline-block font-weight-400 mb-0 text-white"},"Completed Exams"))))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"mt-3"},m?n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement(l.a,{color:"#cf2027"})):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(o.a,{keyField:"id",data:E,columns:[{dataField:"module",text:"Exam",sort:!0},{dataField:"class",text:"Class",sort:!0},{dataField:"subject",text:"Subject",sort:!0},{dataField:"percentage",text:"Score(%)",sort:!0},{dataField:"created_at",text:"Select",sort:!0,formatter:function(e,t){return n.a.createElement("div",{className:"actions ml-3"},n.a.createElement(s.b,{to:"".concat(c.d,"/exams/exam/").concat(t.id),className:"action-item mr-2","data-toggle":"tooltip",title:"","data-original-title":"Take Exam"},n.a.createElement("i",{className:"fa fa-external-link-alt"})))}}],search:!0},(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row  mb-3"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(p,u({className:"col-md-4 float-right mb-3"},e.searchProps)))),n.a.createElement(d.a,u({},e.baseProps,{headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},wrapperClasses:"table-responsive"})))})))))))}}.call(this,a(57))}}]);