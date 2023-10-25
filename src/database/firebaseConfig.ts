import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
 apiKey: "AIzaSyAnWGvMwSr-kmNP7yq7SoP4EZOsS2jvjzI",

 authDomain: "corre-brasil.firebaseapp.com",

 databaseURL: "https://corre-brasil-default-rtdb.firebaseio.com",

 projectId: "corre-brasil",

 storageBucket: "corre-brasil.appspot.com",

 messagingSenderId: "888748109483",

 appId: "1:888748109483:web:687bb797e5f03e903311ee"

};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
