"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktvmaze"] = self["webpackChunktvmaze"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  position: fixed;\\n  background-color: #1e1e2a;\\n  z-index: 99;\\n  height: 60px;\\n  top: 0;\\n}\\n\\n#header-container {\\n  display: flex;\\n  width: 80%;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: auto;\\n}\\n\\n#header-search-bar {\\n  display: flex;\\n  align-items: center;\\n  column-gap: 0.7rem;\\n  max-width: 340px;\\n  width: 100%;\\n  padding: 8px 15px;\\n  background-color: #2d2e37;\\n  border-radius: 4rem;\\n}\\n\\n.submit {\\n  border: none;\\n  background: none;\\n  font-size: 1.1rem;\\n  padding-top: 2px;\\n}\\n\\n.submit:hover {\\n  color: #ffb43a;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  margin-top: 60px;\\n}\\n\\nmain article {\\n  padding: 1rem;\\n  width: 24%;\\n  text-align: center;\\n  margin-top: 1rem;\\n}\\n\\nmain img {\\n  width: 90%;\\n  height: auto;\\n}\\n\\nmain div {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  width: 90%;\\n  margin: auto;\\n  gap: 0.4rem;\\n}\\n\\nmain div span:first-child.active {\\n  color: gold;\\n}\\n\\nmain h2 {\\n  padding: 1rem 0;\\n}\\n\\nmain p {\\n  display: none;\\n}\\n\\nmain button {\\n  padding: 0.6rem 1.2rem;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1.5rem 10%;\\n  bottom: 0;\\n  position: fixed;\\n  width: 100%;\\n  z-index: 2;\\n  background-color: #1e1e2a;\\n  color: #ece05e;\\n}\\n\\n#header-logo {\\n  font-size: 1.4rem;\\n  color: #ece05e;\\n  font-weight: 600;\\n  text-transform: uppercase;\\n}\\n\\n#header-search {\\n  width: 100%;\\n  border: none;\\n  outline: none;\\n  color: #fcfeff;\\n  background: transparent;\\n  font-size: 1rem;\\n}\\n\\n/* POP UP SECTION */\\n.pop-up-container {\\n  width: 50%;\\n  background-color: #1e1e2a;\\n  padding: 30px;\\n  border-radius: 5%;\\n  max-height: 80vh;\\n  border: #070707 3px solid;\\n  overflow-y: scroll;\\n}\\n\\n.pop-up-container::-webkit-scrollbar {\\n  width: 6px;\\n}\\n\\n.pop-up-container::-webkit-scrollbar-track {\\n  background-color: #ece05e;\\n  border-radius: 15px;\\n  margin-block: 2em;\\n  border: #1e1e2a 1px solid;\\n}\\n\\n.pop-up-container::-webkit-scrollbar-thumb {\\n  background-color: #5c5616;\\n  border-radius: 15px;\\n  margin-block: 2em;\\n  border: #1e1e2a 1px solid;\\n}\\n\\n.pop-up {\\n  position: fixed;\\n  width: 100vw;\\n  height: 100vh;\\n  top: 0;\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  backdrop-filter: blur(4px);\\n  background: rgba(0, 0, 0, 0.7);\\n}\\n\\n.pop-up-title {\\n  color: #ece05e;\\n  font-size: 3rem;\\n}\\n\\n.image {\\n  height: 320px;\\n  margin: 10px 0;\\n  object-fit: cover;\\n  width: 100%;\\n}\\n\\n.pop-up-status {\\n  display: flex;\\n  align-items: center;\\n  gap: 25px;\\n  justify-content: center;\\n}\\n\\n.pop-up-score {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.star {\\n  color: yellow;\\n}\\n\\n.info {\\n  color: #fcfeff;\\n  font-weight: 700;\\n  font-size: 20px;\\n}\\n\\n.onprogress,\\n.score,\\n.genres {\\n  color: #fcfeff;\\n  font-weight: 100;\\n}\\n\\n.genres {\\n  display: flex;\\n  gap: 14px;\\n}\\n\\n.genres li {\\n  padding: 5px 10px;\\n  border: 2px solid #ececef;\\n  border-radius: 4px;\\n  background-color: #1c2bac56;\\n}\\n\\n.pop-up-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-bottom: 10px;\\n  background-color: #1e1e2a;\\n}\\n\\n.pop-up-close {\\n  color: #ececef;\\n  cursor: pointer;\\n}\\n\\n.information p {\\n  color: #8181b1;\\n  margin-top: 25px;\\n}\\n\\n/* COMMENTS FORM SECTION */\\n\\n.comments-header {\\n  color: #ece05e;\\n  margin: 24px 0;\\n}\\n\\n.comments-container {\\n  background-color: #2d2e37;\\n  max-height: 150px;\\n  color: #8181b1;\\n  overflow-y: scroll;\\n}\\n\\n.comment {\\n  margin: 10px 24px;\\n  padding-bottom: 10px;\\n  border-bottom: #ece05e 1px solid;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.form-comments-header {\\n  color: #ece05e;\\n  margin: 24px 0;\\n}\\n\\n.comment-input {\\n  width: 100%;\\n  margin-bottom: 20px;\\n  background-color: #2d2e37;\\n  border: none;\\n}\\n\\n@media (max-width: 710px) {\\n  #header-search-bar {\\n    max-width: 240px;\\n  }\\n}\\n\\n@media (max-width: 516px) {\\n  header {\\n    height: 100px;\\n  }\\n\\n  #header-container {\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-between;\\n    align-items: center;\\n    flex-direction: column;\\n  }\\n\\n  #header-search-bar {\\n    max-width: 360px;\\n    margin-top: 10px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tvmaze/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tvmaze/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tvmaze/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tvmaze/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tvmaze/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tvmaze/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tvmaze/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tvmaze/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tvmaze/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tvmaze/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadArticles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadArticles.js */ \"./src/modules/loadArticles.js\");\n/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(0,_modules_loadArticles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\ndocument.addEventListener('click', (e) => {\n  (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_1__.hidePopUp)(e);\n});\n\n\n//# sourceURL=webpack://tvmaze/./src/index.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (() => {\n  var count = 1;\n  return () => count++;\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://tvmaze/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async (url, id = '') => {\n  const response = await fetch(url + id);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://tvmaze/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/global.js":
/*!*******************************!*\
  !*** ./src/modules/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"shows\": () => (/* binding */ shows),\n/* harmony export */   \"urlLikes\": () => (/* binding */ urlLikes),\n/* harmony export */   \"urlNewApp\": () => (/* binding */ urlNewApp)\n/* harmony export */ });\nconst shows = 'https://api.tvmaze.com/shows';\nconst appId = 'BiT8llHS4WoCPJWSTu18';\nconst urlNewApp = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst urlLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n\n\n//# sourceURL=webpack://tvmaze/./src/modules/global.js?");

