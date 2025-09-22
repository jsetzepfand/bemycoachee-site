<script setup lang="ts">
import { ref } from 'vue'
import { useBookingStore } from '@/stores/booking'
const emit = defineEmits<{ (e: 'close'): void }>()
const $bk = useBookingStore()
const slots = ['Tue 10am', 'Wed 3pm', 'Thu 1pm']
const showErr = ref(false)
function validateAndNext() {
  showErr.value = !$bk.email.match(/^\S+@\S+\.\S+$/)
  if (!showErr.value) $bk.next()
}
</script>
<template>
  <section
    class="surface booking-wrap"
    style="max-width: 720px; margin: 1rem auto; padding: 1rem; position: relative"
  >
    <button class="close-btn" style="float: right" @click="emit('close')" type="button">×</button>
    <h2>Book a Session</h2>
    <div v-if="$bk.step === 1">
      <div class="slot-choices">
        <button v-for="s in slots" :key="s" @click="$bk.selectSlot(s)" type="button">
          {{ s }}
        </button>
      </div>
    </div>
    <div v-else-if="$bk.step === 2">
      <form @submit.prevent="validateAndNext" class="booking-email">
        <input
          v-model="$bk.email"
          required
          type="email"
          @input="$bk.setEmail($bk.email)"
          placeholder="Your Email"
          pattern="^\S+@\S+\.\S+$"
        />
        <button type="submit">Next</button>
      </form>
      <button type="button" class="back" @click="$bk.prev()">Back</button>
      <div v-if="showErr" class="err">Enter valid email</div>
    </div>
    <div v-else>
      <div>
        Slot: <b>{{ $bk.slot }}</b>
      </div>
      <div>
        Email: <b>{{ $bk.email }}</b>
      </div>
      <button type="button">Confirm</button>
      <button type="button" class="back" @click="$bk.prev()">Back</button>
    </div>
  </section>
</template>
<style scoped>
.booking-wrap {
  padding: 2rem 1rem;
  border-radius: 1.1rem;
  box-shadow: var(--shadow);
  width: 80%;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 0.85rem;
  right: 0.9rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #9093ad;
  padding: 0.12em 0.5em;
  border-radius: 3px;
}
.close-btn:focus-visible {
  outline: 2px solid var(--accent, #6ea8fe);
  background: #eaf6ff;
}
.slot-choices {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
}
button {
  background: #2252b4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5em 1.3em;
  cursor: pointer;
  font-weight: 600;
}
button:hover,
button:focus-visible {
  background: #17408a;
}
input {
  width: 90%;
  margin-bottom: 0.7em;
  box-sizing: border-box;
  padding: 0.45em 0.7em;
  border: 1px solid #a4c3e6;
  border-radius: 3px;
}
.err {
  color: #b22222;
  margin-top: 0.28em;
  font-size: 0.97em;
}
.back {
  margin-left: 0.7em;
  background: #777;
}
</style>
