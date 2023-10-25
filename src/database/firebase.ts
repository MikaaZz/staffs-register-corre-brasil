import { v4 as uuidv4 } from 'uuid';
import { ref, set } from 'firebase/database';
import { database } from './firebaseConfig';

export interface UserModelData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
  location: string;
  allowContact: boolean;
}

export class Firebase {
  constructor() {}

  async registerUser({
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
    allowContact,
  }: UserModelData) {
    const userUid = uuidv4();
    await set(ref(database, 'users/' + userUid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
      allowContact: allowContact,
    });
    localStorage.setItem('userUid', userUid);
  }

  isRegister() {
    return localStorage.getItem('userUid');
  }
}
