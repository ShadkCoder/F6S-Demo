<template>
  <div class="me-wrap" :class="{ 'main-user': mockData.from.id == 23 }">
    <img class="me-icon" src="../assets/circle-thumb.png">
    <div class="me-bubble">{{mockData.message}}</div>
  </div>
</template>

<script setup>
const props = defineProps({
    mockData:{
        required:true
    }
})
</script>

<style scoped>
.me-wrap{
    display:flex;
    align-items: end;
    margin-bottom:12px;
}
.me-icon{
    width: 48px;
    height: 48px;
    margin: 0px 12px;
}
.me-bubble{
    font-size: 12px;
    padding: 8px;
    background-color: #dedbdb;
    border-radius: 8px;
    max-width: 60%;
}
.me-wrap.main-user{
    flex-direction:row-reverse;
}
.me-wrap.main-user > .me-bubble{
    background-color:#9999ff;
}
</style>