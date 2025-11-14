const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  winner: {
    type: String,
    required: true,
    enum: ['X', 'O', 'Draw']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
