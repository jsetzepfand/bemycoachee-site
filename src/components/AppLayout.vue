<template>
  <div>
    <header class="header card" role="banner">
      <span class="brand">BeMyCoachee</span>
      <nav class="nav" aria-label="Main Navigation">
        <a href="/" class="btn" tabindex="0">Home</a>
        <a href="/pricing" class="btn" tabindex="0">Pricing</a>
        <a href="/contact" class="btn" tabindex="0">Contact</a>
      </nav>
    </header>
    <main role="main">
      <slot />
    </main>
    <footer class="footer" role="contentinfo">© {{ year }} BeMyCoachee</footer>
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
  padding: 1.3rem 1.2rem 1.3rem 1.5rem;
  background: #213160;
  color: #fff;
}
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.brand {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
}
.nav {
  display: flex;
  gap: 1.2rem;
}
.btn {
  color: #fff;
  background: transparent;
  border: none;
  margin: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.02rem;
  position: relative;
  outline: none;
  padding: 7px 12px;
  border-radius: 4px;
  transition:
    box-shadow 0.18s,
    background 0.18s,
    color 0.17s;
  cursor: pointer;
}
.btn:focus-visible {
  box-shadow:
    0 0 0 2px #53baff,
    0 0 2px #213160;
  background: #fff;
  color: #213160;
}
.btn:hover {
  text-decoration: underline;
}
footer.footer {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.98rem;
  color: #898989;
  padding: 2rem 0 1.4rem;
}
main {
  min-height: 60vh;

  color: #213160;
}

.btn:hover {
  text-decoration: underline;
}
footer.footer {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.98rem;
  color: #898989;
  padding: 2rem 0 1.4rem;
}
main {
  min-height: 60vh;
}
</style>
