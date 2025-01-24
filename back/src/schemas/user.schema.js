import {z} from 'zod';

export const userSchema = z.object({
    userName : z.string().min(3, "minimo 3  caracteres"),
    userLastName : z.string().min(3, "minimo 3 caracteres"),
    userDNI : z.string().min(7, "minimo 7 caracteres"),
    userEmail : z.string().email(),
    userPassword : z.string().min(8, "minimo 8 caracteres"),
    userFavoriteServices : z.array(z.string()).optional().default([])
})
export const loginUserSchema = z.object({
    userEmail : z.string().email(),
    userPassword : z.string().min(8)
})
const testSchema = () => {
    const data = {
        // userName: "Juan",
        // userLastName: "Pérez",
        // userDNI: "12345678",
        userEmail: "agustin@gmail.com",
        userPassword: "password123"
    };

    const parseData = loginUserSchema.parse(data)
    // console.log(parseData);
}
// testSchema()
