var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Gian:Gian@cluster0-d5u8f.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectados a la BBDD");
});