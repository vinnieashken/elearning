(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/app-old/common/constants.js":
/*!***********************************************!*\
  !*** ./resources/app-old/common/constants.js ***!
  \***********************************************/
/*! exports provided: APPNAME, environment, ISPRODUCTION, PUBLIC_URL, PORTAL, DIR, ENV, API, NEXT_CHANGED, LOADING_SUBSCRIPTION, SUBSCRIPTION_LOADED, SUBSCRIPTION_DELETED, SUBJECTS_LOADED, USER_UPDATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APPNAME\", function() { return APPNAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ISPRODUCTION\", function() { return ISPRODUCTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PUBLIC_URL\", function() { return PUBLIC_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PORTAL\", function() { return PORTAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIR\", function() { return DIR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENV\", function() { return ENV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API\", function() { return API; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEXT_CHANGED\", function() { return NEXT_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING_SUBSCRIPTION\", function() { return LOADING_SUBSCRIPTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUBSCRIPTION_LOADED\", function() { return SUBSCRIPTION_LOADED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUBSCRIPTION_DELETED\", function() { return SUBSCRIPTION_DELETED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUBJECTS_LOADED\", function() { return SUBJECTS_LOADED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_UPDATED\", function() { return USER_UPDATED; });\nvar APPNAME = \"Tutor-Soma\";\nvar ORIGIN = \"\".concat(window.origin);\nvar environment = \"development\";\nvar ISPRODUCTION = environment === \"production\";\nvar PUBLIC_URL = environment === \"production\" ? \"https://tutorsoma.standardmedia.co.ke\" : ORIGIN;\nvar PORTAL = \"\".concat(PUBLIC_URL, \"/app\");\nvar DIR = environment === \"production\" ? '/elearning/public/app' : '/app';\nvar ENV = environment === \"production\" ? '/' : '/'; // VAS\n\nvar API = \"https://tutorsoma.standardmedia.co.ke/api\";\nvar NEXT_CHANGED = \"NEXT_CHANGED\";\nvar LOADING_SUBSCRIPTION = \"LOADING_SUBSCRIPTION\";\nvar SUBSCRIPTION_LOADED = \"SUBSCRIPTION_LOADED\";\nvar SUBSCRIPTION_DELETED = \"SUBSCRIPTION_DELETED\";\nvar SUBJECTS_LOADED = \"SUBJECTS_LOADED\";\nvar USER_UPDATED = \"USER_UPDATED\";\n\n//# sourceURL=webpack:///./resources/app-old/common/constants.js?");

/***/ }),

