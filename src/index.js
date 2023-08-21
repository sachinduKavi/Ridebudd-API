const PORT = 3000;
const express = require('express');
const app = express();

const conn = require('./db');

const userRouter = require('./routes/user_details');

const bannerRouter = require('./routes/banners');



conn.connect(function(err) {
    if(err) console.log("Database Error");
    else console.log("Database Connected");
});



app.use('/userDetails', userRouter);

app.use('/banners', bannerRouter);



app.listen(PORT, () => {
    console.log("API is running...");
});

