import type { TAuthenticable } from '../../models/auth.model';

export interface TSignUpContract {
  (params: {
    username: string;
    password: string;
    lastName: string;
    firstName: string;
  }): Promise<TAuthenticable> | TAuthenticable;
}
