const mongoose = require('mongoose');

// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

const CelebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

let Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;
