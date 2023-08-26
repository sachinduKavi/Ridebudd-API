const mongoose = require('../mongoDB');

// Show the data in employee

function getLocalTime() {
    const sriLankaOffset = 5.5; // Sri Lanka is UTC+5:30
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + sriLankaOffset * 3600000);
  
    const hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const seconds = localTime.getUTCSeconds();
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  }

const Model = mongoose.model('NewCollection', {
    name: String,
    age: Number
}, "journey");

const run = async (req, res) => {
    console.log('Inside The function')
    const result = await Model.find({f_name: "root"});
    console.log(result);
    res.status(200).json({
        result
    })
}

const Journey = mongoose.model('journey', {    
    userID: String,
    venue: String,
    startingCity: String,
    endCity: String,
    sLongitudes: Number,
    sLatitudes: Number,
    eLongitudes: Number,
    eLatitudes: Number,
    description: String,
    status: String
}, "journey");

const newJourney = async (req, res) => {
    console.log("New JourneyFunction");
    const userID = req.params.userID;
    const venue = req.params.venue.replace('s', ':').replace('+', ' ');
    const startingCity = req.params.startCity;
    const endCity = req.params.endCity;
    const sLongitudes = req.params.sLongitudes.replace("d", ".");
    const sLatitudes = req.params.sLatitudes.replace("d", ".");
    const eLongitudes = req.params.eLongitudes.replace("d", ".");
    const eLatitudes = req.params.eLatitudes.replace("d", ".");
    const description = req.params.description.replaceAll('+', ' ');

    const time = getLocalTime();

    await Journey.insertMany(
        {
            userID: userID,
            venue: venue,
            startingCity: startingCity,
            endCity: endCity,
            sLongitudes: sLongitudes,
            sLatitudes: sLatitudes,
            eLongitudes: eLongitudes,
            eLatitudes: eLatitudes,
            description: description,
            postedOn: time,
            status: "Pending"
        }
    ).then(success => {
        console.log("Data Inserted Successfully");
        res.status(201).json({result:"Data Inserted Successfully"});
    }).catch(err => {
        res.status(409).json({result: "Couldn't insert the data"});
    });
    
    

}

module.exports = {
    run,
    newJourney
}