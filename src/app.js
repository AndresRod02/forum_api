const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const apiRoutes = require("./routes/index");
const errorsRoute = require('./routes/errors.routes');
const initModels = require('./models/initModels')

initModels()
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

apiRoutes(app)
errorsRoute(app)
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});