const express = require('express');
const router = express.Router();
const User = require('./models/usuario');

router.get('/',(req,res)=>{
    res.send("<h1>Hola Mundo</h1>");
});

router.get('/example',(req,res)=>{
    var userExample = new User({
        name: "Gian",
        password: "pwd",
        email: "Gianpc25"
    });
    res.send(userExample);
});

router.post('/usuario', async (req,res,next)=>{
    User.create(req.body).then(user => res.json(user)).catch(err => next(err));
});

module.exports = router;