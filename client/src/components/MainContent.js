import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SpotsList from './SpotsList';
import SpotsSection from './SpotsSection';

const MainContent = ({ spots, nearestSpot }) => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <SpotsList spots={spots} />
                </Col>
                <Col md={6}>
                    <SpotsSection spots={spots} nearestSpot={nearestSpot} />
                </Col>
            </Row>
        </Container>
    );
};

export default MainContent;
