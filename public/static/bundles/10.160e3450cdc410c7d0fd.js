(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{318:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),c=a(8),s=(a(24),a(23)),l=(a(56),a(62)),o=a.n(l),i=a(79),m=a.n(i),u=a(80),d=a.n(u),b=a(63),p=a.n(b),f=a(58),E=a(60),h=a(69),v=a(25),y=a(66);a(65);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}l.Search.SearchBar;t.default=function(t){var a=this,l=(Object(v.b)(),S(Object(n.useState)(!0),2)),i=l[0],u=l[1],b=S(Object(n.useState)([]),2),w=(b[0],b[1]),x=S(Object(n.useState)([]),2),j=x[0],N=x[1],O=S(Object(n.useState)(!1),2),T=O[0],C=O[1],k=S(Object(n.useState)(""),2),P=k[0],A=k[1],I=S(Object(n.useState)(""),2),F=I[0],M=I[1],_=S(Object(n.useState)({}),2),K=_[0],J=_[1],L=S(Object(n.useState)(null),2),W=L[0],D=L[1],V=S(Object(n.useState)(null),2),G=V[0],R=V[1],X=Object(v.c)((function(e){return e.default.classes})),Z=Object(v.c)((function(e){return e.default.subjects})),q=S(Object(n.useState)({}),2),U=(q[0],q[1]),$=S(Object(n.useState)({}),2),B=($[0],$[1]),H=S(Object(n.useState)(t.user),2),Q=H[0],z=H[1],Y=Object(v.c)((function(e){return e.default.subscription})),ee="".concat(window.origin).concat(t.history.location.pathname);Object(n.useEffect)((function(){u(!0),z(t.user);var e={},a={};Z.forEach((function(t){e["".concat(t.subject)]="".concat(t.subject)})),X.forEach((function(e){a[e.class]=e.class})),U(e),B(a),te()}),[t.match.params.subject,t.match.params.level]);var te=function(){e.ajax({url:"secondary"===t.match.params.level?"".concat(c.a,"/modules/nochoices/list?institutionid=29"):"".concat(c.a,"/modules/").concat(t.match.params.hasOwnProperty("subject")?"subject/".concat(t.match.params.subject):"list","?userid=").concat(t.user.id,"&institutionid=29"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}u(!1),C(!0),A("alert alert-danger"),M(n)}.bind(a),success:function(e){w(e),N(e),u(!1),(X.length<=0||Z.length<=0)&&(getClasses(),getSubjects())}.bind(a)})},ae=function(e,a){var n=e;n.institution_id=t.user.institution.id,J(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"application"},r.a.createElement(E.Helmet,null,r.a.createElement("link",{rel:"canonical",href:ee}),r.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili"}),r.a.createElement("meta",{name:"author",content:"Standard Group"}),r.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more"}),r.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Examination Papers : The Standard"}),r.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Examination Papers "}),r.a.createElement("meta",{property:"twitter:url",content:ee}),r.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Examination Papers : The Standard"}),r.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Examination Papers "}),r.a.createElement("meta",{property:"og:url",content:ee}))),r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),r.a.createElement("div",{id:"about",className:"section-padding profile"},r.a.createElement("div",{className:"container"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center ","data-wow-delay":"0.3s"},"Free Examination papers"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},T?r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:P,role:"alert"},r.a.createElement("div",{className:"alert-message"},F))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keyField:"id",data:j.filter((function(e){return 1===parseInt(e.status)&&29===parseInt(e.institution_id)})).reverse(),columns:[{dataField:"module",text:"Test Papers",formatter:function(e,t){return r.a.createElement("span",null,t.module,r.a.createElement("br",null),"".concat(t.class," - ").concat(t.subject))},style:{textAlign:"left"}},{dataField:"created_at",text:"Select",sort:!0,formatter:function(e,a){return r.a.createElement("div",{className:"actions ml-3"},(Q.teacher||Q.owner)&&parseInt(Q.institution_id)===parseInt(a.institution_id)?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:{pathname:"".concat(c.d,"exams/exam/").concat(a.id,"/performance"),state:{exam:a}},className:"btn btn-sm btn-rounded btn-outline-success btn-success m-1"},"Performance ",r.a.createElement("i",{className:"fa fa-graduation-cap"})),r.a.createElement(s.b,{to:{pathname:"".concat(c.d,"exams/exam/edit/").concat(a.id),state:{exam:a}},className:"btn btn-sm btn-rounded btn-outline-success btn-success m-1"},"Add Question ",r.a.createElement("i",{className:"fa fa-plus"})),r.a.createElement(s.b,{to:"#",className:"btn btn-sm btn-rounded btn-outline-success btn-success m-1","data-toggle":"modal","data-target":"#exampleModal"},"Edit Paper ",r.a.createElement("i",{className:"fa fa-pencil"}))):r.a.createElement(s.b,{to:{pathname:"secondary"===t.match.params.level?"".concat(c.d,"exams/exam/").concat(a.id,"/questions/1"):29===parseInt(a.institution_id)?"".concat(c.d,"free/exam/").concat(a.id):"".concat(c.d,"exams/exam/").concat(a.id),state:{exam:a}},className:"btn btn-sm btn-rounded ".concat(a.done?"btn-success-filled":"btn-outline-success"," btn-success")},a.done?"Revise Paper":29===parseInt(a.institution_id)?"Take Free Test":"Take Test"))}}],search:!0},(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm rounded",name:"search",placeholder:"Search",defaultValue:W,onChange:function(e){var t=e.target.value;D(t)}})),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement(y.a,{name:"class",defaultValue:G,onChange:R,options:X.map((function(e){return{label:e.class,value:e.id}}))})),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("button",{onClick:function(n){n.preventDefault(),W&&""!==W?(u(!0),C(!1),e.ajax({url:"".concat(c.a,"/modules/list?").concat(t.user?"userid".concat(t.user.id,"&"):"","institutionid=29&search=").concat(W,"&").concat(G?"class_id=".concat(G.value):""),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}u(!1),C(!0),A("alert alert-danger"),M(n)}.bind(a),success:function(e){w(e),N(e),u(!1)}.bind(a)})):(C(!0),A("alert alert-danger"),M("Please type in search"))},className:"float-left btn-sm-block btn btn-sm btn-rounded btn-success"},"Search")),r.a.createElement("div",{className:"col-md-3 "},Q.teacher||Q.owner?Y.hasOwnProperty("id")?r.a.createElement("button",{onClick:function(e){var t={};t.institution_id=Q.institution.id,J(t)},className:"mb-3 float-right btn-sm-block btn btn-sm btn-rounded btn-info","data-toggle":"modal","data-target":"#exampleModal"},"Add Exam"):r.a.createElement(s.b,{to:"".concat(c.d,"subscriptions"),className:"mb-3 float-right btn-sm-block btn btn-sm btn-rounded btn-info"},"Add Exam"):"")),i?r.a.createElement(f.a,null):Q.teacher||Q.owner?r.a.createElement(p.a,g({},t.baseProps,{wrapperClasses:"table-responsive",headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},selectRow:{mode:"radio",clickToSelect:!0,onSelect:ae.bind(a)},pagination:d()(),filter:m()()})):r.a.createElement(p.a,g({},t.baseProps,{wrapperClasses:"table-responsive",headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},pagination:d()(),filter:m()()})))})))))))),r.a.createElement(h.a,{exam:K,getModules:te}))}}.call(this,a(57))},69:function(e,t,a){"use strict";(function(e){var n=a(1),r=a.n(n),c=a(24),s=a(8),l=(a(58),a(66)),o=a(25);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(t){var a=this,m=i(Object(n.useState)(!0),2),u=m[0],d=m[1],b=i(Object(n.useState)(!1),2),p=b[0],f=b[1],E=i(Object(n.useState)(!1),2),h=E[0],v=E[1],y=i(Object(n.useState)(""),2),g=y[0],S=y[1],w=i(Object(n.useState)(""),2),x=w[0],j=w[1],N=i(Object(n.useState)({}),2),O=N[0],T=N[1],C=Object(o.c)((function(e){return e.default.classes})),k=Object(o.c)((function(e){return e.default.subjects})),P=i(Object(n.useState)({}),2),A=P[0],I=P[1],F=i(Object(n.useState)({}),2),M=F[0],_=F[1],K=i(Object(n.useState)(!1),2),J=K[0],L=K[1];Object(n.useEffect)((function(e){L(!1),v(!1),t.exam.hasOwnProperty("id")?W():d(!1)}),[t.exam]);var W=function(){d(!0),e.ajax({url:"".concat(s.a,"/questions/module/").concat(t.exam.id,"?userid=2"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}d(!1),v(!0),S("alert alert-danger"),j(n)}.bind(a),success:function(e){T(e),_({label:e.subject.subject,value:e.subject.id}),I({label:e.class.class,value:e.class.id}),d(!1)}.bind(a)})},D=function(n){n.preventDefault(),v(!1),f(!0);var r=new FormData(e("form#exam")[0]);r.append("institutionid",t.exam.institution_id),t.exam.hasOwnProperty("id")&&r.append("id",t.exam.id),e.ajax({url:"".concat(s.a,"/institution/modules/").concat(t.exam.hasOwnProperty("id")?"edit":"add"),method:"post",headers:{appkey:"ELE-2020-XCZ3"},processData:!1,contentType:!1,data:r,error:function(t,a,n){var r="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{r=JSON.parse(t.responseText).message}catch(e){}f(!1),v(!0),S("alert alert-danger"),j(r),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(a){f(!1),v(!0),S("alert alert-success"),j("Module updated successfully."),t.exam.hasOwnProperty("id")?L(!0):(e("#exam")[0].reset(),I({}),_({}),t.getModules())}.bind(a)})};return r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},u?r.a.createElement("div",{className:"text-center",style:{marginTop:"50px"}},r.a.createElement(c.a,{color:"#cf2027"})):r.a.createElement("form",{onSubmit:D},h?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:g,role:"alert"},r.a.createElement("div",{className:"alert-message"},x))))):"",J?"":r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,O.hasOwnProperty("name")?O.name:"Add New Exam")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"exam"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"module",className:"form-control",defaultValue:O.name}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Class"),r.a.createElement(l.a,{name:"classid",defaultValue:A,onChange:I,options:C.map((function(e){return{value:e.id,label:e.class}}))})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Subject"),r.a.createElement(l.a,{name:"subjectid",defaultValue:M,onChange:_,options:k.map((function(e){return{value:e.id,label:e.subject}}))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},p?r.a.createElement(c.a,null):r.a.createElement("button",{type:"button",onClick:D,className:"btn btn-sm btn-success btn-rounded float-right"},"Save changes"))))))))))}}).call(this,a(57))}}]);