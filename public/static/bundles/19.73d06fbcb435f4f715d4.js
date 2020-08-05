(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{240:function(e,a,t){"use strict";t.r(a),function(e){var c=t(1),r=t.n(c),l=t(23),n=t(8),s=t(56),m=t.n(s),i=t(60),o=t(245),d=t.n(o);function p(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],c=!0,r=!1,l=void 0;try{for(var n,s=e[Symbol.iterator]();!(c=(n=s.next()).done)&&(t.push(n.value),!a||t.length!==a);c=!0);}catch(e){r=!0,l=e}finally{try{c||null==s.return||s.return()}finally{if(r)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return u(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,c=new Array(a);t<a;t++)c[t]=e[t];return c}"".concat(n.h,"/static/app/images/math.png"),"".concat(n.h,"/static/app/images/eng.png"),"".concat(n.h,"/static/app/images/hist.png"),"".concat(n.h,"/static/app/images/cre.png"),"".concat(n.h,"/static/app/images/chem.png"),"".concat(n.h,"/static/app/images/cre.png");var E={items:5,loop:!0,margin:10,rewind:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0};a.default=function(a){var t=this,s=p(Object(c.useState)([]),2),o=(s[0],s[1]),u=p(Object(c.useState)(!0),2),v=(u[0],u[1]),f=p(Object(c.useState)(!1),2),h=(f[0],f[1]),g=p(Object(c.useState)(""),2),N=(g[0],g[1]),y=p(Object(c.useState)(""),2),b=(y[0],y[1]),w="".concat(window.origin).concat(a.history.location.pathname);Object(c.useEffect)((function(){x()}),[]);var x=function(){e.ajax({url:"".concat(n.a,"/payments/subscriptions"),method:"GET",headers:{appkey:"ELE-2020-XCZ3"},error:function(e,a,t){var c="Sorry an error has occurred. We are working on it. (".concat(e.status,")");try{c=JSON.parse(e.responseText).message}catch(e){}v(!1),h(!0),N("alert alert-danger"),b(c)}.bind(t),success:function(e){o(e),v(!1)}.bind(t)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"application"},r.a.createElement(i.Helmet,null,r.a.createElement("link",{rel:"canonical",href:w}),r.a.createElement("meta",{name:"keywords",content:"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili"}),r.a.createElement("meta",{name:"author",content:"Standard Group"}),r.a.createElement("meta",{name:"description",content:"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more"}),r.a.createElement("meta",{property:"twitter:title",content:"Tutor-Soma Tu : Classes : The Standard"}),r.a.createElement("meta",{property:"twitter:description",content:"Tutor-Soma Tu - Classes "}),r.a.createElement("meta",{property:"twitter:url",content:w}),r.a.createElement("meta",{property:"og:title",content:"Tutor-Soma Tu : Classes : The Standard"}),r.a.createElement("meta",{property:"og:description",content:"Tutor-Soma Tu - Classes "}),r.a.createElement("meta",{property:"og:url",content:w}))),r.a.createElement("div",{id:"sliders"},r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{className:"carousel slide",id:"light-slider"},r.a.createElement("div",{id:"carousel-area"},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"carousel-slider"},r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{alt:"",src:"".concat(n.h,"/static/new/img/banner.jpg?").concat(m()().format("YMMDDHHmmss")),style:{objectFit:"cover",marginTop:"50px"}}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"carousel-caption text-left mt-5 mt-md-0"},r.a.createElement(l.b,{className:"btn btn-lg btn-common animated fadeInUp",to:{pathname:(a.user&&a.user.hasOwnProperty("id"),"".concat(n.d,"exams/modules"))}},"Get Started")))))))))),r.a.createElement("div",{className:"",id:""},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row m12"},r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("div",{className:"card shad"},r.a.createElement(l.b,{to:{pathname:"".concat(n.d,"exams/modules")}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex mb-2"},r.a.createElement("i",{className:"fa fa-book topicons mr-md-3 mr-1"}),r.a.createElement("div",{className:"card-title icontop"},"Revision ",r.a.createElement("br",null)," ",r.a.createElement("font",{class:"lighttext"},"Materials"))),r.a.createElement("p",{className:"card-text"}," We make learning fun, engaging and accessible for curious children all over Kenya"))))),r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("div",{className:"card shad"},r.a.createElement(l.b,{to:{pathname:"".concat(n.d,"exams/modules")}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex mb-2"},r.a.createElement("i",{className:"fa fa-book topicons mr-md-3 mr-1"}),r.a.createElement("div",{className:"card-title icontop"},"Quick ",r.a.createElement("br",null)," ",r.a.createElement("font",{class:"lighttext"},"Test"))),r.a.createElement("p",{className:"card-text"},"Take quick tests on the platform to help improve yourself."))))),r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("div",{className:"card shad"},r.a.createElement(l.b,{to:{pathname:"".concat(n.d,"exams/modules")}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex mb-2"},r.a.createElement("i",{className:"fa fa-book topicons mr-md-3 mr-1"}),r.a.createElement("div",{className:"card-title icontop"},"Prediction ",r.a.createElement("br",null)," ",r.a.createElement("font",{class:"lighttext"},"Questions"))),r.a.createElement("p",{className:"card-text"},"We provide predictive questions and answers on all primary school subjects"))))),r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("div",{className:"card shad"},r.a.createElement(l.b,{to:{pathname:"".concat(n.d,"exams/modules")}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex mb-2"},r.a.createElement("i",{className:"fa fa-book topicons mr-md-3 mr-1"}),r.a.createElement("div",{className:"card-title icontop"},"Past ",r.a.createElement("br",null)," ",r.a.createElement("font",{class:"lighttext"},"Papers"))),r.a.createElement("p",{className:"card-text"},"Get all the KCPE past papers from 2000 to date")))))))),r.a.createElement("div",{className:"",id:"feature"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-md-left text-center mx-md-5","data-wow-delay":"0.3s"},"Subjects"))),r.a.createElement("div",{className:"row"},a.subjects.slice(0,6).map((function(e){return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},r.a.createElement("div",{className:"card subj"},r.a.createElement(l.b,{to:{pathname:"".concat(n.d,"exams/subjects/").concat(e.subject,"/modules")}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("i",{className:"fa fa-star-o topicons mr-3 redicon"}),r.a.createElement("div",{className:"card-title bold"},e.subject)),r.a.createElement("p",{className:"card-text"},e.class)))))}))))),r.a.createElement("section",{className:"section-padding bg-light d-none d-md-block d-lg-block",id:"services"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"section-title wow fadeInDown animated text-md-left text-center mx-md-5","data-wow-delay":"0.3s"},"Important Notes"))),r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{options:E},r.a.createElement("div",null,r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:"https://p0.pxfuel.com/preview/364/649/267/asia-space-earth-dark.jpg",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title text-white"},"Stay Relevant in a Quickly Changing World"),r.a.createElement("p",{className:"card-text"},"Learn More")))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"We provide lifelong learning available any time, anywhere and at your pace."))))),r.a.createElement("div",null,r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:"https://secure.img1-fg.wfcdn.com/im/97073733/compr-r85/3254/32544386/plain-hourglass-sand-timer-60-minutes.jpg",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title text-white"},"Engaging exams with a timer"),r.a.createElement("p",{className:"card-text"},"Learn More")))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"Our exams come with a timer to help you improve your speed."))))),r.a.createElement("div",null,r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:"https://elearningindustry.com/wp-content/uploads/2017/02/advantages-and-disadvantages-of-elearning.jpg",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title text-white"},"Keep track of your performance"),r.a.createElement("p",{className:"card-text"},"Learn More")))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"We help you keep track of your performance and measure whether you are achieving your targets."))))),r.a.createElement("div",null,r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:"https://assets.entrepreneur.com/content/3x2/2000/20181119204233-GettyImages-140892148-edit.jpeg",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title text-white"},"Improve memorising capability"),r.a.createElement("p",{className:"card-text"},"Learn More")))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"Tutor Soma supplement your reading culture to help you easily recall what you have read."))))),r.a.createElement("div",null,r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:"https://previews.123rf.com/images/underverse/underverse1506/underverse150600640/41155719-avoid-word-on-notes-paper-with-cork-background-.jpg",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title text-white"},"Things to avoid when studying from home"),r.a.createElement("p",{className:"card-text"},"Learn More")))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"Don't wait for the last minute to start an assignment. Don't be distracted by social media and cellphone notification. Switch off the Television"))))),r.a.createElement("div",null,r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:"https://markmanson.net/wp-content/uploads/2020/03/6-books-to-help-you-grow-from-your-pain.jpg",className:"card-img",alt:"..."}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title text-white"},"A great place to grow"),r.a.createElement("p",{className:"card-text"},"Learn More")))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"TutorSoma helps you increase your understanding of a particular subject by focusing your learning for that discipline. Our exams are meant to help you improve on areas that need focus."))))))))))}}.call(this,t(57))}}]);