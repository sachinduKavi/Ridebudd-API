const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host: "sql.freedb.tech",
//     user: "freedb_user_rd",
//     password: "kPnX$v7E7PtdGxX",
//     database: "freedb_ridebuddy_db",
//     port: 3306
// });

const conn = mysql.createConnection({
    host: "db4free.net",
    user: "rb_user",
    password: "rootridebuddy",
    database: "ridebuddy"
});

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "RideBuddy"
// });

module.exports = conn;

// db4free.net
// Database: ridebuddy
// Username: rb_user
// Email: skcode2001@gmail.com