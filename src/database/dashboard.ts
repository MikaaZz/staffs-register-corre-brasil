import { get, ref } from 'firebase/database';
import { database } from './firebaseConfig';

export class UserData {
  userUID = localStorage.getItem('userUid');
  userInfosRef = ref(database, 'users/');

  constructor() {}

  async getUserData() {
    const userInfosSnapshot = await get(this.userInfosRef);
    return userInfosSnapshot.val();
  }
}
