import type { FetchError } from "~/types/blog.types";

export const errorCallApi = (err: unknown): FetchError => {
  if (err instanceof Error) {
    return {
      msg: err.message,
      status: 500,
      err: err.toString(),
    };
  }
  return {
    msg: "Đã xảy ra lỗi",
    status: 500,
    err: JSON.stringify(err),
  };
};
