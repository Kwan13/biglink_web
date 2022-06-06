export interface UserLoginInterface {
  _id: string;
  accessToken: string;
  email: string;
  userId: string;
  expires: string;
  costumer: Costumer;
  userType: string;
  userRole: string;
}

export interface Costumer {
  costumerId: string;
  costumerName: string;
  costumerNickname: string;
}
