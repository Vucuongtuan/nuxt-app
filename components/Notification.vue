<template>
<a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link p-2 rounded-full hover:bg-slate-600 cursor-pointer" @click.prevent>
      <BellOutlined :style="{ fontSize: '24px' }"/>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
import type { MenuProps } from 'ant-design-vue';

const action = ref<boolean>(false)
  const handleMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
</script>
