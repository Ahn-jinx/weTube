import express from 'express'

export const userRouter = express.Router()

userRouter.get('/user', (req, res)=> {res.send('user index')});
userRouter.get('/user/pass', (req, res)=> {res.send('This is password')});