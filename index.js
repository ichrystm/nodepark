const express = require("express");
const app = express();
const port = 8081;
const bodyParser = require("body-parser");
const connection = require("./database/database");

const historicController = require("./historic/HistoricController");
const newentryController = require("./newentry/NewentryController");

const Newentry = require("./newentry/Newentry");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection.authenticate()
.then(() => {
  console.log("Sucessfull DB connection");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", historicController);
app.use("/", newentryController);

app.listen(port, () => {
  console.log("Server online in localhost:" + port);
});