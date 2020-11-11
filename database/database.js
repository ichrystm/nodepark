const Sequelize = require("sequelize");
const connection = new Sequelize("nodepark", "root", "Pripyat@123", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = connection;