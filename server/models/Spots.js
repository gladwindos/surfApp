const mongoose = require('mongoose');

const SpotsSchema = new mongoose.Schema({
    county_name: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    spot_id: {
        type: String,
    },
    spot_name: {
        type: String,
    },
    wind_speed: {
        type: String,
    },
});

module.exports = Spots = mongoose.model('spots', SpotsSchema);
