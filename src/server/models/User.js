const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String,
	firstName: String,
	lastName: String,
});

// 2 args to .model() means I want to load something IN to mongoose
mongoose.model("users", userSchema);
