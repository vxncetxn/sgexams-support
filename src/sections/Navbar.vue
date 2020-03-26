<template>
  <nav id="navbar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>Help Us</li>
      <li>Other Avenues</li>
      <li>Supporters Login</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav {
  /* border: 1px solid red; */
}

nav > ul {
  padding: 30px 60px;
  display: flex;
  flex-direction: row;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;
  color: var(--color-text);
}

nav > ul > li:first-child {
  margin-left: auto;
}

nav > ul > li + li {
  margin-left: 40px;
}
</style>


