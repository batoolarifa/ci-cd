const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Express backend",
  });
});

app.get("/api/status", (req, res) => {
  res.send("Backend API is working successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});