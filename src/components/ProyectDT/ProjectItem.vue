<template>
    <input :value="props.completed" 
    @change="emits('CompletarProyect',($event.target as HTMLInputElement).checked,
     props.id)" type="checkbox" name="" id="">
    <div>
      <p>{{ props.title }}</p>
      <p>{{ props.priority }}</p>
    </div>
    <button @click="emits('EliminarProyect', $props.id)">x
    </button>
</template>

<script setup lang="ts">
import type { Proyect } from '@/interfaces/Proyect';

const props = defineProps<Proyect>()
const emits = defineEmits(['CompletarProyect', 'EliminarProyect'])
</script>


