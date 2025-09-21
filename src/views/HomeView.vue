<template>
  <div class="container">
    <HeroSection @book="showBooking = true" />
    <div class="widget-stack">
      <BookingWidget v-if="showBooking" @close="showBooking = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import BookingWidget from '@/components/BookingWidget.vue'
const showBooking = ref(false)
</script>

<style scoped>
.container {
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.widget-stack {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
