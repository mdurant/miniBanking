const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//Tablas MariaDB
const db = require('./config/db');

db.authenticate()
    .then(()=> console.log('Conectado al Server'))
    .catch(error => console.log(error));

const app = express();


app.use('/', routes());


var corsOptions = {
    origin: "http://localhost:4001"
  };
  
  app.use(cors(corsOptions));
  
  app.use(express.json());
  
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a Mini Bank." });
  });
  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`servidor está corriendo en puerto:  ${PORT}.`);
  });

