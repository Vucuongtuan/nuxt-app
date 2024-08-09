<template>
  <div class="size-full min-h-[600px] " >
    <div class="flex md:flex-row flex-col  size-full justify-center items-start p-4">
      <div class="flex-1 md:w-1/2 w-3/4 h-full md:min-h-[440px]   items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
        <div class="relative w-full min-h-[440px]">
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
     
        </div>
      </div>
      <div class="w-full  md:w-1/2 h-full space-y-5 flex flex-col justify-center px-4">
    <div class="w-full">
      <label class="text-sm font-medium" for="Tiêu đề">Tiêu đề</label>
      <p class="mt-1">
        <input id="title" name="title" v-model="data.title" class="px-1 border-2 bg-transparent p-2 w-full h-[40px] rounded-md outline-none" />
      </p>
    </div>
    <div class="w-full">
      <label class="text-sm font-medium" for="Mô tả">Mô tả</label>
      <p class="mt-1">
        <textarea id="description" name="description" v-model="data.description" class="px-1 border-2 bg-transparent p-2 w-full h-[80px] resize-none rounded-md outline-none"></textarea>
      </p>
    </div>
    <div class="w-full">
      <label class="text-sm font-medium" for="Liên kết">Liên kết</label>
      <p class="mt-1">
        <input id="link" name="title" v-model="data.link" class="px-1 border-2 bg-transparent p-2 w-full h-[40px] rounded-md outline-none" />
      </p>
    </div>
    <div class="w-full">
      <label class="text-sm font-medium" for="Từ khóa">Từ khóa</label>
      <p class="mt-1">
        <InputFormCreate @addTag="addTag" :hashtags="data.hashtags" @removeTag="removeTag" />
      </p>
    </div>
     <div class="">
    <button type="submit" @click="submitForm" class="bg-red-600 w-[200px] h-[40px] rounded-full text-white">Tạo bài viết</button>
  </div>
  </div>
</div>
  </div>
</template>
<script setup lang="ts">
import Close from "@/assets/icons/Close.vue"
import { ref, onMounted } from 'vue';
import 'dropzone/dist/dropzone.css';
import Dropzone from "dropzone";
import { createBlog } from '@/api/blog.api';
import type { Blogs, ResponseApi, ResponseApiPost } from '@/types/blog.types';
const dropzoneRef = ref<null | any>(null);

const isImage = ref<null | boolean>(null);
interface IData  {
  title: string;
  description: string;
  hashtags: string[];
  link?:string;
  file: File | null;
}
const demo = ref<HTMLElement | null >(null)
const data = ref<IData>(
  {
    title: "",
    description: "",
    hashtags: [],
    link:"",
    file: null,
  }
)
const clearFile = () => {
  data.value.file = null;
  isImage.value = null;
  demo.value = null;
  if (dropzoneRef.value && dropzoneRef.value.dropzone) {
    dropzoneRef.value.dropzone.removeAllFiles(true);
  }
 
};

const submitForm = async () =>{
  console.log("click")
try{
  const res = await createBlog(data.value);
  console.log(res)
// if (res.status !== 200){
// return
// }
// return
}catch(err){
  console.log("err :",err )
}
}

const dropzoneOptions = {
  url: '#',
  autoProcessQueue: false,
  acceptedFiles: 'image/*,video/*',
  maxFiles: 1,
  maxFilesize: 200,
  init: function() {
    this.on('addedfile', (file) => {
      if (file.size > 200 * 1024 * 1024) {
        this.removeFile(file);
        alert('File size exceeds the limit of 200MB.');
      } else {
        data.value.file = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          demo.value = e.target?.result as string;
          data.value.type = file.type.startsWith("image/") ? "image" : "video";
          isImage.value = file.type.startsWith("image/");
        };
        reader.readAsDataURL(file);
      }
    });
    this.on('maxfilesexceeded', function(file) {
      this.removeAllFiles();
      this.addFile(file);
    });
  },
};
watch(() => data.value.file, (newFile, oldFile) => {
  if (newFile === null) {
    setTimeout(() => {
      if (dropzoneRef.value) {
        new Dropzone(dropzoneRef.value, dropzoneOptions);
      }
    }, 0);
  }
});
onMounted(() => {
  nextTick(() => {
    new Dropzone(dropzoneRef.value, dropzoneOptions);
  })
});
// onMounted(() => {
//   const dropzone = new Dropzone(dropzoneRef.value, {
//     url: '#', 
//     autoProcessQueue: false,
//     acceptedFiles: 'image/*,video/*',
//     maxFiles: 1, 
//     maxFilesize:200,
//     init: function() {
//       this.on('addedfile', (file) => {
//         if (file.size > 200 * 1024 * 1024) {
//           this.removeFile(file);
//           alert('File size exceeds the limit of 200MB.');
//         } else {
//           data.value.file = file
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           demo.value = e.target.result;
//           isImage.value = file.type.startsWith("image/") ? true : false
//         };
//         reader.readAsDataURL(file);
//       }
//       });
//       this.on('maxfilesexceeded', function(file) {
//         this.removeAllFiles();
//         this.addFile(file);
//       });
//     },
//   });
// });
const addTag = (value:string) =>{
data.value.hashtags.push(value)
}
const removeTag = (index:number) => {
  data.value.hashtags.splice(index, 1);
};


</script>

<style>
@import 'dropzone/dist/dropzone.css';

.dropzone {
  position: relative;

}
.dropzone .dz-message {
  display: none !important;
}

.dropzone img,
.dropzone video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.dz-progress{
  display:none;
}
.dz-preview{
  width:100%;
  height: 100%;
}
</style>
