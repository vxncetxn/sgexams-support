<template>
  <p>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "reg-text"
};
</script>

<style scoped>
p {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-text);
  line-height: 1.6;
}

p > span {
  color: var(--color-accent);
}

@media (--desktop-narrow) {
  p {
    font-size: 22px;
  }
}

@media (--mobile-wide) {
  p {
    font-size: 18px;
  }
}

@media (--mobile-narrow) {
  p {
    font-size: 16px;
  }
}
</style>


