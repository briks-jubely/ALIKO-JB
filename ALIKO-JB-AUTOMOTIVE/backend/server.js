const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/api", (req, res) => {
  res.json({
    message: "ALIKO-JB Automotive API is running 🚗",
  });
});

// SPA fallback (BEST FIX)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
