import axios from 'axios';

export const getBestSpots = async (
    experience,
    location,
    distance,
    setSpots
) => {
    try {
        let url = 'api/spots/best/' + experience + '/?';

        if (location.lat && location.lng) {
            url = url + `latitude=${location.lat}&longitude=${location.lng}&`;

            if (distance !== 'none') {
                url = url + 'distance=' + distance;
            }
        }

        console.log(url);

        const res = await axios.get(url);

        setSpots(res.data);
    } catch (error) {
        console.error(error);
    }
};

export const getNearestSpot = async (
    experience,
    location,
    distance,
    setNearestSpot
) => {
    try {
        let url = 'api/spots/nearest/' + experience + '/?';

        if (location.lat && location.lng) {
            url = url + `latitude=${location.lat}&longitude=${location.lng}&`;

            if (distance !== 'none') {
                url = url + 'distance=' + distance;
            }
        }

        const res = await axios.get(url);

        setNearestSpot(res.data[0]);
    } catch (error) {
        console.error(error);
    }
};
