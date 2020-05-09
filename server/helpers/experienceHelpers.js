exports.expertSort = (spots) => {
    const sortedSpots = spots.sort((a, b) => b.wind_speed - a.wind_speed);

    return sortedSpots;
};

exports.intermediateSort = (spots) => {
    const filteredSpots = spots.filter((x) => x.wind_speed < 12.9);

    const sortedSpots = filteredSpots.sort(
        (a, b) => Math.abs(10.3 - a.wind_speed) - Math.abs(10.3 - b.wind_speed)
    );

    return sortedSpots;
};

exports.noviceSort = (spots) => {
    const filteredSpots = spots.filter((x) => x.wind_speed < 10.3);

    const sortedSpots = filteredSpots.sort(
        (a, b) => Math.abs(7.7 - a.wind_speed) - Math.abs(7.7 - b.wind_speed)
    );

    return sortedSpots;
};
