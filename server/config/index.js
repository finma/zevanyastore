import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

export const SERVICE_NAME = process.env.SERVICE_NAME;
export const MONGO_URL = process.env.MONGO_URL;
export const rootPath = path.resolve(__dirname, "..");
