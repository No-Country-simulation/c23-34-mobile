import {AuthController} from '../controllers/auth.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {userSchema,loginUserSchema} from '../schemas/user.schema.js';
import {Router} from 'express';

export const authRouter = Router()
authRouter.post('/signup',validateSchema(userSchema),AuthController.signUp)
authRouter.post('/login',validateSchema(loginUserSchema),AuthController.logIn)