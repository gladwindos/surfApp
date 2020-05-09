const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');
const {
    expertSort,
    intermediateSort,
    noviceSort,
} = require('../../helpers/experienceHelpers');
const {
    distanceSort,
    distanceFilter,
} = require('../../helpers/distanceHelpers');
const weatherAPIKey = config.get('weatherAPIKey');
const Spots = require('../../models/Spots');

router.get('/', async (req, res) => {
    try {
        const allSpotsRes = await axios.get(
            'https://s3.eu-west-2.amazonaws.com/lpad-public-assets/software-test/all-spots.json'
        );

        res.json(allSpotsRes.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// router.post('/init-db', async (req, res) => {
//     try {
//         const allSpotsRes = await axios.get(
//             'https://s3.eu-west-2.amazonaws.com/lpad-public-assets/software-test/all-spots.json'
//         );

//         const allSpots = allSpotsRes.data;

//         for (i = 0; i < allSpots.length; i++) {
//             const newSpot = new Spots({
//                 county_name: allSpots[i].county_name,
//                 latitude: allSpots[i].latitude,
//                 longitude: allSpots[i].longitude,
//                 spot_id: allSpots[i].spot_id,
//                 spot_name: allSpots[i].spot_name,
//             });

//             await newSpot.save();
//         }

//         const updatedSpots = await Spots.find();

//         res.json(updatedSpots);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server Error');
//     }
// });

// This makes a large number of calls to the weather API,
// so should only be called a few times a day
router.put('/update-spots', async (req, res) => {
    try {
        const allSpots = await Spots.find();

        for (i = 0; i < allSpots.length; i++) {
            const currentSpot = await Spots.findById(allSpots[i].id);

            const weatherData = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${currentSpot.latitude}&lon=${currentSpot.longitude}&appid=${weatherAPIKey}`
            );

            currentSpot.wind_speed = weatherData.data.wind.speed;

            await currentSpot.save();
        }

        const updatedSpots = await Spots.find();

        res.json(updatedSpots);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/best/:experience', async (req, res) => {
    try {
        const experience = req.params.experience;
        const latitude = req.query.latitude;
        const longitude = req.query.longitude;
        const distance = req.query.distance;

        let allSpots = await Spots.find();

        // Sort spots based on quality depending on experience
        if (experience === 'novice') {
            allSpots = noviceSort(allSpots);
        } else if (experience === 'intermediate') {
            allSpots = intermediateSort(allSpots);
        } else if (experience === 'expert') {
            allSpots = expertSort(allSpots);
        }

        // Filter out spots farther than a specific distance
        if (latitude && longitude && distance) {
            allSpots = distanceFilter(allSpots, latitude, longitude, distance);
        }

        res.json(allSpots);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/nearest/:experience', async (req, res) => {
    try {
        const experience = req.params.experience;
        const latitude = req.query.latitude;
        const longitude = req.query.longitude;
        const distance = req.query.distance;

        let allSpots = await Spots.find();

        // Sort spots based on quality depending on experience
        if (experience === 'novice') {
            allSpots = noviceSort(allSpots);
        } else if (experience === 'intermediate') {
            allSpots = intermediateSort(allSpots);
        } else if (experience === 'expert') {
            allSpots = expertSort(allSpots);
        }

        // Get 25% top spots
        const perc25 = parseInt(allSpots.length * 0.25);
        allSpots = allSpots.slice(0, perc25);

        if (latitude && longitude) {
            //Sort spots based on distance
            allSpots = distanceSort(allSpots, latitude, longitude);

            // Filter out spots farther than a specific distance
            if (distance) {
                allSpots = distanceFilter(
                    allSpots,
                    latitude,
                    longitude,
                    distance
                );
            }
        }

        res.json(allSpots);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
