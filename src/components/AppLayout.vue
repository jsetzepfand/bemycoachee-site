<template>
  <div>
    <header class="header card" role="banner">
      <span class="brand">BeMyCoachee</span>
      <nav class="nav" aria-label="Main Navigation">
        <a href="/" class="btn" tabindex="0">Home</a>
        <a href="/pricing" class="btn" tabindex="0">Pricing</a>
        <a href="/contact" class="btn" tabindex="0">Contact</a>
      </nav>
      <button class="btn theme-toggle" @click="toggleTheme" :aria-pressed="theme === 'dark'">
        {{ theme === 'dark' ? '☾' : '☀' }}
      </button>
    </header>
    <main role="main" style="margin-top: 2.4rem">
      <slot />
    </main>
    <footer class="footer card muted" role="contentinfo">© {{ year }} BeMyCoachee</footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const year = new Date().getFullYear()
const theme = ref('')
function setTheme(t: string) {
  theme.value = t
  document.documentElement.setAttribute('data-theme', t)
  localStorage.setItem('theme', t)
}
function toggleTheme() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') setTheme(saved)
  else {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(prefers)
  }
})
</script>

<style scoped>
:root {
  --color-card: #fff;
  --color-fg: #213160;
  --color-accent: #213160;
  --color-accent-dark: #53baff;
  --radius: 12px;
}

/* Reset box-sizing for scoped, helps with layout tweaks */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1.2rem 1.3rem 1.5rem;
  background: var(--color-card);
  color: var(--color-fg);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.card {
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.brand {
  font-weight: 800;
  font-size: 1.32rem;
  letter-spacing: 0.03em;
}
.nav {
  display: flex;
  gap: 1.1rem;
}
.btn {
  background: none;
  color: var(--color-fg);
  border: none;
  margin: 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  outline: none;
  padding: 0.72em 1.2em;
  border-radius: var(--radius);
  transition:
    box-shadow 0.18s,
    background 0.18s,
    color 0.17s;
  cursor: pointer;
}
.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  background: #172142;
  color: var(--color-accent);
}
.btn:hover {
  text-decoration: underline;
}
.theme-toggle {
  margin-left: 1.2em;
  font-size: 1.45em;
  width: 2.5em;
  min-width: 2.5em;
  aspect-ratio: 1;
  background: var(--color-card);
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  box-shadow: none;
  padding: 0;
}
.theme-toggle:focus-visible {
  outline: 2px solid var(--color-accent-dark);
}
.footer {
  margin: 3.5rem auto 0;
  text-align: center;
  font-size: 0.98rem;
  color: #898989;
  padding: 1.3rem 0 1.1rem 0;
  max-width: 500px;
}
main {
  min-height: 60vh;
  border: 2px solid var(--color-accent);
  box-shadow: none;
  padding: 0;
  min-height: 60vh;
}
.theme-toggle:focus-visible {
  outline: 2px solid var(--color-accent-dark);
}

.footer {
  margin: 3.5rem auto 0;
  text-align: center;
  font-size: 0.98rem;
  color: #898989;

  padding: 1.3rem 0 1.1rem 0;
  max-width: 500px;
}
</style>
