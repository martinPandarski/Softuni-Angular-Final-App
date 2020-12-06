import { IBase } from './base';
import { IUser } from './user';

export interface IPlan<T = string> extends IBase {
  body: string;
  category: string;
  difficulty: string;
  duration: string;
  title: string;
  ownerId: IUser;
}
