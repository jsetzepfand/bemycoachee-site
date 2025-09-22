<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const theme = ref<'light' | 'dark'>('light')
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
}
onMounted(() => {
  const t = document.documentElement.dataset.theme
  theme.value = t === 'dark' || t === 'light' ? (t as 'dark' | 'light') : 'light'
})
</script>

<template>
  <div class="app-root" style="min-height: 100vh; display: flex; flex-direction: column">
    <header style="border-bottom: 1px solid var(--border)">
      <div
        class="container"
        style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem"
      >
        <RouterLink to="/" class="link" style="font-weight: 700">BeMyCoachee</RouterLink>
        <nav style="display: flex; gap: 1rem; margin-left: 1rem">
          <RouterLink to="/" class="link">Home</RouterLink>
          <RouterLink to="/pricing" class="link">Pricing</RouterLink>
          <RouterLink to="/contact" class="link">Contact</RouterLink>
        </nav>
        <button
          type="button"
          class="btn"
          style="margin-left: auto"
          aria-label="Toggle dark mode"
          :aria-pressed="theme === 'dark'"
          @click="toggleTheme"
        >
          {{ theme === 'dark' ? '🌙' : '☀️' }}
        </button>
      </div>
    </header>

    <main style="flex: 1">
      <div class="container">
        <div class="surface" style="padding: 1.25rem; margin-block: 1.25rem">
          <RouterView />
        </div>
      </div>
    </main>

    <footer style="border-top: 1px solid var(--border)">
      <div class="container" style="padding: 1rem; color: var(--muted); font-size: 0.9rem">
        © {{ new Date().getFullYear() }} BeMyCoachee
      </div>
    </footer>
  </div>
</template>

<style scoped>
.link {
  color: var(--text);
  text-decoration: none;
}
.link:hover {
  color: var(--accent);
  text-decoration: underline;
}
.link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
