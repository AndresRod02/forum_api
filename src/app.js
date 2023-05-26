const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const apiRoutes = require("./routes/index");
const errorsRoute = require('./routes/errors.routes');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use(apiRoutes)
app.use(errorsRoute)
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});