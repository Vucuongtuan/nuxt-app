<template>
   <div class="items-center p-6 size-full min-h-[440px] justify-center max-w-xl mx-auto">
            <div v-if="demo && typeof isImage === 'boolean'" class="w-full min-h-[440px] h-full relative flex flex-col items-center justify-center transition  border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <div class="w-full h-full  min-h-[440px]  flex justify-center items-center">
                <div class="h-auto  w-full relative ">
                <img v-if="isImage" :src="demo" alt="Preview Image" class="w-full h-full rounded-md object-contain" />
                  <video v-else :src="demo" controls class="w-full h-full object-contain rounded-md"></video>
                  <button @click="clearFile" class=" absolute bg-red-600 -top-2 -right-2 text-white px-1 py-1 rounded-full ">
                   <Close iconClass="w-4 h-4 "/>
                  </button> 
                 </div>  
                </div>
              </div>
            <div 
            v-else
            ref="dropzoneRef" 
            id="file"
            name="file"
            class=" flex justify-center relative  items-center size-full min-h-[440px] px-4 transition  border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
>
<p>Kéo thả hoặc chọn file tại đây</p>
<p class="absolute bottom-1 left-0 w-full text-center"> File tối đa 200MB</p>
            </div>
          </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Close from '@/assets/icons/Close.vue';
import Dropzone from 'dropzone';
const props = defineProps({
  demo: {
    type: String,
    required: true,
  },
  isImage: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['clearFile']);

// const dropzoneRef = ref<null | any>(null);

const clearFile = () => {
  emit('clearFile');
};

onMounted(() => {
  new Dropzone(dropzoneRef.value, dropzoneOptions);
});
</script>

<style>

</style>