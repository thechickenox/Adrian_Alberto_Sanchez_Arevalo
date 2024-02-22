<template>
    <slot name="header"></slot>
    <form @submit.prevent="AgregarProyecto">
      <input :class="{'border-red': error}" v-model="newTask" placeholder="Necesito hacer..." type="text" @input="validationRequired">
      <select v-model="priority">
        <option value="alto" >Alto</option>
        <option value="medio" >Medio</option>
        <option value="bajo" selected>Bajo</option>
      </select>
    </form>
    <div class="container-Proyectos">
      <ProjectItem @complete-task="handleCompleteTask" @delete-task="handleDeleteTask" v-for="task in Proyectos" v-bind="task" :key="task.id" />
    </div>
    <div style="padding: 8px 8px;">
      <p v-if="!!totalTask">{{ taskCompleted }} / {{ totalTask }} tareas completadas</p>
      <p v-else>No tienes ninguna tarea</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Proyect } from '@/interfaces/Proyect';
import ProjectItem from './ProjectItem.vue';

const newTask = ref('')
const error = ref(false)
const priority = ref<'alto' | 'medio' | 'bajo'>('bajo')

const Proyectos = ref<Proyect[]>([
  
])

const taskCompleted = computed(() => {
  let ContarProyectos = 0
  for(let task of Proyectos.value) {
    if(task.completed) ContarProyectos++
  }
  return ContarProyectos
}) 

const totalTask = computed(() => {
  return Proyectos.value.length
})

const handleCompleteTask = (value: boolean, id: number) => {
  const index = Proyectos.value.findIndex((task) => task.id === id)
  if(index !== -1){
    Proyectos.value[index].completed = value
  }
}

const AgregarProyecto = () => {
  validationRequired()

  if(error.value) return
  const newId = Proyectos.value.length === 0 ? 0 : Proyectos.value[Proyectos.value.length - 1].id + 1
  const dataTask: Proyect = {
    id: newId,
    title: newTask.value,
    completed: false,
    priority: priority.value || 'bajo',
  }
  Proyectos.value.push(dataTask)
  newTask.value = ''
  error.value = false
}

const handleDeleteTask = (id: number) => {
  const index = Proyectos.value.findIndex((task) => task.id === id)
  if(index !== -1){
    Proyectos.value.splice(index, 1)
  }
}

const validationRequired = () => {
  if(newTask.value.trim() === ''){
    error.value = true
    return
  }

  error.value = false
}
</script>
