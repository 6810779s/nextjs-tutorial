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
exports.id = "pages/view/[id]";
exports.ids = ["pages/view/[id]"];
exports.modules = {

/***/ "./src/styles/ItemComponent.module.css":
/*!*********************************************!*\
  !*** ./src/styles/ItemComponent.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrap\": \"ItemComponent_wrap__1zdW8\",\n\t\"itemImg\": \"ItemComponent_itemImg__VMkVW\",\n\t\"itemPrice\": \"ItemComponent_itemPrice__67Kf5\",\n\t\"itemDes\": \"ItemComponent_itemDes__bg65o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0l0ZW1Db21wb25lbnQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10dXRvcmlhbC8uL3NyYy9zdHlsZXMvSXRlbUNvbXBvbmVudC5tb2R1bGUuY3NzPzNhYmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcFwiOiBcIkl0ZW1Db21wb25lbnRfd3JhcF9fMXpkVzhcIixcblx0XCJpdGVtSW1nXCI6IFwiSXRlbUNvbXBvbmVudF9pdGVtSW1nX19WTWtWV1wiLFxuXHRcIml0ZW1QcmljZVwiOiBcIkl0ZW1Db21wb25lbnRfaXRlbVByaWNlX182N0tmNVwiLFxuXHRcIml0ZW1EZXNcIjogXCJJdGVtQ29tcG9uZW50X2l0ZW1EZXNfX2JnNjVvXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/ItemComponent.module.css\n");

/***/ }),

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_component_ItemComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/component/ItemComponent */ \"./src/component/ItemComponent.js\");\n\n\n\n\nconst Post = ({ item  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: item && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: item.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                            name: \"description\",\n                            content: item.description,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            },\n                            __self: undefined\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_component_ItemComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    item: item,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    },\n                    __self: undefined\n                })\n            ]\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nasync function getServerSideProps(context) {\n    const id = context.params.id;\n    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(apiUrl);\n    const data = res.data;\n    return {\n        props: {\n            item: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNHO0FBQ2lDO0FBRTdELEtBQUssQ0FBQ0csSUFBSSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzFCLE1BQU07a0JBRURBLElBQUk7O3NGQUVBSCxrREFBSTs7Ozs7Ozs7NkZBQ0ZJLENBQUs7Ozs7Ozs7c0NBQUVELElBQUksQ0FBQ0UsSUFBSTs7NkZBQ2hCQyxDQUFJOzRCQUFDRCxJQUFJLEVBQUMsQ0FBYTs0QkFBQ0UsT0FBTyxFQUFFSixJQUFJLENBQUNLLFdBQVc7Ozs7Ozs7Ozs7cUZBRW5EUCxvRUFBYTtvQkFBQ0UsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7OztBQUtuQyxDQUFDO0FBRUQsaUVBQWVELElBQUksRUFBQztBQUViLGVBQWVPLGtCQUFrQixDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUNqRCxLQUFLLENBQUNDLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxNQUFNLENBQUNELEVBQUU7SUFDNUIsS0FBSyxDQUFDRSxNQUFNLElBQUksZ0RBQWdELEVBQUVGLEVBQUUsQ0FBQyxLQUFLO0lBQzFFLEtBQUssQ0FBQ0csR0FBRyxHQUFHLEtBQUssQ0FBQ2YsZ0RBQVMsQ0FBQ2MsTUFBTTtJQUNsQyxLQUFLLENBQUNHLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBRXJCLE1BQU0sQ0FBQyxDQUFDO1FBQ05DLEtBQUssRUFBRSxDQUFDO1lBQ05kLElBQUksRUFBRWEsSUFBSTtRQUNaLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10dXRvcmlhbC8uL3BhZ2VzL3ZpZXcvW2lkXS5qcz8wZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSXRlbUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudC9JdGVtQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgaXRlbSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpdGVtICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57aXRlbS5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2l0ZW0uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8SXRlbUNvbXBvbmVudCBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gIGNvbnN0IGFwaVVybCA9IGBodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy8ke2lkfS5qc29uYDtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYXBpVXJsKTtcclxuICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpdGVtOiBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkhlYWQiLCJJdGVtQ29tcG9uZW50IiwiUG9zdCIsIml0ZW0iLCJ0aXRsZSIsIm5hbWUiLCJtZXRhIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImlkIiwicGFyYW1zIiwiYXBpVXJsIiwicmVzIiwiZ2V0IiwiZGF0YSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ }),

