<template>
  <div id="app">
    <app-header />
    <div class="container">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style lang="scss">
/* color palette:
main orange: ff971d,
light orange: ffe8d6,
orange off white: f9f6f7,
white: ffffff */

#app {
  font-family: "Noto Sans JP", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* custom global styles */
.-bg-color-main {
  background-color: #ff971d;
}
.-bg-color-off-orange {
  background-color: #f9f6f7;
}
.-bg-color-light-main {
  background-color: #ffe8d6;
}

@media (max-width: 700px) {
  #app {
    margin: 0 auto;
  }
}
</style>
