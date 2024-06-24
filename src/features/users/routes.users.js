import express from 'express'
import { getAllUsers,deleteUser,addUser } from './controller.users.js';
export const userRouter=express.Router();
userRouter.get('/',getAllUsers);
userRouter.post('/',addUser);
userRouter.post('/delete',deleteUser);