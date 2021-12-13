(() => {
var exports = {};
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 341:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ItemComponent_wrap__1zdW8",
	"itemImg": "ItemComponent_itemImg__VMkVW",
	"itemPrice": "ItemComponent_itemPrice__67Kf5",
	"itemDes": "ItemComponent_itemDes__bg65o"
};


/***/ }),

/***/ 204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./src/styles/ItemComponent.module.css
var ItemComponent_module = __webpack_require__(341);
var ItemComponent_module_default = /*#__PURE__*/__webpack_require__.n(ItemComponent_module);
;// CONCATENATED MODULE: ./src/component/ItemComponent.js



function ItemComponent({ item  }) {
    const { image_link , name , price , description  } = item;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                content: "상품",
                style: {
                    marginTop: 10
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ItemComponent_module_default()).wrap,
                style: {
                    paddingBottom: 50
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ItemComponent_module_default()).itemImg,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image_link
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    fontWeight: 800,
                                    fontSize: 15
                                },
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (ItemComponent_module_default()).itemPrice,
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                color: "blue",
                                content: "구매하기"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                content: "상품 설명",
                style: {
                    marginTop: 10
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (ItemComponent_module_default()).itemDes,
                children: description
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/view/[id].js




const Post = ({ item  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: item && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: item.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: item.description
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ItemComponent, {
                    item: item
                })
            ]
        })
    }));
};
/* harmony default export */ const _id_ = (Post);
async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await external_axios_default().get(apiUrl);
    const data = res.data;
    return {
        props: {
            item: data
        }
    };
}


/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(204));
module.exports = __webpack_exports__;

})();