import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface ClientSideMapBarriosProps {
    selectedBarrios: string[];
}

interface GeoJsonFeature {
    type: string;
    geometry: {
        type: string;
        coordinates: number[][][]; // Adjust based on your GeoJSON data structure
    } | null;
    properties: {
        [key: string]: any;
    };
}

interface GeoJsonData {
    type: string;
    features: GeoJsonFeature[];
}

const ClientSideMapBarrios: React.FC<ClientSideMapBarriosProps> = ({ selectedBarrios }) => {
    const [geoJsonData, setGeoJsonData] = useState<GeoJsonData | null>(null);

    useEffect(() => {
        fetch('/madrid-districts.geojson') // Ensure this path matches where the file is saved
            .then(response => response.json())
            .then(data => {
                if (data && data.features) {
                    setGeoJsonData(data);
                } else {
                    console.error('No features found in the GeoJSON data');
                }
            })
            .catch(error => console.error('Error fetching GeoJSON data:', error));
    }, []);

    const style = (feature: GeoJsonFeature) => {
        return {
            fillColor: selectedBarrios.includes(feature.properties.name) ? '#239160c4' : '#7e7e7e67',
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
