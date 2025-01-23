import {z} from 'zod';

export const userSchema = z.object({
    userName : z.string().min(3),
    userLastName : z.string().min(3),
    userDNI : z.string().min(7),
    userEmail : z.string().email(),
    userPassword : z.string().min(8),
    userFavoriteServices : z.optional().default([])
})