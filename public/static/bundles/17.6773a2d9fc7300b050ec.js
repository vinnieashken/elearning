(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/react-bootstrap/cjs/ElementChildren.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ElementChildren.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.map = map;\nexports.forEach = forEach;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n/**\n * Iterates through children that are typically specified as `props.children`,\n * but only maps over children that are \"valid elements\".\n *\n * The mapFunction provided index will be normalised to the components mapped,\n * so an invalid component would not increase the index.\n *\n */\nfunction map(children, func) {\n  var index = 0;\n  return _react.default.Children.map(children, function (child) {\n    return _react.default.isValidElement(child) ? func(child, index++) : child;\n  });\n}\n/**\n * Iterates through children that are \"valid elements\".\n *\n * The provided forEachFunc(child, index) will be called for each\n * leaf child with the index reflecting the position relative to \"valid components\".\n */\n\n\nfunction forEach(children, func) {\n  var index = 0;\n\n  _react.default.Children.forEach(children, function (child) {\n    if (_react.default.isValidElement(child)) func(child, index++);\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/react-bootstrap/cjs/ElementChildren.js?");

/***/ }),

/***/ "./resources/app/components/payment.jsx":
/*!**********************************************!*\
  !*** ./resources/app/components/payment.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./resources/app/common/constants.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/dist/index.js\");\n/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/loading */ \"./resources/app/common/loading.jsx\");\n/* harmony import */ var react_bootstrap_cjs_ElementChildren__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/cjs/ElementChildren */ \"./node_modules/react-bootstrap/cjs/ElementChildren.js\");\n/* harmony import */ var react_bootstrap_cjs_ElementChildren__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_cjs_ElementChildren__WEBPACK_IMPORTED_MODULE_4__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _this = this;\n\n  var oldState = props.history.location.state;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(typeof oldState !== \"undefined\" && oldState.hasOwnProperty('plan') ? oldState.plan : {}),\n      _useState2 = _slicedToArray(_useState, 2),\n      plan = _useState2[0],\n      setPlan = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      subscriptions = _useState4[0],\n      setSubscriptions = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      publishers = _useState6[0],\n      setPublishers = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState8 = _slicedToArray(_useState7, 2),\n      payment = _useState8[0],\n      setPayment = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      processing = _useState10[0],\n      setProcessing = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState12 = _slicedToArray(_useState11, 2),\n      loading = _useState12[0],\n      setLoading = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState14 = _slicedToArray(_useState13, 2),\n      message = _useState14[0],\n      setMessage = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState16 = _slicedToArray(_useState15, 2),\n      messageType = _useState16[0],\n      setMessageType = _useState16[1];\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState18 = _slicedToArray(_useState17, 2),\n      response = _useState18[0],\n      setResponse = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState20 = _slicedToArray(_useState19, 2),\n      selectedPackage = _useState20[0],\n      setPackage = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState22 = _slicedToArray(_useState21, 2),\n      selectedPublishers = _useState22[0],\n      setSelectedPublishers = _useState22[1];\n\n  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(50),\n      _useState24 = _slicedToArray(_useState23, 2),\n      students = _useState24[0],\n      setStudents = _useState24[1];\n\n  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState26 = _slicedToArray(_useState25, 2),\n      cost = _useState26[0],\n      setCost = _useState26[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(props);\n    getSubscriptions();\n  }, []);\n\n  var getSubscriptions = function getSubscriptions() {\n    var url = plan.id !== 4 ? \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/payments/subscriptions\") : \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/payments/institutions/subscriptions\"); // const url = `${API}/payments/subscriptions`;\n\n    $.ajax({\n      url: url,\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. (\".concat(xhr.status, \")\");\n\n        try {\n          response = JSON.parse(xhr['responseText'])['message'];\n        } catch (e) {}\n\n        setLoading(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setSubscriptions(res);\n        setLoading(parseInt(plan.id) !== 4);\n        var selectedPlan = res.filter(function (el) {\n          return el.id === parseInt(plan.id);\n        });\n        setCost(plan.id === 4 ? plan.cost : 0);\n        setPackage(selectedPlan.length > 0 ? selectedPlan[0] : {});\n        if (plan.id !== 4) getPublishers();\n      }.bind(_this)\n    });\n  };\n\n  var getPublishers = function getPublishers() {\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/publishers/list\"),\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. (\".concat(xhr.status, \")\");\n\n        try {\n          response = JSON.parse(xhr['responseText'])['message'];\n        } catch (e) {}\n\n        setLoading(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setPublishers(res);\n        setLoading(false);\n      }.bind(_this)\n    });\n  };\n\n  var handleChanged = function handleChanged(e) {\n    var package_id = $(\"input[name=\\\"package_id\\\"]:checked\").val();\n    var selectedPackage = subscriptions.filter(function (el) {\n      return el.id === parseInt(package_id);\n    })[0];\n\n    if (plan.id !== 4) {\n      setPackage(selectedPackage);\n      setCost(selectedPackage['cost'] * selectedPublishers.length);\n      setPayment({});\n    } else {\n      setCost(selectedPackage['cost'] * Math.ceil($(\"input[name=\\\"students\\\"]\").val() / 50));\n    }\n  };\n\n  var handleStudentsChanged = function handleStudentsChanged(e) {\n    var noOfStudents = $(\"input[name=\\\"students\\\"]\").val();\n    setStudents(noOfStudents);\n    setCost(selectedPackage['cost'] * Math.ceil(noOfStudents / 50));\n  };\n\n  var handlePublisherChanged = function handlePublisherChanged(e) {\n    var sel = [];\n    $.each($(\"input[name='publisher_id']:checked\"), function () {\n      var _this2 = this;\n\n      var selpub = publishers.filter(function (el) {\n        return el.institution_id === parseInt($(_this2).val());\n      })[0];\n      sel.push(selpub);\n    });\n    setSelectedPublishers(sel);\n    setCost(selectedPackage['cost'] * sel.length);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setProcessing(true);\n    setMessage(false);\n    var package_id = $(\"input[name=\\\"package_id\\\"]:checked\").val();\n    var formData = new FormData($('form#sub')[0]);\n    formData.append('user_id', props.user.id);\n    formData.append('package_id', package_id);\n\n    if (plan.id !== 4) {\n      selectedPublishers.forEach(function (el) {\n        formData.append('publishers[]', el.id);\n      });\n    }\n\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/payments/subscribe\"),\n      data: formData,\n      processData: false,\n      contentType: false,\n      method: 'POST',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. (\".concat(xhr.status, \")\");\n\n        try {\n          response = JSON.parse(xhr['responseText'])['message'];\n        } catch (e) {}\n\n        setProcessing(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setPayment(res);\n        setProcessing(false);\n      }.bind(_this)\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"sliders\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"full-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel slide\",\n    id: \"light-slider\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"carousel-area\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel slide\",\n    \"data-ride\": \"carousel\",\n    id: \"carousel-slider\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel-inner smaller\",\n    role: \"listbox\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel-item active\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: \"\",\n    src: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/new/img/rendered.png\"),\n    style: {\n      height: '76px',\n      objectFit: 'cover'\n    }\n  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"about\",\n    className: \"section-padding payment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mx-auto mt-5 col-md-5 col-sm-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    id: \"sub\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card weekly\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"card-header text-center\"\n  }, \"COMPLETE PAYMENT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/mpesa.png\"),\n    className: \"w-75 text-center\",\n    alt: _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"APPNAME\"]\n  }), message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: messageType,\n    role: \"alert\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert-message\"\n  }, response))) : '', loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-control-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Mobile Number\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Enter Mobile Number\",\n    name: \"mobile\",\n    required: true,\n    className: \"w-100 mb-4 loginput\",\n    onChange: handleChanged\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-control-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Packages \", plan.id !== 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"(Per Publisher)\") : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, subscriptions.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-4 col-sm-6 \"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"custom-control custom-checkbox\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"radio\",\n      className: \"custom-control-input\",\n      value: el.id,\n      onChange: handleChanged,\n      name: \"package_id\",\n      id: \"\".concat(el.id),\n      defaultChecked: parseInt(plan.id) === parseInt(el.id),\n      required: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"custom-control-label form-control-label text-muted\",\n      htmlFor: \"\".concat(el.id)\n    }, el.subscription, \" (\", el.cost, \"/=)\")));\n  }))), plan.id === 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-control-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Number Of Students\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    step: 1,\n    placeholder: \"Enter Number Of Students\",\n    name: \"students\",\n    required: true,\n    className: \"w-100 mb-4 loginput\",\n    defaultValue: students,\n    onChange: handleStudentsChanged\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-control-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Publishers\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, publishers.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-4 col-sm-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"custom-control custom-checkbox\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"checkbox\",\n      className: \"custom-control-input\",\n      value: el.institution_id,\n      onChange: handlePublisherChanged,\n      name: \"publisher_id\",\n      id: \"\".concat(el.institution_id)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"custom-control-label form-control-label text-muted\",\n      htmlFor: \"\".concat(el.institution_id)\n    }, el.name)));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-control-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Total Cost:\"), \" \", cost)), payment.hasOwnProperty('id') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Click \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n    onClick: function onClick(event) {\n      location.href = \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/modules\");\n    }\n  }, \"Confirm Payment\"), \" after paying\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"mt-5 mb-5\",\n    style: {\n      display: 'block',\n      margin: 'auto',\n      width: '70%'\n    },\n    src: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUBLIC_URL\"], \"/static/app/images/lipanampesa.jpg\"),\n    alt: \"Lipa Na M-Pesa\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Pay via MPESA\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ol\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Go to M-PESA on your phone.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Select Lipa na MPESA.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" Pay Bill.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Enter Business Number:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      fontSize: \"20px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"505604\")), \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Enter Account Number:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      fontSize: '20px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, payment.id)), \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" Enter the Amount. i.e\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      fontSize: \"20px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Ksh.\", payment.amount))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Enter your M-PESA PIN and Send.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"You will receive a confirmation via SMS.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Get Us Payment Ref No.\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-control-label\"\n  }, \"Receipt Number\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"M-Pesa Receipt Number\",\n    className: \"w-100 mb-4 loginput\"\n  }))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center mt-2\"\n  }, processing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_2__[\"ClipLoader\"], null) : payment.hasOwnProperty('id') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-primary mpesabtn\",\n    onClick: function onClick(event) {\n      location.href = \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/modules\");\n    }\n  }, \"Confirm Payment \") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary mpesabtn\"\n  }, \"Pay\")))))))))));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./resources/app/components/payment.jsx?");

/***/ })

}]);