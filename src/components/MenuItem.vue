<template>
  <div>
    <router-link :to="data.path">{{ data.name }}</router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const data = defineProps<{
  name: string;
  path: string;
}>();
</script>
