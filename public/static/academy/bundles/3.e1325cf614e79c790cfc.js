(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")}},54:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),c=a(21),l=a(52),s=a(6);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(t){var a=this,i=o(Object(n.useState)(!0),2),m=i[0],u=i[1],d=o(Object(n.useState)({}),2),b=d[0],p=d[1],g=o(Object(n.useState)({}),2),f=g[0],y=g[1];Object(n.useEffect)((function(e){p(t.video),u(!1),h(t.video.videoURL)}),[t.video]);var h=function(t){e.ajax({url:"".concat(s.a,"/academy/rumble/search"),data:{video_id:t},method:"get",dataType:"json",error:function(e,t,a){}.bind(a),success:function(e){y(e)}.bind(a)})};return r.a.createElement(r.a.Fragment,null,m?"":r.a.createElement("div",{className:"card border-0"},r.a.createElement("button",{type:"button",className:"btn btn-danger btn-icon-only rounded-circle round-design",onClick:function(e){t.history.push({pathname:"/academy/".concat(b.id,"/").concat(Object(l.a)(b.title)),state:{video:b,videoData:f}})}},r.a.createElement("span",{className:"btn-inner--icon"},r.a.createElement("i",{className:"fas fa-play"}))),r.a.createElement(c.b,{to:{pathname:"/academy/".concat(b.id,"/").concat(Object(l.a)(b.title)),state:{video:b,videoData:f}}},r.a.createElement("img",{src:f.hasOwnProperty("thumbnail")?f.thumbnail:"".concat(s.g,"/static/academy/assets/images/lazy.jpg"),alt:b.title,className:"card-img-top"})),r.a.createElement("div",{className:"card-body text-left"},r.a.createElement("h4",{className:"heading h6 mb-1"},r.a.createElement("span",{className:"d-block font-weight-800"},b.title)),r.a.createElement("div",{className:"d-block"},r.a.createElement("small",{className:"text-muted"},"Views 19.1K"),r.a.createElement("small",{className:"text-muted float-right"},"2 months Ago")),r.a.createElement("p",{className:"mt-2 text-success font-weight-800"},b.keywords.split(";").map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"far fa-arrow-alt-circle-right"})," ".concat(e," "))}))))))}}).call(this,a(51))},58:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),r=a.n(n),c=a(53),l=a(6),s=a(22),o=a(54);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(t){var a=this,u=void 0!==t.history.location.state?t.history.location.state:{},d=m(Object(n.useState)(!0),2),b=d[0],p=d[1],g=m(Object(n.useState)(!0),2),f=(g[0],g[1],m(Object(n.useState)(""),2)),y=(f[0],f[1],m(Object(n.useState)(""),2)),h=(y[0],y[1],Object(s.c)((function(e){return e.academy.homeVideos}))),v=m(Object(n.useState)(void 0!==u&&u.hasOwnProperty("video")?u.video:{}),2),E=v[0],N=v[1],w=m(Object(n.useState)(void 0!==u&&u.hasOwnProperty("videoData")?u.videoData:{}),2),x=w[0],j=w[1];Object(n.useEffect)((function(e){p(!0),j(t.history.location.state&&t.history.location.state.hasOwnProperty("videoData")?t.history.location.state.videoData:{}),N(t.history.location.state&&t.history.location.state.hasOwnProperty("video")?t.history.location.state.video:{}),x.hasOwnProperty("embed")?p(!1):O()}),[t.match.params.video]);var O=function(){e.ajax({url:"".concat(l.a,"/academy/video/").concat(t.match.params.video),method:"get",headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(e,t,a){}.bind(a),success:function(e){N(e),p(!1)}.bind(a)})};return r.a.createElement(r.a.Fragment,null,b?r.a.createElement(c.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"bg-secondary pt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"owl-stage-outer"},r.a.createElement("div",{className:"row d-flex my-2"},r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success text-uppercase badge-xlg"},r.a.createElement("strong",null,"Agriculture")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Livestock")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Crop")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase badge-xlg"},r.a.createElement("strong",null,"Pig Farming")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Farming in Nakuru")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Bee keeping")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase badge-xlg"},r.a.createElement("strong",null,"Farm Market")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Rice Farming")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Farm Machinery")),r.a.createElement("span",{className:"mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"},r.a.createElement("strong",null,"Poultry")))))),r.a.createElement("section",{className:"slice","data-delimiter":"1"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("div",{className:"card border-0"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-responsive-item",src:x.embed?x.embed:"https://rumble.com/embed/".concat(E.videoURL,"/?pub=tith"),allowFullScreen:!0})),r.a.createElement("div",{className:"card-body text-left"},r.a.createElement("h2",{className:"heading h2 mb-1"},r.a.createElement("span",{className:"d-block font-weight-800"},E.longtitle)),r.a.createElement("div",{className:"d-block"},r.a.createElement("small",{className:"text-muted"},"Views 19.1K"),r.a.createElement("small",{className:"text-muted"},"2 months Ago"),r.a.createElement("small",{className:"text-muted"}," | ",r.a.createElement("i",{className:"fa fa-thumbs-up"})," Like")),r.a.createElement("p",{className:"mt-2 text-success font-weight-800"},E.keywords.split(";").map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"far fa-arrow-alt-circle-right"})," ".concat(e," "))}))))))),r.a.createElement("div",{className:"row cols-xs-space cols-sm-space cols-md-space"},h.slice(0,16).map((function(e){return r.a.createElement("div",{className:"col-6 col-lg-3 mb-3"},r.a.createElement(o.a,i({},t,{video:e})))})))))))}}.call(this,a(51))}}]);