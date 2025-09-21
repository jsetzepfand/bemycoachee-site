<template>
  <section class="hero-gradient">
    <div class="container hero-content">
      <div class="hero-radial"></div>
      <h1 class="fade-in">Unlock Your Potential with Coaching</h1>
      <p class="muted support">
        Coaching for personal growth, business, and health—designed for your ambitions. Discover
        clarity and momentum in 2025 and beyond.
      </p>
      <div class="actions">
        <button class="btn btn-primary hero-cta hover-raise">Book a Session</button>
        <a href="/pricing" class="hero-link hover-raise" tabindex="0">See pricing</a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero-gradient {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background:
    radial-gradient(ellipse 90% 90% at 50% 10%, var(--color-accent) 11%, transparent 72%),
    linear-gradient(112deg, #3957cb 18%, var(--color-bg) 75%);
  min-height: 72vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4vw;
}
.hero-content {
  max-width: 720px;
  width: 100%;
  position: relative;
  text-align: center;
  padding: 3rem 0 2.2rem;
}
.hero-radial {
  content: '';
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 46px;
  z-index: 0;
  transform: translateX(-50%);
  width: 530px;
  height: 260px;
  background: radial-gradient(ellipse 55% 45% at 51% 53%, var(--color-accent) 18%, transparent 96%);
  opacity: 0.23;
  filter: blur(3px);
  display: block;
}
@media (max-width: 700px) {
  .hero-content {
    padding-top: 2.2rem;
  }
  .hero-radial {
    width: 320px;
    height: 116px;
    top: 20px;
  }
}
@media (max-width: 470px) {
  .hero-gradient {
    padding-top: 0;
  }
  .hero-content {
    padding: 1.6rem 0;
  }
  h1 {
    font-size: 2.2rem;
  }
  .hero-radial {
    display: none;
  }
}
h1 {
  font-size: clamp(2.4rem, 7vw, 3.7rem);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 1.3rem;
  position: relative;
  z-index: 1;
}
/* Fade-In Animation */
.fade-in {
  opacity: 0;
  animation: fadeInHero 0.9s cubic-bezier(0.38, 0.95, 0.56, 1) 0.15s 1 forwards;
}
@keyframes fadeInHero {
  from {
    opacity: 0;
    transform: translateY(34px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.support {
  margin-bottom: 2.2rem;
  font-size: 1.17rem;
}
.actions {
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.hero-cta {
  border-radius: 1.45rem;
  font-size: 1.15rem;
  font-weight: 700;
  min-width: 3em;
  min-height: 3.2em;
  box-shadow: 0 4px 12px #0e204720;
  transition:
    background 0.15s,
    transform 0.1s;
}
.hero-link {
  padding: 0 1em;
  align-self: center;
  color: var(--color-accent);
  font-weight: 500;
  text-decoration: none;
  font-size: 1.07rem;
  border-radius: 13px;
  transition: background 0.13s;
  min-height: 2.9em;
  display: flex;
  align-items: center;
}
.hero-link:focus-visible {
  outline: 2px solid var(--color-accent-dark);
  background: rgba(110, 168, 254, 0.08);
}
/* Hover Raise shared for CTA and Link */
.hover-raise {
  transition:
    background 0.15s,
    transform 0.1s,
    box-shadow 0.15s;
}
.hover-raise:hover,
.hover-raise:active,
.hover-raise:focus-visible {
  background: #2574cc;
  outline: 2px solid #8fbfff;
  transform: translateY(-2px) scale(1.025);
  box-shadow: 0 4px 20px #0e204740;
  color: #fff;
}
</style>
