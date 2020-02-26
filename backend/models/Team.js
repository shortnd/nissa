const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please provide a name for the team'
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  players: [{
    type: mongoose.Types.ObjectId,
    ref: 'Players',
  }]
});

TeamSchema.pre('save', function() {
  this.slug = this.name.toLowerCase().replace(' ', '-')
});

module.exports = mongoose.model.Team || mongoose.model('Team', TeamSchema)
