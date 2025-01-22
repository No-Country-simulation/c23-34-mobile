import express from 'express';
import {PORT} from './src/utils/config.js'; 
import {connectDB} from './src/utils/db.js';   
import {errorMiddleware} from './src/middlewares/error.middleware.js';
import {userRoute} from './src/routes/user.route.js';
const app = express();

app.use(express.json());
app.use(errorMiddleware)

app.use('/user',userRoute)

connectDB();
app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`);})