import Vue from "vue";
import Vuex from "vuex";
import waifu from "./modules/waifu";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		waifu,
	},
});
