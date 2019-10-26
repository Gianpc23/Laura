const express = require('express');
const app = express();
const cors = require('cors');

//Permite que la app entienda JSON
app.use(express.json());

//Permite que vengan peticiones desde :4200
app.use(cors({origin: 'http://localhost:4200'}));

//Asignar fichero rutas
app.use('/api',require('./routes'));

module.exports = app;