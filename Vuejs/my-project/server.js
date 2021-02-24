const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const messages = require("./src/db/messages");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  messages
    .create(req.body)
    .then((message) => {
      res.json(message);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
