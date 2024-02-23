<template>
  <section class="container-main">
    <slot name="header"></slot>
    <div>
      <ProjectItem @Completar-Proyecto="manejarCompletarProyecto" @Eliminar-Proyecto="manejarEliminarProyecto" v-for="proyecto in proyectos" v-bind="proyecto" :key="proyecto.id" />
    </div>
    <div>
      <p v-if="!!totalProyectos">{{ proyectosCompletados }} / {{ totalProyectos }} proyectos completados</p>
      <p v-else>No tienes ningún proyecto</p>
    </div>
    <form @submit.prevent="agregarProyecto">
      <input :class="{'border-red': error}" v-model="nuevoProyecto" type="text" @input="validarRequerido">
      <select v-model="prioridad">
        <option value="alto" >Alto</option>
        <option value="medio" >Medio</option>
        <option value="bajo" selected>Bajo</option>
      </select>
      <button type="submit">Agregar Proyecto</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Proyect } from '@/interfaces/Proyect';
import ProjectItem from './ProjectItem.vue';

const nuevoProyecto = ref('');
const error = ref(false);
const prioridad = ref<'alto' | 'medio' | 'bajo'>('bajo');
const proyectos = ref<Proyect[]>([]);

const proyectosCompletados = computed(() => {
  let contarProyectosCompletados = 0;
  for (let proyecto of proyectos.value) {
    if (proyecto.completed) contarProyectosCompletados++;
  }
  return contarProyectosCompletados;
});

const totalProyectos = computed(() => {
  return proyectos.value.length;
});

const manejarCompletarProyecto = (valor: boolean, id: number) => {
  const indice = proyectos.value.findIndex((proyecto) => proyecto.id === id);
  if (indice !== -1) {
    proyectos.value[indice].completed = valor;
  }
};

const agregarProyecto = () => {
  validarRequerido();

  if (error.value) return;
  const nuevoId = proyectos.value.length === 0 ? 0 : proyectos.value[proyectos.value.length - 1].id + 1;
  const datosProyecto: Proyect = {
    id: nuevoId,
    title: nuevoProyecto.value,
    completed: false,
    priority: prioridad.value || 'bajo',
  };
  proyectos.value.push(datosProyecto);
  nuevoProyecto.value = '';
  error.value = false;
};

const manejarEliminarProyecto = (id: number) => {
  const indice = proyectos.value.findIndex((proyecto) => proyecto.id === id);
  if (indice !== -1) {
    proyectos.value.splice(indice, 1);
  }
};

const validarRequerido = () => {
  if (nuevoProyecto.value.trim() === '') {
    error.value = true;
    return;
  }

  error.value = false;
};
</script>

<style scoped>

</style>
