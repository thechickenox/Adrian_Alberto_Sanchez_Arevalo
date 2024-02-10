<template>
  <div>
    <input v-model="newValue" placeholder="Nuevo dato" />
    <button @click="addItem">Agregar</button>
    <h1>halo</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ItemForm',
  data() {
    return {
      newValue: '',
    };
  },
  methods: {
    addItem() {
      // Validación de tipo de dato
      if (this.newValue && typeof this.newValue === 'string') {
        this.$emit('add-item', {
          id: Date.now(), // Puedes generar IDs de manera más robusta
          value: this.newValue,
        });
        this.newValue = ''; // Limpiar el input después de agregar
      }
    },
  },
});
</script>
