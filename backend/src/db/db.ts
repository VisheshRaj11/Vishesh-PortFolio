import pkg from "pg";
const {Pool} = pkg;

export const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"portfolio_db",
    password:"Vishesh",
    port: 8080,
});