import dotenv from 'dotenv'

dotenv.config()

export const SERVICE_NAME = process.env.SERVICE_NAME
export const MONGO_URL = process.env.MONGO_URL