import {z} from 'zod';

export const  serviceSchema = z.object({
    serviceId : z.string().min(1),
    serviceName : z.string().min(3),
    serviceDescription : z.string(),
    serviceCategory : z.string().min(3),
    serviceDateCreated : z.string().date().optional()
})