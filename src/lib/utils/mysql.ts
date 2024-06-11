import mysql from "mysql2/promise"
// import { DATABASE_PASSWORD } from "$env/static/private"
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
// import.meta.env.DATABASE_PASSWORD

let mysqlcon = null

export function mysqlconFn() {
    if (!mysqlcon) {
        mysqlcon = mysql.createConnection({
            host: "85.215.156.4",
            user: "portfolio-api",
            password: DATABASE_PASSWORD,
            database: "portfolio"
        })
    }

    return mysqlcon
}
