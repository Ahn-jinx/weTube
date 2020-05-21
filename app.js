import express from 'express'
//노드 모듈스 속의 express
//const express = require('express');
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import globalRouter from './routers/globalRouter'
//import userRouter from './routers/userRouter'
//import videoRouter from './routers/videoRouter'

const app = express();

//function hiHome(req, res){
//    res.send('gogogoGo')};

function hiProfile(req, res){
    res.send('This is profile !!')
}

const betwwen = (req, res, next) => {
    console.log('get jinxed!');
    next();
}

app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(betwwen);

app.use('/', globalRouter)
//app.use('/user', userRouter)
//app.use('/video', videoRouter)


export default app;

