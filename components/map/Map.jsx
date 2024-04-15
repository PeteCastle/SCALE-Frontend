// MapComponent.js
import React, { useEffect, useRef } from 'react';

const MapComponent = ({ center, zoom, locations }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !center) return;

    const loadMap = async () => {
      const L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');

      if (mapInstance.current) {
        mapInstance.current.remove(); 
      }

      mapInstance.current = L.map(mapRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstance.current);

      locations && locations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(mapInstance.current);
        
        L.circle([location.lat, location.lng], {
          color: 'lightblue',
          fillColor: 'lightgreen',
          fillOpacity: 0.3,
          radius: location.radius // in meters
        }).addTo(mapInstance.current);
      });
    };

    loadMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove(); 
        mapInstance.current = null;
      }
    };
  }, [center, zoom, locations]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default MapComponent;
