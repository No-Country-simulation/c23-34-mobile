import bcrypt from 'bcrypt';

export const encryptData = async (data) => {
    const salt = await bcrypt.genSalt(10)
    const dataHash = await bcrypt.hash(data,salt)

    console.log(dataHash);//lanzar error
    return dataHash
} 

export const verifyEncryptData = async (dataCompare, dataHash) => {
    const dataVerify  = await bcrypt.compare(dataCompare,dataHash)
    console.log(dataVerify);
    return dataVerify
}
