import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const CityField = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        // Fetch city data from an API
        const fetchCities = async () => {
            try {
                const response = await fetch('https://api.example.com/cities'); // Replace this URL with your actual API endpoint
                const data = await response.json();
                const formattedCities = data.map(city => ({ label: city.name, value: city.name }));
                setCityOptions(formattedCities);
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        };

        fetchCities();
    }, []);

    const handleChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    return (
        <div>
            <h3>Select a City:</h3>
            <Select
                value={selectedCity}
                onChange={handleChange}
                options={cityOptions}
                placeholder="Search for a city..."
            />
            {selectedCity && (
                <div>
                    <p>You have selected: {selectedCity.label}</p>
                </div>
            )}
        </div>
    );
};

export default CityField;
