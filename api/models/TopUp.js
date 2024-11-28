const mongoose = require("mongoose");

const topUpSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  sponsorId: { type: String, required: true },
  amount: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

const TopUp = mongoose.model("TopUp", topUpSchema);

module.exports = TopUp;
