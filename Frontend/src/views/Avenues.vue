<template>
  <section class="avenues">
    <h1>Other Avenues</h1>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
section {
  width: 100vw;
  height: 200vh;
  padding: 0 250px;
}

h1 {
  font-family: var(--font-primary);
  font-size: 84px;
  font-weight: 800;
  color: var(--color-accent);
  margin-top: 40px;
  animation: intro-text 0.6s linear;
}

p {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-text);
  margin-top: 10px;
  animation: intro-text 0.6s linear;
}

@media (--desktop-narrow) {
  section {
    padding: 0 150px;
  }

  h1 {
    font-size: 72px;
  }

  p {
    font-size: 22px;
  }
}

@media (--mobile-wide) {
  section {
    padding: 0 80px;
  }

  h1 {
    font-size: 50px;
    margin-top: 20px;
  }

  p {
    font-size: 18px;
  }
}

@media (--mobile-narrow) {
  section {
    padding: 0 20px;
  }

  h1 {
    font-size: 38px;
  }

  p {
    font-size: 16px;
  }
}
</style>
