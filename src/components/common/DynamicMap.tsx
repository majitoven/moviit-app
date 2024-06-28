import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'; // Import the CSS file

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
        name: string;
        [key: string]: any;
    };
}

interface GeoJsonData {
    type: string;
    features: GeoJsonFeature[];
}

const SetViewOnMount = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom);
    }, [map, center, zoom]);

    return null;
};

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

    const onEachFeature = (feature: GeoJsonFeature, layer: L.Layer) => {
        if (feature.properties && feature.properties.name) {
            layer.bindTooltip(feature.properties.name, {
                permanent: false,
                direction: 'auto'
            });
        }
    };

    return (
        geoJsonData ? (
            <MapContainer style={{ height: "600px", width: "100%" }}>
                <SetViewOnMount center={[40.4168, -3.7038]} zoom={13} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    options={{
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }}
                />
                <GeoJSON data={geoJsonData} style={style} onEachFeature={onEachFeature} />
            </MapContainer>
        ) : (
            <div>Loading...</div>
        )
    );
};

export default ClientSideMapBarrios;
