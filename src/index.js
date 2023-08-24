const PORT = 8000;
const express = require('express');
const app = express();

const conn = require('./db');

const mongoose = require('./mongoDB')

const bodyParser = require('body-parser');

const userRouter = require('./routes/user_details');

const bannerRouter = require('./routes/banners');

const vehicleRouter = require('./routes/vehicle');

const journeyRouter = require('./routes/journey');



// Check connection of mysql database
conn.connect(function(err) {
    if(err) throw err;
    else console.log("Database Connected");
});

// Establishing MongoDB Connection
const mongDB = mongoose.connection;

mongDB.once('open', () => {
    console.log('MongoDB is online');
});




app.use(bodyParser.json());

app.use('/userDetails', userRouter);

app.use('/banners', bannerRouter);

app.use('/vehicle', vehicleRouter);

app.use('/journey', journeyRouter);



app.listen(PORT, () => {
    console.log("API is running...");
});

