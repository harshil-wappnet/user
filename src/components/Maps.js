import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    const mapRef = useRef(null);
    const locationDetailsRef = useRef(null);

    useEffect(() => {
        // Initialize map only on the first render
        if (!mapRef.current) {
            // Create map
            const map = L.map('map-container').setView([23.070848479139983, 72.51508857509334], 13);

            // Add a tile layer from OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            // Add event listener to update location details on map click
            map.on('click', (event) => {
                const { lat, lng } = event.latlng;
                locationDetailsRef.current.innerText = `Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`;
            });

            // Save the map instance to the ref
            mapRef.current = map;
        }
    }, []); // Empty dependency array ensures this useEffect runs only once on mount

    return (
        <div>
            <div id="map-container" style={{ width: '600px', height: '450px', margin: '0 auto', border: '1px solid #ccc' }} />
            <p ref={locationDetailsRef} style={{ textAlign: 'center', marginTop: '10px' }}></p>
        </div>
    );
}

export default Map;
