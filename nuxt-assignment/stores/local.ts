import {defineStore} from "pinia"
export const useCounterStore = defineStore('counter', () => {
  const number = ref(0)
  function increment() {
    number.value++
  }

  return { number, increment }
})