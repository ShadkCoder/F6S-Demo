<template>
  <ul>
    <li v-if="info.length > 0" v-for='item in info' :key='item.id'>
        {{item.title}}
    </li>
  </ul>
  <div>{{newUser}}</div>
</template>

<script setup>
import axios from 'axios'
import {ref,onMounted,inject} from 'vue'
import { useStore } from 'vuex'
const store = useStore()
let info = ref({})
let newUser = inject ('user','default user')
onMounted(() => {
store.commit('increment')

axios.get('https://dummyjson.com/products')
      .then(response => {
        info.value = response.data.products})
      .catch(err => {
        console.log(err);
      });
    })
</script>


