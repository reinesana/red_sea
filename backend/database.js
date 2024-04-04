const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "09@Gnani02",
    host: "localhost",
    port: 5432,
    database: "red_login_system"
});

module.exports = pool;