(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),c=a(6),s=(a(26),a(25)),l=(a(56),a(62)),o=a.n(l),i=a(79),m=a.n(i),u=a(80),d=a.n(u),b=a(63),p=a.n(b),f=a(59),E=a(61),h=a(69),v=a(27),y=(a(65),a(66));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}l.Search.SearchBar;var j={primary:1,secondary:2};t.default=function(t){var a=this,l=(Object(v.b)(),void 0!==t.history.location.state?t.history.location.state:{}),i=S(Object(n.useState)(!0),2),u=i[0],b=i[1],w=S(Object(n.useState)([]),2),x=(w[0],w[1]),N=S(Object(n.useState)([]),2),O=N[0],T=N[1],C=S(Object(n.useState)(!1),2),k=C[0],P=C[1],A=S(Object(n.useState)(""),2),I=A[0],F=A[1],M=S(Object(n.useState)(""),2),_=M[0],K=M[1],J=S(Object(n.useState)({}),2),L=J[0],W=J[1],D=S(Object(n.useState)(null),2),V=D[0],G=D[1],R=S(Object(n.useState)(null),2),X=R[0],Z=R[1],U=Object(v.c)((function(e){return e.default.classes})),$=S(Object(n.useState)(l&&l.hasOwnProperty("level")?l.level:t.match.params.level&&j.hasOwnProperty(t.match.params.level)?j[t.match.params.level]:1),2),q=$[0],B=($[1],Object(v.c)((function(e){return e.default.subjects}))),H=S(Object(n.useState)({}),2),Q=(H[0],H[1]),z=S(Object(n.useState)({}),2),Y=(z[0],z[1]),ee=S(Object(n.useState)(t.user),2),te=ee[0],ae=ee[1],ne=Object(v.c)((function(e){return e.default.subscription})),re="".concat(window.origin).concat(t.history.location.pathname);Object(n.useEffect)((function(){b(!0),ae(t.user);var e={},a={};B.forEach((function(t){e["".concat(t.subject)]="".concat(t.subject)})),U.filter((function(e){return[2,6,7,8].includes(e.id)})).forEach((function(e){a[e.id]=e.class})),Q(e),Y(a),ce()}),[t.match.params.subject]);var ce=function(){var n=1===q?"".concat(c.a,"/modules/").concat(t.match.params.hasOwnProperty("subject")?"subject/name/".concat(t.match.params.subject):"list").concat(t.user?"?userid=".concat(t.user.id):""):"".concat(c.a,"/modules/nochoices/list");e.ajax({url:n,method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}b(!1),P(!0),F("alert alert-danger"),K(n)}.bind(a),success:function(e){x(e),T(e),b(!1),(U.length<=0||B.length<=0)&&(getClasses(),getSubjects())}.bind(a)})},se=function(e,a){var n=e;n.institution_id=t.user.institution.id,W(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"application"},r.a.createElement(E.Helmet,null,r.a.createElement("link",{rel:"canonical",href:re}),r.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili"}),r.a.createElement("meta",{name:"author",content:"Standard Group"}),r.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more"}),r.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Examination Papers : The Standard"}),r.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Examination Papers "}),r.a.createElement("meta",{property:"twitter:url",content:re}),r.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Examination Papers : The Standard"}),r.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Examination Papers "}),r.a.createElement("meta",{property:"og:url",content:re}))),r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),r.a.createElement("div",{id:"about",className:"section-padding profile"},r.a.createElement("div",{className:"container"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center ","data-wow-delay":"0.3s"},"Examination papers"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},k?r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:I,role:"alert"},r.a.createElement("div",{className:"alert-message"},_))):"",r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keyField:"id",data:O.filter((function(e){return 1===parseInt(e.status)})).reverse(),columns:[{dataField:"module",text:"Test Papers",formatter:function(e,t){return r.a.createElement("span",null,t.module,r.a.createElement("br",null),"".concat(t.class," - ").concat(t.subject))},style:{textAlign:"left"}},{dataField:"created_at",text:"Select",sort:!0,formatter:function(e,t){return r.a.createElement("div",{className:"actions ml-3"},(te.teacher||te.owner)&&parseInt(te.institution_id)===parseInt(t.institution_id)?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:{pathname:"".concat(c.d,"exams/exam/").concat(t.id,"/performance"),state:{exam:t}},className:"btn btn-sm btn-rounded btn-outline-success btn-success m-1"},"Performance ",r.a.createElement("i",{className:"fa fa-graduation-cap"})),r.a.createElement(s.b,{to:{pathname:"".concat(c.d,"exams/exam/edit/").concat(t.id),state:{exam:t}},className:"btn btn-sm btn-rounded btn-outline-success btn-success m-1"},"Add Question ",r.a.createElement("i",{className:"fa fa-plus"})),r.a.createElement(s.b,{to:"#",className:"btn btn-sm btn-rounded btn-outline-success btn-success m-1","data-toggle":"modal","data-target":"#exampleModal"},"Edit Paper ",r.a.createElement("i",{className:"fa fa-pencil"}))):r.a.createElement(s.b,{to:{pathname:29===parseInt(t.institution_id)?"".concat(c.d,"free/exam/").concat(t.id):"".concat(c.d,"exams/exam/").concat(t.id),state:{exam:t}},className:"btn btn-sm btn-rounded ".concat(t.done?"btn-success-filled":"btn-outline-success"," btn-success")},t.done?"Revise Paper":"Take Test"))}}],search:!0},(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row  mt-2"},r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm rounded",name:"search",placeholder:"Search",defaultValue:V,onChange:function(e){var t=e.target.value;G(t)}})),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement(y.a,{name:"class",defaultValue:X,onChange:Z,options:U.map((function(e){return{label:e.class,value:e.id}}))})),r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("button",{onClick:function(n){n.preventDefault(),V&&""!==V?(b(!0),P(!1),e.ajax({url:"".concat(c.a,"/modules/list?").concat(t.user?"userid".concat(t.user.id,"&"):"","search=").concat(V,"&").concat(X?"class_id=".concat(X.value):""),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}b(!1),P(!0),F("alert alert-danger"),K(n)}.bind(a),success:function(e){x(e),T(e),b(!1)}.bind(a)})):(P(!0),F("alert alert-danger"),K("Please type in search"))},className:"float-left btn-sm-block btn btn-sm btn-rounded btn-success"},"Search")),r.a.createElement("div",{className:"col-md-3 col-sm-6"},te.teacher||te.owner?ne.hasOwnProperty("id")?r.a.createElement("button",{onClick:function(e){var t={};t.institution_id=te.institution.id,W(t)},className:"float-right btn-sm-block btn btn-sm btn-rounded btn-info","data-toggle":"modal","data-target":"#exampleModal"},"Add Exam"):r.a.createElement(s.b,{to:"".concat(c.d,"subscriptions"),className:" float-right btn-sm-block btn btn-sm btn-rounded btn-info"},"Add Exam"):r.a.createElement(s.b,{to:"".concat(c.d,"free/exams"),className:"float-right btn-sm-block btn btn-sm btn-rounded btn-info"},"Try Free Exams"))),u?r.a.createElement(f.a,null):te.teacher||te.owner?r.a.createElement(p.a,g({},t.baseProps,{wrapperClasses:"table-responsive",headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},selectRow:{mode:"radio",clickToSelect:!0,onSelect:se.bind(a)},pagination:d()(),filter:m()()})):r.a.createElement(p.a,g({},t.baseProps,{wrapperClasses:"table-responsive",headerWrapperClasses:"pt-0 shadowtable bg-danger",headerClasses:"border-0",rowClasses:"border-0",rowStyle:{borderRadius:"18px"},pagination:d()(),filter:m()()})))})))))))),r.a.createElement(h.a,{exam:L,getModules:ce}))}}.call(this,a(57))},69:function(e,t,a){"use strict";(function(e){var n=a(1),r=a.n(n),c=a(26),s=a(6),l=(a(59),a(66)),o=a(27);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(t){var a=this,m=i(Object(n.useState)(!0),2),u=m[0],d=m[1],b=i(Object(n.useState)(!1),2),p=b[0],f=b[1],E=i(Object(n.useState)(!1),2),h=E[0],v=E[1],y=i(Object(n.useState)(""),2),g=y[0],S=y[1],w=i(Object(n.useState)(""),2),j=w[0],x=w[1],N=i(Object(n.useState)({}),2),O=N[0],T=N[1],C=Object(o.c)((function(e){return e.default.classes})),k=Object(o.c)((function(e){return e.default.subjects})),P=i(Object(n.useState)({}),2),A=P[0],I=P[1],F=i(Object(n.useState)({}),2),M=F[0],_=F[1],K=i(Object(n.useState)(!1),2),J=K[0],L=K[1];Object(n.useEffect)((function(e){L(!1),v(!1),t.exam.hasOwnProperty("id")?W():d(!1)}),[t.exam]);var W=function(){d(!0),e.ajax({url:"".concat(s.a,"/questions/module/").concat(t.exam.id,"?userid=2"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}d(!1),v(!0),S("alert alert-danger"),x(n)}.bind(a),success:function(e){T(e),_({label:e.subject.subject,value:e.subject.id}),I({label:e.class.class,value:e.class.id}),d(!1)}.bind(a)})},D=function(n){n.preventDefault(),v(!1),f(!0);var r=new FormData(e("form#exam")[0]);r.append("institutionid",t.exam.institution_id),t.exam.hasOwnProperty("id")&&r.append("id",t.exam.id),e.ajax({url:"".concat(s.a,"/institution/modules/").concat(t.exam.hasOwnProperty("id")?"edit":"add"),method:"post",headers:{appkey:"ELE-2020-XCZ3"},processData:!1,contentType:!1,data:r,error:function(t,a,n){var r="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{r=JSON.parse(t.responseText).message}catch(e){}f(!1),v(!0),S("alert alert-danger"),x(r),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(a){f(!1),v(!0),S("alert alert-success"),x("Module updated successfully."),t.exam.hasOwnProperty("id")?L(!0):(e("#exam")[0].reset(),I({}),_({}),t.getModules())}.bind(a)})};return r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},u?r.a.createElement("div",{className:"text-center",style:{marginTop:"50px"}},r.a.createElement(c.a,{color:"#cf2027"})):r.a.createElement("form",{onSubmit:D},h?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:g,role:"alert"},r.a.createElement("div",{className:"alert-message"},j))))):"",J?"":r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,O.hasOwnProperty("name")?O.name:"Add New Exam")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"exam"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"module",className:"form-control",defaultValue:O.name}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Class"),r.a.createElement(l.a,{name:"classid",defaultValue:A,onChange:I,options:C.map((function(e){return{value:e.id,label:e.class}}))})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Subject"),r.a.createElement(l.a,{name:"subjectid",defaultValue:M,onChange:_,options:k.map((function(e){return{value:e.id,label:e.subject}}))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},p?r.a.createElement(c.a,null):r.a.createElement("button",{type:"button",onClick:D,className:"btn btn-sm btn-success btn-rounded float-right"},"Save changes"))))))))))}}).call(this,a(57))}}]);