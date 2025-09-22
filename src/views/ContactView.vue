<template>
  <form novalidate class="stack" style="max-width: 680px; margin: 0 auto">
    <div class="field">
      <label for="name">Name</label>
      <input id="name" class="input" type="text" required />
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" class="input" type="email" required />
    </div>
    <div class="field">
      <label for="msg">Message</label>
      <textarea id="msg" class="input" rows="5" required></textarea>
      <p class="help">We’ll reply within 1 business day.</p>
    </div>
    <button class="btn btn-primary" type="submit">Send</button>
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
