<script setup>
import { onMounted, ref } from 'vue'
import { useApiStore } from '../stores/api'
import WelcomeItem from '../components/WelcomeItem.vue'

onMounted(() => {
  useApiStore()
    .get('posts?per_page=10')
    .then((res) => {
      posts.value = res.map((post) => {
        return {
          title: post.title.rendered,
          content: post.content.rendered
        }
      })
    })
})
const posts = ref([
  {
    title: 'Post 1',
    content: 'Hello World'
  }
])
</script>

<template>
  <div class="grid md:grid-cols-2">
    <WelcomeItem
      v-for="post in posts"
      :key="post"
    >
      <template #heading>{{ post.title }}</template>
      {{ post.content }}
    </WelcomeItem>
  </div>
</template>