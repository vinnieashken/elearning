(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{271:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),l=a.n(n),r=a(7),c=a(184),m=a(20),s=a(19),o=a(21);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,l=!1,r=void 0;try{for(var c,m=e[Symbol.iterator]();!(n=(c=m.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==m.return||m.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d=["".concat(r.g,"/static/app/images/math.png"),"".concat(r.g,"/static/app/images/eng.png"),"".concat(r.g,"/static/app/images/hist.png"),"".concat(r.g,"/static/app/images/cre.png"),"".concat(r.g,"/static/app/images/chem.png"),"".concat(r.g,"/static/app/images/cre.png")];t.default=function(t){var a=this,i=u(Object(n.useState)([]),2),E=i[0],p=i[1],b=u(Object(n.useState)(!1),2),h=b[0],f=b[1],g=u(Object(n.useState)(!1),2),v=g[0],N=g[1],w=u(Object(n.useState)(!0),2),y=w[0],S=w[1],j=u(Object(n.useState)(!1),2),x=j[0],O=j[1],k=u(Object(n.useState)(""),2),I=k[0],T=k[1],A=u(Object(n.useState)(""),2),q=A[0],F=A[1],M=Object(o.c)((function(e){return e.subjects}));Object(n.useEffect)((function(){P()}),[]);var P=function(){e.ajax({url:"".concat(r.a,"/questions/module/").concat(t.match.params.module,"?userId=2"),method:"GET",error:function(e,t,a){var n=JSON.parse(e.responseText).message;405===e.status&&(n="Sorry an error has occurred. We are working on it. (405)"),S(!1),O(!0),T("alert alert-danger"),F(n)}.bind(a),success:function(e){p(e),S(!1)}.bind(a)})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"about",className:"section-padding mt-md-5 exam"},l.a.createElement("div",{className:"container mt-md-5"},y?l.a.createElement(c.a,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",{className:"section-title wow fadeInDown animated mt-5","data-wow-delay":"0.3s"},"".concat(E.name)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 mt-md-5",style:{display:"none"}},l.a.createElement("div",{className:"sticky-top pt-md-5"},l.a.createElement("div",{className:"pt-5 mt-2 d-none d-md-block d-lg-block"}),l.a.createElement("table",{className:"table mb-4"},l.a.createElement("thead",{className:"mb-3"},l.a.createElement("tr",null,l.a.createElement("p",null,"This Paper contains ",l.a.createElement("font",{className:"bold"}," 100")," Questions to be completed within ",l.a.createElement("font",{className:"bold"},"1hr 20min")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row",className:""},"Start Time"),l.a.createElement("td",null,"10:00 am")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Time Taken"),l.a.createElement("td",null,"25 min")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Time Remaining"),l.a.createElement("td",null,"45 min")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Questions Attempted"),l.a.createElement("td",null,"10")))),l.a.createElement("table",{className:"table mb-4"},l.a.createElement("thead",{className:""},l.a.createElement("tr",null,l.a.createElement("h5",{className:"text-center"},"Questions Progress ",l.a.createElement("font",{class:"donetxt"},"(Red Attempted)")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",{className:"done"},"2"),l.a.createElement("td",null,"3"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"6"),l.a.createElement("td",null,"7"),l.a.createElement("td",{className:"done"},"32"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"9"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",{className:"done"},"17")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"9"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"9"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"11"),l.a.createElement("td",null,"12")))))),y?l.a.createElement(c.a,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),N(!0),O(!1);var c=0,m=[];E.questions.forEach((function(t){var a=e('input[name="'.concat(t.id,'"]:checked')).val();parseInt(t.answer)===parseInt(a)&&(c+=1),m.push({questionid:t.id,optionid:parseInt(a)})}));var o={moduleid:t.match.params.module,userid:t.user.id,answers:m};c=c/E.length*100,e.ajax({url:"".concat(r.a,"/questions/module/user/answers"),data:o,method:"POST",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. ".concat(e.status);N(!1),O(!0),T("alert alert-danger"),F(n)}.bind(a),success:function(t){var a=JSON.parse(t);f(!0),N(!1),O(!0),T("alert alert-success"),F(l.a.createElement("h4",null,"Congratulations, you have scored ",a.Percentage,"%. ",l.a.createElement(s.b,{to:"".concat(r.d,"exams/modules")},"You can do another paper here"))),e("html, body").animate({scrollTop:0},200)}.bind(a)})}},x?l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"text-center mt-2"},l.a.createElement("div",{className:I,role:"alert"},l.a.createElement("div",{className:"alert-message"},q)))):"",l.a.createElement("div",{className:"col-md-12"},E.questions.map((function(e,t){return l.a.createElement("div",{className:"card examcard my-4 mt-md-0"},l.a.createElement("ul",{className:"bg-white float-right",style:{display:"none"}},l.a.createElement("li",{className:"text-center p-1 marks"},"Mrks",l.a.createElement("br",null)," 10")),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>".concat(t+1,"</b>. ").concat(e.question)}})),e.options.map((function(t){var a=parseInt(e.answer)===parseInt(t.id);return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"list-group-item ml-4"},l.a.createElement("input",{type:"radio",id:"".concat(t.id),required:!0,value:t.id,name:e.id}),l.a.createElement("label",{htmlFor:"".concat(t.id)},l.a.createElement("em",null,t.option),a&&h?l.a.createElement("span",{className:"fa fa-check alert-success"}):"")))}))))})),v?l.a.createElement(m.a,null):h?"":l.a.createElement("button",{type:"submit",className:"submit text-center float-right"},"Submit"))),l.a.createElement("div",{className:"mt-5 text-center container"},M.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"section-title wow fadeInDown animated text-center my-4","data-wow-delay":"0.3s"},"You May Also Like"),l.a.createElement("div",{className:"row"},M.sort((function(){return.5-Math.random(0,3)})).slice(0,4).map((function(e,t){return l.a.createElement("div",{className:"col-lg-3 col-md-6 col-xs-6 col-sm-6"},l.a.createElement("div",{className:"featured-box-item"},l.a.createElement("div",{className:"featured-icon"},l.a.createElement(s.b,{to:"".concat(r.d,"exams/subjects/").concat(e.id,"/modules")},l.a.createElement("img",{src:d[t],className:"icons",alt:r.b}))),l.a.createElement("div",{className:"featured-content"},l.a.createElement(s.b,{to:"".concat(r.d,"exams/subjects/").concat(e.id,"/modules")},l.a.createElement("h4",null,e.subject),l.a.createElement("p",null,"Paper 1 Grade 8")))))})))):"")))))))}}.call(this,a(56))}}]);