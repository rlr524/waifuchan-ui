import axios from "axios";

const ROOT_URL = "https://emiya-firebase-waifu-api.web.app/";

export default {
	fetchAllWaifus() {
		return axios.get(`${ROOT_URL}api/v1/waifus/`);
	},
	fetchUser() {
		return axios.get(`${ROOT_URL}api/v1/users/`);
	},
};
