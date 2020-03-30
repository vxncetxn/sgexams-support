<template>
  <section class="about">
    <Header>About</Header>
    <Subheader>Context</Subheader>
    <RegText>
      In recent times, depression and suicide mortality rates amongst our
      Singaporean youths have been on the rise and it is becoming ever more
      clear that they are a highly vulnerable group when it comes to mental
      health issues. We at
      <Anchor href="https://exams.sg/">SGExams</Anchor>
      {{" "}}recognise this pressing issue and have
      therefore partnered up with
      <Anchor href="https://www.facebook.com/campuspsy/">CampusPsy</Anchor>
      {{" "}}to provide an anonymous platform
      for distressed youths to share their troubles with eager and trained
      peer supporters.
    </RegText>
    <Subheader>How Does This Work?</Subheader>
    <RegText>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it
      over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur,
      from a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source.
    </RegText>
    <RegText>
      Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
      on the theory of ethics, very popular during the Renaissance. The first line of
      Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </RegText>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Subheader from "@/components/Subheader.vue";
import RegText from "@/components/RegText.vue";
import Anchor from "@/components/Anchor.vue";

export default {
  name: "about",
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
