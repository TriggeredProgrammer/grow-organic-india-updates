const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  sponsorId: { type: String, unique: true, required: true }, // Added unique constraint for sponsorId
  name: { type: String, required: true },
  position: { type: String, required: true },
  country: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
