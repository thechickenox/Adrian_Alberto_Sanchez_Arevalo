<template>
    <input v-model="checar" @change="completarProyecto" type="checkbox">
    <div>
      <p>{{ props.title }}</p>
      <p>{{ props.priority }}</p>
    </div>
    <button @click="eliminarProyecto">x</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Proyect } from '@/interfaces/Proyect';

const props = defineProps<Proyect>();
const emits = defineEmits(['Completar-Proyecto', 'Eliminar-Proyecto']);

const checar = ref(props.completed);

const completarProyecto = () => {
  emits('Completar-Proyecto', checar.value, props.id);
};

const eliminarProyecto = () => {
  emits('Eliminar-Proyecto', props.id);
};
</script>
