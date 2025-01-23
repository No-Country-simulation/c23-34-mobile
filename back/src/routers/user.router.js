import {Router} from 'express';
import {UserController} from '../controllers/user.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {userSchema} from '../schemas/user.schema.js';   

export const userRoute = Router()
userRoute.get('/:id',UserController.getUserById)
userRoute.put('/:id', validateSchema(userSchema),UserController.updateUser)

