(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{188:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));"".concat(window.origin);var n="https://tutorsoma.standardmedia.co.ke";"".concat(n,"/app")},329:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),o=a.n(n),r=a(24),i=a(7),s=a(16),c=a.n(s),l=a(330),d=a.n(l),u=a(331),m=a.n(u),p=a(197),f=a(188);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function b(t){var a=v(Object(n.useState)(""),2);a[0],a[1];Object(n.useEffect)((function(e){}),[]);return o.a.createElement("div",{id:"option-".concat(t.rowKey)},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-10"},o.a.createElement("label",null,"Option"),o.a.createElement("textarea",{name:"option",id:"ta-".concat(t.rowKey),className:"form-control",defaultValue:t.option.hasOwnProperty("option")?t.option.option:"",onChange:function(a){var n=t.option;n.option=e("#ta-".concat(t.rowKey))[0].value,t.updateOptions({key:t.rowKey,data:n})}})),o.a.createElement("div",{className:"col-md-2"},o.a.createElement("button",{type:"button",className:"mt-5 float-right btn btn-sm btn-rounded btn-success",onClick:function(e){c.a.unmountComponentAtNode(document.getElementById("option-".concat(t.rowKey)).parentNode)}.bind(this)},"Delete Option"))))}t.default=function(t){var a=this,s=t.location.state,l=v(Object(n.useState)(s.hasOwnProperty("question")?s.question:{}),1)[0],u=v(Object(n.useState)(s.hasOwnProperty("module")?s.module:{}),1)[0],h=v(Object(n.useState)(!1),2),y=h[0],E=(h[1],v(Object(n.useState)(l.hasOwnProperty("options")&&l.options.length>0),2)),w=E[0],g=E[1],O=v(Object(n.useState)(!1),2),N=O[0],S=O[1],j=v(Object(n.useState)(!1),2),P=j[0],x=j[1],k=v(Object(n.useState)(""),2),q=k[0],C=k[1],A=v(Object(n.useState)(""),2),K=A[0],I=A[1],T=v(Object(n.useState)(1),2),D=T[0],F=T[1],J=v(Object(n.useState)({}),2),V=J[0],_=J[1],Q=v(Object(n.useState)(l.hasOwnProperty("question")?l.question:""),2),B=Q[0],L=Q[1],M=v(Object(n.useState)({}),2),U=M[0],W=M[1],X=v(Object(n.useState)([]),2),Z=X[0],$=X[1];Object(n.useEffect)((function(t){if(e("[id^='option-']").remove(),l.hasOwnProperty("options")&&l.options.length>0){if(l.hasOwnProperty("answer")){var a=l.options.filter((function(e){return e.id===l.answer}));a.length>0&&_({label:a[0].option,value:l.answer})}var n=U;if(n["id-".concat(l.options[0].id)]=l.options[0],W(n),l.options.length>0)for(var o=1;o<l.options.length;o++)z(l.options[o]);g(!1)}}),[t.question]);var z=function(t){var a=document.createElement("div"),n=D+1,r="".concat(t.hasOwnProperty("id")?"id-".concat(t.id):n),i=U;i[r]=t,c.a.render(o.a.createElement(b,{key:r,rowKey:r,option:t,updateOptions:G}),a),e("#options").append(a),F(n);var s=[];for(var l in U)s.push(U[l]);W(i),$(s)},G=function(e){var t=U;t[e.key]=e.data;var a=[];for(var n in U)a.push(U[n]);W(t),$(a)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"sliders"},o.a.createElement("div",{className:"full-width"},o.a.createElement("div",{className:"carousel slide",id:"light-slider"},o.a.createElement("div",{id:"carousel-area"},o.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},o.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},o.a.createElement("div",{className:"carousel-item active"},o.a.createElement("img",{alt:"",src:"".concat(f.a,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),o.a.createElement("div",{id:"about",className:"section-padding exam"},o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),V.value){x(!1),S(!0);var o={moduleid:u.id};o.questions=[l.hasOwnProperty("id")?{id:l.id,module_id:u.id,question:B,answer:V.value,options:Z.map((function(e){var t={question_id:l.id,option:e.option};return e.hasOwnProperty("id")&&(t.id=e.id),t}))}:{question:B,options:Z.map((function(e){return e.option})),answer:V.value}],e.ajax({url:"".concat(i.a,"/institution/modules/questions/").concat(l.hasOwnProperty("id")?"edit":"add"),method:"post",headers:{appkey:"ELE-2020-XCZ3"},data:o,error:function(t,a,n){var o="Sorry an error has occurred. We are working on it. (".concat(t.status,")");try{o=JSON.parse(t.responseText).message}catch(e){}S(!1),x(!0),C("alert alert-danger"),I(o),e("html, body").animate({scrollTop:0},200)}.bind(a),success:function(e){t.history.push({pathname:"/exams/exam/edit/".concat(u.id),state:{message:!0,message_type:"alert alert-success",response:"Question updated successfully."}})}.bind(a)})}else S(!1),x(!0),C("alert alert-danger"),I("Please select the correct answer.")}},P?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"text-center mt-2"},o.a.createElement("div",{className:q,role:"alert"},o.a.createElement("div",{className:"alert-message"},K))))):"",y?"":o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h5",null,u.name)),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"Question"),o.a.createElement(d.a,{editor:m.a,data:B,onInit:function(e){},onChange:function(e,t){var a=t.getData();L(a)}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-10"},o.a.createElement("label",null,"Option "),o.a.createElement("textarea",{name:"option",id:l.hasOwnProperty("options")&&l.options.length>0?"id-".concat(l.options[0].id):"id-0",className:"form-control",defaultValue:l.hasOwnProperty("options")&&l.options.length>0?l.options[0].option:"",onChange:function(t){var a=l.hasOwnProperty("options")&&l.options.length>0?"id-".concat(l.options[0].id):"id-0",n=l.hasOwnProperty("options")&&l.options.length>0?l.options[0]:{};n.option=e("#".concat(a))[0].value,G({key:l.hasOwnProperty("options")&&l.options.length>0?"id-".concat(l.options[0].id):0,data:n})}})),o.a.createElement("div",{className:"col-md-2"},o.a.createElement("button",{type:"button",className:"mt-5 float-right btn btn-sm btn-rounded btn-success",onClick:z.bind(this,{})},"Add Option"))),o.a.createElement("div",{id:"options"}),w?o.a.createElement("div",{className:"text-center",style:{marginTop:"50px"}},o.a.createElement(r.a,{color:"#cf2027"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",null,"Correct Answer"),o.a.createElement(p.a,{name:"answerr",defaultValue:V,onChange:_,options:Z.map((function(e){return{value:e.hasOwnProperty("id")?e.id:e.option,label:e.option}}))})),o.a.createElement("div",{className:"col-md-6"},N?o.a.createElement(r.a,null):o.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success btn-rounded float-right"},"Save changes"))))))))))}}.call(this,a(57))}}]);