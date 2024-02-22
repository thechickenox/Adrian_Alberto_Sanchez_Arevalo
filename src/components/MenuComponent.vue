<!-- TuComponentePrincipal.vue -->
<template>
    <div>
      <MenuItem
        v-for="route in routerView"
        :key="route.path"
        :name="route.name ? route.name.toString() : ''"
        :path="route.path || ''"
      ></MenuItem>
    </div>
  </template>
  
  <script setup lang="ts">
  import MenuItem from './MenuItem.vue';
  import router from '@/router/index';
  
  const routerView = router.options.routes;
  </script>
  