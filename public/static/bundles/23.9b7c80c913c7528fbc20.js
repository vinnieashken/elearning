(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{292:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),l=a(7),c=a(24),s=a(59);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(t){var a=this,i=t.history.location.state,m=o(Object(n.useState)(void 0!==i&&i.hasOwnProperty("plan")?i.plan:{}),2),u=m[0],d=(m[1],o(Object(n.useState)([]),2)),p=d[0],b=d[1],E=o(Object(n.useState)([]),2),f=E[0],h=E[1],v=o(Object(n.useState)({}),2),N=v[0],g=v[1],y=o(Object(n.useState)(!1),2),S=y[0],w=y[1],x=o(Object(n.useState)(!0),2),O=x[0],k=x[1],P=o(Object(n.useState)(!1),2),j=P[0],A=P[1],C=o(Object(n.useState)(""),2),I=C[0],M=C[1],T=o(Object(n.useState)(""),2),F=T[0],_=T[1],J=o(Object(n.useState)({}),2),G=J[0],q=J[1],z=o(Object(n.useState)([]),2),D=z[0],L=z[1],R=o(Object(n.useState)(0),2),W=R[0],B=R[1];Object(n.useEffect)((function(){U()}),[]);var U=function(){var t="".concat(l.a,"/payments/subscriptions");e.ajax({url:t,method:"GET",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}k(!1),A(!0),M("alert alert-danger"),_(n)}.bind(a),success:function(e){b(e),k(4!==parseInt(u.id));var t=e.filter((function(e){return e.id===parseInt(u.id)}));q(t.length>0?t[0]:{}),4!==u.id&&Y()}.bind(a)})},Y=function(){e.ajax({url:"".concat(l.a,"/publishers/list"),method:"GET",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}k(!1),A(!0),M("alert alert-danger"),_(n)}.bind(a),success:function(e){h(e),k(!1)}.bind(a)})},K=function(t){var a=e('input[name="package_id"]:checked').val(),n=p.filter((function(e){return e.id===parseInt(a)}))[0];q(n),B(n.cost*D.length),g({})},$=function(t){var a=[];e.each(e("input[name='publisher_id']:checked"),(function(){var t=this,n=f.filter((function(a){return a.id===parseInt(e(t).val())}))[0];a.push(n)})),L(a),B(G.cost*a.length)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner smaller",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(l.g,"/static/new/img/rendered.png"),style:{height:"76px",objectFit:"cover"}})))))))),r.a.createElement("div",{id:"about",className:"section-padding payment"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),w(!0),A(!1);var r=e('input[name="package_id"]:checked').val(),c=new FormData(e("form#sub")[0]);c.append("user_id",t.user.id),c.append("package_id",r),c.append("publishers",D.map((function(e){return e.id}))),e.ajax({url:"".concat(l.a,"/payments/subscribe"),data:c,processData:!1,contentType:!1,method:"POST",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}w(!1),A(!0),M("alert alert-danger"),_(n)}.bind(a),success:function(e){g(e),w(!1)}.bind(a)})},id:"sub"},r.a.createElement("div",{className:"card weekly"},r.a.createElement("h5",{className:"card-header text-center"},"COMPLETE PAYMENT"),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("img",{src:"".concat(l.g,"/static/app/images/mpesa.png"),className:"w-75 text-center",alt:l.b}),j?r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:I,role:"alert"},r.a.createElement("div",{className:"alert-message"},F))):"",O?r.a.createElement(s.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},r.a.createElement("strong",null,"Mobile Number")),r.a.createElement("input",{type:"text",placeholder:"Enter Mobile Number",name:"mobile",required:!0,className:"w-100 mb-4 loginput"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},r.a.createElement("strong",null,"Packages ",r.a.createElement("small",null,"(Per Publisher)"))),r.a.createElement("div",{className:"row"},p.map((function(e){return r.a.createElement("div",{className:"col-md-4 col-sm-6"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"radio",className:"custom-control-input",value:e.id,onChange:K,name:"package_id",id:"".concat(e.id),defaultChecked:parseInt(u.id)===parseInt(e.id),required:!0}),r.a.createElement("label",{className:"custom-control-label form-control-label text-muted",htmlFor:"".concat(e.id)},e.subscription," (",e.cost,"/=)")))})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},r.a.createElement("strong",null,"Publishers")),r.a.createElement("div",{className:"row"},f.map((function(e){return r.a.createElement("div",{className:"col-md-4 col-sm-6"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",value:e.id,onChange:$,name:"publisher_id",id:"".concat(e.id),defaultChecked:parseInt(u.id)===parseInt(e.id),required:!0}),r.a.createElement("label",{className:"custom-control-label form-control-label text-muted",htmlFor:"".concat(e.id)},e.name)))})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},r.a.createElement("strong",null,"Total Cost:")," ",W)),N.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",null,"Click ",r.a.createElement("b",{onClick:function(e){location.href="".concat(l.d,"exams/modules")}},"Confirm Payment")," after paying")),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("img",{className:"mt-5 mb-5",style:{display:"block",margin:"auto",width:"70%"},src:"".concat(l.g,"/static/app/images/lipanampesa.jpg"),alt:"Lipa Na M-Pesa"})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("b",null,"Pay via MPESA"),r.a.createElement("br",null),r.a.createElement("ol",null,r.a.createElement("li",null,"Go to M-PESA on your phone."),r.a.createElement("li",null,"Select Lipa na MPESA."),r.a.createElement("li",null," Pay Bill."),r.a.createElement("li",null,"Enter Business Number:",r.a.createElement("span",{style:{fontSize:"20px"}},r.a.createElement("b",null,"505604")),"."),r.a.createElement("li",null,"Enter Account Number:",r.a.createElement("span",{style:{fontSize:"20px"}},r.a.createElement("b",null,N.id)),"."),r.a.createElement("li",null," Enter the Amount. i.e",r.a.createElement("span",{style:{fontSize:"20px"}},r.a.createElement("b",null,"Ksh.",N.amount))),r.a.createElement("li",null,"Enter your M-PESA PIN and Send."),r.a.createElement("li",null,"You will receive a confirmation via SMS."),r.a.createElement("li",null,"Get Us Payment Ref No.")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},"Receipt Number"),r.a.createElement("input",{type:"text",placeholder:"M-Pesa Receipt Number",className:"w-100 mb-4 loginput"}))):"",r.a.createElement("div",{className:"text-center mt-2"},S?r.a.createElement(c.a,null):N.hasOwnProperty("id")?r.a.createElement("button",{type:"button",className:"btn btn-primary mpesabtn",onClick:function(e){location.href="".concat(l.d,"exams/modules")}},"Confirm Payment "):r.a.createElement("button",{type:"submit",className:"btn btn-primary mpesabtn"},"Pay")))))))))))}}.call(this,a(57))}}]);