const express = require("express");
const connection = require("../database/database");
const router = express.Router();
const Newentry = require("./Newentry");

router.get("/newentry", (req, res) => {
  res.render("newentry");
});

getEntryDate = () => {
  var date = new Date();
  var day = String(date.getDate());
  var month = String(date.getMonth()+ 1);
  var year = String(date.getFullYear());

  let entryDate = year + "-" + month + "-" + day;
  return entryDate;
}

router.post("/newentry/new", (req, res) => {
  var plate = req.body.plate;
  var manufacturer = req.body.manufacturer;
  var model = req.body.model;
  var datenow = getEntryDate();

  Newentry.create({
    plate: plate,
    manufacturer: manufacturer,
    model: model,
    entrydate: datenow,
  }).then(() => {
    res.redirect("/");
  }).catch((err) => {
    console.log(err);
  })

})


module.exports = router;