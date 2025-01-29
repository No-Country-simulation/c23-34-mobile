import bcrypt from 'bcrypt';
import cryptoJs from 'crypto-js';
import {format} from 'date-fns';
import {SECRET_KEY} from './config.js';

export const hashData = async (data) => {
    const salt = await bcrypt.genSalt(10)
    const dataHash = await bcrypt.hash(data,salt)
    return dataHash
} 

export const verifyHashData = async (dataCompare, dataHash) => {
    const dataVerify  = await bcrypt.compare(dataCompare,dataHash)
    return dataVerify
}

export const encryptData = (data) => {
    const dataEncrypt = cryptoJs.AES.encrypt(data, SECRET_KEY).toString();
    return dataEncrypt;
};

export const decryptData = (data) => {
    const bytes = cryptoJs.AES.decrypt(data, SECRET_KEY);
    const dataDecrypt = bytes.toString(cryptoJs.enc.Utf8);
    return dataDecrypt;
};

export const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyy')
}

//permite leer archivos json con moduls 
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)//importar y pasar ruta del json
