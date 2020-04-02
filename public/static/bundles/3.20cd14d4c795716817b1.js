(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/app/common/loading.jsx":
/*!******************************************!*\
  !*** ./resources/app/common/loading.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loading; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/dist/index.js\");\n\n\nfunction Loading() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_1__[\"ClipLoader\"], {\n    color: '#cf2027'\n  }));\n}\n\n//# sourceURL=webpack:///./resources/app/common/loading.jsx?");

/***/ }),

/***/ "./resources/app/components/menu.jsx":
/*!*******************************************!*\
  !*** ./resources/app/components/menu.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/loading */ \"./resources/app/common/loading.jsx\");\n/* harmony import */ var _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/loadingWhite */ \"./resources/app/common/loadingWhite.jsx\");\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ \"./resources/app/common/constants.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar Home = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./home */ \"./resources/app/components/home.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Profile = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./profile */ \"./resources/app/components/profile.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Exams = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./exams */ \"./resources/app/components/exams.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Exam = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./exam */ \"./resources/app/components/exam.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar CompletedExams = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./completedExams */ \"./resources/app/components/completedExams.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Classes = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./classes */ \"./resources/app/components/classes.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Subjects = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./subjects */ \"./resources/app/components/subjects.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Modules = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./modules */ \"./resources/app/components/modules.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar Subscription = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./subscription */ \"./resources/app/components/subscription.jsx\"));\n  },\n  loading: _common_loadingWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _this = this;\n\n  var User = localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : {};\n  User['subscription'] = {};\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState2 = _slicedToArray(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      percentage = _useState4[0],\n      setPercentage = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      message = _useState6[0],\n      setMessage = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      messageType = _useState8[0],\n      setMessageType = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState10 = _slicedToArray(_useState9, 2),\n      response = _useState10[0],\n      setResponse = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(User),\n      _useState12 = _slicedToArray(_useState11, 2),\n      user = _useState12[0],\n      setUser = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState14 = _slicedToArray(_useState13, 2),\n      sideBar = _useState14[0],\n      setSideBar = _useState14[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function (e) {\n    if (!user.hasOwnProperty('name')) {\n      debugger;\n      props.history.push({\n        pathname: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_5__[\"ENV\"], \"signin\"),\n        state: {\n          next: props.location.pathname\n        }\n      });\n    } else {\n      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n        setSideBar(false);\n      }\n\n      getSubscription();\n      getModules();\n    }\n  }, []);\n\n  var getModules = function getModules() {\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_5__[\"API\"], \"/modules/user/\").concat(user.id),\n      // url: `${API}/subjects/class/{class_id}`,\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = JSON.parse(xhr['responseText'])['message'];\n        if (xhr.status === 405) response = \"Sorry an error has occurred. We are working on it. (405)\";\n        setLoading(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        var percentage = 0;\n        res.forEach(function (el) {\n          percentage += parseFloat(el.percentage);\n        });\n        var marks = parseFloat(percentage / res.length).toFixed(2);\n        setPercentage(isNaN(marks) ? 0 : marks);\n      }.bind(_this)\n    });\n  };\n\n  var getSubscription = function getSubscription() {\n    var user_ = user;\n    user['subscription'] = {};\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_5__[\"API\"], \"/payments/subscription/user/\").concat(user.id),\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. (\".concat(xhr.status, \")\");\n        setLoading(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n        setUser(user_);\n      }.bind(_this),\n      success: function (res) {\n        var user_ = user;\n        user['subscription'] = res;\n        setUser(user_);\n        setLoading(false);\n      }.bind(_this)\n    });\n  };\n\n  var toggleSideBar = function toggleSideBar(e) {\n    $('#mySidenav').toggleClass('toggled');\n  };\n\n  var isActive = function isActive(path) {\n    var exist = props.location.pathname.slice(-path.length) === path;\n    return exist ? 'active' : '';\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    id: \"header-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-expand-md bg-white fixed-top scrolling-navbar indigo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"w-100 d-block d-lg-none d-md-none mr-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"nav-link\",\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      fontSize: \"20px\",\n      cursor: \"pointer\"\n    },\n    className: \"float-right mr-3 opennav\"\n  }, \"\\u2630\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_5__[\"PUBLIC_URL\"], \"/static/app/images/logo.png\"),\n    className: \"w-25 float-left\",\n    alt: _common_constants__WEBPACK_IMPORTED_MODULE_5__[\"NAME\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbar\",\n    \"aria-controls\": \"navbarTogglerDemo02\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"mySidenav\",\n    className: \"sidenav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    className: \"closebtn border-0\"\n  }, \"\\xD7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"HOME\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \" dropdown-toggle\",\n    \"data-toggle\": \"dropdown\"\n  }, \"CLASSES\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"caret\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"dropdown-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \" dropdown-toggle\",\n    \"data-toggle\": \"dropdown\"\n  }, \"SUBJECTS\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"caret\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"dropdown-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"ENGLISH\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"KCPE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"KCSE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"LOGIN\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"REGISTER\")))));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./resources/app/components/menu.jsx?");

/***/ })

}]);