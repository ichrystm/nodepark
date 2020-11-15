const express = require("express");
const router = express.Router();
const entry = require("../newentry/Newentry");

router.get("/historic", (req, res) => {
  entry.findAll({ raw: true, order:[['entrydate', 'DESC']]})
  .then(entrys => {
    res.render('historic', {
      entrys: entrys
    })
  })
});

module.exports = router;