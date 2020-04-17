(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/app/components/exam.jsx":
/*!*******************************************!*\
  !*** ./resources/app/components/exam.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./resources/app/common/constants.js\");\n/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/loading */ \"./resources/app/common/loading.jsx\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar images = [\"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/math.png\"), \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/eng.png\"), \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/hist.png\"), \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/cre.png\"), \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/chem.png\"), \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/cre.png\")];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      exam = _useState2[0],\n      setExam = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      userAnswers = _useState4[0],\n      setUserAnswers = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      showAns = _useState6[0],\n      setShowAns = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      processing = _useState8[0],\n      setProcessing = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState10 = _slicedToArray(_useState9, 2),\n      loading = _useState10[0],\n      setLoading = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState12 = _slicedToArray(_useState11, 2),\n      message = _useState12[0],\n      setMessage = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState14 = _slicedToArray(_useState13, 2),\n      messageType = _useState14[0],\n      setMessageType = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState16 = _slicedToArray(_useState15, 2),\n      response = _useState16[0],\n      setResponse = _useState16[1];\n\n  var subjects = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.subjects;\n  });\n  var pathname = \"\".concat(window.origin).concat(props.history.location.pathname);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getExam();\n  }, []);\n\n  var getExam = function getExam() {\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/questions/module/\").concat(props.match.params.exam, \"?userid=2\"),\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = JSON.parse(xhr['responseText'])['message'];\n        if (xhr.status === 405) response = \"Sorry an error has occurred. We are working on it. (405)\";\n        setLoading(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setExam(res);\n        setLoading(res.done);\n        if (res.done) getUserAnswers();\n      }.bind(_this)\n    });\n  };\n\n  var getUserAnswers = function getUserAnswers() {\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/modules/\").concat(props.match.params.exam, \"/user/\").concat(props.user.id),\n      // url: `${API}/subjects/class/{class_id}`,\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. (\".concat(xhr.status, \")\");\n        setLoading(false); // setMessage(true);\n\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setUserAnswers(res);\n        setShowAns(res.length > 0);\n        setLoading(false);\n      }.bind(_this)\n    });\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setProcessing(true);\n    setMessage(false);\n    var marks = 0;\n    var answers = [];\n    exam.questions.forEach(function (el) {\n      var ans = $(\"input[name=\\\"\".concat(el.id, \"\\\"]:checked\")).val();\n\n      if (parseInt(el.answer) === parseInt(ans)) {\n        marks += 1;\n      }\n\n      answers.push({\n        \"questionid\": el.id,\n        \"optionid\": parseInt(ans)\n      });\n    });\n    var data = {\n      \"moduleid\": props.match.params.exam,\n      \"userid\": props.user.id,\n      \"answers\": answers\n    };\n    marks = marks / exam.length * 100;\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/questions/module/user/answers\"),\n      data: data,\n      method: 'POST',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. \".concat(xhr.status);\n        setProcessing(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        var score = JSON.parse(res);\n        setShowAns(true);\n        setProcessing(false);\n        setMessage(true);\n        setMessageType('alert alert-success');\n        setResponse( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Congratulations, you have scored \", score['Score'], \" / \", score['Questions'], \". \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n          to: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/modules\")\n        }, \"You can do another paper here\")));\n        $(\"html, body\").animate({\n          scrollTop: 0\n        }, 200);\n      }.bind(_this)\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"about\",\n    className: \"section-padding mt-md-5 exam\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mt-md-5\"\n  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"canonical\",\n    href: pathname\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"keywords\",\n    content: \"Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili, \".concat(exam.name)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"author\",\n    content: \"Standard Group\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: \"Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more \".concat(exam.name)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"twitter:title\",\n    content: \"Tutor-Soma Tu : \".concat(exam.name, \" : The Standard\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"twitter:description\",\n    content: \"Tutor-Soma Tu - \".concat(exam.name, \" \")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"twitter:url\",\n    content: pathname\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"og:title\",\n    content: \"Tutor-Soma Tu : \".concat(exam.name, \" : The Standard \")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"og:description\",\n    content: \"Tutor-Soma Tu - \".concat(exam.name, \" \")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"og:url\",\n    content: pathname\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"section-title wow fadeInDown animated mt-5\",\n    \"data-wow-delay\": \"0.3s\"\n  }, \"\".concat(exam.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-4 mt-md-5\",\n    style: {\n      display: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sticky-top pt-md-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pt-5 mt-2 d-none d-md-block d-lg-block\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"table mb-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"This Paper contains \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"font\", {\n    className: \"bold\"\n  }, \" 100\"), \" Questions to be completed within \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"font\", {\n    className: \"bold\"\n  }, \"1hr 20min\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\",\n    className: \"\"\n  }, \"Start Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10:00 am\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"Time Taken\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"25 min\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"Time Remaining\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"45 min\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"Questions Attempted\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"table mb-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"text-center\"\n  }, \"Questions Progress \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"font\", {\n    \"class\": \"donetxt\"\n  }, \"(Red Attempted)\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"done\"\n  }, \"2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"4\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"6\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"done\"\n  }, \"32\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"done\"\n  }, \"17\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"row\"\n  }, \"9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"12\")))))), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: messageType,\n    role: \"alert\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert-message\"\n  }, response))))) : '', exam.questions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, exam.questions.map(function (el, index) {\n    var ansArray = userAnswers.filter(function (ans) {\n      return el.id === ans.question_id;\n    });\n    var answer = ansArray.length > 0 ? ansArray[0] : {};\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card examcard my-4 mt-md-0 w-100\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"bg-white float-right\",\n      style: {\n        display: \"\".concat(exam.done ? 'block' : 'none')\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"text-center p-1 marks\"\n    }, \"Mrks\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), el.answer === answer.user_option ? 1 : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"list-group list-group-flush\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"list-group-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      dangerouslySetInnerHTML: {\n        __html: \"<b>\".concat(index + 1, \"</b>. \").concat(el.question)\n      }\n    })), el.options.map(function (ans) {\n      var isAns = parseInt(el.answer) === parseInt(ans.id);\n      var selected = answer.hasOwnProperty('user_option') && answer.user_option === ans.id;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-group-item ml-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"radio\",\n        id: \"\".concat(ans.id),\n        required: true,\n        defaultChecked: selected,\n        disabled: answer.hasOwnProperty('user_option'),\n        value: ans.id,\n        name: el.id\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"\".concat(ans.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        dangerouslySetInnerHTML: {\n          __html: \"\".concat(ans.option)\n        },\n        className: selected ? isAns ? 'answer' : 'wrong-answer' : ''\n      }), isAns && showAns ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"fa fa-check alert-success\"\n      }) : '')));\n    })))));\n  }), processing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__[\"ClipLoader\"], null) : showAns ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"text-center float-right btn btn-success btn-rounded\"\n  }, \"Submit\")))) : message ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"rounded\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert alert-warning\",\n    role: \"alert\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert-message\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Sorry, we were unable to get questions for this paper \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/modules\")\n  }, \"You can select another paper here\")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mt-5 text-center container\"\n  }, subjects.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"section-title wow fadeInDown animated text-center my-4\",\n    \"data-wow-delay\": \"0.3s\"\n  }, \"You May Also Like\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, subjects.sort(function () {\n    return 0.5 - Math.random(0, 3);\n  }).slice(0, 4).map(function (el, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-lg-3 col-md-6 col-xs-6 col-sm-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"featured-box-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"featured-icon\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      to: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/subjects/\").concat(el.id, \"/modules\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: images[index],\n      className: \"icons\",\n      alt: _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"APPNAME\"]\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"featured-content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      to: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/subjects/\").concat(el.id, \"/modules\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, el.subject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Paper 1 Grade 8\")))));\n  }))) : '')))))));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./resources/app/components/exam.jsx?");

/***/ })

}]);