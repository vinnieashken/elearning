(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{332:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),c=a(6),s=(a(26),a(25)),l=(a(56),a(62)),o=a.n(l),i=a(63),m=a.n(i),u=a(59),d=a(61),b=a(69),p=a(27);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y=l.Search.SearchBar;t.default=function(t){var a=this,l=E(Object(n.useState)(!0),2),i=l[0],h=l[1],v=E(Object(n.useState)([]),2),g=v[0],x=v[1],S=E(Object(n.useState)(!1),2),w=S[0],N=S[1],j=E(Object(n.useState)(""),2),O=j[0],T=j[1],C=E(Object(n.useState)(""),2),P=C[0],k=C[1],A=E(Object(n.useState)({}),2),I=A[0],F=A[1],M=E(Object(n.useState)([]),2),_=M[0],K=M[1],L=E(Object(n.useState)([]),2),D=L[0],G=L[1],J=E(Object(n.useState)(t.user),2),X=J[0],Z=J[1],W=Object(p.c)((function(e){return e.default.subscription})),R="".concat(window.origin).concat(t.history.location.pathname);Object(n.useEffect)((function(){h(!0),Z(t.user),V()}),[t.match.params.subject]);var V=function(){e.ajax({url:"".concat(c.a,"/modules/").concat(t.match.params.hasOwnProperty("subject")?"subject/".concat(t.match.params.subject):"list","?userid=").concat(t.user.id,"&institutionid=").concat(t.user.institution_id),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}h(!1),N(!0),T("alert alert-danger"),k(n)}.bind(a),success:function(e){x(e),h(!1),(_.length<=0||D.length<=0)&&(U(),$())}.bind(a)})},U=function(){e.ajax({url:"".concat(c.a,"/classes/list"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){}.bind(a),success:function(e){K(e)}.bind(a)})},$=function(){e.ajax({url:"".concat(c.a,"/subjects/").concat(t.match.params.hasOwnProperty("class")?"class/".concat(t.match.params.class):"list"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){}.bind(a),success:function(e){G(e)}.bind(a)})},q=function(e,a){var n=e;n.institution_id=t.user.institution.id,F(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"application"},r.a.createElement(d.Helmet,null,r.a.createElement("link",{rel:"canonical",href:R}),r.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili"}),r.a.createElement("meta",{name:"author",content:"Standard Group"}),r.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more"}),r.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Examination Papers : The Standard"}),r.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Examination Papers "}),r.a.createElement("meta",{property:"twitter:url",content:R}),r.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Examination Papers : The Standard"}),r.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Examination Papers "}),r.a.createElement("meta",{property:"og:url",content:R}))),r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),r.a.createElement("div",{id:"about",className:"section-padding profile"},r.a.createElement("div",{className:"container"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center mt-5","data-wow-delay":"0.3s"},"Examination papers"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},i?r.a.createElement(u.a,null):w?r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:O,role:"alert"},r.a.createElement("div",{className:"alert-message"},P))):r.a.createElement(o.a,{keyField:"id",data:g.filter((function(e){return null===e.institution_id||2===parseInt(e.institution_id)||parseInt(t.user.institution_id)===parseInt(e.institution_id)})),columns:[{dataField:"id",text:"ID",sort:!0},{dataField:"module",text:"Exam",sort:!0,style:{textAlign:"left"}},{dataField:"class",text:"Class",sort:!0},{dataField:"subject",text:"Subject",sort:!0},{dataField:"created_at",text:"Select",sort:!0,formatter:function(e,t){return r.a.createElement("div",{className:"actions ml-3"},(X.teacher||X.owner)&&parseInt(X.institution_id)===parseInt(t.institution_id)?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:{pathname:"".concat(c.d,"exams/exam/").concat(t.id,"/performance"),state:{exam:t}},className:"btn btn-sm btn-rounded btn-outline-success"},"Performance ",r.a.createElement("i",{className:"fa fa-graduation-cap"})),r.a.createElement(s.b,{to:"".concat(c.d,"exams/exam/edit/").concat(t.id),className:"btn btn-sm btn-rounded btn-outline-success mr-1"},"Edit Paper ",r.a.createElement("i",{className:"fa fa-plus"})),r.a.createElement(s.b,{to:"#",className:"btn btn-sm btn-rounded btn-outline-success","data-toggle":"modal","data-target":"#exampleModal"},"Add Questions ",r.a.createElement("i",{className:"fa fa-pencil"}))):r.a.createElement(s.b,{to:"".concat(c.d,"exams/exam/").concat(t.id),className:"btn btn-sm btn-rounded ".concat(t.done?"btn-success-filled":"btn-outline-success")},t.done?"Revise Paper":"Take Test"))}}],search:!0},(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row  mb-3"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(y,f({className:"float-left mb-3 form-control-sm"},e.searchProps))),r.a.createElement("div",{className:"col-md-8 "},W.hasOwnProperty("id")?X.teacher||X.owner?r.a.createElement("button",{onClick:function(e){var t={};t.institution_id=X.institution.id,F(t)},className:"mb-3 float-right btn btn-sm btn-rounded btn-success","data-toggle":"modal","data-target":"#exampleModal"},"Add Exam"):"":r.a.createElement(s.b,{to:"".concat(c.d,"subscriptions"),className:"mb-3 float-right btn btn-sm btn-rounded btn-success"},"Add Exam"))),r.a.createElement(m.a,f({},e.baseProps,{headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},wrapperClasses:"table-responsive",selectRow:{mode:"radio",clickToSelect:!0,onSelect:q.bind(a)}})))}))))))),r.a.createElement(b.a,{exam:I,classes:_,subjects:D,getModules:V}))}}.call(this,a(57))},69:function(e,t,a){"use strict";(function(e){var n=a(1),r=a.n(n),c=a(26),s=a(6),l=(a(59),a(66)),o=a(27);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(t){var a=this,m=i(Object(n.useState)(!0),2),u=m[0],d=m[1],b=i(Object(n.useState)(!1),2),p=b[0],f=b[1],E=i(Object(n.useState)(!1),2),h=E[0],y=E[1],v=i(Object(n.useState)(""),2),g=v[0],x=v[1],S=i(Object(n.useState)(""),2),w=S[0],N=S[1],j=i(Object(n.useState)({}),2),O=j[0],T=j[1],C=Object(o.c)((function(e){return e.default.classes})),P=Object(o.c)((function(e){return e.default.subjects})),k=i(Object(n.useState)({}),2),A=k[0],I=k[1],F=i(Object(n.useState)({}),2),M=F[0],_=F[1],K=i(Object(n.useState)(!1),2),L=K[0],D=K[1];Object(n.useEffect)((function(e){D(!1),y(!1),t.exam.hasOwnProperty("id")?G():d(!1)}),[t.exam]);var G=function(){d(!0),e.ajax({url:"".concat(s.a,"/questions/module/").concat(t.exam.id,"?userid=2"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}d(!1),y(!0),x("alert alert-danger"),N(n)}.bind(a),success:function(e){T(e),_({label:e.subject.subject,value:e.subject.id}),I({label:e.class.class,value:e.class.id}),d(!1)}.bind(a)})},J=function(n){n.preventDefault(),y(!1),f(!0);var r=new FormData(e("form#exam")[0]);r.append("institutionid",t.exam.institution_id),t.exam.hasOwnProperty("id")&&r.append("id",t.exam.id),e.ajax({url:"".concat(s.a,"/institution/modules/").concat(t.exam.hasOwnProperty("id")?"edit":"add"),method:"post",headers:{appkey:"ELE-2020-XCZ3"},processData:!1,contentType:!1,data:r,error:function(t,a,n){var r="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{r=JSON.parse(t.responseText).message}catch(e){}f(!1),y(!0),x("alert alert-danger"),N(r),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(a){f(!1),y(!0),x("alert alert-success"),N("Module updated successfully."),t.exam.hasOwnProperty("id")?D(!0):(e("#exam")[0].reset(),I({}),_({}),t.getModules())}.bind(a)})};return r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},u?r.a.createElement("div",{className:"text-center",style:{marginTop:"50px"}},r.a.createElement(c.a,{color:"#cf2027"})):r.a.createElement("form",{onSubmit:J},h?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:g,role:"alert"},r.a.createElement("div",{className:"alert-message"},w))))):"",L?"":r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,O.hasOwnProperty("name")?O.name:"Add New Exam")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"exam"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"module",className:"form-control",defaultValue:O.name}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Class"),r.a.createElement(l.a,{name:"classid",defaultValue:A,onChange:I,options:C.map((function(e){return{value:e.id,label:e.class}}))})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Subject"),r.a.createElement(l.a,{name:"subjectid",defaultValue:M,onChange:_,options:P.map((function(e){return{value:e.id,label:e.subject}}))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},p?r.a.createElement(c.a,null):r.a.createElement("button",{type:"button",onClick:J,className:"btn btn-sm btn-success btn-rounded float-right"},"Save changes"))))))))))}}).call(this,a(57))}}]);