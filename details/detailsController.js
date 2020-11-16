const express = require('express');
const router = express();
const entry = require("../newentry/Newentry");
const newentry = require("../newentry/NewentryController");

router.get("/details/:plate", (req, res) => {
  var plate = req.params.plate;
  entry.findAll({where: {plate: plate}})
  .then(entrys => {
    res.render('details', {
      entrys: entrys
    })
  })
});

module.exports = router;