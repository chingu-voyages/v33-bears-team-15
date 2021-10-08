import { RoleType } from './role.enum';

export interface IUser {
  wishList: string[];
  readingList: string[];
  role: RoleType;
  biography: string;
  birthday: number | null;
  avatar: string;
  username: string | null;
  _id: string;
  email: string;
  fullName: string;
}

export interface IUserStoreState {
  credentials: {
    id: string | null;
    role: RoleType | null;
  };
  user: IUser | null;
  isLoggedIn: boolean;
}
