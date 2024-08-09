import type { ResponseAuth } from "~/types/user.types";
import { errorCallApi } from "./errorCall";
import type { FetchError } from "~/types/blog.types";

/* @desc Login users
   @param name_account:string and password:string
   @return {Promise<ResponseAuth<Blogs[]> | FetchError>} - Promise that resolves to either a ResponseApi<Blogs[]> object or a FetchError object
*/

export type LoginResponse = ResponseAuth<null> & {
  access_token: string;
};

export const loginUser = async (
  name_account: string,
  password: string,
): Promise<ResponseAuth<null>> => {
  const runtimeConfig = useRuntimeConfig();
  try {
    const response: any = await $fetch(`${runtimeConfig.public.baseUrlApi}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name_account, password }),
    });
    return response;
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      msg: "Lỗi rồi !",
      err: JSON.stringify(err),
    };
  }
};
