<template>
  <Header />
  <slot />
</template>

<script lang="ts" setup>
  import Header from "@/components/Header.vue";
  onBeforeMount(() => {
    const cookie = useCookie("access_token");
    console.log(typeof cookie.value);
    if (typeof cookie.value === null || cookie.value === undefined) {
      return navigateTo("/");
    }
  });
</script>

<style></style>
