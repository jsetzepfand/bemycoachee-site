<template>
  <div class="card container stack booking">
    <button class="close-btn" @click="$emit('close')" aria-label="Close booking" type="button">
      ×
    </button>
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
  </div>
</template>
<script setup lang="ts">
defineEmits(['close'])
import { ref } from 'vue'
import { useBookingStore } from '@/stores/booking'
const $bk = useBookingStore()
const slots = ['Tue 10am', 'Wed 3pm', 'Thu 1pm']
const showErr = ref(false)
function validateAndNext() {
  showErr.value = !$bk.email.match(/^\S+@\S+\.\S+$/)
  if (!showErr.value) $bk.next()
}
</script>
<style scoped>
.booking {
  margin: 0 auto;
  max-width: 410px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
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
.close-btn {
  position: absolute;
  top: 0.65em;
  right: 0.9em;
  background: none;
  color: #34456b;
  border: none;
  font-size: 1.8em;
  line-height: 1em;
  padding: 0;
  cursor: pointer;
  z-index: 2;
}
.close-btn:hover,
.close-btn:focus-visible {
  color: #17408a;
  background: none;
}
</style>
