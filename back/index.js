import express from 'express';
import {PORT} from './src/utils/config.js'; 
import {connectDB} from './src/utils/db.js';   
import {errorMiddleware} from './src/middlewares/error.middleware.js';
import {userRoute} from './src/routes/user.route.js';
import {paymentRoute} from './src/routes/payment.route.js';
import {paymentMethodRoute} from './src/routes/paymentMethod.route.js';
import {serviceRoute} from './src/routes/service.route.js';
const app = express();

app.use(express.json());
app.use(errorMiddleware)

app.use('/user',userRoute)
app.use('/service',serviceRoute)
app.use('/payment',paymentRoute)
app.use('/paymentMethod',paymentMethodRoute)

connectDB();
app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`);})