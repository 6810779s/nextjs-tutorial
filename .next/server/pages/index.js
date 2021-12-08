"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_component_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/component/ItemList */ \"./src/component/ItemList.js\");\n\n\n\n\n\n\n\nfunction Home() {\n    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const API_URL = \"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline\";\n    function getData() {\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(API_URL).then((res)=>{\n            console.log(\"res:\", res.data);\n            setList(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\index.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"HOME | Ryn\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_component_ItemList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                list: list,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0c7QUFDZTtBQUNIO0FBQ1E7QUFDRjtBQUUvQixRQUFRLENBQUNPLElBQUksR0FBRyxDQUFDO0lBQzlCLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlOLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRW5DLEtBQUssQ0FBQ08sT0FBTyxHQUNYLENBQXVFO2FBRWhFQyxPQUFPLEdBQUcsQ0FBQztRQUNsQlgsZ0RBQ00sQ0FBQ1UsT0FBTyxFQUNYRyxJQUFJLEVBQUVDLEdBQUcsR0FBSyxDQUFDO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU0sT0FBRUYsR0FBRyxDQUFDRyxJQUFJO1lBQzVCUixPQUFPLENBQUNLLEdBQUcsQ0FBQ0csSUFBSTtRQUNsQixDQUFDLEVBQ0FDLEtBQUssRUFBRUMsR0FBRyxHQUFLLENBQUM7WUFDZkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUc7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFFRGpCLGdEQUFTLEtBQU8sQ0FBQztRQUNmUyxPQUFPO0lBQ1QsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hTLENBQUc7Ozs7Ozs7O2lGQUNEbkIsa0RBQUk7Ozs7Ozs7K0ZBQ0ZvQixDQUFLOzs7Ozs7OzhCQUFDLENBQVU7OztpRkFFbEJoQiwrREFBUTtnQkFBQ0csSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7O0FBRzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBJdGVtTGlzdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudC9JdGVtTGlzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgQVBJX1VSTCA9XG4gICAgXCJodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy5qc29uP2JyYW5kPW1heWJlbGxpbmVcIjtcblxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KEFQSV9VUkwpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzOlwiLCByZXMuZGF0YSk7XG4gICAgICAgIHNldExpc3QocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IT01FIHwgUnluPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxJdGVtTGlzdCBsaXN0PXtsaXN0fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdCIsIkl0ZW1MaXN0Iiwic3R5bGVzIiwiSG9tZSIsImxpc3QiLCJzZXRMaXN0IiwiQVBJX1VSTCIsImdldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVyciIsImRpdiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/component/ItemList.js":
/*!***********************************!*\
  !*** ./src/component/ItemList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ItemList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ItemList({ list  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemList.js\",\n            lineNumber: 4,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n            columns: 3,\n            __source: {\n                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemList.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemList.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemList.js\",\n                            lineNumber: 8,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: item.image_link,\n                            alt: item.id,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemList.js\",\n                                lineNumber: 9,\n                                columnNumber: 15\n                            },\n                            __self: this\n                        })\n                    })\n                )\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0l0ZW1MaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUN6QixRQUFRLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxNQUFNLHNFQUNIQyxDQUFHOzs7Ozs7O3VGQUNESCxtREFBSTtZQUFDSSxPQUFPLEVBQUUsQ0FBQzs7Ozs7OzsyRkFDYkosdURBQVE7Ozs7Ozs7MEJBQ05FLElBQUksQ0FBQ0ksR0FBRyxFQUFFQyxJQUFJLHdFQUNaUCwwREFBVzs7Ozs7Ozt1R0FDVFMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFSCxJQUFJLENBQUNJLFVBQVU7NEJBQUVDLEdBQUcsRUFBRUwsSUFBSSxDQUFDTSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBT3JELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9zcmMvY29tcG9uZW50L0l0ZW1MaXN0LmpzPzdiMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtTGlzdCh7IGxpc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R3JpZCBjb2x1bW5zPXszfT5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlX2xpbmt9IGFsdD17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdyaWQiLCJJdGVtTGlzdCIsImxpc3QiLCJkaXYiLCJjb2x1bW5zIiwiUm93IiwibWFwIiwiaXRlbSIsIkNvbHVtbiIsImltZyIsInNyYyIsImltYWdlX2xpbmsiLCJhbHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/ItemList.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();