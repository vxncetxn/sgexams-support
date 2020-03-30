<template>
  <section class="avenues">
    <Header>Other Avenues</Header>
    <Subheader>Mental Health Resources</Subheader>
    <Anchor
      href="https://www.ncss.gov.sg/NCSS/media/NCSS-Documents-and-Forms/NCSS%20Internal%20Documents/Directory-on-Mental-Health-Services.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >Resource One</Anchor>
    <br>
    <Anchor
      href="https://www.ncss.gov.sg/NCSS/media/NCSS-Documents-and-Forms/NCSS%20Internal%20Documents/Directory-on-Mental-Health-Services.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >Resource Two</Anchor>
    <br>
    <Anchor
      href="https://www.ncss.gov.sg/NCSS/media/NCSS-Documents-and-Forms/NCSS%20Internal%20Documents/Directory-on-Mental-Health-Services.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >Resource Three</Anchor>
    <br>
    <Anchor
      href="https://www.ncss.gov.sg/NCSS/media/NCSS-Documents-and-Forms/NCSS%20Internal%20Documents/Directory-on-Mental-Health-Services.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >Resource Four</Anchor>
    <br>
    <Anchor
      href="https://www.ncss.gov.sg/NCSS/media/NCSS-Documents-and-Forms/NCSS%20Internal%20Documents/Directory-on-Mental-Health-Services.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >Mental Health Services Resource Directory by NCSS</Anchor>
    <Subheader>Crisis & Suicide Prevention Helplines</Subheader>
    <RegText>
      Samaritans of Singapore 24-Hours Hotline:
      <span>1800 221 4444</span>
    </RegText>
    <RegText>
      Institute of Mental Health’s 24-Hours Helpline:
      <span>6389 2222</span>
    </RegText>
    <RegText>
      Singapore Association of Mental Health Helpline:
      <span>1800 283 7019</span>
    </RegText>
    <RegText>
      <span>If someone you know is at immediate risk, please call 24-hour emergency medical services.</span>
    </RegText>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Subheader from "@/components/Subheader.vue";
import RegText from "@/components/RegText.vue";
import Anchor from "@/components/Anchor.vue";

export default {
  name: "avenues",
  components: {
    Header,
    Subheader,
    RegText,
    Anchor
  }
};
</script>

<style scoped>
section {
  padding: 0 250px;
}

h1 {
  margin-top: 40px;
}

h2 {
  margin-top: 80px;
}

p {
  margin-top: 20px;
}

a {
  margin-top: 30px;
}

@media (--desktop-narrow) {
  section {
    padding: 0 150px;
  }
}

@media (--mobile-wide) {
  section {
    padding: 0 80px;
  }

  h1 {
    margin-top: 20px;
  }
}

@media (--mobile-narrow) {
  section {
    padding: 0 20px;
  }
}
</style>