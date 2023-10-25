"use strict";
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 91727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ database),
/* harmony export */   I: () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72856);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79512);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48241);



const firebaseConfig = {
    apiKey: "AIzaSyAnWGvMwSr-kmNP7yq7SoP4EZOsS2jvjzI",
    authDomain: "corre-brasil.firebaseapp.com",
    databaseURL: "https://corre-brasil-default-rtdb.firebaseio.com",
    projectId: "corre-brasil",
    storageBucket: "corre-brasil.appspot.com",
    messagingSenderId: "888748109483",
    appId: "1:888748109483:web:687bb797e5f03e903311ee"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .getDatabase */ .N8)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .getAuth */ .v0)(app);


/***/ })

};
;