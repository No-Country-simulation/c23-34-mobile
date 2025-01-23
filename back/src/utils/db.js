import {connect} from 'mongoose';
import {MONGO_URI} from './config.js';

export const connectDB = () => {
    //Primero se conecta con BD y luego se crean las rutas y configuran los middlewar
    return connect(MONGO_URI)
}