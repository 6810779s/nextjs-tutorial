"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_component_ItemComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/component/ItemComponent */ \"./src/component/ItemComponent.js\");\n/* harmony import */ var _src_component_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/component/Loading */ \"./src/component/Loading.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Post = function() {\n    var getData = function getData() {\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(API_URL).then(function(res) {\n            console.log(\"res:\", res);\n            setItem(res.data);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    }), item = ref[0], setItem = ref[1];\n    var API_URL = \"http://makeup-api.herokuapp.com/api/v1/products/\".concat(id, \".json\");\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (id && id > 0) {\n            getData();\n        }\n    }, [\n        id\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n            lineNumber: 34,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_component_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            __source: {\n                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n                lineNumber: 34,\n                columnNumber: 26\n            },\n            __self: _this\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_component_ItemComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            item: item,\n            __source: {\n                fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\pages\\\\view\\\\[id].js\",\n                lineNumber: 34,\n                columnNumber: 40\n            },\n            __self: _this\n        })\n    }));\n};\n_s(Post, \"/9UX45HdJ4Z32gPMv028+jYfgNI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBQ0k7QUFDa0I7QUFDWjs7O0FBRWpELEdBQUssQ0FBQ00sSUFBSSxHQUFHLFFBQVEsR0FBRixDQUFDO1FBT1RDLE9BQU8sR0FBaEIsUUFBUSxDQUFDQSxPQUFPLEdBQUcsQ0FBQztRQUNsQkMsVUFBVSxDQUFDLElBQUk7UUFDZlIsZ0RBQ00sQ0FBQ1UsT0FBTyxFQUNYQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNLE9BQUVGLEdBQUc7WUFDdkJHLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJO1lBQ2hCUixVQUFVLENBQUMsS0FBSztRQUNsQixDQUFDLEVBQ0FTLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2ZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxHQUFHO1FBQ2pCLENBQUM7SUFDTCxDQUFDOztJQWxCRCxHQUFLLENBQUNDLE1BQU0sR0FBR2xCLHNEQUFTO0lBQ3hCLEdBQUssQ0FBR21CLEVBQUUsR0FBS0QsTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBQ1YsR0FBSyxDQUFtQmpCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDO0lBQUEsQ0FBQyxHQUE1Qm1CLElBQUksR0FBYW5CLEdBQVksS0FBdkJZLE9BQU8sR0FBSVosR0FBWTtJQUNwQyxHQUFLLENBQUNPLE9BQU8sR0FBSSxDQUFnRCxrREFBSyxNQUFLLENBQVJVLEVBQUUsRUFBQyxDQUFLO0lBQzNFLEdBQUssQ0FBeUJqQixJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ29CLE9BQU8sR0FBZ0JwQixJQUFlLEtBQTdCSyxVQUFVLEdBQUlMLElBQWU7SUFnQjdDRCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsRUFBRSxFQUFFa0IsRUFBRSxJQUFJQSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDakJiLE9BQU87UUFDVCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNhO1FBQUFBLEVBQUU7SUFBQSxDQUFDO0lBRVAsTUFBTSxzRUFBRUksQ0FBRzs7Ozs7OztrQkFBRUQsT0FBTyx3RUFBSWxCLDhEQUFPOzs7Ozs7O2tGQUFPRCxvRUFBYTtZQUFDa0IsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7QUFDaEUsQ0FBQztHQTVCS2hCLElBQUk7O1FBQ09MLGtEQUFTOzs7S0FEcEJLLElBQUk7O0FBOEJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlldy9baWRdLmpzPzBmN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXRlbUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudC9JdGVtQ29tcG9uZW50XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50L0xvYWRpbmdcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBBUElfVVJMID0gYGh0dHA6Ly9tYWtldXAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3Byb2R1Y3RzLyR7aWR9Lmpzb25gO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KEFQSV9VUkwpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKTtcclxuICAgICAgICBzZXRJdGVtKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaWQgJiYgaWQgPiAwKSB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIDxkaXY+e2xvYWRpbmcgPyA8TG9hZGluZyAvPiA6IDxJdGVtQ29tcG9uZW50IGl0ZW09e2l0ZW19IC8+fTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleCkge1xyXG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgY29uc3QgYXBpVXJsID1cclxuICAgIFwiIGBodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy8ke2lkfS5qc29uYFwiO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSXRlbUNvbXBvbmVudCIsIkxvYWRpbmciLCJQb3N0IiwiZ2V0RGF0YSIsInNldExvYWRpbmciLCJnZXQiLCJBUElfVVJMIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIml0ZW0iLCJsb2FkaW5nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ })

});