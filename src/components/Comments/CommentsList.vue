<template>
    <div>
      <button @click="clicked($event)">clickeame</button>
      <ul>
        <CommentItem
          @siuuu="clicked($event)"
          @see-god-bya="seeGodBya($event)"

          v-bind="comments"
          :id="index"
          v-for="(comments, index) in CommentsData"
          :key="index"
        />
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import CommentsData from '@/data/CommentsData'
  import CommentItem from './CommentItem.vue'

  const clicked =(event: any) =>{
    alert('AKSJDNANSDKJ' + event)
  }
  const seeGodBya = (data: any) => {
  alert('See God Bya: ' + data)
}
  

  
  </script>
  <style scoped></style>
  