<template functional>
  <!-- TODO: Make the navbar responsive with TW -->
  <nav id="nav" class="header flex mb-4 items-center h-32 -bg-color-main">
    <div class="flex items-center w-1/3">
      <img
        src="../img/site-logo-192x192.png"
        alt="Site Logo"
        class="h-16 w-16 ml-4 mr-2"
      />
      <span
        class="header-title text-white text-3xl font-bold lg:flex-grow lg:flex hidden"
      >
        Waifu-chan
      </span>
    </div>
    <div class="flex sm:w-1/2">
      <form action="" class="md:w-full">
        <div class="">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            class="h-8 md:w-full"
          />
        </div>
      </form>
    </div>
    <div class="flex w-1/3 mr-4">
      <div
        class="header-links text-white text-xl sm:flex-grow sm:flex sm:justify-end hidden"
      >
        <router-link
          to="/"
          class="block mt-4 sm:inline-block sm:mt-0 hover:shadow-inner mr-4"
        >
          Home
        </router-link>
        <router-link
          to="login"
          class="block mt-4 sm:inline-block sm:mt-0 hover:shadow-inner mr-4"
          v-if="!loggedIn"
        >
          Login
        </router-link>
        <router-link
          to="/create"
          class="material-icons md-light md-36 cursor-pointer"
          v-if="loggedIn"
        ></router-link>
        <button
          v-if="loggedIn"
          type="button"
          class="logout-button"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
    <div class="menu-vertical-responsive">
      <i class="material-icons mt-2 md-light sm:hidden cursor-pointer static">
        more_vert
      </i>
    </div>
  </nav>
</template>

<script>
import { authComputed } from "@/vuex/helpers.js";

export default {
  name: "Header",
  computed: {
    ...authComputed,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.material-icons.md-light {
  color: rgba(255, 255, 255, 1);
}
.material-icons.md-36 {
  font-size: 36px;
}
.logout-button {
  cursor: pointer;
}
</style>
