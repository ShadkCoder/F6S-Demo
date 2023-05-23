<template>
  <div class="ca-cont">
    <div>
        <MessageEntry v-for='item in  mockData' :mockData ="item"/>
    </div>
  </div>
</template>

<script setup>
import MessageEntry from './MessageEntry.vue'
import {ref,onMounted,inject,computed} from 'vue'
import { useStore } from 'vuex'
import {conversation} from '../mockapi.js'
const store = useStore()

let mockData = JSON.parse(conversation)

onMounted(() => {
store.dispatch('setconversation')
console.log(store.state.getData)
    })

let newdata = store.getters.fetchData
console.log(newdata) 
    
</script>

<style scoped>
.ca-cont{
    border:1px solid #000;
    min-width: 500px;
    max-width:600px;
    max-height: 400px;
    overflow: auto;
    padding:12px;
}

</style>
