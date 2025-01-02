const Pet = require('../models/Pet');

exports.getPetsNearby = async (req, res) => {
  const { longitude, latitude, distance } = req.query;
  try {
    const pets = await Pet.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [longitude, latitude] },
          $maxDistance: distance * 1000, // Convert km to meters
        },
      },
    });
    res.json(pets);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
