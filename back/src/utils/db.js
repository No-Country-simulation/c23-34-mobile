import {connect} from 'mongoose';
import {MONGO_URI} from './config.js';

export function connectDB(){
    connect(MONGO_URI)
    .then(()=>{console.log('DB connected')})
    .catch((err)=>{console.log('Error to connection ', err)})
}