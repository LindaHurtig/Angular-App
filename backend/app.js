const express = require("express");
const router = express.Router();
const fs = require("fs");

let db;
fs.readFile("db.json", "utf8", (err, json) => {
  db = JSON.parse(json);
});
console.log("after 0 sec", db);
setTimeout(() => {
  console.log("after 1 sec", db);
}, 1000);

router.get("/locations", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(db.locations);
});

router.get("/locations/:id", (req, res) => {
  const id = req.params.id;
  const location = db.locations.find((location) => {
    return (location.id = id);
  });
  console.log(location);
  res.header("Access-Control-Allow-Origin", "*");
  res.json(location);
});

const app = express();
app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
