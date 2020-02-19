const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
  name: String,
  players: Array
});

module.exports = mongoose.model.Team || mongoose.model('Team', TeamSchema)
