(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{53:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return t.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")}},55:function(t,e,r){"use strict";r.r(e),function(t){var n=r(0),a=r.n(n),o=r(6),c=r(52),i=(r(53),r(14)),u=r(22),l=r(56);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(e){var r=this,m=Object(u.b)(),d=Object(u.c)((function(t){return t.academy.homeVideos})),y=f(Object(n.useState)(!d||d.length<=0),2),b=y[0],p=y[1],h=f(Object(n.useState)(!0),2),v=(h[0],h[1],f(Object(n.useState)(""),2)),g=(v[0],v[1],f(Object(n.useState)(""),2));g[0],g[1];Object(n.useEffect)((function(t){(!d||d.length<=0)&&j()}),[]);var j=function(){t.ajax({url:"".concat(o.a,"/academy/video"),method:"get",headers:{appkey:"ELE-2020-XCZ3"},dataType:"json",error:function(t,e,r){p(!1)}.bind(r),success:function(t){m({type:i.a,payload:t}),p(!1)}.bind(r)})};return a.a.createElement(a.a.Fragment,null,b?a.a.createElement(c.a,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"h3 mb-3"},"Farm Kenya Academy .."),a.a.createElement("div",{className:"row"},d.map((function(t){return a.a.createElement("div",{className:"col-md-3"},a.a.createElement(l.a,s({},e,{video:t})))})))))}}.call(this,r(51))},56:function(t,e,r){"use strict";(function(t){var n=r(0),a=r.n(n),o=r(21),c=r(53),i=r(6);r(14);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.a=function(e){var r=this,l=u(Object(n.useState)(!0),2),s=l[0],f=l[1],m=u(Object(n.useState)({}),2),d=m[0],y=m[1],b=u(Object(n.useState)({}),2),p=b[0],h=b[1];Object(n.useEffect)((function(t){y(e.video),f(!1),v(e.video.videoURL)}),[e.video]);var v=function(e){t.ajax({url:"".concat(i.a,"/academy/rumble/search"),data:{video_id:e},method:"get",dataType:"json",error:function(t,e,r){}.bind(r),success:function(t){h(t)}.bind(r)})};return a.a.createElement(a.a.Fragment,null,s?"":a.a.createElement("div",{className:"card"},a.a.createElement(o.b,{to:{pathname:"/academy/".concat(d.id,"/").concat(Object(c.a)(d.title)),state:{video:d,videoData:p}}},a.a.createElement("img",{className:"card-img-top",src:p.hasOwnProperty("thumbnail")?p.thumbnail:"https://img.youtube.com/vi/M4pf76QFY1s/default.jpg",alt:"Unsplash"})),a.a.createElement("div",{className:"card-header"},a.a.createElement("h5",{className:"card-title mb-0"},d.title))))}}).call(this,r(51))}}]);