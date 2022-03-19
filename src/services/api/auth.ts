import { User } from 'src/@types/store';

export interface Token {
  accessToken: string;
  isRegistered: boolean;
  user: User;
}
