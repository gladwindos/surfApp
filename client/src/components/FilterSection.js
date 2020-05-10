import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LocationSearchInput from './LocationSearchInput';

const FilterSection = ({
    filterData,
    setFilterData,
    getBestSpots,
    setSpots,
    getNearestSpot,
    setNearestSpot,
}) => {
    const { experience, location, distance } = filterData;

    const onChange = (e) => {
        setFilterData({ ...filterData, [e.target.name]: e.target.value });
    };

    const updateLocation = (googleLocation) => {
        setFilterData({ ...filterData, location: googleLocation });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        getBestSpots(experience, location, distance, setSpots);

        if (location.lat && location.lng) {
            getNearestSpot(experience, location, distance, setNearestSpot);
        }
    };

    return (
        <Container>
            <Form onSubmit={(e) => onSubmit(e)} className='filter-section'>
                <Form.Group controlId='experience-dropdown'>
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                        as='select'
                        name='experience'
                        onChange={(e) => onChange(e)}
                    >
                        <option value='novice'>Novice</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='expert'>Expert</option>
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId='location-input'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter location'
                        name='location'
                        onChange={(e) => onChange(e)}
                    />
                </Form.Group> */}
                <LocationSearchInput updateLocation={updateLocation} />
                <Form.Group controlId='distance-dropdown'>
                    <Form.Label>Max Distance</Form.Label>
                    <Form.Control
                        as='select'
                        name='distance'
                        onChange={(e) => onChange(e)}
                    >
                        <option value='none'>None</option>
                        <option value='1'>1km</option>
                        <option value='5'>5km</option>
                        <option value='10'>10km</option>
                        <option value='25'>25km</option>
                        <option value='50'>50km</option>
                        <option value='100'>100km</option>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Filter
                </Button>
            </Form>
        </Container>
    );
};

export default FilterSection;
