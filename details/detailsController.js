const express = require('express');
const router = express();
const entry = require("../newentry/Newentry");

router.get("/details", (req, res) => {
  res.render("details");
});

module.exports = router;