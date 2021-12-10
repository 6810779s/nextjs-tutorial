/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/component/Gnb.js":
/*!******************************!*\
  !*** ./src/component/Gnb.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/component/Top.js":
/*!******************************!*\
  !*** ./src/component/Top.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Top; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Gnb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gnb */ \"./src/component/Gnb.js\");\n/* harmony import */ var _Gnb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Gnb__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Top() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Top.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Top.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: \"100px 0 0\",\n                            paddingTop: 20\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Top.js\",\n                            lineNumber: 7,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"./images/E.png\",\n                            alt: \"logo\",\n                            style: {\n                                display: \"block\",\n                                width: 80,\n                                height: 80\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Top.js\",\n                                lineNumber: 8,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                        as: \"h1\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Top.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Ryn\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_Gnb__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Top.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_c = Top;\nvar _c;\n$RefreshReg$(_c, \"Top\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQztBQUNuQjtBQUNSLFFBQVEsQ0FBQ0UsR0FBRyxHQUFHLENBQUM7SUFDN0IsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7a0ZBQ0RBLENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxPQUFPLEVBQUUsQ0FBTTtnQkFBQyxDQUFDOzs7Ozs7Ozt5RkFDNUJGLENBQUc7d0JBQUNDLEtBQUssRUFBRSxDQUFDOzRCQUFDRSxJQUFJLEVBQUUsQ0FBVzs0QkFBRUMsVUFBVSxFQUFFLEVBQUU7d0JBQUMsQ0FBQzs7Ozs7Ozt1R0FDOUNDLENBQUc7NEJBQ0ZDLEdBQUcsRUFBQyxDQUFnQjs0QkFDcEJDLEdBQUcsRUFBQyxDQUFNOzRCQUNWTixLQUFLLEVBQUUsQ0FBQztnQ0FBQ0MsT0FBTyxFQUFFLENBQU87Z0NBQUVNLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs0QkFBQyxDQUFDOzs7Ozs7Ozs7eUZBR3JEWixxREFBTTt3QkFBQ2EsRUFBRSxFQUFDLENBQUk7Ozs7Ozs7a0NBQUMsQ0FBRzs7OztpRkFFcEJaLDZDQUFHOzs7Ozs7Ozs7O0FBR1YsQ0FBQztLQWhCdUJDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Ub3AuanM/Mjg0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IEduYiBmcm9tIFwiLi9HbmJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIxMDBweCAwIDBcIiwgcGFkZGluZ1RvcDogMjAgfX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL0UucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgYXM9XCJoMVwiPlJ5bjwvSGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEduYiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiR25iIiwiVG9wIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleCIsInBhZGRpbmdUb3AiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Top.js\n");

/***/ })

});