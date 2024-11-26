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
    origin: "http://localhost:5173", // Update this with your frontend's actual URL
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Helper function to generate unique sponsorId with the `GOI-` prefix
const generateSponsorId = async () => {
  const MAX_ATTEMPTS = 10; // Limit the number of attempts to prevent infinite loops
  let sponsorId;
  let attempts = 0;

  while (attempts < MAX_ATTEMPTS) {
    attempts++;
    sponsorId = `GOI-${Math.floor(100000 + Math.random() * 900000)}`;
    const existingUser = await User.findOne({ sponsorId });

    if (!existingUser) {
      // If no user with this sponsorId exists, return the generated sponsorId
      return sponsorId;
    }
  }

  throw new Error("Unable to generate a unique Sponsor ID after multiple attempts.");
};

// Routes
app.get("/test", (req, res) => {
  res.json({ message: "Hello World" });
});

// Registration Route
app.post("/register", async (req, res) => {
  try {
    const sponsorId = await generateSponsorId(); // Ensure a unique Sponsor ID
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const userDoc = await User.create({
      sponsorId,
      name: req.body.name,
      position: req.body.position,
      country: req.body.country,
      mobile: req.body.mobile,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration successful!", sponsorId });
  } catch (err) {
    console.error("Error during registration:", err.message);

    if (err.message.includes("Unable to generate a unique Sponsor ID")) {
      res.status(500).json({ error: "Failed to generate a unique Sponsor ID. Please try again later." });
    } else {
      res.status(500).json({ error: "An error occurred during registration. Please try again." });
    }
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { loginId, password } = req.body;
  const sponsorId = loginId; // Map loginId to sponsorId

  try {
    const userDoc = await User.findOne({ sponsorId });

    if (!userDoc) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, userDoc.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

// Contact Us Route - Save Contact Form Data
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const contactDoc = await Contact.create({ name, email, phone, message });
    res.status(201).json({ message: "Message received!", contact: contactDoc });
  } catch (err) {
    console.error("Error during contact form submission:", err.message);
    res.status(422).json({ error: "An error occurred while saving your message. Please try again." });
  }
});

// Fallback Route for Undefined Endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  res.status(500).json({ error: "An internal server error occurred." });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
