const express = require("express");
const router = express.Router();
const Newentry = require("./Newentry");

router.get("/newentry", (req, res) => {
  res.render("newentry");
});

router.post("/newentry/new", (req, res) => {
  var plate = req.body.plate;
})

module.exports = router;