/***/ "./src/component/ItemComponent.js":
/*!****************************************!*\
  !*** ./src/component/ItemComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ItemComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ItemComponent.module.css */ \"./src/styles/ItemComponent.module.css\");\n/* harmony import */ var _styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ItemComponent({ item  }) {\n    const { image_link , name , price , description  } = item;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                as: \"h3\",\n                content: \"상품\",\n                style: {\n                    marginTop: 10\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrap),\n                style: {\n                    paddingBottom: 50\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemImg),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: image_link,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                style: {\n                                    fontWeight: 800,\n                                    fontSize: 15\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                className: (_styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemPrice),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    \"$\",\n                                    price\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                color: \"blue\",\n                                content: \"구매하기\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                as: \"h3\",\n                content: \"상품 설명\",\n                style: {\n                    marginTop: 10\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: (_styles_ItemComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemDes),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\ItemComponent.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: description\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0l0ZW1Db21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDSjtBQUN4QyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxVQUFVLEdBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxXQUFXLEVBQUMsQ0FBQyxHQUFHSixJQUFJO0lBRXJELE1BQU07O2lGQUVESCxxREFBTTtnQkFBQ1EsRUFBRSxFQUFDLENBQUk7Z0JBQUNDLE9BQU8sRUFBQyxDQUFJO2dCQUFLQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsU0FBUyxFQUFFLEVBQUU7Z0JBQUMsQ0FBQzs7Ozs7Ozs7a0ZBQ3BEQyxDQUFEO2dCQUFDQyxTQUFTLEVBQUVaLDhFQUFXO2dCQUFFUyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0ssYUFBYSxFQUFFLEVBQUU7Z0JBQUMsQ0FBQzs7Ozs7Ozs7eUZBQ3RESCxDQUFHO3dCQUFDQyxTQUFTLEVBQUVaLGlGQUFjOzs7Ozs7O3VHQUMzQmdCLENBQUc7NEJBQUNDLEdBQUcsRUFBRWQsVUFBVTs7Ozs7Ozs7OzBGQUVyQlEsQ0FBRzs7Ozs7Ozs7aUdBQ0RPLENBQUM7Z0NBQUNULEtBQUssRUFBRSxDQUFDO29DQUFDVSxVQUFVLEVBQUUsR0FBRztvQ0FBRUMsUUFBUSxFQUFFLEVBQUU7Z0NBQUMsQ0FBQzs7Ozs7OzswQ0FBR2hCLElBQUk7O2tHQUNqRGMsQ0FBQztnQ0FBQ04sU0FBUyxFQUFFWixtRkFBZ0I7Ozs7Ozs7O29DQUFFLENBQUM7b0NBQUNLLEtBQUs7OztpR0FDdENSLHFEQUFNO2dDQUFDeUIsS0FBSyxFQUFDLENBQU07Z0NBQUNkLE9BQU8sRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7aUZBRzlCVixzREFBRDs7Ozs7Ozs7aUZBQ1BDLHFEQUFNO2dCQUFDUSxFQUFFLEVBQUMsQ0FBSTtnQkFBQ0MsT0FBTyxFQUFDLENBQU87Z0JBQUNDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxTQUFTLEVBQUUsRUFBRTtnQkFBQyxDQUFDOzs7Ozs7OztpRkFDdkRRLENBQUM7Z0JBQUNOLFNBQVMsRUFBRVosaUZBQWM7Ozs7Ozs7MEJBQUdNLFdBQVc7Ozs7QUFHaEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10dXRvcmlhbC8uL3NyYy9jb21wb25lbnQvSXRlbUNvbXBvbmVudC5qcz8wYjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgSGVhZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9JdGVtQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbUNvbXBvbmVudCh7IGl0ZW0gfSkge1xyXG4gIGNvbnN0IHsgaW1hZ2VfbGluaywgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uIH0gPSBpdGVtO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCIgY29udGVudD1cIuyDge2SiFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1MCB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1JbWd9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlX2xpbmt9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDgwMCwgZm9udFNpemU6IDE1IH19PntuYW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1QcmljZX0+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIGNvbnRlbnQ9XCLqtazrp6TtlZjquLBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCIgY29udGVudD1cIuyDge2SiCDshKTrqoVcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19IC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1EZXN9PntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJEaXZpZGVyIiwiSGVhZGVyIiwic3R5bGVzIiwiSXRlbUNvbXBvbmVudCIsIml0ZW0iLCJpbWFnZV9saW5rIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJhcyIsImNvbnRlbnQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImRpdiIsImNsYXNzTmFtZSIsIndyYXAiLCJwYWRkaW5nQm90dG9tIiwiaXRlbUltZyIsImltZyIsInNyYyIsInAiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJpdGVtUHJpY2UiLCJjb2xvciIsIml0ZW1EZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/ItemComponent.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/view/[id].js"));
module.exports = __webpack_exports__;

})();