/***/ }),

/***/ "./src/modules/loadArticles.js":
/*!*************************************!*\
  !*** ./src/modules/loadArticles.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.js */ \"./src/modules/global.js\");\n/* harmony import */ var _postData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postData.js */ \"./src/modules/postData.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n\n\n\n\n\n\nconst mainSection = document.querySelector('main');\nlet countShows;\n\nconst loadArticles = async () => {\n  const data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_global_js__WEBPACK_IMPORTED_MODULE_2__.shows);\n  const listLikes = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_global_js__WEBPACK_IMPORTED_MODULE_2__.urlLikes);\n\n  data.forEach((maze) => {\n    countShows = (0,_counter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const articleTvMaze = document.createElement('article');\n    const imgShow = document.createElement('img');\n    imgShow.src = maze.image.medium;\n    imgShow.alt = maze.name;\n    articleTvMaze.appendChild(imgShow);\n    const divLikes = document.createElement('div');\n    const spanThumbUp = document.createElement('span');\n    spanThumbUp.className = 'material-icons-outlined';\n    spanThumbUp.innerText = 'thumb_up';\n    divLikes.appendChild(spanThumbUp);\n    spanThumbUp.addEventListener('click', async (e) => {\n      if (!e.target.classList.contains('active')) {\n        e.target.classList.add('active');\n        e.target.nextSibling.innerText = parseInt(e.target.nextSibling.innerText, 10) + 1;\n        await (0,_postData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_global_js__WEBPACK_IMPORTED_MODULE_2__.urlLikes, { item_id: maze.id });\n      }\n    });\n    const spanLikes = document.createElement('span');\n    const numLikes = listLikes.filter((item) => item.item_id === maze.id);\n    spanLikes.innerText = numLikes.length > 0 ? numLikes[0].likes : 0;\n    divLikes.appendChild(spanLikes);\n    articleTvMaze.appendChild(divLikes);\n    const h2Name = document.createElement('h2');\n    h2Name.innerText = maze.name;\n    articleTvMaze.appendChild(h2Name);\n    const pId = document.createElement('p');\n    pId.innerText = maze.id;\n    articleTvMaze.appendChild(pId);\n    const buttonComments = document.createElement('button');\n    buttonComments.type = 'button';\n    buttonComments.innerText = 'Comments';\n    buttonComments.classList.add('button-comments');\n    articleTvMaze.appendChild(buttonComments);\n    buttonComments.addEventListener('click', (e) => {\n      (0,_popUp_js__WEBPACK_IMPORTED_MODULE_1__.displayPopUp)(parseInt(e.target.previousSibling.innerText, 10));\n    });\n    mainSection.appendChild(articleTvMaze);\n  });\n  const spanTotal = document.querySelector('footer span:last-child');\n  spanTotal.innerText = `Total : ${countShows}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadArticles);\n\n//# sourceURL=webpack://tvmaze/./src/modules/loadArticles.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp),\n/* harmony export */   \"hidePopUp\": () => (/* binding */ hidePopUp)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./src/modules/global.js\");\n\n\n\nconst popUpContainer = document.querySelector('.pop-up-container');\nconst popUp = document.querySelector('.pop-up');\nconst main = document.querySelector('.main');\n\nconst addHtml = (object) => `\n  <div class=\"pop-up-header\">\n    <h1 class=\"pop-up-title\">${object.name}</h1>\n    <span class=\"material-icons pop-up-close\">close</span>\n  </div>\n  \n  <ul class=\"genres\">\n  </ul>\n  <div>\n    <img class=\"image\" src=\"${object.image.original}\" alt=\"\">\n  </div>\n\n  <div class=\"information\">\n    <div class=\"pop-up-status\">\n      <h4 class=\"onprogress\"> <span class=\"info\">status:</span> ${object.status}</h4>\n      <div class=\"pop-up-score\">\n        <h4 class=\"info\">score</h4>\n        <span class=\"material-icons star\">grade</span>\n        <h4 class=\"score\">: ${object.rating.average}/10</h4>\n      </div>\n    </div>\n    ${object.summary}\n  </div>\n\n  <section class=\"comments\">\n    <h1 class=\"comments-header\">comments (3)</h1>\n    <ul class=\"comments-container\">\n      <li class=\"comment\">this are some comments to test how it loos in the pop up of the web page ✔️</li>\n      <li class=\"comment\">this are some comments to test how it loos in the pop up of the web page ✔️</li>\n      <li class=\"comment\">this are some comments to test how it loos in the pop up of the web page ✔️</li>\n    </ul>\n    <form class=\"comment-form\">\n      <h1 class=\"form-comments-header\">Add a new comment</h1>\n      <input class=\"comment-input\" type=\"text\" placeholder=\"Enter your name...\">\n      <textarea class=\"comment-text-area\" name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Enter your comment...\"></textarea>\n    </form>\n  </section>\n  \n`;\n\nconst displayPopUp = async (id) => {\n  popUpContainer.innerHTML = '';\n  const data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${_global_js__WEBPACK_IMPORTED_MODULE_1__.shows}/`, id);\n  popUp.style.display = 'flex';\n  popUpContainer.insertAdjacentHTML('afterbegin', addHtml(data));\n  const genres = document.querySelector('.genres');\n  data.genres.forEach((element) => { genres.innerHTML += `<li>${element}</li>`; });\n  main.style.position = 'fixed';\n};\n\nconst hidePopUp = (e) => {\n  if (e.target.classList.contains('pop-up-close') || e.target.classList.contains('pop-up')) {\n    popUp.style.display = 'none';\n    main.style.position = 'static';\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopUp);\n\n\n//# sourceURL=webpack://tvmaze/./src/modules/popUp.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = async (url, info = {}) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(info),\n  });\n  const data = await response.text();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n//# sourceURL=webpack://tvmaze/./src/modules/postData.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);