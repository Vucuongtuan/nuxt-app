<template>
<div class="px-2 pt-2 size-full bg-red-300">
    <div class="grid-container bg-yellow-200">
        <div v-for="i in 50" :key="i" class="grid-item bg-blue-300"> 
<div v-for="blog in data" :key="blog.data._id" class="w-full h-full">
  <img :src="blog.image" alt="Image"/> 
</div>
        </div>
</div>
</div>
</template>

<script lang="ts" setup>
import { getBlogsAll } from '~/api/blog.api';
const page = ref<number>(1)
const config = useRuntimeConfig()
const { data, error, status } = useAsyncData('blogs', async () => {
  const response = await getBlogsAll(1);
  console.log("res : " + response);
  return response;
});
// const {data,status} =  useAsyncData('blogs',()=> getBlogsAll(page.value)) 
console.log("========data=========" + status)
console.log(data)
// console.log("========pending======")
// console.log(pending)
console.log("========error=======")
console.log(error)
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
}
.grid-item {
  position: relative;
  overflow: hidden;
  height: auto;
  min-height: 155px;
  max-height:527px;
  width: 238px;
  border-radius:10px;
  margin:auto;

}

.grid-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

</style>