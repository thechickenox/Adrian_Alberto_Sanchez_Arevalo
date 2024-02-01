<script setup lang="ts">
import { ref } from 'vue';

const nombre = ref('');
const apellido = ref('');
const edad = ref(null);
const genero = ref('');
const otroGenero = ref('');
const nombreValido = ref(true);
const apellidoValido = ref(true);
const edadValida = ref(true);
let generoValido = ref('');

const validateNombre = () => {
  nombreValido.value = nombre.value.length >= 5 && nombre.value.length < 18;
};

const validateApellido = () => {
  apellidoValido.value = apellido.value !== nombre.value;
};

const validateEdad = () => {
  edadValida.value = edad.value !== null && edad.value > 0 && edad.value < 60;
};

const validateGenero = () => {
  generoValido.value = genero.value;
};

const submitForm = () => {
  const isNombreValid = nombre.value.length >= 5 && nombre.value.length < 18;
  const isApellidoValid = apellido.value !== nombre.value;
  const isEdadValid = edad.value !== null && edad.value > 0 && edad.value < 60;
  const isGeneroValid = genero.value !== '';
  const isOtroGeneroValid = genero.value === 'otro' ? otroGenero.value.trim() !== '' : true;

  if (isNombreValid && isApellidoValid && isEdadValid && isGeneroValid && isOtroGeneroValid) {
    generoValido.value = genero.value === 'otro' ? otroGenero.value.trim() : genero.value;
    alert(`Formulario enviado correctamente.`);
  } else {
    alert('Por favor, completa el formulario correctamente.');
  }
};
</script>
<template>
  <main>
    <div class="margen">
      <form @submit.prevent="submitForm">
        <label class="color" for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" @input="validateNombre">
        <span class="color" v-if="!nombreValido">El nombre debe tener 5 caracteres.</span>

        <br>

        <label  class="color" for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" @input="validateApellido">
        <span class="color" v-if="!apellidoValido">El apellido no debe ser igual al nombre.</span>

        <br>

        <label  class="color" for="edad">Edad:</label>
        <input type="number" id="edad" v-model="edad" @input="validateEdad">
        <span class="color" v-if="!edadValida">La edad debe ser mayor a 0 y menor a 60.</span>

        <br>

        <label  class="color" for="genero">Género:</label>
        <select id="genero" v-model="genero" @change="validateGenero">
          <option value="">Selecciona una opción</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        <input type="text" v-if="genero === 'otro'" v-model="otroGenero" placeholder="Ingrese otro género">

        <br>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </main>
</template>

<style scoped>

  .margen {
    text-align: center;
    margin-left: 50px;
    margin-right: auto;
    max-width: 800px; /* Ajusta el ancho máximo según tu preferencia */
    padding: 100px;
    background-color: #f0f0f0;
    border-radius: 8px;

  }

  .color {
    color: #333;
    font-weight: bold;
  }

  input,
  select {
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
  }

  button:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
</style>

