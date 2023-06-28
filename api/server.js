// Configuración del server
const express = require("express");
const app = express();
const db = require("./config/db");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("servidor levantado en el puerto 3001");
  });
});
