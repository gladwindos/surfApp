import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const SpotsList = ({ spots }) => {
    return (
        <ListGroup>
            <ListGroup.Item className='spots-list-header'>
                <h4>Best Surfing Spots</h4>
            </ListGroup.Item>
            <div className='spots-list'>
                {spots.length > 0 ? (
                    spots.map((spot) => (
                        <ListGroup.Item key={spot.spot_id}>
                            <h5>{spot.spot_name + ', ' + spot.county_name}</h5>
                            <p>{'Wind Speed: ' + spot.wind_speed + 'm/s'}</p>
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item>
                        <p>Please refine your search</p>
                    </ListGroup.Item>
                )}
            </div>
        </ListGroup>
    );
};

export default SpotsList;
