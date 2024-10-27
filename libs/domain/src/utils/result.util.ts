export type TLeft<R> = {
  result: R;
  error: never;
  isError: false;
};

export type TRight<E> = {
  error: E;
  result: never;
  isError: true;
};

export type TResult<R, E = Error> = TLeft<R> | TRight<E>;

export const toResult = <R, E = Error>(result: R, error: E): TResult<R, E> => {
  if (typeof error !== 'undefined') {
    return {
      error,
      isError: true,
    } as TRight<E>;
  }

  return {
    result,
    isError: false,
  } as TLeft<R>;
};
