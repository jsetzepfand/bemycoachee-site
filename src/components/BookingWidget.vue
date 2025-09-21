<template>
  <section class="booking">
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
          pattern="^\\S+@\\S+\\.\\S+$"
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
<script setup lang="ts">
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
  margin: 2.2rem 0;
  border: 1px solid #b6c6ea;
  padding: 1.2rem 0.8rem;
  border-radius: 9px;
  max-width: 350px;
  background: #f9fafc;
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
