import {Router} from 'express';
import {UserController} from '../controllers/user.controller.js';

export const userRoute = Router()
userRoute.get('/:id',UserController.getUserById)
userRoute.post('/',UserController.createUser)
userRoute.put('/:id', UserController.updateUser)
