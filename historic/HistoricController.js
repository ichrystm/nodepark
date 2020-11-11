const express = require("express");
const router = express.Router();

router.get("/historic", (req, res) => {
  res.render("historic");
});

module.exports = router;