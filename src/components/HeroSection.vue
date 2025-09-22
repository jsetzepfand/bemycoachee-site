<script setup lang="ts">
const emit = defineEmits<{ (e: 'book'): void }>()
function onBook() {
  emit('book')
}
</script>
<template>
  <section class="container hero-section">
    <h1 class="hero-title">Unlock Your Potential with Coaching</h1>
    <p class="muted hero-desc">
      Coaching for personal growth, business, and health. Make big progress this year and beyond,
      with real guidance and clarity.
    </p>
    <div class="actions">
      <button @click="onBook" class="btn btn-primary hero-cta">Book a Session</button>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  padding-block: 1.7rem 1.2rem;
  margin-block-end: 1.25rem;
  text-align: center;
}
.hero-title {
  font-size: clamp(2.3rem, 7vw, 3.1rem);
  font-weight: 800;
  margin-bottom: 1rem;
}
.hero-desc {
  font-size: 1.16rem;
  margin-bottom: 2.1rem;
}
.actions {
  display: flex;
  justify-content: center;
}
.hero-cta:focus-visible {
  outline: 2px solid var(--accent, #6ea8fe);
  box-shadow: 0 0 0 3px #aacfff99;
}
</style>
