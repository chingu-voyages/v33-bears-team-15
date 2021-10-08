import { RoleType } from './role.enum';
import { IUser } from './user.type';

export interface IAuthResponse {
  access_token: string;
  user: IUser;
}

export interface ISignupDto {
  email: string;
  password: string;
  fullName: string;
}

export interface ISigninDto {
  email: string;
  password: string;
}

export interface ITokenSignature {
  sub: string;
  claim: RoleType;
  iat: number;
  exp: number;
}
