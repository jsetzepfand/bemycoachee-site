<template>
  <section class="hero">
    <h1 class="headline">Unlock Your Potential with Coaching</h1>
    <p class="subtext">
      Personal, business, and health coaching tailored to help you achieve your biggest goals. Book
      a free discovery call and start your journey today.
    </p>
    <button class="cta-btn" tabindex="0">Book a Session</button>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem 2rem 1rem;
}
.headline {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.subtext {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #2e3c53;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}
.cta-btn {
  padding: 0.85rem 2.2rem;
  background: #215be6;
  color: #fff;
  border: none;
  border-radius: 99px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.18s,
    box-shadow 0.18s;
  outline: none;
}
.cta-btn:focus-visible {
  box-shadow:
    0 0 0 2px #53baff,
    0 0 2px #213160;
  background: #fff;
  color: #213160;
}
.cta-btn:hover {
  background: #2956b9;
}
@media (max-width: 500px) {
  .headline {
    font-size: 1.4rem;
  }
  .hero {
    padding-top: 2rem;
  }
}
</style>
