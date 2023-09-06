interface UserModelData {
  uid: string;
  name: string;
  email: string;
  location: string;
  admin: boolean;
}

export default class UserModel {
  uid: string;
  name: string;
  email: string;
  location: string;
  admin: boolean;

  constructor(data: UserModelData) {
    this.uid = data.uid;
    this.name = data.name;
    this.email = data.email;
    this.location = data.location;
    this.admin = data.admin;
  }

  // fromJson method
  static fromJson(json: any): UserModel {
    const data = {
      uid: json.uid,
      name: json.name,
      email: json.email,
      location: json.location,
      admin: json.admin,
    };

    return new UserModel(data);
  }

  toJson(): UserJsonData {
    return {
      uid: this.uid,
      name: this.name,
      email: this.email,
      location: this.location,
      admin: this.admin,
    };
  }
}
interface UserJsonData {
  uid: string;
  name: string;
  email: string;
  location: string;
  admin: boolean;
}
