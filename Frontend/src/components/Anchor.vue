<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "anchor",
  props: {
    href: String
  }
};
</script>

<style scoped>
a {
  display: inline-block;
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-text);
  line-height: 0.8;
  border-bottom: 8px solid var(--color-accent);
}

a:hover {
  background-color: var(--color-accent);
}

@media (--desktop-narrow) {
  a {
    font-size: 22px;
  }
}

@media (--mobile-wide) {
  a {
    font-size: 18px;
  }
}

@media (--mobile-narrow) {
  a {
    font-size: 16px;
  }
}
</style>


