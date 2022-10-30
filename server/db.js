import { createPool } from 'mysql2/promise'
import * as dotenv from 'dotenv'
dotenv.config();

export const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: process.env.DBPASS,
    database: process.env.DBNAME,
})