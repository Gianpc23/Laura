
var date = new Date();
var d = new Date(2019, 12, 5, 2);
console.log(date.getTime());
console.log(d.getFullYear());
console.log("Hola");
const fetch = require("node-fetch");

  var url = 'https://registrohorario.babel.es/api/users/authenticate';
  var data = { password: 'GianBabel25', username: 'gianfranco.perez' };
  
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))