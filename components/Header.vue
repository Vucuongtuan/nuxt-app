<template>
  <header class="w-full h-[60px]">
  <div class="m-auto w-full max-w-[1500px] h-full flex items-center">
    <div class="w-1/5 h-full flex justify-center items-center space-x-2">
<NuxtLink to="/" class="">Logo</NuxtLink>
<NuxtLink to="/create"><FileAddOutlined /></NuxtLink>
    </div>
    <div class="w-3/5 h-full flex justify-center items-center">
    <Search/>
    </div>
    <div class="w-1/5 h-full  px-2 space-x-2">
      <Notification/>
      <SettingHeader/>
    </div>
  </div>
  </header>
</template>
<script lang="ts" setup>
</script>

<style>

</style>