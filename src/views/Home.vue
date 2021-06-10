<template>
  <div>
    <app-top-waifus :section-title="'Top Waifus'" />
    <app-my-waifus :section-title="'My Waifus'" />
    <app-new-waifus :section-title="'New Waifus'" />
  </div>
</template>

<script>
import TopWaifus from "@/components/TopWaifus.vue";
import MyWaifus from "@/components/MyWaifus.vue";
import NewWaifus from "@/components/NewWaifus.vue";

export default {
  name: "Home",
  components: {
    appTopWaifus: TopWaifus,
    appMyWaifus: MyWaifus,
    appNewWaifus: NewWaifus,
  },
};
</script>

<style lang="scss" scoped>
</style>