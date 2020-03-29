<template>
  <div class="paper">
    <div class="paper-top">
      <div class="paper-name-block">
        <label>Name</label>
        <input placeholder="How shall we call you?">
      </div>
    </div>
    <div class="paper-content">
      <textarea placeholder="Hello, write to us by typing here!"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "paper"
};
</script>

<style scoped>
.paper {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 80px auto 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: #fafafa;
  animation: intro-paper 0.6s linear;
}

.paper-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 40px;
  margin-top: 80px;
  border-top: 3px solid #91d1d3;
  border-bottom: 3px solid #91d1d3;
  padding: 0 20px;
}

.paper-name-block > label {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-bg-two);
}

.paper-name-block > input {
  width: 180px;
  margin-left: 10px;
  border: none;
  background-color: transparent;
  font-family: var(--font-secondary), cursive;
  font-size: 24px;
  font-weight: 300;
  color: var(--color-bg-two);
}

.paper-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, transparent 28px, #91d1d3 28px);
  background-size: 30px 30px;
}

.paper-content:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  width: 2.5px;
  background-color: red;
}

textarea {
  width: calc(100% - 80px);
  height: 100%;
  line-height: 30px;
  margin-left: 80px;
  padding: 0 10px;
  border: none;
  background: transparent;
  font-family: var(--font-secondary), cursive;
  font-weight: regular;
  font-size: 32px;
  color: var(--color-bg-two);
  resize: none;
}

.paper-name-block > input:focus,
textarea {
  outline: none;
}

@media (--mobile-wide) {
  .paper,
  .paper-top {
    margin-top: 60px;
  }

  .paper-name-block > input {
    width: 150px;
    font-size: 20px;
  }

  .paper-content:before {
    left: 40px;
  }

  textarea {
    width: calc(100% - 40px);
    margin-left: 40px;
    font-size: 24px;
  }
}

@keyframes intro-paper {
  0% {
    transform: translateY(10vh);
  }
}
</style>


