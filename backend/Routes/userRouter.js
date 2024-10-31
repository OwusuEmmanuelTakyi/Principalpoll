import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../Controllers/userController.js';
const userRouter = express.Router()

//Crete user route

userRouter.get('/users',getUsers);
userRouter.get('/users/:id',getUser);
userRouter.post('/users',createUser);
userRouter.put('/users/:id',updateUser);
userRouter.delete('/users/:id',deleteUser);


export default userRouter;