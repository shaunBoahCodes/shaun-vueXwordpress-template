<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="title w-fit">{{ msg }}</h1>
    <div class="border border-black/20 bg-black/10 rounded-lg p-4 my-8">
      <span>You’ve successfully cloned my </span> 
      <a href="https://wordpress.com/" target="_blank" rel="noopener">Wordpress</a> 
      <span> theme template with </span> 
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> 
      <span> and </span> 
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
      <span>. </span>
      <span>This template uses webpack to compile all the logic of vue into a single Javascript file that can be read by wordpress, giving you the power of Vue within a wordpress theme!</span>
    </div>
  </div>
</template>