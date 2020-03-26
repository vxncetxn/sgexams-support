<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/sections/Navbar.vue";

require("typeface-poppins");

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>


<style>
:root {
  --font-primary: "Poppins";
  --color-text: #fbfbfb;

  /* --color-background: #e9f7fb;
  --color-title-text: #2d3887;
  --color-title-text: #5360c6;
  --color-title-text-hover: #3947ac;
  --color-cta-text: #f3f3fb;
  --color-section-title-text: #e67fbe;
  --color-regular-text: #5360c6;
  --color-accent: #e67fbe;
  --color-gray: #788ebf; */
}

@custom-media --mobile-narrow (max-width: 570px);
@custom-media --mobile-wide (max-width: 847px);
@custom-media --desktop-narrow (max-width: 1000px);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  height: 200vh;
  position: relative;
  background: #1f4037; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #99f2c8,
    #1f4037
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #432c9c,
    #00237e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow-x: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-transform: inherit;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

*:focus {
  outline: 5px solid var(--color-accent);
}
</style>
