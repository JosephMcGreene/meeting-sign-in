//External Requires
const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

//Internal Requires
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//Important Variables
// const endpoint = "https://www.coachaccountable.com/API/";

//CoachAccountable Params and fetch Options
// const params = {
// 	APIID: keys.coachAccountableID,
// 	APIKey: keys.coachAccountableKey,
// 	a: "Client.getAll",
// 	includeInactive: false,
// 	CoachID: keys.kevinCoachID,
// 	CompanyID: "",
// 	sortOption: "C",
// };
// const options = {
// 	method: "post",
// 	url: endpoint,
// 	params: params,
// };

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

mongoose.connect(keys.mongoURI);

app.use(express.static("public"));
app.use(express.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}/auth/google`);
});
