<script setup lang="ts">
import { ref } from 'vue';
import ItemList from './components/Ejmplos/ItemList.vue.vue';
import ItemForm from './components/Ejmplos/ItemForm.vue';

interface Item {
  id: number;
  value: string;
}

const items = ref<Item[]>([
  { id: 1, value: 'Ejemplo 1' },
  { id: 2, value: 'Dato 2' },
]);

const handleItemClick = () => {
};

const addItem = (newItem: Item) => {
  if (newItem.value && typeof newItem.value === 'string') {
    if (!items.value.some((item) => item.value === newItem.value)) {
      items.value.push(newItem);
    }
  }
};
</script>

<template>
  <div class="centrado">
    <div class="contenedor-formulario">
      <div class="formulario">
        <h1 class="color">Lista de Datos</h1>
        <ItemList :data="items" @item-clicked="handleItemClick" />
        <ItemForm @add-item="addItem" />
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
