import { IBase } from './base';
import { IPlan } from './plan';
import { IUser } from './user';

export interface IPost extends IBase {
  likes: string[];
  text: string;
  userId: IUser;
  planId: IPlan;
}
