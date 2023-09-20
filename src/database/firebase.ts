import { NewUserRegister } from '@/app/register/page';
import UserModel from '@/models/UserModel';
import { v4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';

interface Response {
  isOk: boolean;
  msg: string;
  extraData: boolean;
}

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

  async registerNewUser(data: NewUserRegister) {
    const uid = v4();
    return new Promise<Response>((resolve, reject) => {
      try {
        set(ref(database, 'users/' + uid), {
          admin: false,
          cellphone: data.cellphone,
          email: data.email,
          location: data.location,
          name: data.name,
        })
          .then(() => {
            resolve({
              isOk: true,
              msg: 'Saved successfully',
              extraData: true,
            });
          })
          .catch((error) => {
            resolve({
              isOk: false,
              msg: 'Error in save: ' + error,
              extraData: true,
            });
          });
      } catch (e) {
        reject({
          isOk: false,
          msg: 'Error in save to connect in DB: ',
          extraData: false,
        });
      }
    });
  }
}
