(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{59:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),l=a.n(n),r=a(23),c=a(22),o=(a(60),a(65)),s=a.n(o),m=a(7);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(t){var a=this,o=void 0!==t.history.location.state?t.history.location.state:{},u=(Object(c.b)(),i(Object(n.useState)(localStorage.hasOwnProperty("ac_user")?JSON.parse(localStorage.getItem("ac_user")):{}),2)),d=u[0],p=(u[1],i(Object(n.useState)(void 0!==o&&o.hasOwnProperty("next")?o.next:"/academy"),2)),E=p[0],b=(p[1],i(Object(n.useState)({iso2:"ke",dialCode:"254",phone:""}),2)),f=b[0],y=b[1],h=i(Object(n.useState)(!1),2),N=h[0],v=h[1],g=i(Object(n.useState)(!0),2),S=g[0],w=g[1],x=i(Object(n.useState)(!0),2),O=x[0],j=x[1],P=i(Object(n.useState)(""),2),k=P[0],C=P[1],A=i(Object(n.useState)(""),2),M=A[0],_=A[1],T=i(Object(n.useState)([]),2),I=T[0],z=T[1],J=i(Object(n.useState)({}),2),L=J[0],D=J[1];Object(n.useEffect)((function(e){R()}),[]);var R=function(){e.ajax({url:"".concat(m.a,"/academy/plans"),method:"get",headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(e,t,a){w(!1)}.bind(a),success:function(e){z(e),w(!1)}.bind(a)})};return l.a.createElement("div",{className:"d-flex justify-content-center w-100"},l.a.createElement("div",{className:"container d-flex flex-column"},l.a.createElement("div",{className:"row h-100"},l.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100"},l.a.createElement("div",{className:"d-table-cell align-middle"},l.a.createElement("div",{className:"card mt-4"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"m-sm-4"},l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{className:"h2"},"TutorSoma Academy"),l.a.createElement("p",{className:"lead"},"Please subscribe to continue"))),l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:"https://tutorsoma.standardmedia.co.ke/static/app/images/mpesa.png",className:"w-75 text-center",alt:"Tutor-Soma"})),O?l.a.createElement("div",{className:"text-center mt-2"},l.a.createElement("div",{className:k,role:"alert"},l.a.createElement("div",{className:"alert-message"},M))):"",S?l.a.createElement("div",{className:"text-center"},l.a.createElement(r.a,null)):l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),v(!0),j(!1),e.ajax({url:"".concat(m.a,"/academy/subscription/subscribe"),method:"post",headers:{appkey:"ELE-2020-XCZ3"},data:{phone:"".concat(f.dialCode).concat(f.phone),plan_id:e('input[name="package_id"]:checked').val(),user_id:d.id},error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{n=JSON.parse(e.responseText).message}catch(e){}v(!1),j(!0),C("alert alert-danger"),_(n)}.bind(a),success:function(e){v(!1),D(e)}.bind(a)})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone Number"),l.a.createElement(s.a,{inputProps:{placeholder:"Your phone",className:"form-control form-control-sm",required:!0},intlTelOpts:{preferredCountries:["ke","tz","ug"],separateDialCode:!0},value:f,onChange:function(e){D({}),y(e)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"form-control-label"},l.a.createElement("strong",null,"Packages ")),l.a.createElement("div",{className:"row"},I.map((function(e){return l.a.createElement("div",{className:"col-md-4 col-sm-6 "},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"radio",onChange:function(e){D({})},className:"custom-control-input",name:"package_id",id:e.id,required:"true",defaultChecked:!1,value:e.id}),l.a.createElement("label",{className:"custom-control-label form-control-label text-muted",htmlFor:e.id},e.name," (",e.cost,"/=)")))})))),L.hasOwnProperty("id")?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h5",null,"Click ",l.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(e){e.preventDefault(),location.href="".concat(window.origin).concat(E)}},"Confirm Payment")," after paying")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("img",{className:"mt-5 mb-5",style:{display:"block",margin:"auto",width:"70%"},src:"".concat(m.g,"/static/app/images/lipanampesa.jpg"),alt:"Lipa Na M-Pesa"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("b",null,"Pay via MPESA"),l.a.createElement("br",null),l.a.createElement("ol",null,l.a.createElement("li",null,"Go to M-PESA on your phone."),l.a.createElement("li",null,"Select Lipa na MPESA."),l.a.createElement("li",null," Pay Bill."),l.a.createElement("li",null,"Enter Business Number:",l.a.createElement("span",{style:{fontSize:"20px"}},l.a.createElement("b",null,"505604")),"."),l.a.createElement("li",null,"Enter Account Number:",l.a.createElement("span",{style:{fontSize:"20px"}},l.a.createElement("b",null,L.payment_ref)),"."),l.a.createElement("li",null," Enter the Amount. i.e",l.a.createElement("span",{style:{fontSize:"20px"}},l.a.createElement("b",null,"Ksh.",L.amount))),l.a.createElement("li",null,"Enter your M-PESA PIN and Send."),l.a.createElement("li",null,"You will receive a confirmation via SMS."),l.a.createElement("li",null,"Get Us Payment Ref No.")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"form-control-label"},"Receipt Number"),l.a.createElement("input",{type:"text",placeholder:"M-Pesa Receipt Number",className:"w-100 mb-4 loginput"}))):"",l.a.createElement("div",{className:"text-center mt-2"},N?l.a.createElement(r.a,null):L.hasOwnProperty("id")?l.a.createElement("button",{type:"button",className:"btn btn-primary mpesabtn",onClick:function(e){location.href="".concat(window.origin).concat(E)}},"Confirm Payment "):l.a.createElement("button",{type:"submit",className:"btn btn-primary mpesabtn"},"Pay")))))))))))}}.call(this,a(51))}}]);