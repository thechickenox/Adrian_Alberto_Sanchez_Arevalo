<template>
  <div class="centrado margen">
    <div class="contenedor-formulario-imagen">
      <form @submit.prevent="submitForm" class="formulario">
        <div class="campo-formulario">
          <label class="color" for="nombre">Nombre:</label>
          <input type="text" id="nombre" class="input-formulario" v-model="nombre" @input="validateNombre">
          <span class="mensaje-error" v-if="!nombreValido">El nombre debe tener entre 5 y 18 caracteres.</span>
        </div>

        <div class="campo-formulario">
          <label class="color" for="edad">Edad:</label>
          <input type="number" id="edad" class="input-formulario" v-model.number="edad" @input="validateEdad">
          <span class="mensaje-error" v-if="!edadValida">La edad debe ser mayor a 0 y menor a 60.</span>
        </div>

        <div class="campo-formulario">
          <label class="color" for="email">Correo Electrónico:</label>
          <input type="email" id="email" class="input-formulario" v-model="email" @input="validateEmail">
          <span class="mensaje-error" v-if="!emailValido">Introduce un correo electrónico válido.</span>
        </div>

        <div class="campo-formulario">
          <label class="color" for="password">Contraseña:</label>
          <input type="password" id="password" class="input-formulario" v-model="password" @input="validatePassword">
          <span class="mensaje-error" v-if="!passwordValida">La contraseña debe tener al menos 6 caracteres.</span>
        </div>

        <div class="campo-formulario centrar-boton">
          <button type="submit" class="boton-enviar">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface User {
  email: string;
  nombre: string;
  edad: number;
  password: string;
}

const nombre = ref('');
const edad = ref<number>(0);
const email = ref('');
const password = ref('');
const nombreValido = ref(true);
const edadValida = ref(true);
const emailValido = ref(true);
const emailExistente = ref(false);
const passwordValida = ref(true);

const validateNombre = () => {
  nombreValido.value = nombre.value.length >= 5 && nombre.value.length <= 18;
};

const validateEdad = () => {
  edadValida.value = edad.value > 0 && edad.value < 60;
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailValido.value = emailRegex.test(email.value);
  // Validar si el correo ya existe
  validateEmailExistence();
};

const validateEmailExistence = () => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  emailExistente.value = users.some((user: User) => user.email === email.value);
};

const validatePassword = () => {
  passwordValida.value = password.value.length >= 6;
};

const submitForm = () => {
  const isNombreValid = nombreValido.value;
  const isEdadValid = edadValida.value;
  const isEmailValid = emailValido.value && !emailExistente.value;
  const isPasswordValid = passwordValida.value;

  if (isNombreValid && isEdadValid && isEmailValid && isPasswordValid) {
    const userData: User = { nombre: nombre.value, edad: edad.value, email: email.value, password: password.value };
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    users.push(userData);

    localStorage.setItem('users', JSON.stringify(users));

    alert(`Formulario enviado correctamente.`);
  } else if (emailExistente.value) {
    alert('El correo electrónico ya está registrado.');
  } else {
    alert('Por favor, completa el formulario correctamente.');
  }
};
</script>


<style scoped>
/* Tus estilos específicos aquí */
</style>
