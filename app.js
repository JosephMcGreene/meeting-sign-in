// "start": "node src/server2/index.js",
const express = require("express");
const app = express();

app.post("/post", (req, res) => {
	console.log("Connected to React!");
	res.redirect("/");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
