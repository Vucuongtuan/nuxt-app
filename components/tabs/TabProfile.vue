<template>
  <div v-if="props.action">
    <p>
      Đã tạo
    </p>
  </div>
  <div v-else>
    <p>Đã lưu</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  action: {
    type: Boolean,
    default:false,
  },
});
</script>


