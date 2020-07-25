const mongoose = require('mongoose');



const mySchema = new mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    authorContent:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Db',mySchema);