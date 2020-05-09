exports.distanceFilter = (spots, lat, lon, dist) => {
    const filteredSpots = spots.filter(function (x) {
        const distDifference = getDistanceFromLatLonInKm(
            lat,
            lon,
            x.latitude,
            x.longitude
        );

        return distDifference < dist;
    });

    return filteredSpots;
};

exports.distanceSort = (spots, lat, lon) => {
    const sortedSpots = spots.sort(function (a, b) {
        const aDist = getDistanceFromLatLonInKm(
            lat,
            lon,
            a.latitude,
            a.longitude
        );

        const bDist = getDistanceFromLatLonInKm(
            lat,
            lon,
            b.latitude,
            b.longitude
        );

        return aDist - bDist;
    });

    return sortedSpots;
};

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}
