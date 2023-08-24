const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sachinduk:rootridebuddy@ridebuddycluster.1vr9uln.mongodb.net/RideBuddy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log("MongoDB is connected");
})

module.exports = mongoose;