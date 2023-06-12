const express = require("express");
const app = express();
const cors=require('cors')
const PORT=4000


app.get("/", (req, res) => {
  return res.json("Server running.......")
})

app.listen(PORT, () => {
  console.log(`port listening on http://localhost:${PORT}`);
})