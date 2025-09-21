import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  const step = ref<1 | 2 | 3>(1)
  const slot = ref<string | null>(null)
  const email = ref('')
  function next() {
    if (step.value < 3) step.value++
  }
  function prev() {
    if (step.value > 1) step.value--
  }
  function selectSlot(s: string) {
    slot.value = s
    next()
  }
  function setEmail(e: string) {
    email.value = e
  }
  return { step, slot, email, next, prev, selectSlot, setEmail }
})
