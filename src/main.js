import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

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
       state.getData.push({id: 8,
        from: {id: 23,
            firstName: 'Bob',
            lastName: 'Greatlance',
            thumbnail: 'https://images.generated.photos/c_mH5kvsgrsGhrN5GhQIIRdIIvoHP6G2ujkTs4c8XFM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMTk5OTguanBn.jpg',},
        message: `Something not very far from that!`,
        date: '2020-04-07 10:03:45',})
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


app.use(VueAxios, axios)
app.use(Vuex)
app.use(store)
app.mount('#app')
