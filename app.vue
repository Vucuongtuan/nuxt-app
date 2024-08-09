<template>
  <NuxtLayout>
    <div class="min-h-screen overflow-hidden">
      <NuxtPage />
    </div>
  </NuxtLayout>
  <!-- <NuxtWelcome /> -->
  <UNotifications class="cursor-pointer" />
  <NuxtRouteAnnouncer />
</template>

<script setup>
  import Header from "~/components/Header.vue";
</script>
<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
