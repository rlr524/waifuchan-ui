<template>
  <div id="top-waifu" class="pl-2">
    <div class="block">
      <a
        href="#"
        class="block mr-2 h-full rounded -bg-color-main hover:opacity-90 hover:shadow"
        aria-label="View the top waifus"
      >
        <h3 class="uppercase text-3xl text-white font-bold px-2 py-2">
          {{ sectionTitle }}
        </h3>
      </a>
    </div>
    <div class="flex justify-between scrollbar overflow-x-auto pt-4 pb-4">
      <div class="flex flex-row font-body relative rounded mr-5 text-xs">
        <base-waifu-card
          v-for="waifu in getWaifus"
          :key="waifu.waifuId"
          :animeMainSeries="waifu.animeMainSeries"
          :fullNameEn="waifu.fullNameEn"
          :profileImgURL="waifu.profileImgURL"
          :waifuCardProfileTags="waifu.tags"
        >
        </base-waifu-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TopWaifus",
  data: function () {
    return {};
  },
  props: {
    sectionTitle: {
      type: String,
      required: false,
    },
  },
  components: {},
  methods: {
    ...mapActions(["useWaifus"]),
    resolveImageURL: function (path) {
      let images = require.context("../img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
  computed: {
    ...mapGetters(["getWaifus"]),
  },
  created() {
    this.useWaifus();
  },
};
</script>

<style lang="scss" scoped>
#top-waifu {
  max-height: 35rem;
}
</style>
