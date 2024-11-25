import type { TAuthenticable } from '../../models/auth.model';

export interface TSignInContract {
  (params: { username: string; password: string }):
    | Promise<TAuthenticable>
    | TAuthenticable;
}
