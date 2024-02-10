<template>
  <div>
    <h1>Lista de Datos</h1>
    <item-list :data="items" @item-clicked="handleItemClick" />
    <item-form @add-item="addItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemList from './components/Ejmplos/ItemList.vue.vue';  // Corregir la ruta del archivo
import ItemForm from './components/Ejmplos/ItemForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    ItemList,  // Asegurarse de incluir estos componentes en la sección 'components'
    ItemForm,
  },
  data() {
    return {
      items: [
        { id: 1, value: 'Dato 1' },
        { id: 2, value: 'Dato 2' },
        // ... Agrega más datos según sea necesario
      ],
    };
  },
  methods: {
    handleItemClick(id: number) {
      // Lógica para cambiar el color de texto y fondo
      // Puedes implementar esto según tus necesidades
    },
    addItem(newItem: { id: number; value: string }) {
      // Validación de tipo de dato
      if (newItem.value && typeof newItem.value === 'string') {
        // Evitar la duplicación de datos
        if (!this.items.some((item) => item.value === newItem.value)) {
          this.items.push(newItem);
        }
      }
    },
  },
});
</script>
