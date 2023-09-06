import { Firebase } from '@/database/firebase';
import UserModel from '@/models/UserModel';
import UserReturnData from '@/models/UserReturnDataModel';
import {
  UserCredential,
  User,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import { onValue, ref, set } from 'firebase/database';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

export type LoginProvider = 'Google' | 'GitHub' | 'Microsoft';

class UserManager {
  private static instance: UserManager;
  user: UserModel | null = null;
  private connection = Firebase.getInstance();
  private db = this.connection.database;
  auth = this.connection.auth;
  private googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

  private constructor() {}

  public static getInstance(): UserManager {
    if (!UserManager.instance) {
      UserManager.instance = new UserManager();
    }
    return UserManager.instance;
  }

  get userImage(): String {
    return this.auth.currentUser?.photoURL ?? '';
  }

  get isLogged(): Boolean {
    if (this.user) {
      return true;
    }
    return false;
  }

  get userName(): string {
    if (this.user) {
      return this.user.name;
    }
    return 'Usuário sem nome cadastrado';
  }

  public async verifyLogin(): Promise<UserReturnData<Boolean>> {
    try {
      if (this.auth.currentUser) {
        if (!this.user) {
          const userData: UserReturnData<boolean> =
            await this.getActualyUserData(this.auth.currentUser.uid);
          if (!userData.isOK || !userData.extraData) {
            this.logout();
            return new UserReturnData({
              isOK: true,
              msg: 'Erro ao carregar os dados do usuário logado',
              extraData: false,
            });
          }
        }
        return new UserReturnData({
          isOK: true,
          msg: 'Usuário está logado e carregado na memória!',
          extraData: true,
        });
      } else {
        return new UserReturnData({
          isOK: true,
          msg: 'Usuário não está logado!',
          extraData: false,
        });
      }
    } catch (error) {
      console.log(`Error in verifyLogin on user_api: ${error}`);
      return new UserReturnData({
        isOK: false,
        msg: 'Um erro desconhecido ocorreu!',
        extraData: false,
      });
    }
  }

  public async loginGooglePopOut(): Promise<UserReturnData<boolean>> {
    try {
      var result: UserCredential;
      result = await signInWithPopup(this.auth, this.googleProvider);
      const user: User = result!.user!;
      this.verifyLogin();
      const userData: UserReturnData<boolean> = await this.getActualyUserData(
        user.uid
      );

      if (userData.isOK) {
        if (userData.isOK && !userData.extraData) {
          return new UserReturnData({
            isOK: true,
            msg: userData.msg,
            extraData: false,
          });
        }
        return new UserReturnData({
          isOK: true,
          msg: 'Login efetuado com sucesso',
          extraData: true,
        });
      } else {
        return new UserReturnData({
          isOK: true,
          msg: userData.msg,
          extraData: false,
        });
      }
    } catch (error) {
      console.log('error in login on user_api:', error);
      return new UserReturnData({
        isOK: false,
        msg: 'Login não efetuado por causa de erro desconhecido',
      });
    }
  }

  public async registerNewAccount(
    name: string,
    email: string,
    password: string,
    location: string
  ): Promise<UserReturnData<Boolean>> {
    try {
      await this.auth.signOut();
      const credential: UserCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const newUser = new UserModel({
        email: credential.user.email!,
        uid: credential.user.uid!,
        name: name,
        location: location,
        admin: false,
      });
      const regRes = await this.registerUserInCollection(newUser, newUser.uid);
      const userData: UserReturnData<boolean> = await this.getActualyUserData(
        newUser.uid
      );

      return new UserReturnData({
        isOK: true,
        msg: 'Conta Registrada com sucesso',
      });
    } catch (error) {
      console.log('Error in registerNewAccount:', error);
      return new UserReturnData({
        isOK: false,
        msg: 'erro desconhecido ao tentar registrar uma nova conta',
      });
    }
  }

  private async registerUserInCollection(
    user: UserModel,
    uid: string
  ): Promise<UserReturnData<Boolean>> {
    try {
      const userData = user.toJson();
      await set(ref(this.db, 'users/' + uid), userData);

      return new UserReturnData({
        isOK: true,
        msg: 'Usuário cadastrado com sucesso',
      });
    } catch (error) {
      console.log(error);
      return new UserReturnData({
        isOK: false,
        msg: 'Erro desconhecido ao tentar salvar o usuário no banco de dados',
      });
    }
  }

  public async saveAccountInCollection(
    location: string
  ): Promise<UserReturnData<Boolean>> {
    try {
      if (!this.auth.currentUser) {
        return new UserReturnData({
          isOK: false,
          msg: 'Erro de autenticação, contate o suporte',
          extraData: false,
        });
      }
      const user: User = this.auth.currentUser!;

      this.user = new UserModel({
        uid: user.uid,
        name: user.displayName!,
        email: user.email!,
        location: location,
        admin: false,
      });

      const regRes = await this.registerUserInCollection(this.user, user.uid);

      return new UserReturnData({
        isOK: true,
        msg: 'Nova conta registrada com sucesso!',
        extraData: true,
      });
    } catch (error) {
      console.log('error in registerUser:', error);
      return new UserReturnData<Boolean>({
        isOK: false,
        msg: 'Erro ao tentar registrar uma nova conta',
      });
    }
  }

  public async loginForm(
    email: string,
    password: string
  ): Promise<UserReturnData<Boolean>> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const dataResponse = await this.getActualyUserData(
        userCredential.user.uid
      );

      if (dataResponse.isOK) {
        return new UserReturnData({
          isOK: true,
          msg: 'Usuário logado com sucesso',
        });
      }
      return new UserReturnData({
        isOK: false,
        msg: 'Erro ao tentar efetuar o login',
      });
    } catch (error) {
      console.log('erro on login form in userContext');
      return new UserReturnData({
        isOK: false,
        msg: 'Erro ao tentar efetuar o login',
      });
    }
  }

  public async getActualyUserData(
    uid?: string
  ): Promise<UserReturnData<boolean>> {
    return new Promise((resolve, reject) => {
      try {
        uid && localStorage.setItem('uid', uid);
        const userDatabaseReferenceData = ref(this.db, 'users/' + uid);
        if (userDatabaseReferenceData && uid) {
          onValue(userDatabaseReferenceData, (snapshot) => {
            const name = (snapshot.val() && snapshot.val().name) || 'Anonymous';
            const email =
              (snapshot.val() && snapshot.val().email) || 'Anonymous';
            const location =
              (snapshot.val() && snapshot.val().location) || 'Anonymous';
            const admin = (snapshot.val() && snapshot.val().admin) || false;

            if (name && email) {
              this.user = new UserModel({
                uid,
                name: name,
                email: email,
                location: location,
                admin: admin,
              });

              resolve(
                new UserReturnData<boolean>({
                  isOK: true,
                  msg: 'usuário encontrado',
                  extraData: true,
                })
              );
            } else {
              console.log(
                'usuário nao encontrado na collection, cadastro necessários'
              );
              resolve(
                new UserReturnData<boolean>({
                  isOK: true,
                  msg: 'usuário não encontrado',
                  extraData: false,
                })
              );
            }
          });
        } else {
          console.log(
            'usuário nao encontrado na collection, cadastro necessários'
          );
          resolve(
            new UserReturnData<boolean>({
              isOK: true,
              msg: 'usuário não encontrado',
              extraData: false,
            })
          );
        }
      } catch (error) {
        console.log('error in getUserData of user_api:', error);
        reject(
          new UserReturnData<boolean>({
            isOK: false,
            msg: `Erro desconhecido: ${error}`,
          })
        );
      }
    });
  }

  public async checkLoginStatus(
    router: AppRouterInstance,
    finishLoading: () => void
  ): Promise<void> {
    const status = await this.verifyLogin();

    if (!status.isOK || !status.extraData) {
      router.push('/');
    }
    finishLoading();
  }

  public logout(): void {
    this.user = null;
    this.auth.signOut();
  }
}
export default UserManager;
