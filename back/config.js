import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URI_DEV
export const PORT = process.env.PORT || process.env.PORT_DEV