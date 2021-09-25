const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path'); //read fileSystem
const routes = require('./routes');
//pgsql
const db = require('./config/db');

// db.authenticate()
//     .then(()=> console.log('Conectado al Server'))
//     .catch(error => console.log(error));

db.sync().then(()=> console.log('Conexión OK a BD!'))
    .catch(error => console.log(error));
    

require('dotenv').config({path: 'variables.env'});

// App
const app = express();

// EJS Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
// Carpeta View
app.set('views', path.join(__dirname, './views'));
// static 
app.use(express.static(path.join(__dirname,'public')));
// Middleware
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.year = fecha.getFullYear();

    next();
});


// Routes
app.use('/', routes());



app.listen(process.env.PORT,()=> {
    console.log('Server corriendo');
});