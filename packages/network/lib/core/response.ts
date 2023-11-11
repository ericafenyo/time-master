export type Failure = {
  code: string;
  message: string;
  status: number;
};

export type Success<T> = {
  data: T;
  message: string;
  status: number;
};

export type Response<T> = Success<T> | Failure;
