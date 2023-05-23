import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      getData: [],
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setConverseData(state,payload){
       state.getData.push(payload)
    }
  },
  actions:{
    async setconversation(state,payload){
        const converseData = await fetch('/mockapi.js')
        /* const cd = await converseData.json()
        state.commit("setConverseData" , cd) */
        state.commit("setConverseData" , converseData)
    }
  },
  getters:{
    fetchData: state => state.getData 
  }
})



const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(Vuex)
app.use(store)
app.mount('#app')
