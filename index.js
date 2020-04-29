const express = require('express');
const app = express();

const PORT = 4000;

function hiHome(req, res){
    res.send('gogogoGo');
};

function hiProfile(req, res){
    res.send('This is profile ~')
}

app.listen(PORT);
app.get('/',hiHome);
app.get('/profile',hiProfile)