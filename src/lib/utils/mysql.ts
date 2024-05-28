import mysql from "mysql2/promise"
// import { DATABASE_PASSWORD } from "$env/static/private"
import.meta.env.DATABASE_PASSWORD

let mysqlcon: Promise<mysql.Connection> = null

export function mysqlconFn() {
    if (!mysqlcon) {
        mysqlcon = mysql.createConnection({
            host: "85.215.156.4",
            user: "portfolio-api",
            password: import.meta.env.DATABASE_PASSWORD,
            database: "portfolio"
        })
    }

    return mysqlcon
}
