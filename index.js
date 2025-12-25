const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend API working 🚀" });
});

app.post("/check", (req, res) => {
  const { uid } = req.body;
  if (!uid) return res.json({ error: "UID required" });
  res.json({ uid, status: "VALID" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
