// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Dummy fundraising data
const userData = {
  name: "Gopi Kishan",
  referralCode: "gopikishan2025",
  totalDonations: 1200,
  rewards: ["T-shirt", "Gift Card", "Badge"]
};

// API endpoint
app.get("/api/user", (req, res) => {
  res.json(userData);
});

// ✅ Use Render's port if available
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
