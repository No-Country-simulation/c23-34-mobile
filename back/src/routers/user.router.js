import {Router} from 'express';
import {UserController} from '../controllers/user.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {userSchema} from '../schemas/user.schema.js';   

export const userRouter = Router()
userRouter.get('/:id',UserController.getUserById)
userRouter.put('/:id', validateSchema(userSchema),UserController.updateUser)

