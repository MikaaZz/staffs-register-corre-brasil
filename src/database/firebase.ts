import UserModel from '@/models/UserModel';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'corre-brasil.firebaseapp.com',
  databaseURL: 'https://corre-brasil-default-rtdb.firebaseio.com',
  projectId: 'corre-brasil',
  storageBucket: 'corre-brasil.appspot.com',
  messagingSenderId: '888748109483',
  appId: '1:888748109483:web:687bb797e5f03e903311ee',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export class Firebase {
  constructor() {}

  async getUsersData() {
    const databaseReference = ref(database, 'users/');
    console.log(databaseReference);
    return new Promise<UserModel[]>((resolve, reject) => {
      try {
        onValue(databaseReference, (snapshot) => {         
          const data = snapshot.val();
          if (data) {
            resolve(data);
          } else {
            resolve([]);
          }
        });
      } catch (e) {
        console.log('error in getUserData of user_api:', e);
        reject('Algum erro aconteceu ao fazer o fetch dos usuarios');
      }
    });
  }
}
