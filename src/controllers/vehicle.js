const conn = require('../db');


const insertVehicle = (req, res) => {
    const regNum = req.params.regNum;
    const ownerId = req.params.ownerID;
    const imageLink = req.params.imageLink;
    const seats = req.params.seats;
    const chassisNumber = req.params.chassisNumber;

    conn.query(`INSERT INTO vehicle_details VALUES(
        '${regNum}',
        '${ownerId}',
        '${imageLink}',
        '${seats}',
        'Pending',
        '${chassisNumber}',
    )`, function(err, result, fields) {
        if (err) console.log("Data insert could not success");
        else
            res.status(200).json({
                status: "Data Inserted"
            });
        });
};


const getVehicleData = (req, res) => {
    console.log("Get Vehicles");
    conn.query(`SELECT * FROM vehicle_details`, function(err, result, fields) {
        if(err) console.log("Error in get Vehicle");
        else
            res.status(200).json({
                data: result
            })
    })
}

const insertVehicleDetails = (req, res) => {
    console.log("Register New Vehicle");
    console.log(req.body);
    res.status(200).json({
        
        result: "This is Working",
        request: req.body
    })
    
}

module.exports = {
    getVehicleData,
    insertVehicle,
    insertVehicleDetails
}