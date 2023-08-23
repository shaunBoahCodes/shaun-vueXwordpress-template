<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'

const router = useRouter()

const pushRoute = (name) => router.push({ name: name })
</script>

<template>
  <header class="px-12 pt-12 pb-4">

    <div>
      <HelloWorld msg="Welcome To Shaun's Vue-X-Wordpress Template!" />

      <nav class="flex gap-2">
        <button @click="pushRoute('home')">Hello</button>
        <button @click="pushRoute('about')">About</button>
      </nav>
    </div>
  </header>

  <div class="px-8">
    <RouterView />
  </div>

  <Button></Button>
</template>