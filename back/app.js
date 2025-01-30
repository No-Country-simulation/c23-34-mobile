import express from 'express';
import cors from 'cors';
import {validateToken} from './src/middlewares/validateToken.js';
import {errorMiddleware} from './src/middlewares/error.js';

import {userRouter} from './src/routers/user.router.js';
import {paymentRouter} from './src/routers/payment.router.js';
import {cardRouter} from './src/routers/card.router.js';
import {authRouter} from './src/routers/auth.router.js';
import {providerRouter} from './src/routers/provider.router.js';

export const app = express();
app.use(cors({origin : '*'}))
app.use(express.json());
//routes public access 
app.use('/auth',authRouter)
//routes protected by token
app.use(validateToken)
app.use('/provider', providerRouter)
app.use('/user',userRouter)
app.use('/payment',paymentRouter)
app.use('/card',cardRouter)
app.use(errorMiddleware)

