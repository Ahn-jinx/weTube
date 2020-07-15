import express from 'express'
import routes from '../routes'
import { home, search } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)
globalRouter.get(routes.join, (req,res) => {res.send('this is join')})
globalRouter.get(routes.login, (req,res) => {res.send('this is Login')})
globalRouter.get(routes.logout, (req,res) => {res.send('this is LogOut')})


export default globalRouter;