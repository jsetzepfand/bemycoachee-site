<template>
  <section class="pricing-section">
    <h1 style="text-align: center; margin-bottom: 2rem">Pricing</h1>
    <div class="grid pricing-grid">
      <div class="card plan">
        <h2>Starter</h2>
        <div class="price">$49</div>
        <ul class="bullets">
          <li>1 coaching session</li>
          <li>Email follow-up</li>
          <li>Resource handouts</li>
        </ul>
        <button class="btn btn-primary plan-btn">Choose plan</button>
      </div>
      <div class="card plan plan-featured">
        <h2>Growth</h2>
        <div class="price">$149</div>
        <ul class="bullets">
          <li>3 coaching sessions</li>
          <li>Personalized plan</li>
          <li>Email & chat support</li>
          <li>Progress tracking</li>
        </ul>
        <button class="btn btn-primary plan-btn">Choose plan</button>
      </div>
      <div class="card plan">
        <h2>Intensive</h2>
        <div class="price">$399</div>
        <ul class="bullets">
          <li>8 coaching sessions</li>
          <li>Advanced goal setting</li>
          <li>Direct messaging</li>
          <li>Monthly check-ins</li>
          <li>VIP resources</li>
        </ul>
        <button class="btn btn-primary plan-btn">Choose plan</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.pricing-section {
  padding: 2rem 0 2.7rem;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.plan {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid #263867;
  box-shadow: var(--shadow-1);
  transition:
    border 0.13s,
    box-shadow 0.13s;
}
.plan-featured {
  border-color: var(--color-accent);
  box-shadow: 0 6px 20px #70aaff45;
  position: relative;
  z-index: 1;
}
.price {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.8em 0 0.7em 0;
  color: var(--color-accent-dark);
  letter-spacing: -1px;
}
.bullets {
  color: var(--color-fg);
  margin: 0 0 1.3em 0;
  padding: 0 0 0 1.2em;
  text-align: left;
}
.bullets li {
  font-size: 1.07em;
  line-height: 1.7;
  margin-bottom: 0.32em;
}
.plan-btn {
  margin-bottom: 0.1em;
  margin-top: auto;
  border-radius: 1.3em;
  min-width: 9.5em;
  font-size: 1.11em;
  box-shadow: 0 2px 12px #0d223322;
}
.plan-btn:focus-visible {
  outline: 2px solid var(--color-accent-dark);
  background: var(--color-accent-dark);
}
</style>
