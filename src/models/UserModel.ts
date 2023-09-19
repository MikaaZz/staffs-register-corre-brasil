interface UserModelData {  
  name: string;
  email: string;
  location: string;
  admin: boolean;
  cellphone: string;
}

export default class UserModel {  
  name: string;
  email: string;
  location: string;
  admin: boolean;
  cellphone: string;

  constructor(data: UserModelData) {    
    this.name = data.name;
    this.email = data.email;
    this.location = data.location;
    this.admin = data.admin;
    this.cellphone = data.cellphone;
  }

  // fromJson method
  static fromJson(json: any): UserModel {
    const data = {      
      name: json.name,
      email: json.email,
      location: json.location,
      admin: json.admin,
      cellphone: json.cellphone,
    };

    return new UserModel(data);
  }

  toJson(): UserJsonData {
    return {      
      name: this.name,
      email: this.email,
      location: this.location,
      admin: this.admin,
      cellphone: this.cellphone,
    };
  }
}
interface UserJsonData {  
  name: string;
  email: string;
  location: string;
  admin: boolean;
  cellphone: string;
}
