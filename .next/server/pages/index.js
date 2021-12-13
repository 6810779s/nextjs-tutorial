(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 268:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ItemList_wrap__qnxla",
	"imgLink": "ItemList_imgLink__5ofxj",
	"itemName": "ItemList_itemName__DRKDo",
	"itemInfo": "ItemList_itemInfo__7ogRi",
	"itemPrice": "ItemList_itemPrice__cU2Gh"
};


/***/ }),

/***/ 425:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Loading_container__CBnRi"
};


/***/ }),

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./src/styles/Loading.module.css
var Loading_module = __webpack_require__(425);
var Loading_module_default = /*#__PURE__*/__webpack_require__.n(Loading_module);
;// CONCATENATED MODULE: ./src/component/Loading.js



const Loading = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Loading_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Dimmer, {
            active: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Loader, {
                size: "huge",
                children: "Loading"
            })
        })
    }));
};
/* harmony default export */ const component_Loading = (Loading);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./src/styles/ItemList.module.css
var ItemList_module = __webpack_require__(268);
var ItemList_module_default = /*#__PURE__*/__webpack_require__.n(ItemList_module);
;// CONCATENATED MODULE: ./src/component/ItemList.js




function ItemList({ list  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
            columns: 3,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                children: list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/view/[id]",
                            as: `/view/${item.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ItemList_module_default()).wrap,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.image_link,
                                            alt: item.id,
                                            className: (ItemList_module_default()).imgLink
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            className: (ItemList_module_default()).itemName,
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (ItemList_module_default()).itemInfo,
                                            children: [
                                                item.category,
                                                " ",
                                                item.product_type
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                            className: (ItemList_module_default()).itemPrice,
                                            children: [
                                                "$",
                                                item.price
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, item.id)
                )
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/component/Main.js




const Main = ({ list  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "HOME | Ryn"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "은희의 서버사이드 렌더링 공부"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                icon: "chess queen",
                style: {
                    paddingTop: 40
                },
                content: "베스트 상품"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ItemList, {
                list: list.slice(0, 9)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                icon: "gem",
                style: {
                    paddingTop: 40
                },
                content: "신상품"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ItemList, {
                list: list.slice(9)
            })
        ]
    }));
};
/* harmony default export */ const component_Main = (Main);

;// CONCATENATED MODULE: ./pages/index.js





function Home() {
    const { 0: list , 1: setList  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const getData = ()=>{
        setLoading(true);
        external_axios_default().get(API_URL).then((res)=>{
            console.log("res:", res.data);
            setList(res.data);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        });
    };
    (0,external_react_.useEffect)(()=>{
        getData();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            width: "100%",
            height: "100%"
        },
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(component_Loading, {
        }) : /*#__PURE__*/ jsx_runtime_.jsx(component_Main, {
            list: list
        })
    }));
};


/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(229)));
module.exports = __webpack_exports__;

})();