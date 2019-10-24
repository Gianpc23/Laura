const app = require('./app');   //Saco el objeto que se exporta dentro del fichero app.js, que es un objeto configurado.
require('./database');

app.listen('3000',()=>{
    console.log("Listen on port 3000");
});