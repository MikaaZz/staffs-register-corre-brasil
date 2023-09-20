"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 2168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Firebase)
/* harmony export */ });
/* unused harmony export database */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80311);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72856);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79512);



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "corre-brasil.firebaseapp.com",
    databaseURL: "https://corre-brasil-default-rtdb.firebaseio.com",
    projectId: "corre-brasil",
    storageBucket: "corre-brasil.appspot.com",
    messagingSenderId: "888748109483",
    appId: "1:888748109483:web:687bb797e5f03e903311ee"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .getDatabase */ .N8)(app);
class Firebase {
    constructor(){}
    async getUsersData() {
        const databaseReference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH)(database, "users/");
        return new Promise((resolve, reject)=>{
            try {
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .onValue */ .jM)(databaseReference, (snapshot)=>{
                    const data = snapshot.val();
                    if (data) {
                        resolve(data);
                    } else {
                        resolve([]);
                    }
                });
            } catch (e) {
                console.log("error in getUserData of user_api:", e);
                reject("Algum erro aconteceu ao fazer o fetch dos usuarios");
            }
        });
    }
    async registerNewUser(data) {
        const uid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
        return new Promise((resolve, reject)=>{
            try {
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .set */ .t8)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH)(database, "users/" + uid), {
                    admin: false,
                    cellphone: data.cellphone,
                    email: data.email,
                    location: data.location,
                    name: data.name
                }).then(()=>{
                    resolve({
                        isOk: true,
                        msg: "Saved successfully",
                        extraData: true
                    });
                }).catch((error)=>{
                    resolve({
                        isOk: false,
                        msg: "Error in save: " + error,
                        extraData: true
                    });
                });
            } catch (e) {
                reject({
                    isOk: false,
                    msg: "Error in save to connect in DB: ",
                    extraData: false
                });
            }
        });
    }
}


/***/ })

};
;