const conn = require('../db');



const getUserDetails = (req, res) => {
    console.log("Get User Details");
    const userID = req.params.userID;
    const userEmail = req.params.userEmail;
    
    conn.query(`SELECT * FROM user_details WHERE userID='${userID}' OR user_email='${userEmail}'`, function(err, result, fields) {
        res.status(200).json(result);
    });
}




module.exports = {
    getUserDetails
}