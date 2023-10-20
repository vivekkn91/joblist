const express = require("express");
const app = express();

const port = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
