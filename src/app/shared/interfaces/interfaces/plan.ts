import { IBase } from './base';
import { IUser } from './user';

export interface IPlan<T = string> extends IBase {
  description: string;
  timesPerWeek: string
  category: string;
  difficulty: string;
  duration: string;
  title: string;
  ownerId: IUser;
}
