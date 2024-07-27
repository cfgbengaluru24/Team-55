const mongoose = require('mongoose')
const {Schema} = mongoose

const HelpSchema = new Schema({
    
})

const Help = mongoose.model('user', HelpSchema);
Help.createIndexes();
module.exports = Help;