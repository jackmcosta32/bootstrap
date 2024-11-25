import type { TAuthenticable } from '../../models/authenticable.model';

export interface TSignInContract {
  (params: { username: string; password: string }):
    | Promise<TAuthenticable>
    | TAuthenticable;
}
