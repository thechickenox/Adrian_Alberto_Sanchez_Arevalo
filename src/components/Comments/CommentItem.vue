<template>
    <div class="card">
        <span>
            <h3>#{{ props.id+1 }}</h3>
            <h2>{{ props.date }}</h2>
        </span>
        <span>
            <h2>{{ props.title }}</h2>
            <p>{{ props.body }}</p>
        </span>     

        <button  v-on:click="clicked()">siuu</button>
        <button v-on:click="seeGodBya()">See God Bya</button>

    </div>
</template>
<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment';
    const props = defineProps<IComment>();
        const emits = defineEmits(['siuuu', 'see-god-bya']);

   
    const clicked = () => [
        emits('siuuu',props.id)
    ]
    const seeGodBya = () => {
     emits('see-god-bya',props.date)
}


</script>
<style scoped>
.card {
    border: 1px solid red;
    padding: 10px;
    margin: 5px;
}
</style>