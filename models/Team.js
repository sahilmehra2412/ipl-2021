const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    abbr : {
        type : String,
        required : true,
        unique : true
    },
    logo : {
        type : String,
        required : true
    }
})

module.exports = Team = mongoose.model('team', TeamSchema)