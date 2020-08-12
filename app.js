import express from 'express'
//노드 모듈스 속의 express
//const express = require('express');
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import globalRouter from './routers/globalRouter'
import userRouter from './routers/userRouter'
import videoRouter from './routers/videoRouter'
import routes from './routes'
//import userRouter from './routers/userRouter'
//import videoRouter from './routers/videoRouter'

const app = express();

//function hiHome(req, res){
//    res.send('gogogoGo')};

const betwwen = (req, res, next) => {
    console.log('get jinxed!');
    next();
}

const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'wetube';
    res.locals.routes = routes;
    next();
}

app.set('view engine', 'pug')
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(localsMiddleware);
app.use(betwwen);

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use('/videos', videoRouter)


export default app;

