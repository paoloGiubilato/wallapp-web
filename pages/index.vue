<template>
  <div id="app">
    <Logo />
    <Appbar class="landing-title" />
    <p class="center landing-title">No ads. No tricks. Just wallpapers.</p>
    <p class="center landing-title"><b>Download now.</b></p>
    <Badges class="badge-section" />
  </div>
</template>

<script>
import Appbar from "~/components/Appbar";
import Logo from "~/components/Logo";
import Badges from "~/components/Badges";

export default {
  components: {
    Appbar,
    Logo,
    Badges
  },
  head() {
    return {
      title: "Home"
    };
  }
};
</script>

<style scoped>
.landing-subtitle {
  margin: 1.8em;
}

.landing-title {
  margin: 3em;
}

.badge-section {
  margin: 4em 0;
}
</style>


