import { z } from "zod";

export const loginFormSchema = z.object({
  name_account: z.string().nonempty("Tên tài khoản không được để trống"),
  password: z
    .string()
    .nonempty("Mật khẩu không được để trống")
    .regex(/\d/, "Mật khẩu phải chứa ít nhất một số"),
  // .regex(/[a-zA-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái")
});
