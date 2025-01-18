import bcrypt from 'bcrypt';
import cryptoJs from 'crypto-js';

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
    const dataEncrypt = cryptoJs.AES.encrypt(data, SECRET_KEY_DEV).toString();
    return dataEncrypt;
};

export const decryptData = (data) => {
    const bytes = cryptoJs.AES.decrypt(data, SECRET_KEY_DEV);
    const dataDecrypt = bytes.toString(cryptoJs.enc.Utf8);
    return dataDecrypt;
};