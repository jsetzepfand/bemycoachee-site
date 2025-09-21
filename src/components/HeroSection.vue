<template>
  <section class="hero card stack">
    <h1>Unlock Your Potential with Coaching</h1>
    <p class="muted">
      Personal, business, and health coaching tailored to help you achieve your biggest goals. Book
      a free discovery call and start your journey today.
    </p>
    <button class="btn btn-primary">Book a Session</button>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero {
  align-items: center;
  margin-bottom: 2.2rem;
  text-align: center;
}
@media (max-width: 550px) {
  .hero {
    padding: 1.3rem 0.2rem;
  }
  h1 {
    font-size: 2rem;
  }
}
</style>
