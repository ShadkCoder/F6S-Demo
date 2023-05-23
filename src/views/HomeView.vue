<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {provide} from 'vue'

provide('user','Declan Rice')
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
