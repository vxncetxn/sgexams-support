<template>
  <section id="hero">
    <h1>Reach out to us.</h1>
    <p>
      We provide a safe space for distressed students to reach out to us
      anonymously in their times of need. Start by writing to us below.
    </p>

    <div class="paper">
      <div class="paper-content">
        <textarea autofocus>Hello world !
Here's a paper textarea tag.</textarea>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero"
};
</script>

<style scoped>
section {
  text-align: center;
  padding: 0 250px;
  /* border: 1px solid red; */
}

h1 {
  font-family: var(--font-primary);
  font-size: 84px;
  font-weight: 800;
  color: #f2c100;
  margin-top: 50px;
}

p {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-text);
  margin-top: 20px;
}

.paper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-width: 400px;
  height: 480px;
  margin: 100px auto 0 auto;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.paper:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60px;
  background: radial-gradient(#575450 6px, transparent 7px) repeat-y;
  background-size: 30px 30px;
  border-right: 3px solid #d44147;
  box-sizing: border-box;
}

.paper-content {
  position: absolute;
  top: 30px;
  right: 0;
  bottom: 30px;
  left: 60px;
  background: linear-gradient(transparent, transparent 28px, #91d1d3 28px);
  background-size: 30px 30px;
}

.paper-content textarea {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  line-height: 30px;
  padding: 0 10px;
  border: 0;
  outline: 0;
  background: transparent;
  color: mediumblue;
  font-family: "Handlee", cursive;
  font-weight: bold;
  font-size: 18px;
  box-sizing: border-box;
  z-index: 1;
}
</style>


