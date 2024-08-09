export type ResponseApi<T> = {
  status: number;
  msg: string;
  err?: string;
  data?: T;
};
export type ResponseApiPost = {
  status: number;
  msg: string;
  err?: string;
};
export type FetchError = {
  msg: string;
  status?: number;
  err?: string;
};
export type Blogs = {
  _id?: string;
  title: string;
  description: string;
  slug?: string;
  file: string | File | null;
  like?: number;
  link?: string | undefined;
  hashtags: string[];
  type: string;
  dislike?: number;
  action: "public" | "draft";
  share?: number;
  created_at?: string;
  updated_at?: string;
};
