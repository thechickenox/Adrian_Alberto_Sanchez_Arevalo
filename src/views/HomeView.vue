<script setup>
import { ref, computed } from 'vue';

const nombre = ref('');
const apellido = ref('');
const edad = ref(null);
const genero = ref('');
const otroGenero = ref('');
const nombreValido = ref(true);
const apellidoValido = ref(true);
const edadValida = ref(true);
const generoValido = ref(true);

const validateNombre = () => {
  nombreValido.value = nombre.value.length === 5;
};

const validateApellido = () => {
  apellidoValido.value = apellido.value !== nombre.value;
};

const validateEdad = () => {
  edadValida.value = edad.value !== null && edad.value > 0 && edad.value < 60;
};

const validateGenero = () => {
  generoValido.value = genero.value === 'masculino' || genero.value === 'femenino' || (genero.value === 'otro' && otroGenero.value.trim() !== '');
};

const formInvalid = computed(() => !nombreValido.value || !apellidoValido.value || !edadValida.value || !generoValido.value);

const submitForm = () => {
  if (formInvalid.value) {
    alert('Por favor, completa el formulario correctamente.');
  } else {
    const generoFinal = genero.value === 'otro' ? otroGenero.value.trim() : genero.value;
    alert(`Formulario enviado correctamente.`);
  }
};
</script>

<template>
  <main>
    <form @submit.prevent="submitForm">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" @input="validateNombre">
      <span v-if="!nombreValido">El nombre debe tener 5 caracteres.</span>

      <br>

      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="apellido" @input="validateApellido">
      <span v-if="!apellidoValido">El apellido no debe ser igual al nombre.</span>

      <br>

      <label for="edad">Edad:</label>
      <input type="number" id="edad" v-model="edad" @input="validateEdad">
      <span v-if="!edadValida">La edad debe ser mayor a 0 y menor a 60.</span>

      <br>

      <label for="genero">Género:</label>
      <select id="genero" v-model="genero" @change="validateGenero">
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>
      <input type="text" v-if="genero === 'otro'" v-model="otroGenero" placeholder="Ingrese otro género">
      <span v-if="!generoValido">Por favor, selecciona un género válido.</span>

      <br>

      <button type="submit" :disabled="formInvalid">Enviar</button>
    </form>
  </main>
</template>

<style scoped>
/* Agrega estilos si es necesario */
</style>
