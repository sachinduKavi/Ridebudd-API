const mongoose = require('../mongoDB');

// Show the data in employee

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