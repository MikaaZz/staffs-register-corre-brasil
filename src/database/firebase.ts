import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Database, getDatabase } from 'firebase/database';
import { EventEmitter } from 'events';

export class Firebase extends EventEmitter {
  private static _instance: Firebase | null = null;
  app: FirebaseApp;
  database: Database;
  auth: Auth;
  userLoaded: Boolean = false;

  constructor() {
    super();

    const firebaseConfig = {
      apiKey: 'AIzaSyAnWGvMwSr-kmNP7yq7SoP4EZOsS2jvjzI',
      authDomain: 'corre-brasil.firebaseapp.com',
      databaseURL: 'https://corre-brasil-default-rtdb.firebaseio.com',
      projectId: 'corre-brasil',
      storageBucket: 'corre-brasil.appspot.com',
      messagingSenderId: '888748109483',
      appId: '1:888748109483:web:687bb797e5f03e903311ee',
    };

    this.app = initializeApp(firebaseConfig);
    this.database = getDatabase(this.app);
    this.auth = getAuth(this.app);

    this.auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.userLoaded = true;
      }
      this.emit('userLoadedChanged', this.userLoaded);
    });
  }
  public static getInstance(): Firebase {
    if (this._instance === null) {
      this._instance = new Firebase();
    }
    return this._instance;
  }
}
