(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{331:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),o=a.n(n),r=a(25),i=a(6),s=a(16),c=a.n(s),l=a(83),d=a.n(l),u=a(84),m=a.n(u),p=a(66);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(t){var a=f(Object(n.useState)(""),2);a[0],a[1];Object(n.useEffect)((function(e){}),[]);return o.a.createElement("div",{id:"option-".concat(t.rowKey)},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-10"},o.a.createElement("label",null,"Option"),o.a.createElement("textarea",{name:"option",id:"ta-".concat(t.rowKey),className:"form-control",defaultValue:t.option.hasOwnProperty("option")?t.option.option:"",onChange:function(a){var n=t.option;n.option=e("#ta-".concat(t.rowKey))[0].value,t.updateOptions({key:t.rowKey,data:n})}})),o.a.createElement("div",{className:"col-md-2"},o.a.createElement("button",{type:"button",className:"mt-5 float-right btn btn-sm btn-rounded btn-success",onClick:function(e){c.a.unmountComponentAtNode(document.getElementById("option-".concat(t.rowKey)).parentNode)}.bind(this)},"Delete Option"))))}t.default=function(t){var a=this,s=t.location.state,l=f(Object(n.useState)(s.hasOwnProperty("question")?s.question:{}),1)[0],u=f(Object(n.useState)(s.hasOwnProperty("module")?s.module:{}),1)[0],v=f(Object(n.useState)(!1),2),b=v[0],y=(v[1],f(Object(n.useState)(l.hasOwnProperty("options")&&l.options.length>0),2)),E=y[0],w=y[1],g=f(Object(n.useState)(!1),2),O=g[0],N=g[1],S=f(Object(n.useState)(!1),2),j=S[0],P=S[1],x=f(Object(n.useState)(""),2),k=x[0],q=x[1],C=f(Object(n.useState)(""),2),A=C[0],K=C[1],I=f(Object(n.useState)(1),2),T=I[0],D=I[1],F=f(Object(n.useState)({}),2),J=F[0],V=F[1],_=f(Object(n.useState)(l.hasOwnProperty("question")?l.question:""),2),Q=_[0],B=_[1],L=f(Object(n.useState)({}),2),M=L[0],U=L[1],W=f(Object(n.useState)([]),2),X=W[0],Z=W[1];Object(n.useEffect)((function(t){if(e("[id^='option-']").remove(),l.hasOwnProperty("options")&&l.options.length>0){if(l.hasOwnProperty("answer")){var a=l.options.filter((function(e){return e.id===l.answer}));a.length>0&&V({label:a[0].option,value:l.answer})}var n=M;if(n["id-".concat(l.options[0].id)]=l.options[0],U(n),l.options.length>0)for(var o=1;o<l.options.length;o++)$(l.options[o]);w(!1)}}),[t.question]);var $=function(t){var a=document.createElement("div"),n=T+1,r="".concat(t.hasOwnProperty("id")?"id-".concat(t.id):n),i=M;i[r]=t,c.a.render(o.a.createElement(h,{key:r,rowKey:r,option:t,updateOptions:z}),a),e("#options").append(a),D(n);var s=[];for(var l in M)s.push(M[l]);U(i),Z(s)},z=function(e){var t=M;t[e.key]=e.data;var a=[];for(var n in M)a.push(M[n]);U(t),Z(a)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"sliders"},o.a.createElement("div",{className:"full-width"},o.a.createElement("div",{className:"carousel slide",id:"light-slider"},o.a.createElement("div",{id:"carousel-area"},o.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},o.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},o.a.createElement("div",{className:"carousel-item active"},o.a.createElement("img",{alt:"",src:"".concat(i.h,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),o.a.createElement("div",{id:"about",className:"section-padding exam"},o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),J.value){P(!1),N(!0);var o={moduleid:u.id};o.questions=[l.hasOwnProperty("id")?{id:l.id,module_id:u.id,question:Q,answer:J.value,options:X.map((function(e){var t={question_id:l.id,option:e.option};return e.hasOwnProperty("id")&&(t.id=e.id),t}))}:{question:Q,options:X.map((function(e){return e.option})),answer:J.value}],e.ajax({url:"".concat(i.a,"/institution/modules/questions/").concat(l.hasOwnProperty("id")?"edit":"add"),method:"post",headers:{appkey:"ELE-2020-XCZ3"},data:o,error:function(t,a,n){var o="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{o=JSON.parse(t.responseText).message}catch(e){}N(!1),P(!0),q("alert alert-danger"),K(o),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){t.history.push({pathname:"/exams/exam/edit/".concat(u.id),state:{message:!0,message_type:"alert alert-success",response:"Question updated successfully."}})}.bind(a)})}else N(!1),P(!0),q("alert alert-danger"),K("Please select the correct answer.")}},j?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"text-center mt-2"},o.a.createElement("div",{className:k,role:"alert"},o.a.createElement("div",{className:"alert-message"},A))))):"",b?"":o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h5",null,u.name)),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"Question"),o.a.createElement(d.a,{editor:m.a,data:Q,onInit:function(e){},onChange:function(e,t){var a=t.getData();B(a)}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-10"},o.a.createElement("label",null,"Option "),o.a.createElement("textarea",{name:"option",id:l.hasOwnProperty("options")&&l.options.length>0?"id-".concat(l.options[0].id):"id-0",className:"form-control",defaultValue:l.hasOwnProperty("options")&&l.options.length>0?l.options[0].option:"",onChange:function(t){var a=l.hasOwnProperty("options")&&l.options.length>0?"id-".concat(l.options[0].id):"id-0",n=l.hasOwnProperty("options")&&l.options.length>0?l.options[0]:{};n.option=e("#".concat(a))[0].value,z({key:l.hasOwnProperty("options")&&l.options.length>0?"id-".concat(l.options[0].id):0,data:n})}})),o.a.createElement("div",{className:"col-md-2"},o.a.createElement("button",{type:"button",className:"mt-5 float-right btn btn-sm btn-rounded btn-success",onClick:$.bind(this,{})},"Add Option"))),o.a.createElement("div",{id:"options"}),E?o.a.createElement("div",{className:"text-center",style:{marginTop:"50px"}},o.a.createElement(r.a,{color:"#cf2027"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",null,"Correct Answer"),o.a.createElement(p.a,{name:"answerr",defaultValue:J,onChange:V,options:X.map((function(e){return{value:e.hasOwnProperty("id")?e.id:e.option,label:e.option}}))})),o.a.createElement("div",{className:"col-md-6"},O?o.a.createElement(r.a,null):o.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success btn-rounded float-right"},"Save changes"))))))))))}}.call(this,a(57))}}]);