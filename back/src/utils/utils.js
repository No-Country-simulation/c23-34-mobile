import bcrypt from 'bcrypt';
import cryptoJs from 'crypto-js';
import {format} from 'date-fns';
import {SECRET_KEY} from './config.js';

export const hashData = async (data) => {
    const salt = await bcrypt.genSalt(10)
    const dataHash = await bcrypt.hash(data,salt)

    console.log(dataHash);//lanzar error
    return dataHash
} 

export const verifyHashData = async (dataCompare, dataHash) => {
    const dataVerify  = await bcrypt.compare(dataCompare,dataHash)
    console.log(dataVerify);
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
console.log(formatDate('2025-01-26T02:55:13.753Z'));