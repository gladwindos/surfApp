import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import FilterSection from './components/FilterSection';
import MainContent from './components/MainContent';

import { getBestSpots, getNearestSpot } from './api/SpotsAPI';

function App() {
    const [filterData, setFilterData] = useState({
        experience: 'novice',
        location: {},
        distance: 'none',
    });

    const { experience, location, distance } = filterData;

    const [spots, setSpots] = useState([]);
    const [nearestSpot, setNearestSpot] = useState({});

    useEffect(() => {
        getBestSpots(experience, location, distance, setSpots);
    }, []);

    return (
        <div className='App'>
            <Header />
            <FilterSection
                filterData={filterData}
                setFilterData={setFilterData}
                getBestSpots={getBestSpots}
                setSpots={setSpots}
                getNearestSpot={getNearestSpot}
                setNearestSpot={setNearestSpot}
            />
            <MainContent
                filterData={filterData}
                spots={spots}
                nearestSpot={nearestSpot}
            />
        </div>
    );
}

export default App;
