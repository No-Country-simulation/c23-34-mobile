import express from 'express';
import {validateToken} from './src/middlewares/validateToken.js';
import {errorMiddleware} from './src/middlewares/error.js';

import {userRouter} from './src/routers/user.router.js';
import {paymentRouter} from './src/routers/payment.router.js';
import {paymentMethodRouter} from './src/routers/paymentMethod.router.js';
import {serviceRouter} from './src/routers/service.router.js';
import {authRouter} from './src/routers/auth.router.js';

export const app = express();
app.use(express.json());
//routes public access 
app.use('/auth',authRouter)
//routes protected by token
app.use(validateToken)
app.use('/user',userRouter)
app.use('/service',serviceRouter)
app.use('/payment',paymentRouter)
app.use('/paymentMethod',paymentMethodRouter)
app.use(errorMiddleware)

