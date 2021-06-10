import api from "../../api/DataService";

export const state = {
	waifus: [],
};

const getters = {
	getWaifus: (state) => state.waifus,
};

const mutations = {
	SET_WAIFUS: (state, waifus) => {
		state.waifus = waifus;
	},
};

const actions = {
	useWaifus: async ({ commit }) => {
		const response = await api.fetchAllWaifus();
		commit("SET_WAIFUS", response.data);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
