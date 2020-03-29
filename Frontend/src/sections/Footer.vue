<template>
  <footer id="footer">
    <div class="footer-row-one">
      <div>
        <div style="margin-bottom: 15px">A joint initiative by:</div>
        <div>
          <a href="https://exams.sg/" target="_blank" rel="noopener noreferrer">
            <img :src="require(`../../public/images/sgexams-logo.png`)" alt="SG Exams logo">
          </a>
          <a href="https://www.facebook.com/campuspsy/" target="_blank" rel="noopener noreferrer">
            <img :src="require(`../../public/images/campuspsy-logo.png`)" alt="Campus Psy logo">
          </a>
        </div>
      </div>
      <div>
        Email:
        <span>sgexams@example.com</span>
      </div>
    </div>
    <div class="footer-row-two">
      <div>Copyright © {{new Date().getFullYear()}}. All rights reserved.</div>
      <ul>
        <li>
          <button>Terms & Conditions</button>
        </li>
        <li>
          <button>Privacy Policy</button>
        </li>
        <li>
          <button>Source Code</button>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
footer {
  padding: 250px 100px 50px 100px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 200;
  color: var(--color-gray);
}

span {
  color: var(--color-accent);
}

img {
  height: 80px;
}

a + a {
  margin-left: 20px;
}

.footer-row-one,
.footer-row-two {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.footer-row-one {
  margin-bottom: 30px;
}

.footer-row-two > ul {
  display: flex;
  flex-direction: row;
}

.footer-row-two > ul > li + li {
  margin-left: 20px;
}

@media (--mobile-wide) {
  footer {
    padding-left: 80px;
    font-size: 12px;
  }

  .footer-row-one {
    margin-bottom: 20px;
  }

  .footer-row-one,
  .footer-row-two {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-row-one > * + *,
  .footer-row-two > * + * {
    margin-top: 10px;
  }
}

@media (--mobile-narrow) {
  footer {
    padding: 150px 20px 30px 20px;
  }
}
</style>


