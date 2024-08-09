export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  return {
    provide: {
      globalEnv: {
        baseUrlApi: runtimeConfig.public.baseUrlApi,
        baseUrlApiImage: runtimeConfig.public.baseUrlApiImage,
      },
    },
  };
});
const useGlobalEnv = () => {
  const globalEnv = inject<{
    baseUrlApi: string;
    baseUrlApiImage: string;
  }>("globalEnv");
  if (!globalEnv) {
    throw new Error(
      "useGlobalEnv must be used within a component that uses the env-config plugin",
    );
  }
  return globalEnv;
};
export const getGlobalEnv = () => {
  const { baseUrlApi, baseUrlApiImage } = useGlobalEnv();
  return { baseUrlApi, baseUrlApiImage };
};
