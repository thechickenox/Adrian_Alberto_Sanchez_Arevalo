<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Correo:</label>
      <input v-model="email" type="email" required />
      <label for="password">Contraseña:</label>
      <input v-model="password" type="password" required />
      <button type="submit">Iniciar sesión</button>
      <span v-if="loginError" class="error-message">{{ loginError }}</span>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const loginError = ref('');
interface User {
  email: string;
  password: string;
}

const login = () => {
  const usersData: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    
  const foundUser = usersData.find((user: User) => user.email === email.value && user.password === password.value);

    if (foundUser) {
        alert('Inicio de sesión exitoso');
        router.push('/DB');
    } else {
        loginError.value = 'Credenciales incorrectas';
    }
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 0.5rem;
  display: block;
}
</style>
