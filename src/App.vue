<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ConversationArea from './components/ConversationArea.vue'
import ComposeSection from './components/ComposeSection.vue'
</script>

<template>
  <div class="wrapper">
    <ConversationArea />
    <ComposeSection />
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  
}
</style>
