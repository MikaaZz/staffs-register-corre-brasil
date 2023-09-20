(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 99056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 78159)), "C:\\Users\\mikha\\dev\\staffs-register-corre-brasil\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94672)), "C:\\Users\\mikha\\dev\\staffs-register-corre-brasil\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\mikha\\dev\\staffs-register-corre-brasil\\src\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 31525:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66614))

/***/ }),

/***/ 66614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Facebook.js
var Facebook = __webpack_require__(30791);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Instagram.js
var Instagram = __webpack_require__(21250);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/YouTube.js
var YouTube = __webpack_require__(66470);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/assets/logo_footer.tsx


function Logo_correBrasil_footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "250",
        height: "80",
        fill: "none",
        viewBox: "0 0 250 80",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#pattern0)",
                d: "M0 0H250V80H0z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                        id: "pattern0",
                        width: "1",
                        height: "1",
                        patternContentUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            transform: "matrix(.00457 0 0 .01429 -.003 0)",
                            xlinkHref: "#image0_89_66"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("image", {
                        id: "image0_89_66",
                        width: "220",
                        height: "70",
                        xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABGCAYAAACnp/qkAAAgAElEQVR4nO19bZBd1XFgn3Pve280EkIISaaE4kgJS1QSlaUIG6uIYmkcYhNCbCDAEqzYxGExZjH2etmYtQl69mKH8modyqYcmRBWIcRmbcWWidZRKMIMsaBYLyHEKxGVozBaVkyUQWKkYTS693afPvvjnr6v3533OfqwcNRVV2/03rmnz0f36T59uvsYOA2gXq/bVatWmRtuuMHJdwcOHJi7cOHCn7HWrvbeX2CMOd9au4CZKwDAxpgpZn7dWruPmfcg4suDg4P75X3vvfnmN79pdZ1n4Az8iwfvfSx/HzlyZGGaphsQcSsR7Sciz8xdHyLyRDSFiM8j4n1Zll2scQwPD8czMZ+BM/AvCDQTpGm6iog2E9HBEjMxEREzU2CsMUR8EhFHpCwRJfK7ZkBE3Jmm6U2Cw3tv6/W6/dH09gycgdMAjh49upSIHs55qmAWDSzfIeL9ExMTC+TdycnJRYj4LfUOh8+Mc/DM7BFxFxFdLe+dkXZn4F8MaGLPsuw2IppSjJYJh2lGC5+b5T3vvfXeF5IKEZ8sMZ1XzEdK4m2fnp5eVm7HGTgDP5YgRD4+Pj4PEbeVGI2Z2TvnWEkn0Sh9mqY3AjTv96S+JEkuEMaS93U9JZX0sEg7zbRn4AycKmha6ev1ul23bl1PhPjMM89wvV5n+X8rqTE0NETy29DQECVJckEcxzustT8NAMjM1lpb8d57APDGGKPfZ2aw1gIATAMAjIyMNOEHAIjjeCUARADgvPfW5AAA4L333lobMTMAAFprzwaAbyPi7xpj7uulnycC2knU9evXy59sjOFWZU4EdJtXmafZwGy1hTL9nC54+uGBfmFoaKhhMdfS40SCDFSWZRcT0WExdIgFMkijVpbHQsKJVNKDruq9LdRV7Pn045wTidck7RDxgZPRX4HZjKf3Pj5Rhp16vW77JdIfhap9qnCeLtuIGAAM5NKFkiS5wFp7pTFmmbXWKglTSBtmJmvtADMnU1NT959zzjmH6/W6/fSnP/0pa+3C8Dswc5WIHpgzZ86+NE1XWWt3WmvnMjNaa2tBqkFZqgmEr23AvR+gIdUAmqRDx4EM9Wtp5621LoqijyEiVSqVu4JkPCESxnsfG2PIGEMAucobx/FF3vsLAOA8a+1g6NM0AIwbY15xzu157rnn9sg7wnT9rMwC9Xrdbty4EUJ/eGxsbHDx4sWXeO8vCvO6AABswH/AGLOXiHYNDAzsLWsk3XBNTEwsmDdv3t3W2kXee2o1leF7YuYEAKa89wettePM/Mqzzz67qxeco6OjA8uWLbvbWrusRzzT3vs3rLUHmPmV11577eUVK1YkvfQNEd9tjLnBGEPee2hDnj1DqCNm5gNTU1ObNKL7S9ZCX/5bf2ZZdot6d6s6D5MyjwPk1kQi2i/7tRZ7tU7nayKNNoXGW9WROOD+lKq7W50i6VgkXZZlH5eJOM6BLd5PkuQCRKwj4kvBdlM+M5whzRHxh0T0pSzLLpF6jkdCZVm2hogeKp9nlvGH/2eI+AIi/s7U1NR53fBLX7Msu7lMG23msdW5qSeivYj4+cnJyUWhXtsKDyJeMRs8Ctc+RHxAjGbttIhgD+iKp5+nxBOPQOjQA0KQylqobfNE+XmXWAHfK41UpvkklPGI+JL6fWQ2zBZwhQ/yiLheT4p8KmanXuotqZes654t00lbpqamzgtEnpXwkoxrCWSsy2eI30qS5MJWRNgN0jRdiYjbSgRTnssCP888wzyMiJ+VsWg1JsIIzrlbZe5DPTOeDjhZ4TyoDGNFfwU3EV0V+tMWj8ZXGluNZyrLslvL/RE8iHh5t/7M5hG+IKLvWURca4z5GAA4ZmZrbQVyVc4CgBWjg7W2xswGAK6J4/iJMDjboii6hpkRAKrW2irnBoo7QgfqURStY+ZUjCNBRPckp621RTnv/UUAACMjIxYAwBjDo6OjA8aYtWV66FSnMcYo9ZKttWCMeezQoUPzZ2s8MMZwmqYbBgYG9lhr/521tsLMyMwuTDZAUI+ttYWaDg2V2YUHrbU+iqJr4jh+OcuyO/pRdbMs+3gURbuiKHqftdapNkgRljYIfmYu4z87iqLfXbt27a4syy4eGhqidgtRWLzAWhuHvkSqTyC4WG1N5DeFN7XWnhtF0delvx32vzEzWwCImNkKDqmv6NRMXNK3udbaryJiHaAh6dRWhaQ/AY9l5ki1d1aPArbGmJvCoLC1NgrEaELDDTM7Zem7Jo7jbQA5swHA+wKzVcJkGgD4o0qlsjPLsouNMRsDoirk+0SAHpjNe+/VYBIAQBRFi+R3IYDzzz9/g7X2bcycyuCqTw9tmK/EdGitPf/ss8/+YsDdt5RDxE1RFP2JtfbsQOQewt7SWsvW2kieMIGR/s5aG4WqhAHQWhvFcfxlIvpKL20gooestb8vfRKCCW0QPJU2+IVCY2GCKIp+xlr7IhFdXWY6sRaXFg8DAD4sypF+pN/ShvApddQCjXlr7ZcR8Z3GmLZMbq2VuTOlesu4BI/QciXgccaYjUR0db1e5w54wHtvQrtmzFefTy1U+88xAFygJluYzQNAmdnepyTbEwDwa845YTYh3mOIeB8AgDFmU2BkFwbDQwdmE+kXcOX/5ItADQDAOTclZWVFMsacF8rXwgQ6xXSRtVaYbgZeYwwEw00MAA4AfjvLsoeNMc/X63Xbq8GCiB621v624FYTKysxeO//3hjzfe/9Hu/9YQBg7/18Y8wF3vuLjTGXBM1CxkvqYGvtR4jIxnF8W4c2bLHWfhDUUYsad2Dmo977nQDwovd+DAAS7/0CY8xK7/0aY8xqmSOlzcjcf5uIronjeFsXg4ODnOAPee/rAJAQURxFETvnIIqi2Dk3DwCWAsAlxphfDPU7/emc+yIAXNpOsgqNhj7VjTGHBQ8AgHMujqJo0Dm3FAAuNsYMtcADzLxpeHh4u8LTJP2DscMzs/HePwsAByAsYH0CA0BsjDmYZVkdiOivuHkPxNzQ+0X3vUre9t5vD99l6vcmjxC1ySUi4namf3nUvop55p7i1bJbl4YkSS4IRwP7qNkYIO3XfWpnRBHjzHdDHzsOrNrM3x/qyajh5VJ4txDRY1mWrelm6g9GlnupcWxCoT5m5iy07W6Ahhqk9h33lNpQjCERHUTE3zl69OjSTviDgeWxFvNZ9CXLsksFr9pb3SK0ouhlXydcAoi4nhr+sEJ+FPawawEAdu/eXQ14ZA9Hqk1vjI6ODnTDk2XZpUT0qu6P4BG6FjyIuF5+DzRJoe8Xd8bSOzStIGF1M8wsqxUw86/FcbwdIGc27/2vclAjw+/F4TIziwvWXUp3F4nZDrxS8RhyqfCa934vALwwMTFRX7JkyVS7lwcGBvYCwN7Jycmtg4ODaxBxgbX2jiiK3gG51ImMMaLOlsEEKWcBwBljfiXLsjWdpNzw8HBsjCEieq+19pMBhxyvuCiKIgD4uyiKbjHGvKDfa9WAoaEhCn347NTU1EO1Wm1zFEXvC/UWRzPGmHvGxsa+tHTp0mmRNGH//V8gl0yFChvG8OtHjx694+yzz34jzJ2V/S9A41jFGEPVavV5AHgeETcz8xZr7U+XJQ8APD46OnrRihUrkk5qGDPbQ4cOzT/33HMnW6nnIyMjsH79ejDGjCDiBmb+C6GVoNFEzrm1ALBzcHCw00JlFy9evAAADpTxaAeJarX6AiLeyMzPWmst5+o+WGvBOfdOANjeAYeM0SBAPof6aKofWLdunR0aGnJlCadXAU9EVwLkq2obySanzR4RRwCKA+7CytiLdNOrMiJukhVHoJv1sNXv4j4m7evQDi71/5FuOMfGxgbLq6Z8eu+36nb1epCt8YUjGrHKiYS5Q+ZClXuxLCHCGN7T69hJnUK0o6OjA977p7z3um9ifb5fygAAZFnWJOHC36+Oj4/P66XPoQ971PiJ5NkM0FXCHX7zzTeX9NK3gOd5NVZSx+N6jDpIuDXlsZ81aIYrqUMFszHzDGYLhFownBAEIm7Sk9ThGEA7KWfh8zFpl/d+Vp4S8s7o6OhAmSnatSUwfaGGtVNf1cTcXWq3EHqxWs7G+FJiJhnHV0XF0m1I03RDmzaI8afvcCQ93t57TaAyT1NylgUwU6Xsh+HUsc5LZYZzzj0McMIZ7qkynSPiVt3vU8FwmigobJbBe/8rlUplx/DwcLx27drtAPAeVmokBBWRc3Un4tyytSPUcwVAk/VJDCbyjoF8gy0qCIdNPhBRXQYgeF30Jb6118KKFSsSRNwMAJ8T4w0AWO+9WKAKq2kwoNjQrnPPOuusywFga9lIIBtsY4yc5VhuqF7/NDk5eVOp/X2BVmErlcpdRPR8kiQ7582bd0A8WKQ91to7ym1wzv1tpVL5ROhU36rP0NAQCZ4kSW6sVCq7bO4d5DmY1SuVyi0AUAdo8nXtp4/2+uuvj40x2fT09DJjzErVDw6q3kEAgC4qJRhjijPZcn8Fz+rVq7MjR44sNMZc2uL9wwAAS5Ys6YYnBgC4/vrr43Xr1s2KJgsQCRe4nxHxCoCcaBBxRxvJ1rS5RsQfAACkaXoR5ZvelxFxp5J0srA0HbQq1fQwIt7bT0d6gd27d1eJ6EFqcQgskk0bbKhxQLkZoHV0AiJerlZbvQp+SJc7kSB1ygpbVtu5YWy4vNzu48GHiPUWUuEHyo/11hYSbl8vxoxAX9s1HcmnBA5LPe0k3JEjRxb20h8i+kYJT6a1sm5GkzRNL5rdSM4EMYkDMzvv/VVaskVR1EqyifWhMIQYY14Mn2uCNKk6524DgMejKFqtVkI5YngNAL7lvX+ViKazLPvWvHnzDgD07sfXCWRzu3r16gwA7siy7GHv/X3GmHcCwFmhjQgAsZzrAEBxBOG9XxP606odl4tkDv+PAOD/vvbaa18DOD7P+zKUpVrwYmdjjLSBIBw4e+//V6VSeapDu3sGwUdEW4wxd4u2Eupeddlll60EgF3Q2kweL168eMHY2NhkHMdNvw8ODs6rVqtvN8asN8bc2so4w8xH0jR9EgBg3759HftRq9UWjI6OTs+fP7/qnCskz5w5cwZrtdrbAWCtMeYWa+1qCMcWnBv5KsyMzrntAADj4+PtpJacY96QpulFxpiuC0kJOMuyJ4W2AQCAiL4XVq53ARQrjwR1imSbYfworayfCHVtFsklkjIYL14moseJ6KEsy25vpeOPjo4OnAgdWe+/hoeHY22AmZycXJSm6Y1EdED1I1N/i8/npPYpBGjac+iAV1kxHxR8x9v+TqD2I1vLbUDE3zkZbVCuecUeS9ywsiy7TWkNLFKImQ8w8355wrgeIKIprW2E5jdpF4j4WelHC9cuvZ+kMI/7KfcXFTxjRDTZBk9hW5A50xEaWsIFmtdGtW6uiE2PlEfEPYreDRDRd4noOulkL8xWZjgK5xmyMWVl0WoHo6OjA/Lo77MsuwQRdwrD9qMeheDWXYh4t2ZqPXkAhUP1o2rwPRE9mmXZzfL/Vhvler1uEfFlTYBBBdogeHpt6/GAtk6qRe+d5fYeDyi18oEWuO4BaGY4boDeKswgQCEaxQTEjbPGkVZtKDFck8W5zAid8CimfknTXSuGEwObaiP1A5yfi4rqeqngsVmWfTiO461BjdwRRdEvc0ON9OHEvaWnBjT85sbC1+eF//8jACTaulaGFStWJPLs3r27iohXIOIOa+3fRFH0C8aY6wCaz1TagUifBQsWXGSMWR1F0e8tXLjwFUS8P8uyS4eGhkgMHqOjowPz588/GMfxB5IkWU5EH2bmj8Zx/AFouGOBtfY8gEKNAwCA22+/fdAYM1/j5lxd3gfQHD50smBsbGzQGKOtqBEApM65MYDZhfR0gVe5EZrVNDb5kWMTiHru5OHgp2lz387c+TIHttaKGllxzn1n//79V/TQnuLcVtcruDrhAYCac+6vpqam1q9YsSLptDiJQS30t3Ab6/GxzBzb3CcTAKBQjePBwcH/BwCwbt26HQDwS70wm24XAKTMfDg0UohxKQAsAIDLEfGeKIoWOecOG2P2MPML1trDzrmqMWaptXal9369MeZnlHtWZK29CKDvPZGURWvtYgD4JDN/koi+SkSbwgFzUV/QrR+S/1tr1wIUDq+LoASVSkUPIkBYcLz3bQ/mTzTUarXYBidxxQSJc276ZODz3k9rEgh9HwAAcM5BHMe6rA8R92INNvKd+D9yaT/vvf87Zv5CrVb7GkAuBbotGhoPc7MPsPYFDlC413nvN1Wr1Ud6wSOuXd57iRctvu8GxhjIeY4BlEM3AED8+uuvn7VgwYK/AIBf0MwWXuzFq5+dc0kQ0VUAAGvtHGa+zlp7PkA+SWE1/KXwe/Gy+lt7tQMoxugVvPdCdHFY9Tj4NH44juNbEPEpABgBgOeZ+Q0AyI4cObJ/yZIlU8EH9IMAkAJADQJRaUBEYuZMCF1BtVz2ZIHy0NdtiMVEfhKgaRzCkUoC0CzhuOGlpL2QnDCDMcZwHhnwknNuHABeBICnKpXKTl2/ZgIVZNwEoS7xhopa4HHe+xcA4CAAvAQAT3/uc58b0XXrvzdu3Aj1er2MA2StAOWL22tAahAa8ndjhY6iyIIa1DCgPVXaAZmz1p4f9GEt5ou/g5gvvs8XqtzZNpzFtDx8bgWf+cxniubLH8YYG6xRxTlVFEXviaLo94wxw1EUvVSpVP7+nHPOqRPR5iiKPi2uSe3OlpYsWTLlvZ/UXQ3tXQLQrH6eLNi9e3eiJWpo89woihYAnLg9nIDJo8R1xD+ExQqca0pqnYdoeL+PmT/K6ow2/O4BoEZEWyqVynsrlUpdmK3Pva8Q78EynsAMDnKpsrVSqVxVqVTuqVQqT3eKDOgAwmyO84gU7OUJZVMAAOfcn1Wr1ZcAcia3CxcuPPLDH/7wMufcs2IuDSqAIOwGNoqigRDCnhWjEgYgDIYNVBxBHmNXxBrZHIowCgFjzHkSCdwNFKHLeQlL+1UbvGZ6YSpjzJ0A8GFpc9C/AQASjUMRcpFOPagzRazeqYCgYo+pr4SgVwGcOKZfv369EHbhuCtM571/pVxemDGKosFqtfogM/9W+N5CrgXK/u8Psiy7DaBx/jXLo5TBz3/+818BgGsU03GuUVqIoui/IuJdkCPvG09QKTksMDcmSbI8y7JVWZat7PYQ0SoiWpWm6YpKpXJdU8Vi/h4dHR1Qh9VFdHYnH8RgqSysMIi4ixsWrXbvdXsKNysxP/fqS0lEX9Htb1FvYXXV7lzynWq7p1LiImW1u09wSFmxrnWLMjheaGU5VO3t6gPaL4QI9ik9p6QiB0pWSmnHq3I0o35n55xTbS1SdHRqr1ioqc3Bt0RBpGm6QVlGCwtjoM2P67ra4GlnpaTQ1kvavdsv2IGBga8S0ZUrVqxI9u/ff7lz7nta0kmbyi+GVYXDp5xZHSiX6xeUugtRFF3VoWgBsnJ571eFrwqvcAUmSDUj/RK9X4xDYcMtQaAHAFpaHkdCnyXA0xtj1oWA29moLW0hbOxnMLExRtqgv772zTffXHIiDt6lD7VabYPNXbtEihrv/T+89tpru8L/m8OZQ5sQkQAAqtXqZiL6GISY32DkcEHS/WGWZTd3iijvBhyCk2u12mPM/FtqXrxYS+M4/v0syz5u8qRAs8IjB97H68EDAABEtDOs0pcBFJKuKQ8JN6DlOZysItQ4+JYFsW8JV3Yk7hbLJRCclfe2WuX6kKwi5WYcfAsEd7F9ZQmDiDvCpBy3lOtGgIcOHZpP4fC+1IYv9vJ+JxAGn5iYWFDCIWdlReapVtECRFQ4L6u4wbukHKkIk0A7N7drczcJJ87LLVImsgvQi6TrQcKt0eWOC4joL0MHpuXwtMx00okSAeuB2yITIAPTJ7E3MZxMcvh8b7uBEhAiIaLHWywUfauyOgmSBqXSfVaPjbzXi/rSDVQ0wCpE3Cn7nRZt+KJqA4f2F/6U5RCnXkBLUzWWxeJJRJym6SpVpmu0gGK6u9sxXTvHgV4ZTr+bZdkdUrYF092h6y33uweGOyESTjsvJ5LBqhdJVybQ4LxcTM4smK7MbAfahcq0GrCAf1oRSs+4S0Qww3lZQ/BUaYrOLhMPQH+SRiduDf0Q6eKJ6FHxjJAy09PTy0jtr1TbpyRC+Xji8RQj6RCgRwD6j4dTEqTegeluKrejjadJ2/ActRh9QuMpMd1toU0Fnh4YbkakwWygXq9bHQ8nbk5UYjqJIyq7ejXFsyVJckFodGE4of7VSqlTXGquLE9CO9BqxSzwN3ndE9G17fDqlTS82xSPFqTMfeV3hPh9uIxE4v3KOIKvpywaxVVciLiz3AZR1fTcCdOJaxxATly94B8eHo6JaEsbpnijrML1IuFUG4So7+vAdE13SPTLcKWxuVu905HpujEcIl7uvbcTExMLxsfH5/X7HDp0qOGdRK0DUAumC25X4iPZiunKAahf0KuidLKXh5pzgjzUjug7QdjfvKEJsNvTawBqGRDxuy0IXhjkeU303SD4kG4lZW3TdSPiD1pJKxVCVWY6T0Sbjx07trwb7uHh4Tgw+l7NDIFIZREqrLazYbhSm7/QgeluaIGnrwBUxdz3tuiPMN2toWysmLSdL+VBzp2kX2XmV+Wzl4fy/f5+RNyDiO9sm2IhMN3l0vlWTKcHa7YpFsqEr1aVtYK7G8G0mNCndF+6PFzq98O94g3O0uLMnFDD811Lu12IuClN0xuyLLs0TdOVSZJcGMbpSkS8FxF3UkP91UQlTHRQGKfMdKENPyi1QRsxEkR8IsuyOxHxXVmWXZym6UVZlq0JTPYlItrbgtH14nGXHpPjZbgwRw+o/jaNGQVn+m7xcJ0ivrtJ1MB0t4SyRTyc4AlHR5o+tFDo+Sm9+1RZwpWJr8x0T7ZiOrU6/Wxo+JO6Hml0jwwnZz0XtyKwTiCDTKWAw244qdni+vO94BWiCxdD7lLjMoNg9URxroImekJkjGQOwqcw24E0TVdqnOU2TExMLEDEFzTDlolLTzw3pJbGL+/pPZtHxE/psdV4tZFM9Xvf2NjYYC/zReHclBsZxzTTXa3KXdmK4Xp1jNB70hZM9yFVbr1asIQWpXzxzAJkPJ+ekSavhZWQEPHdMtCiwiim02VnlSZPEURB+LMJeWnDcG1xl/uKISdJr+ZfnT+lpA5KWvMG9TcmSwhd8VhT2eLQHhFH5Hii3ThoqUNEj6mxnJFaXRGc55nEownLE1Eic1AeD9n7OOdkv5zIIsLM+/tJIkRED+vFihoZAgqmI6KrQ91JGB8mosPtjm5agVh1W+GRowkMqc7VwnlCHmosnjtnqJRtmI47MR01pFwiqo/aW5Am7i6PVlG3AczONxARny71qSUuJd2aPCj6wanLBo+HfaVFpCcovXMgy7I7pd5ui06pDTdSSJ6kx7RX/JRLtR1iBOt0Ppam6Q00U23a2+82gIi26HrU31sAABDxXS3wHOyHsQOeB1vhkTPUN998cwk1Ek+VNYBZPRqfc+53DRH9lbX2Xawy9ULwfRPPa/FF9N5fWU7BALmzZgUApNwfx3F8c5ZlF1trXwwe5F6cortEIHjmPNyCmV974403VnbKSdkOEHF7FEW/yo0MyDNwKs9yDJ41X43j+DZJa9AvToHR0dGB888//2ZjzIaQcmJG0Fgr4NzD/SXv/aNHjx599JxzzjkM0Fu4iuqTNcbw2NjY4KJFi241xtxsjPnX7ZyxS/iPee+fBoAHK5XKDoDu6S6Gh4fjyy677IY4jhc557IoigaccyPirNsPpGm6IY7jBc45jqLIOucoSZKt8+fPPwgAQETXGWOWOeeSgOf5kE+zXzw3xHF8nnOOAh4gom2Dg4P7AfLjliiK1kdRBCFjdL8omiDUYb3345VKZUcrCdckAUqSrkidEKKftytJV0gKsXCKlYh6vzlHWz+L5C39qnjOuQeosV+aga9Fv/rKpdgNv0CSJBekaboBETch4lZEHAnWy+8j4l8j4jZE3JRl2c2yT2tX12zbkGXZxVmW3U5EmxFxR8D/AuZR9duCQedGnf4O4MRHHZyBAB0Yri3TkcpZWWI6UQd3qbMNUe+65anUzEBETVmomia/HTEqz4RHVZu5Rf3FbwHPOzvV2y8cTz0/yjbI2Vyf78SlZ1aM2qKeGV4npwJPuzIn4gGArgzXiekKx2JEfEIxnVhkNgMUXhnie9hV0pEynGApr4kMcpZlazDk2m/jmbClFcOV7zAgamQ0Pln5SOQ8qd0huj4UPxn4xYNleHh4BpG2O3w/AycRemC4XplOUosXkk5O9IOrkrhCdWS6koRreQljuKDhYDkvoVIpv0TNPp3t7vm+X9d7Bs7AyYZeCU2yE8vFHRLA+efCdJVK5WpjzHdsfu2SZAf+AyK6qlar7WLmy5l5IhgoUp/nipCkM0UojW+ONo8BGpcwqsju2Fp77uDg4NdaNZZLaRBKBiAAgMg5998qlcrdoXMnPfnPGTgDAP3dd9WJ6a4OBa42xnzb5olD0/D7NkS8olqtvkBEa5xz/2CtrVlrkfOocOO9l7vaygibDBkSzWyMuSx8vkcfzBedslZb1oz3vrjkkJkj59x/rlQqd/XR9zNwBk4I9KtKtWO6byumu9Y592eK6SJjzF+kaXrjwMDADycmJi5xzn2HmSuhDiwFgGp8TT6NykR9FUCRgOju0m8QVEYJ+5eLDSvMfAQArqlUKh1zZp6BM3CyYDZ7l65MV6lUrisxHURR9HVEvHfJkiVTlUrlamb+CDMfsfnVsCYwnr75FLz3by8jD/d6X6gas6bscWCtlXwkpKTanydJsjKO421pmq48EccAJwt6sHh1nbc+rGcnZP/a0TLX/h3bqUwvBh2po4yv3fc/cujRaNKPIeVaqRsbKbkTZYLfIWc+IWfGwyXcRA0P+e0AzWdC4Z1JVbYwrqhLGT4l7UHEXaU23UVEY/2HTsQAAA4cSURBVL364Z3OcCItm6fSUtmq3aOjowMTExMLJiYmFrTyxfxxsaS28zTpFVp5pAAAXB/H8VaAPHLYWvtvg6SLIU/MeYSZ761Wq18CyA+I4zj+OADcAACLVT6/N5MkuXDevHkHxOvh2LFjb69UKj+w1s5n5mlr7dywJ7t/dHR0IFxT9QkA+JAxpi7tCDlHHoiiaB0AHDly5Mhy8eY4neDo0aNLq9XqXdbaqveeJamqMYaY+SAzvwIAL9ZqtT0AjQs/dB3BE+gua+1yZk7CuEMoz6Guae/9fmPMnomJiRdm49ET6rPGGA6eIlf5kLPSGFNl5ldff/31zy5durRIUqu9VzBP63EDAKwxxiyDRrrGzHs/bozZ5ZzbPjY2tk0yJZe9boLnyLsAAJxzL1WrVfHnXRu8fYiZD09MTNw/2z6eUDgOCddN0l2ncDzOpcPxIMFekqBDgHyVS9P0JiL6BoU7uyVuSVa4o0ePLi37uEnEuahIWl1M03QlNfvqcasjhR81iNpT9k8s/x0eDp4iawFmSoxjx44tb/WujFepLk9EB1DdmtorqAj1mzq0ubi3QsofO3ZsOSI+WZ7HVk+o41UdSa8BEV9S+A6qkJ4m/0yJAvmRHwGdAIZry3QSTBjwNDGdLhdixu4q78WyLLtEXJ6EqMJB+uNE9BgibnLO3SEqpUDwgLkCEbfpfomqysxTp9seTnnJXKvaWoTJ6LHmhkd/E0FLXceOHVvOzFNaPdcEXJo7HZ2wo9+UDFmWrVGELW0u8BJRU6rDJEkuoDygswl3eREoty/QyX1hrIo2MvNfK/x7RR0loq9QI8KAxTH9x4XhOjHdjQrX1xTTNYWDyIQh4lOIeHeWZWv60duTJPkpIrqOiDYT0SulFb2JwSUc43TyF1QMdx01Qpt8iLV7IvhB7qSGA4EQ9LTsibUEYeZpRYj7EfGJEMHxXVXXPmrENcq++QFdVyuQ38J+ejzg0MxThCKV0yZgI/fptGgniPgJRHx3lmWXZll2MSKuz7LsVkTcoeaRSLkVShuYeafq5z4l4TaH7zNSkSA/TgzXK9NJzJZ2eKYy/jC4GYa0bKVgy/uCg/JjiPh0YLCk1Jai2vDpmblgttMNWjBcQtSclAigCHjVxihfdnMLKmWi5uDhVjiHh4djneUqlJ3qNc5Mgl4V8+8jlYw3zGEx90oaNhnFOkFQsUn1tXwv91uK4U605UeO0/SRQQQAX0/T1NZqta/FcbyBiMBa+/5w+B2HMp6ZPTTy9RPk1wsBAMDy5ctjAKC5c+deF0XRp7nF/dLcSFgaqrD60gcgot+qVqtbAE7MTaunAowxgwC5BXZ8fJznz59/ME3Te40xvy6XIJjGPdntIJY6vvnNb9LGjRvBGMOh/w8S0RoAeD/nOfHn1mq1iwDgQCuDjADlxrCf49wYVuM8ee61Pk/G+xHbuD2mAO/9T8nf4bcHAfI0Ebt370500t1169bZ9evXgzHmG4h4RxRFvxj6+vMAJ/am2VMJJ8PU2o7p/jQw3WOB6dha+5uK6XR2XoD8BhwAgKcAAKanp4URJWVZysyxQmola3I48G7LbIj4QJZlX4DmHP1vGYii6EKAxnkllO5B6ATr1q2zIyMjMDw8bJcvXx6vWLEi8d6/Kr+HsWuZ01IYEBHrwfKMYgFl5o9Wq9UXMdyk26bdxUUoAc9VALBDWw+991Zc+eRuQO/9Fs7vIEy892NvlcWyFZyss41Wh+MRAPxJmqYQmO4Dgek+qJkOSmnVmbmcQWsHM3/Y5ve0WTvzEpDixhNowWxE9DVr7W9kWVaHtwD4cFtPuK8cgmXyS4FgLTODc+7pLtWQrkN/Pz09vcwY8wEAgDCmxQWbn/nMZwqJMzw8HBtjKE3TG40xGyEfXwaACjN/uVqtyhW+WbsY46NHjz43d+7cCQA4h/Nrrf49Iq5k5ke899+///77Xwl+rc13geV3uj3SdbDeCnCC93C97uk2KPySB1H2dL5UfjNA41Bb7QMklVmBr4wr7Nk+UMZFROO9psI7VVDew0kfEPE5ItoSjB7aBC6/Pyl1iBFI7eE4lHkKEdcGy+27EfGKNE1vQsQHKFgM1R7p++W2KYvkpWpepPwO3f4sy+7Ue1DZw6n5u1n1QV/5nCDiyyEo9r40TW8sB+Xu3r27WjbmvNX2cCeb4doynTZetGI6VXafvo855OwQo0jBcL0ydjCivHE6Mxwro0+L8STVx6lWGb2E4crzSqUzMvW9lC3M58K8KhZxETWyQQuz7REzvGKolgyn2xfmcFzTSICy0YywkWaw5T71rcZwpwJ5S99La+1/F6aL4/hmZv4jyG/OJGb2wSDgAOAnf+InfuLKosHWXhrUKdm/eO8bN1+Kt4tz7jdrtdpjALll1Fr7Qc6NAnKLzmkN3LgJRi5BlJ+KWz8BYG4URSNEdHWrW2ikjkDECHneGbkjTxetOed2M/OaarX6gvc+Fo8OZTTZbq19GzeMJEedc1ctXbp0enh4OB4fH+8570qtVnv8zTffvJCIPuqce4aZJ5m5SQ+14Q6/KIpWR1H0H6Mo+nuJXwRoLAjHm3PkVMOpojyjogHaMd0tiulYiCw4MesLLSSTsOX87uYZrmXOufeXmO39geDitxCzATMb59zfAMD/sNb+T+fcM4Ex5KJ3Z619GwTH8Q6GBA5O4lJ3xMz/7Jz7HjP/KeQRFBdVq9Xvy14NoCnw9zEAeIdiNvDeXz0wMLC3mwFD35I6PDwcj4yM2NHR0YFzzjnncLVafbBSqaxPkmSl9/49zrn/xMxfD31kZo7CeKC11kVR9EkK9xts3Ljx9J/IVnAKVMpe1MtbVHseUqoTqzIXh98lX0mRIKikRuozv+I2HVJpFU53lVKrZK1cmtI0Xaki7IuEseI9U97DEdFjFPI/qvKvdkocpA6q71HjLZH8M26hUfu8liplK+h0uJ4kyU+FfeY2pf5K23WmgbeUSnmqGa5XptusmE7uJbsPoHkP1yezSX2emd8yDCe+pLt3766WiUXl/hTivgogJ9bwftPBtxoTndV5FUDb3DDa60XeeVC3t9z+MsPJnCRJcgEibnXOPY6I28UdT5i8U+6XLMs+IHXq/oQxOMNwJ5Lp1ERvBph5GaG8Sy2cpTWzlS7seCsx3IyredV1UTeHvida8gR/Rc1wj8q7RPRIaVwPSzpCTfDh7oOyRfKpbu1vx3DqzgmvF1BtECuDTnxEjURUnpm3SRl+i7l2xaDOvZjZl8+1ThK0O6f7wyzLbLVafSiO49soP6f7SHhnPgDA5ORkdvbZZ08DgOxFAFqHA8mezQSjChhjiv3RWwgsQO5pMzw8DOFvAgAwxvys7MsCtAs/YYAilOZDRJRYaz/C+Z7sbAB4PsuyyyWx6pEjRxZaa7eH8ZV92z9OTExcDdBfclqBw4cP7124cOEoAKwIbd9w6NChL5x77rmT+rC7DMYYDqrvImgkGx6X351z0Dm3cAExAMDLL78cDw8Pt2z7qThMjwGgaLw6eD4VTActDCkRAHw1MN3mOI5vR8QsiqKPee9fBgCo1WoWAgGVmQ0Rt1prf70Vs/k8b4oYI94YGxubbtOs0wrk4HvFihVN3iThAPpOgOLA2nnvnw/vUIkRAaBIxsRhXJMoiv5DYKi5ALATEd9VqVT+enBw8LvW2vO5ZJFcsmTJ1Gy9PJYsWTKFiE8AwMeY+ai19ifnz5//dJZltxhjXoLSYbdAkiQXRlG0xeZ3jacAEAHAE/3i994fBmh5+H9KIQaAP2fm3wjm+ChM1KmSdCJ1NNNZAPiDLMugWq1urlQqH0dE8N7vAACYM2dOFQCWBGK6Jo7jbQA5s0VR1MRsoV6RasZ7T5BP2Mjq1auz09lFiHMvGgCAa7MsWxR8KmNjzFLv/aXGmHeEvh2z1s4BgD+WoNTwfkcJVKlUPhEWs08CgDDWNkR8MYqid3BuGRSL5HW1Wm3P8Y7X9PT0Z+fOnXtdYOZjURT9HDP/LSI+a4x5yXs/FhaY2BhzHgBcaoxZH2jjmLV2jnPuO5VKZbsEvkZRNGNhKYENlu5bsyzbCwAz3NaMMTEzHxDL9kkHFTKR0GkA3EjSelu5reEykT3aQKK95ztUK3uWqV4uKTzVoOPhKERKhLFoGSsW+sNhP/Sc3gsdO3bs7UQ0pd5/BKC1VRBL1wCrva/MwZ3t3m3Vfok+IKLp8HkDQONgPEmSC6lx8WNh/Cr3s9XviLijfPUyIjbFw6k93FdCXUm7cSyNpz927NiMHDonBSYnJxd5758/hUaTnh8MlwEK1Ot1K+bscE3Ujl7rIqI38DguejyZoBjuxj76kyDipvJFiSEeTpd7XP+ucEo6+rtLRC7vtbRIdmo/Nu7X9szcdHd36XqvOhHt1wTfpo+eiPZmWXa74NLHF8z8oio7Lp4vzrktvY6j4JEbg04mxPV63YYbStZ4729xzv26MWapKnNKVMsWwJB7hXwEEX9QqVSelM16vV7fDwCwbNmyu621F3nvXwSASul9H/JrTANA6r3/30mSfPmss84a/8Y3vhGdhqokAwA45142xvwfyI0l5f20994fA4B9xpjnEPE7c+bMGQXIiVD6dOTIkdcXLVq0wxizHAAGjDHPAADo8BeA3CARVLP7nXNHvfd3AsBRyNMTPhPH8R2hnA57agcOAICZdxhj3muMOct7/09ENAIAMDQ05ADA1+t1G/aj9bGxsS8sXrx4jff+3xhj/hUzvw0AaqHfE977PQCwc+fOnSNqvkygAVuv19k595fB8MMAsFPyp3jvRwBgHQBMQr6NaAcecjVz3+Tk5IEe+nlc8P8BKKpHR4LU7loAAAAASUVORK5CYII="
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const logo_footer = (Logo_correBrasil_footer);

// EXTERNAL MODULE: ./src/components/Footer/footer.css
var footer = __webpack_require__(34491);
;// CONCATENATED MODULE: ./src/components/Footer/footer.tsx






/* eslint-disable-next-line */ function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer-content",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "footer-content__div",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "footer-content__title",
                    children: "Conhe\xe7a mais sobre a Corre Brasil:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-content__infosContainer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-content__infosContainer__linksContainer",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-content__infosContainer__linksContainer__socialMedia",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "footer-content__infosContainer__linksContainer__socialMedia--text",
                                            children: "Redes sociais:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-content__infosContainer__linksContainer__socialMedia--container",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__socialMedia--link",
                                                    target: "_blank",
                                                    href: "http://instagram.com/correbrasil",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Instagram/* default */.Z, {
                                                        fontSize: "large"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__socialMedia--link",
                                                    target: "_blank",
                                                    href: "https://www.facebook.com/correbrasil",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Facebook/* default */.Z, {
                                                        fontSize: "large"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__socialMedia--link",
                                                    target: "_blank",
                                                    href: "https://www.youtube.com/user/vemcorrercomagente",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(YouTube/* default */.Z, {
                                                        fontSize: "large"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-content__infosContainer__linksContainer__webSites",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "footer-content__infosContainer__linksContainer__webSites--text",
                                            children: "Plataformas:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-content__infosContainer__linksContainer__webSites--list",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__webSites--listLink",
                                                    target: "_blank",
                                                    href: "https://www.correbrasil.com.br/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer-content__infosContainer__linksContainer__webSites--listItem",
                                                        children: "Site Corre Brasil"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__webSites--listLink",
                                                    target: "_blank",
                                                    href: "https://www.lojacorrebrasil.com.br/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer-content__infosContainer__linksContainer__webSites--listItem",
                                                        children: "Corre Brasil Sportswear"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__webSites--listLink",
                                                    target: "_blank",
                                                    href: "https://correbrasilmarket.com.br/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer-content__infosContainer__linksContainer__webSites--listItem",
                                                        children: "Corre Brasil Marketplace"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "footer-content__infosContainer__linksContainer__webSites--listLink",
                                                    target: "_blank",
                                                    href: "https://vemcorrer.com/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer-content__infosContainer__linksContainer__webSites--listItem",
                                                        children: "VemCorrer"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(logo_footer, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Footer_footer = (Footer);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(47048);
// EXTERNAL MODULE: ./src/components/Accordion/accordion.css
var accordion = __webpack_require__(68578);
;// CONCATENATED MODULE: ./src/components/Accordion/accordion.tsx




const Accordion_personal = ({ accordionTitle = "", children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Accordion, {
        className: "main-accordion",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionSummary, {
                expandIcon: /*#__PURE__*/ jsx_runtime_.jsx(ExpandMore/* default */.Z, {}),
                "aria-controls": "panel2a-content",
                id: "panel2a-header",
                className: "main-accordion__sumary",
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                    className: "main-accordion__title",
                    children: accordionTitle
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionDetails, {
                className: "main-accordion__details",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "main-accordion__infos",
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const Accordion_accordion = (Accordion_personal);

// EXTERNAL MODULE: ./src/components/Functions_staffs/Functions_staffs.css
var Functions_staffs = __webpack_require__(88804);
;// CONCATENATED MODULE: ./src/components/Functions_staffs/Functions_staffs.tsx



const Functions_staffs_Functions_staffs = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "functionsStaffs",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "function-staffs__title",
                children: "Fun\xe7\xf5es:"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "function-staffs__div",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Accordion_accordion, {
                        accordionTitle: "Pista - Hidrata\xe7\xe3o:",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "A equipe ir\xe1 levar voc\xea ao seu ponto;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Basta entregar copo para o atleta que estiver passando e manter o ponto abastecido;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "O copo de \xe1gua (em p\xe9) deve estar na palma da sua m\xe3o, m\xe3o virada para cima, bra\xe7o estendido para facilitar que o atleta pegue o copo;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Se posicionar ao lado do cocho de \xe1gua e n\xe3o na frente do mesmo;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Ap\xf3s a passagem dos atletas, manter seu per\xedmetro limpo ajuntando os copos que estiverem na via. Voc\xea receber\xe1 sacos de lixo e vassouras para facilitar esse manejo;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "O caminh\xe3o da organiza\xe7\xe3o vai passar no percurso recolhendo esse lixo;"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Accordion_accordion, {
                        accordionTitle: "Pista - Sinaliza\xe7\xe3o:",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "A equipe ir\xe1 levar voc\xea ao seu ponto e orientar a dire\xe7\xe3o do tr\xe2nsito;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Voc\xea deve ajudar a manter o percurso seguro, impedindo que os carros sigam na via que est\xe1 fechada para os atletas;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Caso voc\xea veja algum cone ca\xeddo ou fora de alinhamento, por favor corrija o mesmo;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Fa\xe7a gestos amplos, chame aten\xe7\xe3o de quem voc\xea precisa orientar;"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Voc\xea sempre pode incentivar e animar os atletas!"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Accordion_accordion, {
                        accordionTitle: "Arena:",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Existem diferentes atividades na arena, a equipe ir\xe1 guiar voc\xea, mas eis algumas:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Hidrata\xe7\xe3o – sob orienta\xe7\xe3o da equipe, voc\xea ir\xe1 auxiliar o abastecimento de insumos para o atleta: \xe1gua, isot\xf4nico, frutas;"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                "Medalha – entregar medalha para os atletas na chegada da prova.Sempre com sorriso no rosto!",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                    children: [
                                                        " ",
                                                        "Aten\xe7\xe3o entregar medalha somente para quem estiver com numeral;"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Fluxo – auxiliar para que os atletas n\xe3o entrem no funil de chegada;"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Guarda volumes – auxiliar na organiza\xe7\xe3o dos pertences dos atletas;"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: "Ajudar a manter a arena limpa!"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/assets/Logo_correBrasil.tsx


function Logo_correBrasil() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "94",
        height: "30",
        fill: "none",
        viewBox: "0 0 94 30",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#pattern0)",
                d: "M0 0H94V30H0z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                        id: "pattern0",
                        width: "1",
                        height: "1",
                        patternContentUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            transform: "matrix(.00456 0 0 .01429 -.002 0)",
                            xlinkHref: "#image0_95_3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("image", {
                        id: "image0_95_3",
                        width: "220",
                        height: "70",
                        xlinkHref: "data:image/png;base64,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"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const assets_Logo_correBrasil = (Logo_correBrasil);

// EXTERNAL MODULE: ./src/components/Header/header.css
var header = __webpack_require__(60833);
;// CONCATENATED MODULE: ./src/components/Header/header.tsx



function Header(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "main-header",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main-header__content",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(assets_Logo_correBrasil, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-header__navigation",
                    children: props.headerContentNav
                })
            ]
        })
    });
}
/* harmony default export */ const Header_header = (Header);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 3 modules
var swiper_react = __webpack_require__(2797);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(63754);
// EXTERNAL MODULE: ./node_modules/swiper/modules/effect-coverflow.css
var effect_coverflow = __webpack_require__(66150);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination.css
var pagination = __webpack_require__(23141);
// EXTERNAL MODULE: ./src/components/Role_staffs/Role_staffs.css
var Role_staffs = __webpack_require__(48907);
// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 27 modules
var modules = __webpack_require__(46544);
;// CONCATENATED MODULE: ./src/components/Role_staffs/Role_staffs.tsx
// Import Swiper React components


// Import Swiper styles





const Role_staffs_Role_staffs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "roleStaffs",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "role-content__roleInfos",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: "role-content__roleInfos__titleContainer-title",
                    children: [
                        "Papel do",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Staff na corrida"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "role-content__roleInfos--textOne",
                    children: "Voc\xea faz parte do evento!"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "role-content__roleInfos--textTwo",
                    children: "Durante toda prova, cada detalhe faz diferen\xe7a, principalmente na presen\xe7a dos atletas, patrocinadores e p\xfablico. Portanto, fique atento:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(swiper_react/* Swiper */.tq, {
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: "auto",
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    },
                    pagination: true,
                    modules: [
                        modules/* EffectCoverflow */.lI,
                        modules/* Pagination */.tl
                    ],
                    className: "mySwiper role-content__roleInfos__swiperContent",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Procure incentivar os atletas durante todo percurso, com frases como: Boa Prova, Voc\xea est\xe1 indo bem, Continue, Voc\xea consegue, n\xe3o desista!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Parabenize o atleta p\xf3s prova;"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Tenha paci\xeancia com o atleta em todas as situa\xe7\xf5es;"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Evite gritar com colegas, sem necessidade;"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Seja educado em qualquer circunst\xe2ncia;"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Manter boa apar\xeancia e higiene pessoal;"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "mySwiper role-content__roleInfos__swiperContent--swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "O evento tem uma energia vibrante e boa, voc\xea tem um papel fundamental para manter esse clima agrad\xe1vel!"
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_header, {
                headerContentNav: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "main-header__links",
                            href: "#roleStaffs",
                            children: "Papel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "main-header__links",
                            href: "#functionsStaffs",
                            children: "Fun\xe7\xf5es"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "main-header__links",
                            href: "#orientationStaffs",
                            children: "Orienta\xe7\xf5es"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-content__initialInfos",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-content__initialInfos--titleContainer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "main-content__initialInfos__titleContainer-title",
                                    children: [
                                        "Corrida ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "de rua no Brasil"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "main-content__initialInfos--textOne",
                                children: "A Corrida de Rua movimenta, atualmente, de 4 a 10 milh\xf5es de pessoas no Brasil;"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "main-content__initialInfos--textTwo",
                                children: "\xc9 considerado o esporte mais democr\xe1tico, pois pode ser praticado em qualquer lugar, hor\xe1rio e clima;"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-content__modeInfos",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-content__modeInfos--titleContainer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "main-content__modeInfos__titleContainer-title",
                                    children: [
                                        "A modalidade da",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " Meia Maratona"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "main-content__modeInfos--textOne",
                                children: "A meia maratona nada mais \xe9 do que uma prova de corrida que corresponde a metade da dist\xe2ncia de uma maratona, o equivalente a 21, 097km."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "main-content__modeInfos--textTwo",
                                children: "Essa modalidade n\xe3o est\xe1 inclusa em campeonatos oficiais, como as Olimp\xedadas, por\xe9m existem in\xfameras provas famosas disputadas no mundo inteiro, inclusive no Brasil."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Role_staffs_Role_staffs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Functions_staffs_Functions_staffs, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "orientationStaffs",
                        className: "main-content__orientationInfos",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "main-content__orientationInfos__title",
                                children: "Orienta\xe7\xf5es:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "main-content__orientationInfos__list",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Quando chegar, ir ao guarda volumes retirar o seu colete."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Quando finalizar, devolver colete e pegar certificado de horas e ou pagamento tamb\xe9m no guarda volumes;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Haver\xe1 transporte para levar voc\xea ao seu ponto de trabalho e retorno a arena;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "\xc9 obrigat\xf3rio uso do colete durante a prova. Coletes laranjas para equipe de staff, coletes amarelos para a organiza\xe7\xe3o;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Para meninas: legging ou bermuda preta ou jeans + camiseta + cal\xe7ado fechado;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Para meninos: bermuda ou cal\xe7a jeans ou de material esportivo + camiseta + cal\xe7ado fechado;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Lembre de usar protetor solar;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Bon\xe9 e viseira s\xe3o permitidos;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Fones de ouvido s\xe3o proibidos;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Quem tiver cabelo comprido, manter preso;"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "main-content__orientationInfos__list--item",
                                        children: "Pessoas que forem destinadas a hidrata\xe7\xe3o e medalha, devem usar luvas descart\xe1veis, as mesmas ser\xe3o entregues junto com os coletes."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_footer, {})
        ]
    });
}


/***/ }),

/***/ 78159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\mikha\dev\staffs-register-corre-brasil\src\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 68578:
/***/ (() => {



/***/ }),

/***/ 34491:
/***/ (() => {



/***/ }),

/***/ 88804:
/***/ (() => {



/***/ }),

/***/ 60833:
/***/ (() => {



/***/ }),

/***/ 48907:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,766,377,421], () => (__webpack_exec__(99056)));
module.exports = __webpack_exports__;

})();