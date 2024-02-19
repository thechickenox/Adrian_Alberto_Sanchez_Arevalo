<template>

  <ul class="campo-formulario">
    <li class="input-formulario color" v-for="item in data" :key="item.id" @click="handleItemClick(item.id)"
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

<style scoped>
.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.formulario {
  width: 600px;
  background: linear-gradient(to right, #ffffff 12%, #ffffff 90%, #ffffff 100%);
  padding: 30px;
  border-radius: 20px;
}

.campo-formulario {
  margin-bottom: 20px;
}

.centrar-boton {
  text-align:right;
}

.color {
  color: #333;
}

.input-formulario {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 9px;
}
.boton-enviar {
  background-color: rgb(193, 165, 10);
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

}

</style>

