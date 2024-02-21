<template>
  <div>
    <h2>Datos de Usuario</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Nombre</th>
          <th>Edad</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.nombre }}</td>
          <td>{{ user.edad }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface User {
  id: number;
  email: string;
  nombre: string;
  edad: string;

}

const users = ref<User[]>([]);

onMounted(() => {
  const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
  users.value = storedUsers;
});
</script>
