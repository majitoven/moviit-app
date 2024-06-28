import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// This component will only be rendered on the client side
const DynamicMapBarrios = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

interface MapBarriosProps {
  selectedBarrios: string[];
}

const MapBarrios: React.FC<MapBarriosProps> = ({ selectedBarrios }) => {
  return <DynamicMapBarrios selectedBarrios={selectedBarrios} />;
};
export default MapBarrios;