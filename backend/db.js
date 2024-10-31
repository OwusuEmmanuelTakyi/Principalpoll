import pkg from 'pg';
import { config } from 'dotenv';

config(); // Load .env file
const { Pool } = pkg;
export const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432, // Convert port to a number
  database:'voting' ,
});
