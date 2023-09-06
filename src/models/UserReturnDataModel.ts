export default class UserReturnData<T> {
  isOK: boolean;
  msg: string;
  extraData?: T | null;

  constructor(data: { isOK: boolean; msg: string; extraData?: T | null }) {
    this.isOK = data.isOK;
    this.msg = data.msg;
    this.extraData = data.extraData;
  }

  static fromJson<T>(json: {
    isOK: boolean;
    msg: string;
    extraData?: T | null;
  }): UserReturnData<T> {
    return new UserReturnData<T>({
      isOK: json.isOK,
      msg: json.msg,
      extraData: json.extraData,
    });
  }
}
