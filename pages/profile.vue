<template>
 <section class=" w-full h-auto min-h-[200px] max-h-[440px] " aria-label="Thông tin cá nhân">
   <div class="size-full min-h-[400px] flex-col flex justify-center items-center">
    <div class=" size-32 rounded-full overflow-hidden">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt=""
      class="size-full object-cover"
      />
    </div>
    <h1 class="py-2">Name</h1>
    <p>@Email</p>
    <p>Follower | Follow | Blog</p>
    <p>Link</p>
   </div>
</section>
<section class="w-full flex flex-col  justify-center items-center h-[60px]" aria-label="Button danh sách bài đã lưu và đã tạo">
  <div class="flex justify-center  pb-2 items-center space-x-4">
    <button @click="setIsAction(false)" class="px-4 py-1 bg-red-600 font-medium rounded-full">Đã lưu</button>
    <button @click="setIsAction(true)" class="px-4 py-1 bg-red-600 font-medium rounded-full">Đã tạo</button>
  </div>
  <TabProfile :action="isAction"/>
</section>
</template>

<script lang="ts" setup>
import TabProfile from "@/components/tabs/TabProfile.vue"

const isAction = ref<boolean>(false)


const setIsAction = (type :boolean) =>{
  isAction.value = type
}
</script>

<style>

</style>