(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{264:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),r=a.n(n),c=a(11),l=a(12),o=a(16),s=a(17);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(t){var a=this,m=i(Object(n.useState)([]),2),u=m[0],d=m[1],b=i(Object(n.useState)(!1),2),f=b[0],p=b[1],E=i(Object(n.useState)(!1),2),v=E[0],h=E[1],y=i(Object(n.useState)(!1),2),w=y[0],N=y[1],g=i(Object(n.useState)(!1),2),S=g[0],j=g[1],O=i(Object(n.useState)(""),2),x=O[0],k=O[1],I=i(Object(n.useState)(""),2),A=I[0],T=I[1];Object(n.useEffect)((function(){q()}),[]);var q=function(){e.ajax({url:"".concat(c.a,"/questions/module/").concat(t.match.params.module),method:"GET",error:function(e,t,a){var n=JSON.parse(e.responseText).message;405===e.status&&(n="Sorry an error has occurred. We are working on it. (405)"),N(!1),j(!0),k("alert alert-danger"),T(n)}.bind(a),success:function(e){d(e),N(!1)}.bind(a)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-title"},r.a.createElement("div",{className:"row justify-content-between align-items-center"},r.a.createElement("div",{className:"col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0"},r.a.createElement("div",{className:"d-inline-block"},r.a.createElement("h5",{className:"h4 d-inline-block font-weight-400 mb-0 text-white"},"Examination Paper"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},w?r.a.createElement(l.a,null):r.a.createElement("div",{className:"card card-fluid"},r.a.createElement("div",{className:"card-header actions-toolbar"},r.a.createElement("div",{className:"row justify-content-between align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("h6",{className:"d-inline-block mb-0"},"Questions")))),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),h(!0),j(!1);var l=0,o=[];u.forEach((function(t){var a=e('input[name="'.concat(t.id,'"]:checked')).val();parseInt(t.answer)===parseInt(a)&&(l+=1),o.push({questionid:t.id,optionid:parseInt(a)})}));var i={moduleid:t.match.params.module,userid:t.user.id,answers:o};l=l/u.length*100,e.ajax({url:"".concat(c.a,"/questions/module/user/answers"),data:i,method:"POST",error:function(e,t,a){var n="Sorry an error has occurred. We are working on it. ".concat(e.status);h(!1),j(!0),k("alert alert-danger"),T(n)}.bind(a),success:function(t){var a=JSON.parse(t);p(!0),h(!1),j(!0),k("alert alert-success"),T(r.a.createElement("h4",null,"Congratulations, you have scored ",a.Percentage,"%. ",r.a.createElement(s.b,{to:"".concat(c.b,"/exams/modules")},"You can do another paper here"))),e("html, body").animate({scrollTop:0},200)}.bind(a)})},id:"exam"},S&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 ".concat(x),role:"alert"},r.a.createElement("div",{className:"alert-message"},A))),r.a.createElement("div",{className:"row"},u.map((function(e,t){return r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("p",null,r.a.createElement("label",{className:"form-control-label"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>".concat(t+1,"</b>. ").concat(e.question)}}))),e.options.map((function(t){var a=parseInt(e.answer)===parseInt(t.id);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:" ".concat(t.id)},r.a.createElement("input",{type:"radio",id:e.id,name:e.id,value:t.id,required:!0}),r.a.createElement("i",null," ".concat(t.option))," ",a&&f?r.a.createElement("span",{className:"fa fa-check alert-success"}):""),r.a.createElement("br",null))})))}))),r.a.createElement("div",{className:"text-right"},v?r.a.createElement(o.a,null):f?r.a.createElement(s.b,{to:"".concat(c.b,"/exams/modules"),className:"btn btn-sm btn-primary rounded-pill"},"Select New Paper"):r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary rounded-pill"},"Submit"))))))))}}.call(this,a(180))}}]);