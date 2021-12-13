"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/component/Footer.js

// export default function Footer() {
//   return <div>Copyright @Eunhee. All rights reserved.</div>;
// }
const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            textAlign: "center",
            padding: 20
        },
        children: "Copyright @Eunhee. All rights reserved."
    }));
};
/* harmony default export */ const component_Footer = (Footer);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/component/Gnb.js




function Gnb() {
    const { 0: activeItem , 1: setActiveItem  } = (0,external_react_.useState)("home");
    const router = (0,router_namespaceObject.useRouter)();
    // const goLink = (e, data) => {
    //   console.log("data:", data);
    //   console.log("e:", e);
    //   if (data.name === "home") {
    //     setActiveItem("home");
    //     router.push("/");
    //   } else if (data.name === "about") {
    //     setActiveItem("about");
    //     router.push("/about");
    //   } else if (data.name === "contacts") {
    //     setActiveItem("contacts");
    //     router.push("/contacts");
    //   }
    // };
    return(// <Menu inverted>
    //   <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
    //   <Menu.Item
    //     name="about"
    //     active={activeItem === "about"}
    //     onClick={goLink}
    //   />
    //   <Menu.Item
    //     name="contacts"
    //     active={activeItem === "contacts"}
    //     onClick={goLink}
    //   />
    // </Menu>
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        inverted: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                name: "home",
                active: activeItem === "home",
                onClick: ()=>{
                    setActiveItem("home");
                    router.push("/");
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                name: "about",
                active: activeItem === "about",
                onClick: ()=>{
                    setActiveItem("about");
                    router.push("/about");
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                name: "contact Us",
                active: activeItem === "contact",
                onClick: ()=>{
                    setActiveItem("contact");
                    router.push("/contact");
                }
            })
        ]
    }));
}; //location.href를 이용하면 페이지가 새로고침 되면서 이동됨. -요청이 늘어남
 //사용하지 않고 next Link를 이용하면 페이지안에서 내용물만 바뀜.

;// CONCATENATED MODULE: ./src/component/Top.js



function Top() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            flex: "100px 0 0",
                            paddingTop: 20
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "./images/E.png",
                            alt: "logo",
                            style: {
                                display: "block",
                                width: 80,
                                height: 80
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                        as: "h1",
                        children: "Ryn"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Gnb, {
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            width: 1200,
            margin: "auto"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Top, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(component_Footer, {
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(97));
module.exports = __webpack_exports__;

})();