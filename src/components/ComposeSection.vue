<template>
  <div class="comp-section">
    <textarea class="cs-text" rows="" cols="" v-model='textval'></textarea>
    <button class="cs-send" @click='sendtext'>Send</button>
  </div>
</template>

<script setup>
let textval = ''
let sendtext = () => {
    store.commit('setConverseData',textval)
}
</script>

<style scoped>
.comp-section{
display:flex;
}
.cs-text{
    width:540px;
}
.cs-send{
    width:60px;
}

</style>
