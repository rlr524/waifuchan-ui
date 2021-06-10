<template>
  <div id="base-waifu-card" class="rounded overflow-hidden shadow-lg ml-2 mr-2">
    <img :src="profileImgURL" alt="Waifu Card Profile" class="-card-img-size" />
    <div class="px-6 py-2">
      <div class="font-bold text-xs mb-2 text-center">
        <p class="text-gray-700">
          {{ fullNameEn }}
        </p>
      </div>
      <div class="font-bold text-xs mb-2 text-center">
        <p class="text-gray-700">
          {{ animeMainSeries }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          v-for="(tag, index) in waifuCardProfileTags"
          :key="index"
          class="flex inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr2"
        >
          {{ waifuCardProfileTags[index] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseWaifuCard",
  props: {
    fullNameEn: {
      type: String,
      default: "Your Waifu",
    },
    profileImgURL: {
      type: String,
      default:
        "https://res.cloudinary.com/emiya-consulting/image/upload/v1614639926/waifu_logob_fpttxf.png",
    },
    animeMainSeries: {
      type: String,
      default: "Edit your waifu to add a series or manga",
    },
    occupation: {
      type: String,
      default: "Professional Waifu",
    },
    waifuCardProfileTags: {
      type: Array,
      required: false,
      default: () => ["Tag1", "Tag2", "Tag3"],
    },
    methods: {},
    computed: {},
    created() {},
  },
};
</script>

<style lang="scss" scoped>
#base-waifu-card {
  max-height: 25rem;
  width: 16rem;
}
.-card-img-size {
  height: 45%;
  width: 100%;
}
</style>
