import {z} from 'zod';

export const cardSchema = z.object({
    userId: z.string().regex(/^[a-fA-F0-9]{24}$/, "El valor debe ser un ObjectId válido"),
    cardHolderName : z.string().min(3),
    cardNumber : z.string().min(12),
    cardType : z.enum(['credit','debit']),
    cardExpirationDate :  z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/,"El formato debe ser MM/YY"),
    cardCvv : z.string().min(2).max(4),
    cardDateCreated : z.date().optional()
})
