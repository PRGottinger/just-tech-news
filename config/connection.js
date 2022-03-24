const Sequelize = require("sequelize");

// require("dotenv").config();

// create connection to our db
const sequelize = new Sequelize(
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PW,
  {
    host: "localhost",
    user: "host",
    password: "grandMA7grundy",
    database: "just_tech_news_db",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
