<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import BookingWidget from '@/components/BookingWidget.vue'
const showBooking = ref(false)
</script>

<template>
  <div class="container">
    <div class="surface" style="padding: 1.25rem; margin-block: 1.25rem">
      <HeroSection @book="showBooking = true" />
      <BookingWidget v-if="showBooking" @close="showBooking = false" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
