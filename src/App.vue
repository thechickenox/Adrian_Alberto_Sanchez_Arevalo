<script lang="ts">
import { defineComponent } from 'vue';
import ItemList from './components/Ejmplos/ItemList.vue.vue';
import ItemForm from './components/Ejmplos/ItemForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    ItemList,
    ItemForm,
  },
  data() {
    return {
      items: [
        { id: 1, value: 'Ejemplo 1' },
        { id: 2, value: 'Dato 2' },
      ],
    };
  },
  methods: {
    handleItemClick() {
    },
    addItem(newItem: { id: number; value: string }) {
      if (newItem.value && typeof newItem.value === 'string') {
        if (!this.items.some((item) => item.value === newItem.value)) {
          this.items.push(newItem);
        }
      }
    },
  },
});
</script>


<template>
  <div class="centrado">
    <div class="contenedor-formulario">
      <div class="formulario">
        <h1 class="color">Lista de Datos</h1>
        <item-list :data="items" @item-clicked="handleItemClick" />
        <item-form @add-item="addItem" />
      </div>
    </div>
  </div>
</template>



<style scoped>
.contenedor-formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.tama {
  width: 356px;
}
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
  text-align: center;
}

.color {
  color: #333;
}

.input-formulario {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 9px;
}

.mensaje-error {
  color: red;
  font-size: 12px;
}

.boton-enviar {
  background-color: #4CAF50;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

}

.boton-enviar:hover {
  background-color: #45a049;
}
</style>
