import { IBase } from './base';

export interface IUser extends IBase {
  plans: string[];
  email: string;
  username: string;
  password: string;
}
