<template>
  <form class="contact" @submit.prevent="submit">
    <h1>Contact</h1>
    <input v-model="name" type="text" placeholder="Your Name" :class="{err: e.name}"/>
    <input v-model="email" type="email" placeholder="Your Email" :class="{err: e.email}"/>
    <textarea v-model="msg" placeholder="Your Message" :class="{err: e.msg}"></textarea>
    <button type="submit">Send</button>
    <div v-if="result" class="success">Your message was sent!</div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref(''), email = ref(''), msg = ref(''), result = ref(false)
const e = ref({ name: false, email: false, msg: false })
function submit() {
  e.value = { name: !name.value, email: !/\S+@\S+\.\S+/.test(email.value), msg: !msg.value }
  if (!e.value.name && !e.value.email && !e.value.msg) {
    result.value = true
    setTimeout(()=>result.value=false, 2000)
    name.value = email.value = msg.value = ''
  }
}
</script>

<style scoped>
.contact {max-width:400px;margin:3rem auto;padding:2rem 1.2rem;background:#fafbff;border-radius:9px;box-shadow:0 2px 12px #0001;display:flex;flex-direction:column;gap:.8rem;}
input,textarea{font:inherit;padding:.72em .7em;border:1px solid #bbb;border-radius:5px}
button{background:#2d3a59;color:#fff;font-weight:700;border:none;border-radius:5px;padding:.7em 2em;cursor:pointer}
.err{border-color:#e45d5d;background:#fff0f0}
.success{color:#28935d;margin-top:.5rem}
h1{margin-bottom:.5rem}
</style>
