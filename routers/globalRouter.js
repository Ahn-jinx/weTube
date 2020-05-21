import express from 'express'
import routes from '../routes'

const globalRouter = express.Router();

globalRouter.get('/', (req,res) => {res.send('this is home')})
globalRouter.get(routes.join, (req,res) => {res.send('this is j')})
globalRouter.get('/login', (req,res) => {res.send('this is LI')})
globalRouter.get('/logout', (req,res) => {res.send('this is LO')})
globalRouter.get('/search', (req,res) => {res.send('this is sss')})


export default globalRouter;