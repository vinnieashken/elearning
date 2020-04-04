(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/app/components/subscriptions.jsx":
/*!****************************************************!*\
  !*** ./resources/app/components/subscriptions.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./resources/app/common/constants.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _this = this;\n\n  var oldState = props.history.location.state;\n  var next = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(typeof oldState !== \"undefined\" && oldState.hasOwnProperty('next') ? oldState.next : \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"exams/modules\"));\n  dispatch({\n    type: _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"SUBSCRIPTION_DELETED\"],\n    payload: next\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      subscriptions = _useState2[0],\n      setSubscriptions = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      payment = _useState4[0],\n      setPayment = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      processing = _useState6[0],\n      setProcessing = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      loading = _useState8[0],\n      setLoading = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      message = _useState10[0],\n      setMessage = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState12 = _slicedToArray(_useState11, 2),\n      messageType = _useState12[0],\n      setMessageType = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState14 = _slicedToArray(_useState13, 2),\n      response = _useState14[0],\n      setResponse = _useState14[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getSubscriptions();\n  }, []);\n\n  var getSubscriptions = function getSubscriptions() {\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/payments/subscriptions\"),\n      method: 'GET',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. \";\n        if (xhr.status === 405) response = \"Sorry an error has occurred. We are working on it. (405)\";else if (xhr.hasOwnProperty('responseText')) response = JSON.parse(xhr['responseText'])['message'];\n        setLoading(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setSubscriptions(res);\n        setLoading(false);\n      }.bind(_this)\n    });\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setProcessing(true);\n    setMessage(false);\n    var formData = new FormData($('form#sub')[0]);\n    formData.append('user_id', props.user.id);\n    formData.append('package_id', subscriptions[0]['id']);\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"API\"], \"/payments/subscribe\"),\n      data: formData,\n      processData: false,\n      contentType: false,\n      method: 'POST',\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. \".concat(xhr.status);\n        setProcessing(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n      }.bind(_this),\n      success: function (res) {\n        setPayment(res);\n        setProcessing(false);\n      }.bind(_this)\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"about\",\n    className: \"section-padding mt-5 pricing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container mt-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"section-title wow fadeInDown animated mt-5\",\n    \"data-wow-delay\": \"0.3s\"\n  }, \"Our Membership Plans\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, subscriptions.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-lg-4 col-md-6 col-sm-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card daily\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n      className: \"card-header text-center\"\n    }, el.subscription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n      className: \"card-title text-center\"\n    }, \"Ksh. \", el.cost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n      className: \"card-title text-center\"\n    }, \"Also Recieve\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"card-text text-center\"\n    }, \"- Complimentary e-paper.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"- Regular email bulletins.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"text-center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      to: props.user.hasOwnProperty('id') ? \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"subscription/payment\") : {\n        pathname: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"signin\"),\n        state: {\n          next: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"], \"subscription/payment\")\n        }\n      },\n      className: \"btn btn-primary\"\n    }, \"Select Plan\")))));\n  })))));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./resources/app/components/subscriptions.jsx?");

/***/ })

}]);