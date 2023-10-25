exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 59803:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 83239:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43016));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 17421, 23))

/***/ }),

/***/ 43016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeOptions: () => (/* binding */ themeOptions)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ themeOptions auto */ 
const themeOptions = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        mode: "light",
        primary: {
            main: "#26395a",
            light: "#dae3f2",
            dark: "#26535a"
        },
        secondary: {
            main: "#a0cb47",
            light: "#eaf2da",
            dark: "#b28c3e"
        },
        background: {
            default: "#f6f6f6",
            paper: "#fff"
        }
    },
    typography: {
        fontFamily: "Poppins",
        fontSize: 12,
        htmlFontSize: 16,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500
        },
        h3: {
            fontSize: "1.75rem"
        },
        h4: {
            fontSize: "1.55rem"
        },
        h5: {
            fontSize: "1.25rem"
        },
        h6: {
            fontSize: "1.15rem"
        },
        subtitle1: {
            fontSize: "0.8rem"
        },
        subtitle2: {
            fontSize: "0.7rem"
        },
        body1: {
            fontSize: "1rem"
        },
        body2: {
            fontSize: ".9rem"
        },
        button: {
            fontSize: "1.2rem"
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {}
            },
            defaultProps: {
                fullWidth: true
            }
        }
    }
});


/***/ }),

/***/ 94672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/theme/theme.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mikha\dev\staffs-register-corre-brasil\src\theme\theme.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["themeOptions"];

// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(94541);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Corre Brasil | Staffs",
    description: "Instru\xe7\xf5es para Staffs que ir\xe3o trabalhar nos eventos!"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "pt-br",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(node.ThemeProvider, {
                theme: e0,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"900x900"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;