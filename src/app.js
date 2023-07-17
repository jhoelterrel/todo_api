const express = require('express');
require('dotenv').config();

const usersRoute = require('./routes/users.routes');
const tasksRoute = require("./routes/tasks.routes")
const categoriesRoute = require("./routes/categories.routes")


const iniModels = require('./models/init.model');
const db = require('./utils/database');
const cors = require('cors');


iniModels();

db.sync().then(() => console.log('Base de datos conectada')); 

const app =  express();

app.use(cors());

const PORT = process.env.PORT ?? 8000

app.use(express.json()); //

app.use(usersRoute,tasksRoute,categoriesRoute);



app.get("/", (req, res) => {
    res.send("Bienvenido a mi servidor");
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });