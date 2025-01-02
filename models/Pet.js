const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  gender: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  ownerId: mongoose.Schema.Types.ObjectId,
  lookingFor: [String],
});

PetSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("Pet", PetSchema);
