<template>
  <ul>
    <li v-for="item in data" :key="item.id" @click="handleItemClick(item.id)"
      :style="{ color: item.textColor, backgroundColor: item.bgColor }">
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
      type: Array as () => Array<{ id: number; value: string; textColor?: string; bgColor?: string }>,
      required: true,
    },
  },
  methods: {
    handleItemClick(id: number) {
      this.data.forEach((item) => {
        if (item.id === id) {
          item.textColor = this.getRandomColor();
          item.bgColor = this.getRandomColor();
        }
      });
      this.$emit('item-clicked', id);
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
});
</script>
