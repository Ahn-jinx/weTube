import express from 'express'
//노드 모듈스 속의 express
//const express = require('express');
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express();

const PORT = 4000;

//function hiHome(req, res){
//    res.send('gogogoGo')};

const hiHome = (req, res) => {
    res.send('Fly me to the moon')
}


function hiProfile(req, res){
    res.send('This is profile !!')
}

const betwwen = (req, res, next) => {
    console.log('get jinxed!');
    next();
}

const betwwen2 = (req, res, next) => {
    console.log('WOW');
    next();
}


app.listen(PORT);

app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(betwwen);
app.get('/', hiHome);
app.use(betwwen2);
app.get('/profile',hiProfile)