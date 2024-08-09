<template>
  <div class="group  rounded-xl overflow-hidden">
    <div class="tags-input  ounded-lg ">
      <ul class="flex flex-wrap border-2 p-2">
        <li class=" p-2 flex flex-wrap gap-2">
          <div v-for="(hashtag,index) in hashtags" :key="index" @click="" class="border-2 w-auto flex justify-center items-center rounded-md px-1 py-1">
            {{ hashtag }} 
            <Close @click="emit('removeTag',index)" iconClass="ml-2 cursor-pointer h-5 w-5 text-white rounded-full bg-gray-700"/>
          </div>
          <input type="text" v-model="newTag" @keyup.enter.prevent="addTag"
          class=" bg-transparent border-none outline-none w-auto"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Close from '@/assets/icons/Close.vue';
const newTag = ref("")
const { hashtags } = defineProps({
  hashtags: {
    type: Array,
  },
})
const emit = defineEmits(['addTag','removeTag']);
const addTag = () => {
  const trimmedTag = newTag.value.trim();
  if (trimmedTag !== '' && !hashtags.includes(trimmedTag)) {
    emit('addTag', newTag.value);
   
  }
  newTag.value = '';
};

</script>
