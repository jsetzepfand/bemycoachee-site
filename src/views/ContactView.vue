<template>
  <form class="contact stack" @submit.prevent="submit" aria-label="Contact form">
    <h1>Contact</h1>
    <label for="c-name">Name</label>
    <input
      id="c-name"
      v-model="name"
      class="input"
      :aria-invalid="e.name ? 'true' : 'false'"
      autocomplete="name"
      required
    />
    <small v-if="e.name" class="err" role="alert">Name required</small>
    <label for="c-email">Email</label>
    <input
      id="c-email"
      v-model="email"
      type="email"
      class="input"
      :aria-invalid="e.email ? 'true' : 'false'"
      autocomplete="email"
      required
    />
    <small v-if="e.email" class="err" role="alert">Valid email required</small>
    <label for="c-msg">Message</label>
    <textarea
      id="c-msg"
      v-model="msg"
      class="input"
      :aria-invalid="e.msg ? 'true' : 'false'"
      rows="3"
      required
    ></textarea>
    <small v-if="e.msg" class="err" role="alert">Message required</small>
    <button class="btn btn-primary" type="submit">Send</button>
    <div v-if="result" class="success" role="alert">Thanks, your message was sent!</div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref(''),
  email = ref(''),
  msg = ref(''),
  result = ref(false)
const e = ref({ name: false, email: false, msg: false })
function submit() {
  e.value = {
    name: !name.value.trim(),
    email: !/^\S+@\S+\.\S+$/.test(email.value),
    msg: !msg.value.trim(),
  }
  if (!e.value.name && !e.value.email && !e.value.msg) {
    result.value = true
    setTimeout(() => (result.value = false), 2200)
    name.value = ''
    email.value = ''
    msg.value = ''
  }
}
</script>

<style scoped>
.contact {
  max-width: 420px;
  margin: 3rem auto;
  padding: 2rem 1.2rem;
  background: #161925;
  border-radius: 12px;
  box-shadow: 0 2px 14px #192a4022;
}
label {
  font-weight: 600;
  margin-bottom: 0.3em;
}
.err {
  color: #c52b33;
  font-size: 0.97em;
  margin-bottom: 0.7em;
}
.success {
  color: #258c4d;
  background: #183f2622;
  border-radius: 7px;
  font-weight: 600;
  padding: 0.55em 0.9em;
  margin-top: 0.7em;
}
</style>
