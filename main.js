/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  border: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background: rgb(250, 250, 250);\\n  background: radial-gradient(circle, rgba(250, 250, 250, 1) 0%, rgba(236, 236, 236, 1) 100%);\\n  width: 100%;\\n  height: 100vh;\\n  font-family: 'Open Sans', sans-serif;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  background: transparent;\\n  color: #8e8b8b;\\n}\\n\\n#todo-container {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.modal {\\n  width: 408px;\\n  background-color: #fff;\\n}\\n\\n.modal li {\\n  display: flex;\\n  align-items: center;\\n  padding: 12px;\\n  height: 49px;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n}\\n\\n#add-img {\\n  width: 16px;\\n  filter: invert(50%);\\n}\\n\\n.list input {\\n  flex: 1;\\n}\\n\\n.modal li input {\\n  flex: 1;\\n  background: transparent;\\n  font-size: 1rem;\\n}\\n\\n.modal li input:focus-visible {\\n  outline: none;\\n}\\n\\n.modal li input::placeholder {\\n  font-style: italic;\\n}\\n\\n.modal li.clear {\\n  padding: 0;\\n}\\n\\n#todo-box {\\n  height: 100%;\\n  padding: 0;\\n}\\n\\n.list {\\n  width: 100%;\\n}\\n\\n.edit {\\n  background-color: #fffeca;\\n}\\n\\n.check {\\n  margin-right: 8px;\\n}\\n\\n.task {\\n  height: 100%;\\n}\\n\\n.task.completed {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.task-completed .check {\\n  color: black;\\n}\\n\\n\\n.list label {\\n  margin: auto 0;\\n}\\n\\n.task.completed {\\n  font-size: 1rem;\\n  width: 100%;\\n  font-style: italic;\\n  font-weight: normal;\\n  text-decoration: line-through;\\n}\\n\\n.change-order {\\n  cursor: move;\\n}\\n\\n.remove {\\n  cursor: pointer;\\n}\\n\\n.clear-completed {\\n  background-color: rgb(239, 239, 239);\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.clear-completed:hover {\\n  text-decoration: underline;\\n  color: black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_render_list_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render-list/index.js */ \"./src/modules/render-list/index.js\");\n/* harmony import */ var _modules_display_images_enter_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display-images/enter-icon.js */ \"./src/modules/display-images/enter-icon.js\");\n\n\n\n\n\n\n// display enter icon\n(0,_modules_display_images_enter_icon_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n(0,_modules_render_list_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display-images/enter-icon.js":
/*!**************************************************!*\
  !*** ./src/modules/display-images/enter-icon.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_outline_subdirectory_arrow_left_black_24dp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/outline_subdirectory_arrow_left_black_24dp.png */ \"./src/images/outline_subdirectory_arrow_left_black_24dp.png\");\n\n\nconst displayEnterIcon = () => {\n  const img = document.createElement('img');\n  img.src = _images_outline_subdirectory_arrow_left_black_24dp_png__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = '';\n  img.id = 'add-img';\n  document.querySelector('.add-btn').appendChild(img);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayEnterIcon);\n\n//# sourceURL=webpack://to-do-list/./src/modules/display-images/enter-icon.js?");

/***/ }),

/***/ "./src/modules/render-list/display-list.js":
/*!*************************************************!*\
  !*** ./src/modules/render-list/display-list.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisplayList)\n/* harmony export */ });\nclass DisplayList {\n  elementGenerator = (type, classNames) => {\n    const elem = document.createElement(type);\n    if (classNames) {\n      const classNamesArr = classNames.split(' ');\n      classNamesArr.forEach((className) => {\n        elem.classList.add(className);\n      });\n    }\n    return elem;\n  }\n\n  // task incompleted will show the input\n  taskInput(task, idContent) {\n    const input = this.elementGenerator('input', 'task');\n    input.type = 'text';\n    input.value = task.description;\n    input.setAttribute('maxlength', '255');\n    input.id = idContent;\n\n    return input;\n  }\n\n  taskCompleted(task, idContent) {\n    const h6 = this.elementGenerator('h6', 'task completed');\n    h6.textContent = task.description;\n    h6.id = idContent;\n\n    return h6;\n  }\n\n  createTask(task) {\n    const idContent = `task-${task.index}`;\n    const li = this.elementGenerator('li');\n\n    const checkBtn = this.elementGenerator('button', 'check');\n    checkBtn.type = 'button';\n    checkBtn.title = 'check';\n\n    let taskElem;\n\n    if (task.completed) {\n      checkBtn.innerHTML = '<i class=\"fa-solid fa-check\"></i>';\n      taskElem = this.taskCompleted(task, idContent);\n      li.classList.add('task-completed');\n    } else {\n      checkBtn.innerHTML = '<i class=\"fa-regular fa-square\"></i>';\n      taskElem = this.taskInput(task, idContent);\n    }\n\n    const changeBtn = this.elementGenerator('button', 'change-order');\n    changeBtn.setAttribute('data-id', `${task.index}`);\n    changeBtn.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\n\n    li.append(checkBtn, taskElem, changeBtn);\n\n    return li;\n  }\n\n  createList(tasks) {\n    const list = document.getElementById('todo-box');\n    const ul = this.elementGenerator('ul', 'list');\n    tasks.forEach((task) => {\n      const li = this.createTask(task);\n      ul.appendChild(li);\n    });\n    list.appendChild(ul);\n  }\n\n  clearList = () => {\n    const list = document.getElementById('todo-box');\n    list.removeChild(list.children[0]);\n  }\n\n  updateList(tasks) {\n    this.clearList();\n    this.createList(tasks);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/render-list/display-list.js?");

/***/ }),

