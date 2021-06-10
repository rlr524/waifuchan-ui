import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateWaifu from "../views/CreateWaifu.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		props: true,
	},
	{
		path: "/create",
		name: "create",
		component: CreateWaifu,
	},
	// TODO: Add the real login component
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
