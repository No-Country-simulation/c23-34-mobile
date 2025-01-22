import {UserController} from '../controllers/user.controller.js';
import {Router} from 'express';

export const userRoute = Router()

userRoute.get('/:id',UserController.getUserById)