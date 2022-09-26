import { createPool } from 'mysql2/promise';
import { HOST, USER, PASSWORD, DATABASE } from './config.js';

export const pool = createPool({
 host: HOST,
 user: USER,
 password: PASSWORD,
 database: DATABASE,
 //esto es para que me deje hacer
 //una conexion no segura
 ssl: {
  rejectUnauthorized: false,
 },
});
