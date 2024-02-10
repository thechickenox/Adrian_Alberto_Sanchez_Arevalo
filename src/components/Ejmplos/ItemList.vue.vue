<template>
  <ul>
    <li v-for="item in data" :key="item.id" @click="handleItemClick(item.id)">
      {{ item.value }}
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ItemList',
  props: {
    data: {
      type: Array as () => Array<{ id: number; value: string }>,  // Importación de tipo única
      required: true,
    },
  },
  methods: {
    handleItemClick(id: number) {
      this.$emit('item-clicked', id);
    },
  },
});
</script>
