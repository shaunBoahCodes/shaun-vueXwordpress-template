<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import { ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const buttons = ref([
  {
    name: 'Home',
    route: 'home',
    selected: false,
  },
  {
    name: 'Posts',
    route: 'posts',
    selected: false,
  },
  {
    name: 'About',
    route: 'about',
    selected: false,
  },
])

watch(
  () => route.fullPath,
  (path) => {
  const selectedButton = buttons.value.find((button) => button.route === path.substring(1))
  buttons.value.forEach((button) => {
    if (button === selectedButton) button.selected = true
    else button.selected = false
  })
})
</script>

<template>
  <header class="px-12 pt-12 pb-4">

    <div>
      <HelloWorld msg="Welcome To Shaun's Vue-X-Wordpress Template!" />

      <nav class="flex gap-2">
        <button 
          v-for="button in buttons"
          :key="button"
          @click="router.push({ name: button.route })"
          :class="[
            button.selected
              ? 'bg-blue-300'
              : ''
          ]"
        >{{ button.name }}</button>
      </nav>
    </div>
  </header>

  <div class="px-8">
    <RouterView />
  </div>

  <Button></Button>
</template>