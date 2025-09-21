<template>
  <div>
    <header class="header" role="banner">
      <span class="brand">BeMyCoachee</span>
      <nav class="nav" aria-label="Main Navigation">
        <a href="/" class="nav-link" tabindex="0">Home</a>
        <a href="/pricing" class="nav-link" tabindex="0">Pricing</a>
        <a href="/contact" class="nav-link" tabindex="0">Contact</a>
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
.brand {
  font-weight: 700;
  font-size: 1.25rem;
}
.nav-link {
  color: #fff;
  margin-left: 1.7rem;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  outline: none;
  padding: 2px 2px;
  border-radius: 4px;
  transition: box-shadow 0.18s;
}
.nav-link:focus-visible {
  box-shadow:
    0 0 0 2px #53baff,
    0 0 2px #213160;
  background: #fff;
  color: #213160;
}
.nav-link:hover {
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
