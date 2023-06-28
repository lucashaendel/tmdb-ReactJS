// import Sequelize from "sequelize";
const Sequelize = require("sequelize");

const db = new Sequelize("tmdb", "postgres", "asd123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  // port: 3001,
});

module.exports = db;

// https://api.themoviedb.org/3/movie/550?api_key=58c2574703eb959860a83eb6667a378a
//58c2574703eb959860a83eb6667a378a
