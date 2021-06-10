import api from "../../api/DataService";

export const state = {
	user: null,
};

const mutations = {
	SET_USER_DATA(state, userData) {
		state.user = userData;
		localStorage.setItem("user", JSON.stringify(userData));
		api.fetchUser();
	},
};

export default {
	mutations,
};
