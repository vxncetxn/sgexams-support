<template>
  <section id="hero">
    <Header>Reach out to us.</Header>
    <RegText>
      We provide a safe space for distressed students to share their troubles
      anonymously in their times of need. Start by writing to us below.
    </RegText>
    <div class="submit-row">
      <input placeholder="Your email address">
      <button>
        Send
        <svg
          enable-background="new 0 0 469.335 469.335"
          viewBox="0 0 469.335 469.335"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m464.761 1.918c-3.385-2.365-7.813-2.552-11.385-.51l-448 256c-3.656 2.083-5.74 6.125-5.323 10.313s3.25 7.74 7.24 9.063l133.784 44.591 51.57 140.961c1.552 4.24 5.583 7 10.01 7 .406 0 .823-.021 1.229-.073 2.882-.331 5.307-1.881 7.021-4.031l.104.083 75.891-95.328 104.391 34.797c1.104.375 2.24.552 3.375.552 1.917 0 3.823-.521 5.5-1.531 2.677-1.604 4.51-4.302 5.021-7.385l64-384c.677-4.065-1.042-8.148-4.428-10.502zm-428.083 262.177 354.938-202.829-245.084 239.448zm172.417 65.219c-1.094 1.49-1.792 3.229-2.01 5.063l-9.635 78.979-35.729-97.656 208.615-203.813zm8.726 93.192 8.858-72.595 38.673 12.891zm168.378-41.901-151.195-50.398 205.859-277.613z"
          ></path>
        </svg>
      </button>
    </div>
    <Paper/>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import RegText from "@/components/RegText.vue";
import Paper from "./Paper";

export default {
  name: "hero",
  components: { Header, RegText, Paper }
};
</script>

<style scoped>
section {
  text-align: center;
  padding: 0 250px;
}

h1 {
  margin-top: 40px;
  animation: intro-text 0.6s linear;
}

p {
  margin-top: 10px;
  animation: intro-text 0.6s linear;
}

.submit-row {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  animation: intro-text 0.6s linear;
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-text);
}

.submit-row > input {
  flex-grow: 1;
  width: 200px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--color-text);
  padding-left: 10px;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

.submit-row > button {
  margin-left: 40px;
  padding: 5px 20px;
  text-transform: uppercase;
  border: 1px solid var(--color-text);
  border-radius: 8px;
}

.submit-row > button > svg {
  margin-left: 5px;
  width: 20px;
  fill: var(--color-text);
}

.submit-row > button:hover {
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
}

.submit-row > button:hover > svg {
  fill: var(--color-accent);
}

@media (--desktop-narrow) {
  section {
    padding: 0 150px;
  }

  .submit-row {
    font-size: 22px;
  }

  .submit-row > button > svg {
    width: 18px;
  }
}

@media (--mobile-wide) {
  section {
    padding: 0 80px;
  }

  h1 {
    margin-top: 20px;
  }

  .submit-row {
    font-size: 18px;
  }

  .submit-row > button {
    margin-left: 20px;
  }

  .submit-row > button > svg {
    width: 15px;
    margin-left: 2px;
  }
}

@media (--mobile-narrow) {
  section {
    padding: 0 20px;
  }

  .submit-row {
    font-size: 16px;
  }

  .submit-row > button > svg {
    width: 13px;
  }
}

@keyframes intro-text {
  0% {
    opacity: 0.2;
    transform: translateY(-10vh);
  }
  100% {
    opacity: 1;
  }
}
</style>


