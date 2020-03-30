<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/sections/Navbar.vue";
import Footer from "@/sections/Footer.vue";

require("typeface-poppins");
require("typeface-caveat");

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>


<style>
:root {
  --font-primary: "Poppins";
  --font-secondary: "Caveat";

  --color-bg-one: #5139d7;
  --color-bg-two: #372476;
  --color-accent: #f2c100;
  --color-text: #fbfbfb;
  --color-gray: #c7c7c7;
}

@custom-media --mobile-narrow (max-width: 570px);
@custom-media --mobile-wide (max-width: 896px);
@custom-media --desktop-narrow (max-width: 1200px);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  display: flex;
  justify-content: center;
  position: relative;
  background: var(--color-bg-one);
  background: -webkit-linear-gradient(
    to bottom,
    var(--color-bg-one),
    var(--color-bg-two) 70%
  );
  background: linear-gradient(
    to bottom,
    var(--color-bg-one),
    var(--color-bg-two) 70%
  );
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

#app {
  width: 100%;
  max-width: 1440px;
}
</style>
