import express from 'express';
import {PORT} from './src/utils/config.js'; 
import {connectDB} from './src/utils/db.js';   
import {errorMiddleware} from './src/middlewares/error.js';
import {userRoute} from './src/routers/user.router.js';
import {paymentRoute} from './src/routers/payment.router.js';
import {paymentMethodRoute} from './src/routers/paymentMethod.router.js';
import {serviceRoute} from './src/routers/service.router.js';
const app = express();

app.use(express.json());
app.use(errorMiddleware)

app.use('/user',userRoute)
app.use('/service',serviceRoute)
app.use('/payment',paymentRoute)
app.use('/paymentMethod',paymentMethodRoute)

connectDB();
app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`);})