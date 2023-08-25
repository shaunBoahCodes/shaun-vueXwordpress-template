import { defineStore } from 'pinia'
import { mande } from 'mande'

export const useApiStore = defineStore('api', () => {
  const url = mande('https://shaunmlaclemence.com/wp-json/wp/v2/')

  async function get(path) {
    try {
      const res = await url.get(path)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  return { get }
})
