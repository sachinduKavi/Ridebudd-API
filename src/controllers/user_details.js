const conn = require('../db');



const getUserDetails = (req, res) => {
    console.log("Get User Details");
    const userID = req.params.userID;
    const userEmail = req.params.userEmail;
    
    conn.query(`SELECT * FROM user_details WHERE userID='${userID}' OR user_email='${userEmail}'`, function(err, result, fields) {
        res.status(200).json({
            data: result
        });
    });
}

const newUser = (req, res) => {
    console.log("New User");
    const fName = req.params.fName;
    const lName = req.params.LName;
    const userEmail = req.params.userEmail;
    const password = req.params.pass;
    const mobileNumber = req.params.mobile;
    //  Fetching last userID from database
    conn.query("SELECT userID FROM user_details ORDER BY userID DESC LIMIT 1", function(err, result, fields) {
        console.log("LastID: ", result);
        var userNewID = "UA" + (parseInt(result[0]["userID"].substring(2)) + 1).toString().padStart(6, '0');
        console.log("New UserID " ,userNewID);

        conn.query(`INSERT INTO user_details(userID, f_name, l_name, user_email, password, mobileNumber, dp_image) VALUES('${userNewID}', '${fName}','${lName}','${userEmail}','${password}','${mobileNumber}',
        'default')`, function(err, result, fields) {
            if(err) throw err;
            res.status(201).json({
                message: "Record Created",
                status: result
            });
        });
    }); 
}



module.exports = {
    getUserDetails,
    newUser
}