<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "subheader"
};
</script>

<style scoped>
h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-accent);
}

@media (--desktop-narrow) {
  h2 {
    font-size: 22px;
  }
}

@media (--mobile-wide) {
  h2 {
    font-size: 18px;
  }
}

@media (--mobile-narrow) {
  h2 {
    font-size: 16px;
  }
}
</style>


