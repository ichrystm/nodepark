const express = require("express");
const router = express.Router();
const Newentry = require("./Newentry");

router.get("/newentry", (req, res) => {
  res.render("newentry");
});

router.post("/newentry/new", (req, res) => {
  var plate = req.body.plate;
  var manufacturer = req.body.manufacturer;
  var model = req.body.model;

  Newentry.create({
    plate: plate,
    manufacturer: manufacturer,
    model: model,
  }).then(() => {
    res.redirect("/");
  }).catch((err) => {
    console.log(err);
  })

})

module.exports = router;