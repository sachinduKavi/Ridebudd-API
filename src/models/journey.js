const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journeySchema = new Schema({
    f_name:String,
    l_name:String
}, {timestamps: true});



const Journey = mongoose.model('journey', journeySchema);

module.exports = Journey;