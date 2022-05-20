const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./routes/authRoutes")(app);
require("./services/passport");
require("./models/User");

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
