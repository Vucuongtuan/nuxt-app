<template>
 <form aria-label="form tìm kiếm" class="size-full relative">
      <Icon name="uil:search" style="color: black" class="size-5 absolute left-4 top-5" />
      <input type="text" placeholder="Tìm kiếm ..." class="w-full outline-none h-[60px]  rounded-full pl-14 pr-[160px]">
  <div class="w-[150px] h-full  absolute top-0 right-0 rounded-full p-2">
  <select class="size-full rounded-full outline-none px-4 hover:bg-gray-100">
    <option value="all">Tất cả</option>
    <option value="image">Hình ảnh</option>
    <option value="video">Video</option>
  </select>
  </div>
    </form>
</template>

<script lang="ts" setup>



</script>

