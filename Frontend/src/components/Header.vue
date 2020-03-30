<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "subheader"
};
</script>

<style scoped>
h1 {
  font-family: var(--font-primary);
  font-size: 84px;
  font-weight: 800;
  color: var(--color-accent);
}

@media (--desktop-narrow) {
  h1 {
    font-size: 72px;
  }
}

@media (--mobile-wide) {
  h1 {
    font-size: 50px;
  }
}

@media (--mobile-narrow) {
  h1 {
    font-size: 38px;
  }
}
</style>


