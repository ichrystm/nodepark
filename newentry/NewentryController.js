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

  var hour = String(date.getHours());
  var minutes = String(date.getMinutes());
  if(minutes <= 9){
    minutes = "0" + minutes;
  }
  var seconds = String(date.getSeconds());

  let entryDate = year + "-" + month + "-" + day;
  let entryHour = hour + ":" + minutes + ":" + seconds;

  var values = [entryDate, entryHour];
  return values;

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
    entrydate: datenow[0],
    entryhour: datenow[1],
  }).then(() => {
    res.redirect("/");
  }).catch((err) => {
    console.log(err);
  })

})


module.exports = router;