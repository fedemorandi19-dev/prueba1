const mysql = require("promise-mysql");
const dontenv = require("dotenv");
dontenv.config();

const connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password: process.env.password,
    database:process.env.database
})


getConnection = async ()=> await connection;

module.exports = {
    getConnection
}