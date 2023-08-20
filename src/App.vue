<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const router = useRouter()

const pushRoute = (name) => router.push({ name: name })
</script>

<template>
  <header>

    <div class="bg-gray-900">
      <HelloWorld msg="hello!" />

      <nav>
        <button style="background: blue;" @click="pushRoute('home')">Hello</button>
        <button @click="pushRoute('about')">About</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>