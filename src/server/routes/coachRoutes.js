//External Requires
const axios = require("axios");

//Internal Requires
const keys = require("../config/keys");

const endpoint = "https://www.coachaccountable.com/API/";

//CoachAccountable Params and fetch Options
const params = {
	APIID: keys.coachAccountableID,
	APIKey: keys.coachAccountableKey,
	a: "Client.getAll",
	includeInactive: false,
	CoachID: keys.kevinCoachID,
	CompanyID: "",
	sortOption: "C",
};
const options = {
	method: "post",
	url: endpoint,
	params: params,
};

module.exports = (app) => {
	// app.get(["/whatever"], (req, res) => {
	// 	axios
	// 		.request(options)
	// 		.then((response) => {
	// 			console.log(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error.message);
	// 		});
	// });
};
