<template>
  <div>
    <header class="header card" role="banner">
      <span class="brand">BeMyCoachee</span>
      <nav aria-label="Main Navigation">
        <a href="/" class="btn" tabindex="0">Home</a>
        <a href="/pricing" class="btn" tabindex="0">Pricing</a>
        <a href="/contact" class="btn" tabindex="0">Contact</a>
      </nav>
    </header>
    <main role="main" style="margin-top: 2.4rem; overflow: visible">
      <slot />
    </main>
    <footer class="footer card muted" role="contentinfo">© {{ year }} BeMyCoachee</footer>
  </div>
</template>
<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.4rem 1.1rem 1.4rem;
  background: var(--color-card);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.brand {
  font-weight: 800;
  font-size: 1.32rem;
}
nav {
  display: flex;
  gap: 1.1rem;
}
.btn {
  background: none;
  color: var(--color-fg);
  padding: 0.72em 1.2em;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 600;
}
.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  background: #172142;
  color: var(--color-accent);
}
.footer {
  margin: 3.5rem auto 0;
  text-align: center;
  font-size: 0.98rem;
  padding: 1.3rem 0 1.1rem 0;
  max-width: 500px;
}
main {
  min-height: 60vh;
  overflow: visible;
}
</style>
