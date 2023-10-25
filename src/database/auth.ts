import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export class Auth {
  constructor() {}

  async loginWithEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return {
          isLogged: true,
          data: {
            user,
          },
        };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
          isLogged: false,
          data: {
            errorCode,
            errorMessage,
          },
        };
      });
  }

  async logout() {
    return await auth.signOut();
  }
}
