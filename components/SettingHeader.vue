<template>
   <a-avatar size="large" :style="{ backgroundColor: color, verticalAlign: 'middle' }" :gap="gap">
    {{ avatarValue }}
  </a-avatar>
</template>

<script lang="ts" setup>
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const avatarValue = ref(UserList[0]);
const color = ref(colorList[0]);

const GapList = [4, 3, 2, 1];
const gap = ref(GapList[0]);
</script>

<style>

</style>