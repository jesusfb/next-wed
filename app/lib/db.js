import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config(); // Ngeload variabel dari .env

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Pastikan portnya di-convert ke integer
});

export { pool };
