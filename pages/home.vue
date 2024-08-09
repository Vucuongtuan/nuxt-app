<template>

  <section class="w-full h-auto min-h-[800px] flex " aria-label="Hero view">
     <!-- <ListImage/> -->
     <!-- {{res}} -->
  </section>
 </template>
 
 <script setup lang="ts">

definePageMeta({
   layout:"default-layout",
})
 import ListImage from "@/components/image/ListImage.vue"
 import { getBlogsAll } from "~/api/blog.api";
 const runtimeConfig = useRuntimeConfig();
 
//  const res = await getBlogsAll(1)
 // const {data :blogs} = await useAsyncData('blogs',()=> getBlogsAll(1))
 </script>
 
 