export type ResponseAuth<T> = {
  status: number;
  msg: string;
  err?: string;
  data?: T;
  access_token?: string;
  exp?: number;
};
