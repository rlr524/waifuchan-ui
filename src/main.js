import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "@/vuex/store.js";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Vuelidate from "vuelidate";

import "./assets/main.css";

Vue.use(Vuelidate);

const requireComponent = require.context(
	"./components",
	false,
	/Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(function(fileName) {
	const componentConfig = requireComponent(fileName);
	const componentName = upperFirst(
		camelCase(
			fileName
				.split("/")
				.pop()
				.replace(/\.\w+$/, "")
		)
	);
	Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
