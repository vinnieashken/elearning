(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{300:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),l=a(7),c=a(59),s=a(24),o=a(23),m=a(25),i=a(190);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["".concat(l.h,"/static/app/images/math.png"),"".concat(l.h,"/static/app/images/eng.png"),"".concat(l.h,"/static/app/images/hist.png"),"".concat(l.h,"/static/app/images/cre.png"),"".concat(l.h,"/static/app/images/chem.png"),"".concat(l.h,"/static/app/images/cre.png")];t.default=function(t){var a=this,d=E(t.history.location.state)?t.history.location.state:{},h=void 0!==d&&d.hasOwnProperty("student")?d.student:t.user,b=u(Object(n.useState)(d.hasOwnProperty("exam")?d.exam:{}),2),y=b[0],g=(b[1],u(Object(n.useState)([]),2)),f=g[0],w=g[1],v=u(Object(n.useState)([]),2),N=v[0],S=v[1],x=u(Object(n.useState)(!1),2),T=x[0],O=x[1],j=u(Object(n.useState)(!1),2),k=j[0],I=j[1],_=u(Object(n.useState)(!0),2),q=_[0],P=_[1],A=u(Object(n.useState)(!1),2),F=A[0],M=A[1],K=u(Object(n.useState)(""),2),C=K[0],J=K[1],D=u(Object(n.useState)(""),2),G=D[0],L=D[1],Q=Object(m.c)((function(e){return e.subjects})),H="".concat(window.origin).concat(t.history.location.pathname);Object(n.useEffect)((function(){W()}),[]);var W=function(){e.ajax({url:"".concat(l.a,"/questions/module/").concat(t.match.params.exam,"?userid=").concat(h.id),method:"GET",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}P(!1),M(!0),J("alert alert-danger"),L(n)}.bind(a),success:function(e){w(e),P(e.done),e.done&&Y()}.bind(a)})},Y=function(){e.ajax({url:"".concat(l.a,"/modules/").concat(t.match.params.exam,"/user/").concat(h.id),method:"GET",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}P(!1),J("alert alert-danger"),L(n)}.bind(a),success:function(e){S(e),O(e.length>0),P(!1)}.bind(a)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(l.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),r.a.createElement("div",{id:"about",className:"section-padding exam"},r.a.createElement("div",{className:"container"},q?r.a.createElement(c.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("link",{rel:"canonical",href:H}),r.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili, ".concat(f.name)}),r.a.createElement("meta",{name:"author",content:"Standard Group"}),r.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more ".concat(f.name)}),r.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : ".concat(f.name," : The Standard")}),r.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - ".concat(f.name," ")}),r.a.createElement("meta",{property:"twitter:url",content:H}),r.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : ".concat(f.name," : The Standard ")}),r.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - ".concat(f.name," ")}),r.a.createElement("meta",{property:"og:url",content:H})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},y.hasOwnProperty("institution_name")?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"".concat(y.institution_name).toUpperCase()),r.a.createElement("h4",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"".concat(f.name))):r.a.createElement("h2",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"".concat(f.name))),y.hasOwnProperty("institution_name")?r.a.createElement("div",{className:"col-md-12 text-center mb-3"},r.a.createElement("span",{className:"section-desc "},"".concat(y.class," ")),r.a.createElement("span",{className:"section-desc"}," ".concat(y.subject))):""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mt-md-5",style:{display:"none"}},r.a.createElement("div",{className:"sticky-top pt-md-5"},r.a.createElement("div",{className:"pt-5 mt-2 d-none d-md-block d-lg-block"}),r.a.createElement("table",{className:"table mb-4"},r.a.createElement("thead",{className:"mb-3"},r.a.createElement("tr",null,r.a.createElement("p",null,"This Paper contains ",r.a.createElement("font",{className:"bold"}," 100")," Questions to be completed within ",r.a.createElement("font",{className:"bold"},"1hr 20min")))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:""},"Start Time"),r.a.createElement("td",null,"10:00 am")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Time Taken"),r.a.createElement("td",null,"25 min")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Time Remaining"),r.a.createElement("td",null,"45 min")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Questions Attempted"),r.a.createElement("td",null,"10")))),r.a.createElement("table",{className:"table mb-4"},r.a.createElement("thead",{className:""},r.a.createElement("tr",null,r.a.createElement("h5",{className:"text-center"},"Questions Progress ",r.a.createElement("font",{class:"donetxt"},"(Red Attempted)")))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",{className:"done"},"2"),r.a.createElement("td",null,"3"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"4")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"6"),r.a.createElement("td",null,"7"),r.a.createElement("td",{className:"done"},"32"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",{className:"done"},"17")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12")))))),q?r.a.createElement(c.a,null):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),I(!0),M(!1);var c=0,s=[];f.questions.forEach((function(t){var a=e('input[name="'.concat(t.id,'"]:checked')).val();parseInt(t.answer)===parseInt(a)&&(c+=1),s.push({questionid:t.id,optionid:parseInt(a)})}));var m={moduleid:t.match.params.exam,userid:t.user.id,answers:s};c=c/f.length*100,e.ajax({url:"".concat(l.a,"/questions/module/user/answers"),data:m,method:"POST",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}I(!1),M(!0),J("alert alert-danger"),L(n)}.bind(a),success:function(t){var a=JSON.parse(t);O(!0),I(!1),M(!0),J("alert alert-success"),L(r.a.createElement("h4",null,"Congratulations, you have scored ",a.Score," / ",a.Questions,". ",r.a.createElement(o.b,{to:"".concat(l.e,"exams/modules")},"You can do another paper here"))),e("html, body").animate({scrollTop:0},200)}.bind(a)})}},F?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:C,role:"alert"},r.a.createElement("div",{className:"alert-message"},G))))):"",f.questions.length>0?r.a.createElement(r.a.Fragment,null,f.questions.map((function(e,t){var a=N.filter((function(t){return e.id===t.question_id})),n=a.length>0?a[0]:{};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card examcard my-4 mt-md-0 w-100"},r.a.createElement("ul",{className:"bg-white float-right",style:{display:"".concat(f.done&&T?"block":"none")}},r.a.createElement("li",{className:"text-center p-1 marks"},"Mrks",r.a.createElement("br",null),e.answer===n.user_option?1:0)),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},null===e.question?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>".concat(t+1,"</b>.")}}):r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>".concat(t+1,"</b>. ").concat(e.question)}})),e.options.map((function(t){var a,l=parseInt(e.answer)===parseInt(t.id),c=n.hasOwnProperty("user_option")&&n.user_option===t.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list-group-item "},r.a.createElement("input",{type:"radio",id:"".concat(t.id),required:!0,defaultChecked:c,disabled:n.hasOwnProperty("user_option"),value:t.id,name:e.id}),r.a.createElement("label",{htmlFor:"".concat(t.id)},r.a.createElement("span",{className:c?l?"answer":"wrong-answer":""}," ",null!==(a=t.option)&&""!==a&&(a=a.toString()).replace(/(<([^>]+)>)/gi,"").replace(/&nbsp;/g,"")," "),l&&T?r.a.createElement("span",{className:"fa fa-check alert-success"}):"")))}))))))})),k?r.a.createElement(s.a,null):T?"":r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"submit",className:"text-center float-right btn btn-success btn-rounded"},"Submit For Marking")))):F?"":r.a.createElement("div",{className:"rounded"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:"alert alert-warning",role:"alert"},r.a.createElement("div",{className:"alert-message"},r.a.createElement("h4",null,"Sorry, we were unable to get questions for this paper ",r.a.createElement(o.b,{to:"".concat(l.e,"exams/modules")},"You can select another paper here")))))))),r.a.createElement("div",{className:"mt-5 text-center container"},Q.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center my-4","data-wow-delay":"0.3s"},"You May Also Like"),r.a.createElement("div",{className:"row"},Q.sort((function(){return.5-Math.random(0,3)})).slice(0,4).map((function(e,t){return r.a.createElement("div",{className:"col-lg-3 col-md-6 col-xs-6 col-sm-6"},r.a.createElement("div",{className:"featured-box-item"},r.a.createElement("div",{className:"featured-icon"},r.a.createElement(o.b,{to:"".concat(l.e,"exams/subjects/").concat(e.id,"/modules")},r.a.createElement("img",{src:p[t],className:"icons",alt:l.b}))),r.a.createElement("div",{className:"featured-content"},r.a.createElement(o.b,{to:"".concat(l.e,"exams/subjects/").concat(e.id,"/modules")},r.a.createElement("h4",null,e.subject),r.a.createElement("p",null,"Paper 1 Grade 8")))))})))):"")))))))}}.call(this,a(57))}}]);