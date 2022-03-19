import { Token } from 'src/services/api/auth';

export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  phone: string;
  stripeId?: string;
}
export interface AuthStoreState {
  token?: Omit<Token, 'user'>;
  user?: Partial<User>;
  boarded: boolean;
}
export interface InboxStoreState {}
export interface PaymentStoreState {}

export interface StoreState {
  auth: AuthStoreState;
  //   inbox: InboxStoreState;
  //   payment: PaymentStoreState;
}
