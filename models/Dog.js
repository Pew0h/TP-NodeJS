const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    color: String,
    race: String
});

module.exports = mongoose.model('Dog', DogSchema);
