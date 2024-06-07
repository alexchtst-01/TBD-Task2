import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Alex-Cinatra-Good-Reading-Bookstore_db",
  password: process.env.DATABASE_PW,
  port: process.env.DATABASE_PORT,
});


export default pool;