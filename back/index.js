import express from 'express';
import {PORT} from './config.js'; 
import {connectDB} from './models/db.model.js';   
const app = express();

app.use(express.json());
app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`);})
connectDB();