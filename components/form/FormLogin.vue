<template>
  <UForm
    :schema="loginFormSchema"
    :state="dataForm"
    class="size-full space-y-4"
    @submit.prevent="onSubmit"
  >
    <UFormGroup label="Tên tài khoản" name="name_account">
      <UInput
        type="text"
        placeholder="Nhập tên tài khoản của bạn vào đây"
        icon="i-heroicons-user"
        size="lg"
        v-model="dataForm.name_account"
      />
    </UFormGroup>
    <UFormGroup label="Mật khẩu" name="password" class="relative mb-4">
      <UInput
        placeholder="Nhập mật khẩu của bạn vào đây"
        :icon="isShowPassword ? 'i-heroicons-lock-open' : 'i-heroicons-lock-closed'"
        size="lg"
        :type="isShowPassword ? 'text' : 'password'"
        v-model="dataForm.password"
      />
      <UIcon
        :name="isShowPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'"
        class="w-6 h-6 absolute right-3 top-2 cursor-pointer"
        @click="handleChangeShowPassword"
      />
    </UFormGroup>
    <p>
      <u>
        <NuxtLink to="/reset" class="text-sm"> Quyên mật khẩu </NuxtLink>
      </u>
    </p>
    <UButton type="submit" class="py-2" block :disabled="loading">{{
      loading ? "Loading ..." : " Đăng nhập "
    }}</UButton>
    <!-- svg-spinners:3-dots-bounce -->
    <p class="text-center text-[15px] font-medium py-2">Hoặc</p>
    <div class="w-full space-y-2">
      <UButton class="" block>Facebook</UButton>
      <UButton class="" block>Google</UButton>
    </div>
  </UForm>
</template>

<script setup lang="ts">
  import { loginUser } from "@/api/auth.api";
  import { z } from "zod";
  import type { FormSubmitEvent } from "#ui/types";
  import { loginFormSchema } from "@/schemas/LoginFormSchema";
  import type { ResponseAuth } from "~/types/user.types";
  import type { FetchError } from "~/types/blog.types";
  const toast = useToast();
  const loading = ref<boolean>(false);
  interface IDataFormDto {
    name_account: string;
    password: string;
  }
  const dataForm = reactive<IDataFormDto>({
    name_account: "",
    password: "",
  });

  const isShowPassword = ref<boolean>(false);
  const handleChangeShowPassword = () => (isShowPassword.value = !isShowPassword.value);

  async function onSubmit(event: FormSubmitEvent<z.output<typeof loginFormSchema>>) {
    loading.value = true;
    try {
      const expirationDate = new Date(Date.now() + 5 * 60 * 60 * 1000);
      const cookie = useCookie("access_token");
      const response = await loginUser(event.data.name_account, event.data.password);
      if (response.status !== 200) {
        toast.add({
          title: "Đăng nhập thất bại !",
          color: "red",
          description: response.err || response.msg,
          icon: "i-heroicons-x-mark w-8 h-8 mt-1",
        });
        return;
      }
      toast.add({
        title: "Đăng nhập thành công",
        description: response.err || response.msg,
        icon: "i-heroicons-check w-8 h-8 mt-1",
      });
      cookie.value = response.access_token;
      navigateTo("/home");
      return;
    } catch (err) {
      toast.add({
        title: "Đăng nhập thất bại !!",
        color: "red",
        description: JSON.stringify(err),
        icon: "i-heroicons-x-mark w-8 h-8 mt-1",
      });
      return;
    } finally {
      loading.value = false;
    }
  }
</script>
