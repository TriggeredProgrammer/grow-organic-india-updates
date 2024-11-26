const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User.js");
const Contact = require("./models/Contact.js");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Helper function to generate unique sponsorId with the `GOI-` prefix
const generateSponsorId = async () => {
  let unique = false;
  let sponsorId;

  while (!unique) {
    sponsorId = `GOI-${Math.floor(100000 + Math.random() * 900000)}`;
    const existingUser = await User.findOne({ sponsorId });
    if (!existingUser) {
      unique = true;
    }
  }
  return sponsorId;
};

// Routes
app.get("/test", (req, res) => {
  res.json("Hello World");
});


// Registration Route
app.post("/register", async (req, res) => {
  const { name, position, country, mobile, email, password } = req.body;

  try {
    const sponsorId = await generateSponsorId();

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log("Hashed Password:", hashedPassword); // Debugging

    const userDoc = await User.create({
      sponsorId,
      name,
      position,
      country,
      mobile,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration successful!", sponsorId });
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
});


// Login Route
app.post("/login", async (req, res) => {
  const { sponsorId, password } = req.body;

  try {
    const userDoc = await User.findOne({ sponsorId });

    if (!userDoc) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("Stored Hashed Password:", userDoc.password); // Debugging

    const isPasswordValid = bcrypt.compareSync(password, userDoc.password);
    console.log("Password Valid:", isPasswordValid); // Debugging

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

// Contact us Route
// Save Contact Form Data
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const contactDoc = await Contact.create({ name, email, phone, message });
    res.status(201).json({ message: "Message received!", contact: contactDoc });
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
});


// Start the server
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
