const Sequelize = require("sequelize");
const connection = require("../database/database");

const Newentry = connection.define("vehicles", {
  plate: {
    type: Sequelize.STRING,
    allowNull: false
  },

  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false
  },

  model: {
    type: Sequelize.STRING,
    allowNull: false
  },

  entrydate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },

  entryhour: {
    type: Sequelize.TIME,
    allowNull: false
  },

  exitdate: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },

  exithour: {
    type: Sequelize.TIME,
    allowNull: true
  },

  state: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '1'
  }

})

//Newentry.sync({force: true});

module.exports = Newentry;