/***/ "./src/modules/render-list/index.js":
/*!******************************************!*\
  !*** ./src/modules/render-list/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-list.js */ \"./src/modules/render-list/display-list.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./src/modules/render-list/listeners.js\");\n/* harmony import */ var _update_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-list.js */ \"./src/modules/render-list/update-list.js\");\n\n\n\n\n\nconst renderList = () => {\n  // display all tasks\n  const todoList = _update_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getListFromLocalStorage();\n  const displayList = new _display_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const listeners = new _listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](todoList);\n  displayList.createList(todoList.tasks);\n  listeners.setAddListener();\n  listeners.showDeleteBtn();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);\n\n//# sourceURL=webpack://to-do-list/./src/modules/render-list/index.js?");

/***/ }),

/***/ "./src/modules/render-list/listeners.js":
/*!**********************************************!*\
  !*** ./src/modules/render-list/listeners.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Listeners)\n/* harmony export */ });\n/* harmony import */ var _display_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-list.js */ \"./src/modules/render-list/display-list.js\");\n/* harmony import */ var _update_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-list.js */ \"./src/modules/render-list/update-list.js\");\n\n\n\nclass Listeners extends _display_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(todoList) {\n    super();\n    this.todoList = todoList;\n  }\n\n  removeEditClass = () => {\n    const tasks = document.querySelectorAll('.task');\n    tasks.forEach((task) => {\n      const li = task.parentNode;\n      li.classList.remove('edit');\n      const button = li.lastChild;\n      button.classList.remove('remove');\n      button.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\n    });\n  }\n\n  setAddListener = () => {\n    const addForm = document.getElementById('add-form');\n\n    addForm.addEventListener('submit', (event) => {\n      const taskList = this.todoList.tasks;\n      const addInput = document.getElementById('list-add');\n\n      // update this.todoList\n      this.todoList.tasks = _update_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(taskList, addInput.value);\n\n      this.showAll();\n\n      addInput.value = '';\n      event.preventDefault();\n    });\n  }\n\n  setDeleteListener = (btn) => {\n    btn.addEventListener('click', (event) => {\n      const btn = event.currentTarget;\n      const id = Number(btn.getAttribute('data-id'));\n      this.todoList = _update_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(id, this.todoList);\n      this.showAll();\n    });\n  }\n\n  showDeleteBtn = (task) => {\n    task.addEventListener('click', (event) => {\n      const li = event.target.parentNode;\n      this.removeEditClass();\n      li.classList.add('edit');\n      const deleteBtn = li.querySelector('.change-order');\n      deleteBtn.classList.add('remove');\n      deleteBtn.innerHTML = '<i class=\"fa-regular fa-trash-can\"></i>';\n      this.setDeleteListener(deleteBtn);\n    });\n  }\n\n  editTaskListener = (task) => {\n    task.addEventListener('change', (event) => {\n      console.log(event)\n    })\n  }\n\n  tasksListeners = () => {\n    const tasks = document.querySelectorAll('.task');\n    tasks.forEach((task) => {\n      this.showDeleteBtn(task);\n      this.editTaskListener(task);\n    });\n  }\n\n\n  showAll = () => {\n    this.todoList.tasks = _update_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateIndex(this.todoList.tasks);\n\n    // update localstorage\n    _update_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveList(this.todoList);\n\n    // display updated List\n    this.updateList(this.todoList.tasks);\n    this.removeEditClass();\n    this.showDeleteBtn();\n  }\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/render-list/listeners.js?");

/***/ }),

/***/ "./src/modules/render-list/update-list.js":
/*!************************************************!*\
  !*** ./src/modules/render-list/update-list.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UpdateList)\n/* harmony export */ });\nclass UpdateList {\n  static getListFromLocalStorage = () => {\n    let todoList = JSON.parse(window.localStorage.getItem('todolist'));\n    if (todoList) return todoList;\n\n    // it will update todoList obj for empty taskList\n    todoList = {\n      listName: \"Today's To Do\",\n      tasks: [],\n    };\n    return todoList;\n  }\n\n  // save tasks to local storage\n  static saveList = (todoList) => {\n    window.localStorage.setItem('todolist', JSON.stringify(todoList));\n  }\n\n  // add new task\n  static addTask = (taskList, description) => {\n    let index = 0;\n    if (taskList.length > 0) {\n      index = taskList.length;\n    }\n\n    taskList.push({\n      index,\n      description,\n      completed: false,\n    });\n\n    return taskList;\n  }\n\n  // update index\n  static updateIndex = (tasks) => {\n    tasks = tasks.map((task, index) => {\n      task.index = index;\n      return task;\n    });\n    return tasks;\n  }\n\n  // remove task\n  static removeTask = (id, todoList) => {\n    let { tasks } = todoList;\n    tasks = tasks.filter((task) => task.index !== id);\n    todoList.tasks = tasks;\n    return todoList;\n  }\n\n  // edit task\n  static editTask = (id, todoList) => {\n    console.log('hey');\n    return todoList\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/render-list/update-list.js?");

/***/ }),

/***/ "./src/images/outline_subdirectory_arrow_left_black_24dp.png":
/*!*******************************************************************!*\
  !*** ./src/images/outline_subdirectory_arrow_left_black_24dp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c4265b1500287fd46513.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/outline_subdirectory_arrow_left_black_24dp.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;