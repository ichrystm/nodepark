const express = require("express");
const app = express();
const port = 8081;
const bodyParser = require("body-parser");
const connection = require("./database/database");
const entry = require("./newentry/Newentry");


const historicController = require("./historic/HistoricController");
const newentryController = require("./newentry/NewentryController");
const detailsController = require("./details/detailsController");

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
  entry.findAll({ raw: true, order:[['entryhour', 'DESC']]})
  .then(entrys => {
    res.render('index', {
      entrys: entrys
    })
  })
  
});

app.use("/", historicController);
app.use("/", newentryController);
app.use("/", detailsController);

app.listen(port, () => {
  console.log("Server online in localhost:" + port);
});