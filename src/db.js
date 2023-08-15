const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_user_rd",
    password: "kPnX$v7E7PtdGxX",
    database: "freedb_ridebuddy_db"
});

module.exports = conn;