"use strict";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Gnb() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"home\"), activeItem = ref[0], setActiveItem = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var goLink = function(e, data) {\n        console.log(\"data:\", data);\n        console.log(\"e:\", e);\n        if (data.name === \"home\") {\n            setActiveItem(\"home\");\n            router.push(\"/\");\n        } else if (data.name === \"about\") {\n            setActiveItem(\"about\");\n            router.push(\"/about\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        inverted: true,\n        __source: {\n            fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Gnb.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                name: \"home\",\n                active: activeItem === \"home\",\n                onClick: goLink,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Gnb.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                name: \"about\",\n                active: activeItem === \"about\",\n                onClick: goLink,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\guidance\\\\Desktop\\\\EunheeWorkSpace\\\\study\\\\사이드 렌더링\\\\nextjs-tutorial\\\\src\\\\component\\\\Gnb.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}; //location.href를 이용하면 페이지가 새로고침 되면서 이동됨. -요청이 늘어남\n //사용하지 않고 next Link를 이용하면 페이지안에서 내용물만 바뀜. \n_s(Gnb, \"53nJX083itlPJLQGG/S8sORvTzs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0duYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFDQzs7QUFDekIsUUFBUSxDQUFDSSxHQUFHLEdBQUcsQ0FBQzs7SUFDN0IsR0FBSyxDQUErQkYsR0FBZ0IsR0FBaEJBLCtDQUFRLENBQUMsQ0FBTSxRQUE1Q0csVUFBVSxHQUFtQkgsR0FBZ0IsS0FBakNJLGFBQWEsR0FBSUosR0FBZ0I7SUFDcEQsR0FBSyxDQUFDSyxNQUFNLEdBQUdQLHNEQUFTO0lBRXhCLEdBQUssQ0FBQ1EsTUFBTSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxJQUFJLEVBQUssQ0FBQztRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFFRixJQUFJO1FBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFJLEtBQUVILENBQUM7UUFDbkIsRUFBRSxFQUFFQyxJQUFJLENBQUNHLElBQUksS0FBSyxDQUFNLE9BQUUsQ0FBQztZQUN6QlAsYUFBYSxDQUFDLENBQU07WUFDcEJDLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLENBQUc7UUFDakIsQ0FBQyxNQUFNLEVBQUUsRUFBRUosSUFBSSxDQUFDRyxJQUFJLEtBQUssQ0FBTyxRQUFFLENBQUM7WUFDakNQLGFBQWEsQ0FBQyxDQUFPO1lBQ3JCQyxNQUFNLENBQUNPLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSx1RUFDSFgsbURBQUk7UUFBQ1ksUUFBUTs7Ozs7Ozs7aUZBQ1haLHdEQUFTO2dCQUFDVSxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0ksTUFBTSxFQUFFWixVQUFVLEtBQUssQ0FBTTtnQkFBRWEsT0FBTyxFQUFFVixNQUFNOzs7Ozs7OztpRkFDcEVMLHdEQUFTO2dCQUNSVSxJQUFJLEVBQUMsQ0FBTztnQkFDWkksTUFBTSxFQUFFWixVQUFVLEtBQUssQ0FBTztnQkFDOUJhLE9BQU8sRUFBRVYsTUFBTTs7Ozs7Ozs7OztBQUl2QixDQUFDLENBR0QsQ0FBaUQsRUFBa0Q7QUFDakQsQ0FBUjtHQTlCbEJKLEdBQUc7O1FBRVZKLGtEQUFTOzs7S0FGRkksR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L0duYi5qcz81ZmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHbmIoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoXCJob21lXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBnb0xpbmsgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZTpcIiwgZSk7XHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSBcImhvbWVcIikge1xyXG4gICAgICBzZXRBY3RpdmVJdGVtKFwiaG9tZVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwiYWJvdXRcIikge1xyXG4gICAgICBzZXRBY3RpdmVJdGVtKFwiYWJvdXRcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Fib3V0XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBpbnZlcnRlZD5cclxuICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiaG9tZVwiIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJob21lXCJ9IG9uQ2xpY2s9e2dvTGlua30gLz5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG5hbWU9XCJhYm91dFwiXHJcbiAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImFib3V0XCJ9XHJcbiAgICAgICAgb25DbGljaz17Z29MaW5rfVxyXG4gICAgICAvPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4vL2xvY2F0aW9uLmhyZWbrpbwg7J207Jqp7ZWY66m0IO2OmOydtOyngOqwgCDsg4jroZzqs6Dsuagg65CY66m07IScIOydtOuPmeuQqC4gLeyalOyyreydtCDripjslrTrgqhcclxuLy/sgqzsmqntlZjsp4Ag7JWK6rOgIG5leHQgTGlua+ulvCDsnbTsmqntlZjrqbQg7Y6Y7J207KeA7JWI7JeQ7IScIOuCtOyaqeusvOunjCDrsJTrgJwuICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiTWVudSIsIkduYiIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwicm91dGVyIiwiZ29MaW5rIiwiZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInB1c2giLCJpbnZlcnRlZCIsIkl0ZW0iLCJhY3RpdmUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Gnb.js\n");

/***/ })

});