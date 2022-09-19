import { UserRoles } from 'src/app/common/constants/roles';

export type RegisterPayloadType = {
  email: string;
  role: UserRoles;
  password: string;
};

export type RegisterResponseType = {
  email?: string;
  role?: UserRoles;
  id?: number;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
};

export class RegisterResponseModel {
  email?: string;
  role?: UserRoles;
  id?: number;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;

  constructor(registerResponse: RegisterResponseType) {
    Object.assign(this, registerResponse);
    this.createAt = new Date(registerResponse.createAt as string);
    this.updateAt = new Date(registerResponse.updateAt as string);
    this.deleteAt = new Date(registerResponse.deleteAt as string);
  }
}

export type LoginPayloadType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  access_token?: string;
  user?: {
    email?: string;
    role?: UserRoles;
    id?: number;
    createAt?: string;
    updateAt?: string;
    deleteAt?: string;
  };
};

export class CurrentUserModel {
  access_token?: string;
  user: {
    email?: string;
    role?: UserRoles;
    id?: number;
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
  } = {};

  constructor(loginResponse: LoginResponseType) {
    Object.assign(this.user, loginResponse.user);
    this.user.createAt = new Date(loginResponse.user?.createAt as string);
    this.user.updateAt = new Date(loginResponse.user?.updateAt as string);
    this.user.deleteAt = new Date(loginResponse.user?.deleteAt as string);
    this.access_token = loginResponse.access_token;
  }
}
