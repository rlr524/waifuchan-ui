import axios from "axios";
import "dotenv";

var data = JSON.stringify({
	collection: "waifus",
	database: "waifuchanDB",
	dataSource: "Cluster0",
	projection: {
		_id: 1,
	},
});

var config = {
	method: "post",
	url: `${process.env.ROOT_URL}beta/action/findOne`,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Request-Headers": "*",
		"api-key": process.env.MONGO_DATA_API_KEY,
	},
	data: data,
};

export default {
	async fetchAllWaifus() {
		const response = await axios(config);
		return await axios.get(JSON.stringify(response.data));
	},
};
