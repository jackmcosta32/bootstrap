import type { TResult } from '../utils/result.util';
import type { TAuthenticable } from '../models/auth.model';

export interface TSignUpContract {
  (params: {
    username: string;
    password: string;
    lastName: string;
    firstName: string;
  }): Promise<TResult<TAuthenticable>>;
}

export interface TSignInContract {
  (params: { username: string; password: string }): Promise<
    TResult<TAuthenticable>
  >;
}

export interface TSignInWithGitHubContract {
  (): Promise<TResult<TAuthenticable>>;
}

export interface TSignOutContract {
  (): Promise<TResult<void>>;
}
