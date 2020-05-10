import React from 'react';

import SpotCard from './SpotCard';

const SpotsSection = ({ spots, nearestSpot }) => {
    const bestName =
        spots.length > 0
            ? spots[0].spot_name + ', ' + spots[0].county_name
            : 'Please refine your search';
    const bestWindSpeed =
        spots.length > 0 ? 'Wind Speed: ' + spots[0].wind_speed + ' m/s' : '-';

    const nearestName =
        nearestSpot && nearestSpot.spot_name
            ? nearestSpot.spot_name + ', ' + nearestSpot.county_name
            : 'Please refine your search';
    const nearestWindSpeed =
        nearestSpot && nearestSpot.wind_speed
            ? 'Wind Speed: ' + nearestSpot.wind_speed
            : '-';

    return (
        <div className='spots-section'>
            <SpotCard
                header='Best Spot Today'
                title={bestName}
                text={bestWindSpeed}
            />
            <SpotCard
                header='Nearest Quality Spot'
                title={nearestName}
                text={nearestWindSpeed}
            />
        </div>
    );
};

export default SpotsSection;
