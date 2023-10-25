"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _shared_utils_sortLocationsByFrequency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/utils/sortLocationsByFrequency */ \"(app-pages-browser)/./src/shared/utils/sortLocationsByFrequency.ts\");\n/* harmony import */ var _database_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/database/dashboard */ \"(app-pages-browser)/./src/database/dashboard.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const dataInstance = new _database_dashboard__WEBPACK_IMPORTED_MODULE_3__.UserData();\n    const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const userData = Object.values(await dataInstance.getUserData());\n                setUsers(userData);\n                console.log(userData);\n                const locations = userData.map((user)=>user.location);\n                const sortedLocations = (0,_shared_utils_sortLocationsByFrequency__WEBPACK_IMPORTED_MODULE_2__.sortLocationsByFrequency)(locations);\n                setLocations(sortedLocations);\n                setLoading(false);\n            } catch (error) {\n                console.log(error);\n                setLoading(false);\n            }\n        };\n        fetchData();\n        console.log(\"Dashboard\");\n        console.log(users);\n        console.log(locations);\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mikha\\\\code\\\\staffs-register-corre-brasil\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: \"Dashboard\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mikha\\\\code\\\\staffs-register-corre-brasil\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 10\n    }, this);\n}\n_s(Dashboard, \"QxHBUf9IXgf03mDeoyKVbFMfqRk=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNVO0FBS0w7QUFDRDtBQUdqQyxTQUFTSzs7SUFDdEIsTUFBTUMsZUFBZSxJQUFJRix5REFBUUE7SUFFakMsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUN0RCxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQTRCQyxPQUFPQyxNQUFNLENBQzdDLE1BQU1WLGFBQWFXLFdBQVc7Z0JBRWhDUCxTQUFTSTtnQkFFVEksUUFBUUMsR0FBRyxDQUFDTDtnQkFFWixNQUFNUCxZQUFZTyxTQUFTTSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUTtnQkFDdEQsTUFBTUMsa0JBQWtCcEIsZ0dBQXdCQSxDQUFDSTtnQkFDakRDLGFBQWFlO2dCQUViWCxXQUFXO1lBQ2IsRUFBRSxPQUFPWSxPQUFPO2dCQUNkTixRQUFRQyxHQUFHLENBQUNLO2dCQUNaWixXQUFXO1lBQ2I7UUFDRjtRQUVBQztRQUVBSyxRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDVjtRQUNaUyxRQUFRQyxHQUFHLENBQUNaO0lBQ2QsR0FBRyxFQUFFO0lBRUwsSUFBSUksU0FBUztRQUNYLHFCQUFPLDhEQUFDVCxxREFBVUE7c0JBQUM7Ozs7OztJQUNyQjtJQUVBLHFCQUFPLDhEQUFDQSxxREFBVUE7a0JBQUM7Ozs7OztBQUNyQjtHQXhDd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2l0eUZyZXF1ZW5jeSxcclxuICBzb3J0TG9jYXRpb25zQnlGcmVxdWVuY3ksXHJcbn0gZnJvbSAnQC9zaGFyZWQvdXRpbHMvc29ydExvY2F0aW9uc0J5RnJlcXVlbmN5JztcclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICdAL2RhdGFiYXNlL2Rhc2hib2FyZCc7XHJcbmltcG9ydCB7IFVzZXJNb2RlbERhdGEgfSBmcm9tICdAL2RhdGFiYXNlL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBkYXRhSW5zdGFuY2UgPSBuZXcgVXNlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlPENpdHlGcmVxdWVuY3lbXT4oW10pO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlck1vZGVsRGF0YVtdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGE6IFVzZXJNb2RlbERhdGFbXSA9IE9iamVjdC52YWx1ZXMoXHJcbiAgICAgICAgICBhd2FpdCBkYXRhSW5zdGFuY2UuZ2V0VXNlckRhdGEoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VXNlcnModXNlckRhdGEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IHVzZXJEYXRhLm1hcCgodXNlcikgPT4gdXNlci5sb2NhdGlvbik7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkTG9jYXRpb25zID0gc29ydExvY2F0aW9uc0J5RnJlcXVlbmN5KGxvY2F0aW9ucyk7XHJcbiAgICAgICAgc2V0TG9jYXRpb25zKHNvcnRlZExvY2F0aW9ucyk7XHJcblxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnRGFzaGJvYXJkJyk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbnMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8VHlwb2dyYXBoeT5Mb2FkaW5nLi4uPC9UeXBvZ3JhcGh5PjtcclxuICB9XHJcblxyXG4gIHJldHVybiA8VHlwb2dyYXBoeT5EYXNoYm9hcmQ8L1R5cG9ncmFwaHk+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlR5cG9ncmFwaHkiLCJzb3J0TG9jYXRpb25zQnlGcmVxdWVuY3kiLCJVc2VyRGF0YSIsIkRhc2hib2FyZCIsImRhdGFJbnN0YW5jZSIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsInVzZXJzIiwic2V0VXNlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsInVzZXJEYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwiZ2V0VXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXNlciIsImxvY2F0aW9uIiwic29ydGVkTG9jYXRpb25zIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});