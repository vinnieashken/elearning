(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{292:function(e,t,a){"use strict";a.r(t),function(e){var n=a(1),r=a.n(n),l=a(8),c=a(24),o=a(61);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(t){var a=this,s=t.history.location.state,i=m(Object(n.useState)(void 0!==s&&s.hasOwnProperty("plan")?s.plan:{}),2),u=i[0],d=(i[1],m(Object(n.useState)([]),2)),p=d[0],b=d[1],E=m(Object(n.useState)({}),2),f=E[0],y=E[1],N=m(Object(n.useState)(!1),2),v=N[0],h=N[1],g=m(Object(n.useState)(!0),2),S=g[0],w=g[1],x=m(Object(n.useState)(!1),2),P=x[0],O=x[1],j=m(Object(n.useState)(""),2),k=j[0],A=j[1],M=m(Object(n.useState)(""),2),C=M[0],T=M[1];Object(n.useEffect)((function(){I()}),[]);var I=function(){e.ajax({url:"".concat(l.a,"/payments/subscriptions"),method:"GET",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}w(!1),O(!0),A("alert alert-danger"),T(n)}.bind(a),success:function(e){b(e),w(!1)}.bind(a)})},F=function(e){y({})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"about",className:"section-padding mt-5 payment"},r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mx-auto mt-5 col-md-5 col-sm-12"},r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),h(!0),O(!1);var r=e('input[name="package_id"]:checked').val(),c=new FormData(e("form#sub")[0]);c.append("user_id",t.user.id),c.append("package_id",r),e.ajax({url:"".concat(l.a,"/payments/subscribe"),data:c,processData:!1,contentType:!1,method:"POST",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}h(!1),O(!0),A("alert alert-danger"),T(n)}.bind(a),success:function(e){y(e),h(!1)}.bind(a)})},id:"sub"},r.a.createElement("div",{className:"card weekly"},r.a.createElement("h5",{className:"card-header text-center"},"COMPLETE PAYMENT"),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("img",{src:"".concat(l.g,"/static/app/images/mpesa.png"),className:"w-75 text-center",alt:l.b}),P?r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("div",{className:k,role:"alert"},r.a.createElement("div",{className:"alert-message"},C))):"",S?r.a.createElement(o.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},"Mobile Number"),r.a.createElement("input",{type:"text",placeholder:"Enter Mobile Number",name:"mobile",required:!0,className:"w-100 mb-4 loginput"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},"Packages"),r.a.createElement("div",{className:"row"},p.map((function(e){return r.a.createElement("div",{className:"col-md-4 col-sm-6"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"radio",className:"custom-control-input",value:e.id,onChange:F,name:"package_id",id:"".concat(e.id),defaultChecked:parseInt(u.id)===parseInt(e.id),required:!0}),r.a.createElement("label",{className:"custom-control-label form-control-label text-muted",htmlFor:"".concat(e.id)},e.subscription," (",e.cost,"/=)")))})))),f.hasOwnProperty("id")?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",null,"Click ",r.a.createElement("b",{onClick:function(e){location.href="".concat(l.d,"exams/modules")}},"Confirm Payment")," after paying")),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("img",{className:"mt-5 mb-5",style:{display:"block",margin:"auto",width:"70%"},src:"".concat(l.g,"/static/app/images/lipanampesa.jpg"),alt:"Lipa Na M-Pesa"})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("b",null,"Pay via MPESA"),r.a.createElement("br",null),r.a.createElement("ol",null,r.a.createElement("li",null,"Go to M-PESA on your phone."),r.a.createElement("li",null,"Select Lipa na MPESA."),r.a.createElement("li",null," Pay Bill."),r.a.createElement("li",null,"Enter Business Number:",r.a.createElement("span",{style:{fontSize:"20px"}},r.a.createElement("b",null,"505604")),"."),r.a.createElement("li",null,"Enter Account Number:",r.a.createElement("span",{style:{fontSize:"20px"}},r.a.createElement("b",null,f.id)),"."),r.a.createElement("li",null," Enter the Amount. i.e",r.a.createElement("span",{style:{fontSize:"20px"}},r.a.createElement("b",null,"Ksh.",f.amount))),r.a.createElement("li",null,"Enter your M-PESA PIN and Send."),r.a.createElement("li",null,"You will receive a confirmation via SMS."),r.a.createElement("li",null,"Get Us Payment Ref No.")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control-label"},"Receipt Number"),r.a.createElement("input",{type:"text",placeholder:"M-Pesa Receipt Number",className:"w-100 mb-4 loginput"}))):"",r.a.createElement("div",{className:"text-center mt-2"},v?r.a.createElement(c.a,null):f.hasOwnProperty("id")?r.a.createElement("button",{type:"button",className:"btn btn-primary mpesabtn",onClick:function(e){location.href="".concat(l.d,"exams/modules")}},"Confirm Payment "):r.a.createElement("button",{type:"submit",className:"btn btn-primary mpesabtn"},"Pay")))))))))))}}.call(this,a(60))}}]);