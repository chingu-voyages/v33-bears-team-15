import { RoleType } from './role.enum';

export interface IUser {
  wishList: string[];
  readingList: string[];
  role: RoleType;
  biography: string;
  birthday: number | null;
  avatar: string;
  username: string;
  _id: string;
  email: string;
  fullName: string;
}

export interface IUserStoreState {
  credentials: {
    id: string | null;
    role: RoleType | null;
  };
  currentUser: IUser | null;
  isLoggedIn: boolean;
  isSuperAdmin: boolean;
  isAdmin: boolean;
  isPublisher: boolean;
}
