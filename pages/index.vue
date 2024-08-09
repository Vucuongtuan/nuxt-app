<template>
  <section class="w-full h-auto min-h-[800px] flex" aria-label="Hero view">
    <Hero />
  </section>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "layout-landing-page",
    title: "Home",
    description: "Home page",
    image:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  });

  onMounted(() => {
    const cookie = useCookie("access_token");
    if (cookie.value) {
      navigateTo("/home");
    }
  });
</script>
