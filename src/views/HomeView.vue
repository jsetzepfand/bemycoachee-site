<template>
  <div class="container">
    <HeroSection />
    <BookingWidget />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import BookingWidget from '@/components/BookingWidget.vue'
</script>

<style scoped>
.container {
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
