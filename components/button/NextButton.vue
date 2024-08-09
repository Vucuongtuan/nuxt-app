<template>
  <UButton color="indigo" variant="solid">Trải nghiệm ngay</UButton>
</template>

<script lang="ts" setup>
  const props = defineProps({
    color: {
      type: String,
    },
    variant: {
      type: String,
      default: "solid",
    },
  });
</script>