/***/ "./resources/app/components/editQuestion.jsx":
/*!***************************************************!*\
  !*** ./resources/app/components/editQuestion.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ \"./resources/app/common/constants.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ \"./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js\");\n/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ \"./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js\");\n/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _app_old_common_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-old/common/constants */ \"./resources/app-old/common/constants.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nfunction Row(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function (e) {// console.log(props);\n  }, []);\n\n  var removeComponent = function removeComponent(e) {\n    react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.unmountComponentAtNode(document.getElementById(\"option-\".concat(props.rowKey)).parentNode);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"option-\".concat(props.rowKey)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group col-md-10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Option\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    name: \"option\",\n    id: \"ta-\".concat(props.rowKey),\n    className: \"form-control\",\n    defaultValue: props.option.hasOwnProperty('option') ? props.option.option : '',\n    onChange: function onChange(e) {\n      var thisOption = props.option;\n      thisOption['option'] = $(\"#ta-\".concat(props.rowKey))[0].value;\n      props.updateOptions({\n        key: props.rowKey,\n        data: thisOption\n      });\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"mt-5 float-right btn btn-sm btn-rounded btn-success\",\n    onClick: removeComponent.bind(this)\n  }, \"Delete Option\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _this = this;\n\n  var oldState = props.location.state;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(oldState.hasOwnProperty('question') ? oldState.question : {}),\n      _useState4 = _slicedToArray(_useState3, 1),\n      question = _useState4[0];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(oldState.hasOwnProperty('module') ? oldState.module : {}),\n      _useState6 = _slicedToArray(_useState5, 1),\n      module = _useState6[0];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      complete = _useState8[0],\n      setComplete = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(question.hasOwnProperty('options') && question.options.length > 0),\n      _useState10 = _slicedToArray(_useState9, 2),\n      loading = _useState10[0],\n      setLoading = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState12 = _slicedToArray(_useState11, 2),\n      processing = _useState12[0],\n      setProcessing = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState14 = _slicedToArray(_useState13, 2),\n      message = _useState14[0],\n      setMessage = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState16 = _slicedToArray(_useState15, 2),\n      messageType = _useState16[0],\n      setMessageType = _useState16[1];\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState18 = _slicedToArray(_useState17, 2),\n      response = _useState18[0],\n      setResponse = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState20 = _slicedToArray(_useState19, 2),\n      rowKey = _useState20[0],\n      setRowKey = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState22 = _slicedToArray(_useState21, 2),\n      correctAnswer = _useState22[0],\n      setCorrectAnswer = _useState22[1];\n\n  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(question.hasOwnProperty('question') ? question.question : ''),\n      _useState24 = _slicedToArray(_useState23, 2),\n      questionData = _useState24[0],\n      setQuestionData = _useState24[1];\n\n  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState26 = _slicedToArray(_useState25, 2),\n      options = _useState26[0],\n      setOptions = _useState26[1];\n\n  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState28 = _slicedToArray(_useState27, 2),\n      answerOptions = _useState28[0],\n      setAnswerOptions = _useState28[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function (e) {\n    $(\"[id^='option-']\").remove();\n\n    if (question.hasOwnProperty('options') && question.options.length > 0) {\n      if (question.hasOwnProperty('answer')) {\n        var answer = question.options.filter(function (el) {\n          return el.id === question.answer;\n        });\n        if (answer.length > 0) setCorrectAnswer({\n          label: answer[0].option,\n          value: question.answer\n        });\n      }\n\n      var allOptions = options;\n      allOptions[\"id-\".concat(question.options[0].id)] = question.options[0];\n      setOptions(allOptions);\n      if (question.options.length > 0) for (var i = 1; i < question.options.length; i++) {\n        addRow(question.options[i]);\n      }\n      setLoading(false);\n    }\n  }, [props.question]);\n\n  var addRow = function addRow(option) {\n    var element = document.createElement('div');\n    var key = rowKey + 1;\n    var keyToUse = \"\".concat(option.hasOwnProperty('id') ? \"id-\".concat(option.id) : key);\n    var allOptions = options;\n    allOptions[keyToUse] = option;\n    react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {\n      key: keyToUse,\n      rowKey: keyToUse,\n      option: option,\n      updateOptions: updateOptions\n    }), element);\n    $('#options').append(element);\n    setRowKey(key);\n    var ansOptions = [];\n\n    for (var items in options) {\n      ansOptions.push(options[items]);\n    }\n\n    setOptions(allOptions);\n    setAnswerOptions(ansOptions);\n  };\n\n  var updateOptions = function updateOptions(option) {\n    var allOptions = options;\n    allOptions[option['key']] = option['data'];\n    var ansOptions = [];\n\n    for (var items in options) {\n      ansOptions.push(options[items]);\n    }\n\n    setOptions(allOptions);\n    setAnswerOptions(ansOptions);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setMessage(false);\n    setProcessing(true);\n    var data = {\n      moduleid: module.id\n    };\n    data[\"questions\"] = [question.hasOwnProperty('id') ? {\n      \"id\": question.id,\n      \"module_id\": module.id,\n      \"question\": questionData,\n      \"answer\": correctAnswer.value,\n      \"options\": answerOptions.map(function (el) {\n        var data = {\n          \"question_id\": question.id,\n          \"option\": el.option\n        };\n        if (el.hasOwnProperty('id')) data['id'] = el.id;\n        return data;\n      })\n    } : {\n      \"question\": questionData,\n      \"options\": answerOptions.map(function (el) {\n        return el.option;\n      }),\n      \"answer\": correctAnswer.value\n    }];\n    console.log(data);\n    $.ajax({\n      url: \"\".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__[\"API\"], \"/institution/modules/questions/\").concat(question.hasOwnProperty('id') ? 'edit' : 'add'),\n      method: 'post',\n      data: data,\n      error: function (xhr, status, error) {\n        var response = \"Sorry an error has occurred. We are working on it. (\".concat(xhr.status, \")\");\n\n        try {\n          response = JSON.parse(xhr['responseText'])['message'];\n        } catch (e) {}\n\n        setProcessing(false);\n        setMessage(true);\n        setMessageType('alert alert-danger');\n        setResponse(response);\n        $(\"html, body\").animate({\n          scrollTop: 0\n        }, 200);\n      }.bind(_this),\n      success: function (res) {\n        props.history.push({\n          pathname: \"/exams/exam/edit/\".concat(module.id),\n          state: {\n            message: true,\n            message_type: 'alert alert-success',\n            response: \"Question updated successfully.\"\n          }\n        });\n      }.bind(_this)\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"sliders\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"full-width\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel slide\",\n    id: \"light-slider\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"carousel-area\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel slide\",\n    \"data-ride\": \"carousel\",\n    id: \"carousel-slider\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel-inner smaller\",\n    role: \"listbox\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"carousel-item active\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: \"\",\n    src: \"\".concat(_app_old_common_constants__WEBPACK_IMPORTED_MODULE_8__[\"PUBLIC_URL\"], \"/static/new/img/rendered.png\"),\n    style: {\n      height: '76px',\n      objectFit: 'cover'\n    }\n  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"about\",\n    className: \"section-padding exam\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: messageType,\n    role: \"alert\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert-message\"\n  }, response))))) : '', complete ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, module.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group col-md-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Question\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default.a,\n    data: questionData,\n    onInit: function onInit(editor) {\n      // You can store the \"editor\" and use when it is needed.\n      console.log('Editor is ready to use!', editor);\n    },\n    onChange: function onChange(event, editor) {\n      var data = editor.getData();\n      setQuestionData(data);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group col-md-10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Option \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    name: \"option\",\n    id: question.hasOwnProperty('options') && question.options.length > 0 ? \"id-\".concat(question.options[0].id) : 'id-0',\n    className: \"form-control\",\n    defaultValue: question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0].option : '',\n    onChange: function onChange(e) {\n      var id = question.hasOwnProperty('options') && question.options.length > 0 ? \"id-\".concat(question.options[0].id) : 'id-0';\n      var thisOption = question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0] : {};\n      thisOption['option'] = $(\"#\".concat(id))[0].value;\n      updateOptions({\n        key: question.hasOwnProperty('options') && question.options.length > 0 ? \"id-\".concat(question.options[0].id) : 0,\n        data: thisOption\n      });\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"mt-5 float-right btn btn-sm btn-rounded btn-success\",\n    onClick: addRow.bind(this, {})\n  }, \"Add Option\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"options\"\n  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center\",\n    style: {\n      marginTop: '50px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_1__[\"ClipLoader\"], {\n    color: '#cf2027'\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Correct Answer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    name: \"answerr\",\n    defaultValue: correctAnswer,\n    onChange: setCorrectAnswer,\n    options: answerOptions.map(function (el) {\n      return {\n        \"value\": el.hasOwnProperty('id') ? el.id : el.option,\n        \"label\": el.option\n      };\n    })\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-6\"\n  }, processing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_1__[\"ClipLoader\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-sm btn-success btn-rounded float-right\"\n  }, \"Save changes\"))))))))));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./resources/app/components/editQuestion.jsx?");

/***/ })

}]);