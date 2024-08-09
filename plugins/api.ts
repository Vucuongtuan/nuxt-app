export default defineNuxtPlugin({
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const api = $fetch.create({
      baseURL: runtimeConfig.public.baseUrlApi, // useRuntimeConfig().public.apiBaseUrl
    });

    return {
      provide: {
        api,
      },
    };
  },
});
