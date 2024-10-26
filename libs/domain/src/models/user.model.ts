import type { TAuthenticable } from './auth.model';

export interface TUser extends TAuthenticable {
  firstName: string;
  lastName: string;
}
