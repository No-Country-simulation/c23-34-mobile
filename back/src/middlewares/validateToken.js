import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../utils/config.js';

export const validateToken = (req, res, next) =>{
    try {
        const authHeader = req.header('Authorization')
        if(!authHeader) return res.status(401).json({error : 'Token no esta proporcionado'})
        
        const token = authHeader.replace('Bearer ', '')
        const decoded = jwt.verify(token, SECRET_KEY)

        req.userId = decoded.id
        next()
    } catch (error) {
        console.log(error);
        if(error.name == 'TokenExpiredError') return res.status(401).json({error : 'Token expirado'})
        if(error.name == 'JsonWebTokenError') return res.status(401).json({error : 'Token invalido'})
        res.status(500).json({ error: 'Error en la validación del token' });
    }
}