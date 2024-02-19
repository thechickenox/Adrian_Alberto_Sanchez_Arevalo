<template>
  <div>
    <div class="campo-formulario">
      <input class="input-formulario" v-model="newValue" placeholder="Nuevo dato" />
    </div>
    <div class="campo-formulario centrar-boton">
      <button class="boton-enviar" @click="addItem">Agregar</button>
    </div>

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
      if (this.newValue && typeof this.newValue === 'string') {
        this.$emit('add-item', {
          id: Date.now(),
          value: this.newValue,
        });
        this.newValue = '';
      }
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
  border: 1px solid #ccc;
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

