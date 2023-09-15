const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
app.listen(5000, () => {
  console.log("server is running");
});
