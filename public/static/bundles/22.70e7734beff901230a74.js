(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{317:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),c=a(6),l=a(61),s=a(26),o=a(25),m=a(27),i=a(194);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var E=["".concat(c.h,"/static/app/images/math.png"),"".concat(c.h,"/static/app/images/eng.png"),"".concat(c.h,"/static/app/images/hist.png"),"".concat(c.h,"/static/app/images/cre.png"),"".concat(c.h,"/static/app/images/chem.png"),"".concat(c.h,"/static/app/images/cre.png")];t.default=function(t){var a=this,d=t.history.location.state?t.history.location.state:{},p=void 0!==d&&d.hasOwnProperty("student")?d.student:t.user,h=Object(m.c)((function(e){return e.default.subscription})),b=u(Object(n.useState)([]),2),g=b[0],w=b[1],y=u(Object(n.useState)([]),2),f=y[0],N=y[1],v=u(Object(n.useState)(!1),2),S=v[0],x=v[1],j=u(Object(n.useState)(!1),2),T=j[0],O=j[1],k=u(Object(n.useState)(!0),2),I=k[0],q=k[1],P=u(Object(n.useState)(!1),2),C=P[0],A=P[1],F=u(Object(n.useState)(""),2),M=F[0],_=F[1],K=u(Object(n.useState)(""),2),L=K[0],J=K[1],D=Object(m.c)((function(e){return e.default.subjects})),G="".concat(window.origin).concat(t.history.location.pathname);Object(n.useEffect)((function(){Q()}),[]);var Q=function(){e.ajax({url:"".concat(c.a,"/questions/module/").concat(t.match.params.exam,"?userid=").concat(p.id),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}q(!1),A(!0),_("alert alert-danger"),J(n)}.bind(a),success:function(e){h.hasOwnProperty("id")||e.publisher&&29===parseInt(e.publisher.id)?(w(e),q(e.done),e.done&&H()):t.history.push({pathname:"".concat(c.d,"subscriptions"),state:{next:t.location.pathname}})}.bind(a)})},H=function(){e.ajax({url:"".concat(c.a,"/modules/").concat(t.match.params.exam,"/user/").concat(p.id),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}q(!1),_("alert alert-danger"),J(n)}.bind(a),success:function(e){N(e),x(e.length>0),q(!1)}.bind(a)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(c.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),r.a.createElement("div",{id:"about",className:"section-padding exam"},r.a.createElement("div",{className:"container"},I?r.a.createElement(l.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("link",{rel:"canonical",href:G}),r.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili, ".concat(g.name)}),r.a.createElement("meta",{name:"author",content:"Standard Group"}),r.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more ".concat(g.name)}),r.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : ".concat(g.name," : The Standard")}),r.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - ".concat(g.name," ")}),r.a.createElement("meta",{property:"twitter:url",content:G}),r.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : ".concat(g.name," : The Standard ")}),r.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - ".concat(g.name," ")}),r.a.createElement("meta",{property:"og:url",content:G})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},g.hasOwnProperty("publisher")?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"".concat(g.publisher.name).toUpperCase()),r.a.createElement("h4",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"".concat(g.name))):r.a.createElement("h2",{className:"section-title wow fadeInDown animated","data-wow-delay":"0.3s"},"".concat(g.name))),g.hasOwnProperty("class")&&g.hasOwnProperty("subject")?r.a.createElement("div",{className:"col-md-12 text-center mb-3"},r.a.createElement("span",{className:"section-desc "},"".concat(g.class.class," ")),r.a.createElement("span",{className:"section-desc"}," ".concat(g.subject.subject))):""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mt-md-5",style:{display:"none"}},r.a.createElement("div",{className:"sticky-top pt-md-5"},r.a.createElement("div",{className:"pt-5 mt-2 d-none d-md-block d-lg-block"}),r.a.createElement("table",{className:"table mb-4"},r.a.createElement("thead",{className:"mb-3"},r.a.createElement("tr",null,r.a.createElement("p",null,"This Paper contains ",r.a.createElement("font",{className:"bold"}," 100")," Questions to be completed within ",r.a.createElement("font",{className:"bold"},"1hr 20min")))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:""},"Start Time"),r.a.createElement("td",null,"10:00 am")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Time Taken"),r.a.createElement("td",null,"25 min")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Time Remaining"),r.a.createElement("td",null,"45 min")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Questions Attempted"),r.a.createElement("td",null,"10")))),r.a.createElement("table",{className:"table mb-4"},r.a.createElement("thead",{className:""},r.a.createElement("tr",null,r.a.createElement("h5",{className:"text-center"},"Questions Progress ",r.a.createElement("font",{class:"donetxt"},"(Red Attempted)")))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",{className:"done"},"2"),r.a.createElement("td",null,"3"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"4")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"6"),r.a.createElement("td",null,"7"),r.a.createElement("td",{className:"done"},"32"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",{className:"done"},"17")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"10"),r.a.createElement("td",null,"11"),r.a.createElement("td",null,"12")))))),I?r.a.createElement(l.a,null):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),O(!0),A(!1);var l=0,s=[];g.questions.forEach((function(t){var a=e('input[name="'.concat(t.id,'"]:checked')).val();parseInt(t.answer)===parseInt(a)&&(l+=1),s.push({questionid:t.id,optionid:isNaN(a)?"":parseInt(a)})}));var m={moduleid:t.match.params.exam,userid:t.user.id,answers:s};l=l/g.length*100,e.ajax({url:"".concat(c.a,"/questions/module/user/answers"),data:m,headers:{appkey:"ELE-2020-XCZ3"},method:"POST",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}O(!1),A(!0),_("alert alert-danger"),J(n)}.bind(a),success:function(t){var a=JSON.parse(t);x(!0),O(!1),A(!0),_("alert alert-success"),J(r.a.createElement("h4",null,"Congratulations, you have scored ",a.Score," / ",a.Questions,". ",r.a.createElement(o.b,{to:"".concat(c.d,"exams/modules")},"You can do another paper here"))),e("html, body").animate({scrollTop:0},200)}.bind(a)})}},C?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:M,role:"alert"},r.a.createElement("div",{className:"alert-message"},L))))):"",g.questions.length>0?r.a.createElement(r.a.Fragment,null,g.questions.map((function(e,t){var a=f.filter((function(t){return e.id===t.question_id})),n=a.length>0?a[0]:{};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card examcard my-4 mt-md-0 w-100"},r.a.createElement("ul",{className:"bg-white float-right",style:{display:"".concat(g.done&&S?"block":"none")}},r.a.createElement("li",{className:"text-center p-1 marks"},"Mrks",r.a.createElement("br",null),e.answer===n.user_option?1:0)),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},null===e.question?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>".concat(t+1,"</b>.")}}):r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>".concat(t+1,"</b>. ").concat(e.question)}})),e.options.map((function(t){var a,c=parseInt(e.answer)===parseInt(t.id),l=n.hasOwnProperty("user_option")&&n.user_option===t.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list-group-item "},r.a.createElement("input",{type:"radio",id:"".concat(t.id),required:!0,defaultChecked:l,disabled:n.hasOwnProperty("user_option"),value:t.id,name:e.id}),r.a.createElement("label",{htmlFor:"".concat(t.id)},r.a.createElement("span",{className:l?c?"answer":"wrong-answer":""}," ",null!==(a=t.option)&&""!==a&&(a=a.toString()).replace(/(<([^>]+)>)/gi,"").replace(/&nbsp;/g,"")," "),c&&S?r.a.createElement("span",{className:"fa fa-check alert-success"}):"")))}))))))})),T?r.a.createElement(s.a,null):S?"":r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"submit",className:"text-center float-right btn btn-success btn-rounded"},"Submit For Marking")))):C?"":r.a.createElement("div",{className:"rounded"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:"alert alert-warning",role:"alert"},r.a.createElement("div",{className:"alert-message"},r.a.createElement("h4",null,"Sorry, we were unable to get questions for this paper ",r.a.createElement(o.b,{to:"".concat(c.d,"exams/modules")},"You can select another paper here")))))))),r.a.createElement("div",{className:"mt-5 text-center container"},D.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center my-4","data-wow-delay":"0.3s"},"You May Also Like"),r.a.createElement("div",{className:"row"},D.sort((function(){return.5-Math.random(0,3)})).slice(0,4).map((function(e,t){return r.a.createElement("div",{className:"col-lg-3 col-md-6 col-xs-6 col-sm-6"},r.a.createElement("div",{className:"featured-box-item"},r.a.createElement(o.b,{to:"".concat(c.d,"exams/subjects/").concat(e.subject,"/modules")},r.a.createElement("div",{className:"featured-icon"},r.a.createElement(o.b,{to:"".concat(c.d,"exams/subjects/").concat(e.subject,"/modules")},r.a.createElement("img",{src:E[t],className:"icons",alt:c.b}))),r.a.createElement("div",{className:"featured-content"},r.a.createElement(o.b,{to:"".concat(c.d,"exams/subjects/").concat(e.subject,"/modules")},r.a.createElement("h4",null,e.subject),r.a.createElement("p",null,"Grade 1-4 Class 5-8"))))))})))):"")))))))}}.call(this,a(57))}}]);