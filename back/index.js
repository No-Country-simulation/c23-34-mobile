import express from 'express';
import {PORT} from './src/utils/config.js'; 
import {connectDB} from './src/utils/db.js';   
const app = express();

app.use(express.json());
app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`);})
connectDB();