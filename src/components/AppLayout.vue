<template>
  <div>
    <header class="header">
      <span class="brand">BeMyCoachee</span>
      <nav>
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing" class="nav-link">Pricing</a>
        <a href="/contact" class="nav-link">Contact</a>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="footer">© {{ year }} BeMyCoachee</footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.3rem 1.2rem 1.3rem 1.5rem;
  background: #2D3A59; color: #fff;
}
.brand { font-weight: 700; font-size: 1.25rem; }
.nav-link { color: #fff; margin-left: 1.7rem; text-decoration: none; font-weight: 500; }
.nav-link:hover { text-decoration: underline; }
footer.footer {margin-top: 3rem; text-align: center; font-size: 0.98rem; color: #898989; padding: 2rem 0 1.4rem;}
main {min-height: 60vh;}
</style>
