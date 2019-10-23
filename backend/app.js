const express = require('express');
const app = express();

//Permite que la app entienda JSON
app.use(express.json());

//Asignar fichero rutas
app.use('/api',require('./routes'));

module.exports = app;