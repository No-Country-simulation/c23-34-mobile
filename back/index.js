import express from 'express';
import {PORT} from './src/utils/config.js'; 
import {connectDB} from './src/utils/db.js';   
import {validateToken} from './src/middlewares/validateToken.js';
import {errorMiddleware} from './src/middlewares/error.js';

import {userRoute} from './src/routers/user.router.js';
import {paymentRoute} from './src/routers/payment.router.js';
import {paymentMethodRoute} from './src/routers/paymentMethod.router.js';
import {serviceRoute} from './src/routers/service.router.js';
import {authRouter} from './src/routers/auth.router.js';

const app = express();
app.use(express.json());

//routes public access 
app.use('/auth',authRouter)
//routes protected by token
app.use(validateToken)
app.use('/user',userRoute)
app.use('/service',serviceRoute)
app.use('/payment',paymentRoute)
app.use('/paymentMethod',paymentMethodRoute)
app.use(errorMiddleware)

connectDB();
app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`);})