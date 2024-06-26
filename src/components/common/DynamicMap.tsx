import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ClientSideMapBarrios = ({ selectedBarrios }) => {
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        fetch('/madrid-districts.geojson') // Ensure this path matches where the file is saved
            .then(response => response.json())
            .then(data => setGeoJsonData(data))
            .catch(error => console.error('Error fetching the GeoJSON data:', error));
    }, []);

    const style = (feature) => {
        return {
            fillColor: selectedBarrios.includes(feature.properties.name) ? 'blue' : 'grey',
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    };

    return (
        geoJsonData ? (
            <MapContainer center={[40.4168, -3.7038]} zoom={13} style={{ height: "600px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <GeoJSON data={geoJsonData} style={style} />
            </MapContainer>
        ) : (
            <div>Loading...</div>
        )
    );
};

export default ClientSideMapBarrios;
