import React from 'react';
// import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const viewport = {
    width: '100%',
    height: '100vh',
    latitude: 37.7749,  // Example: San Francisco latitude
    longitude: -122.4194,  // Example: San Francisco longitude
    zoom: 12,
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"  // Map style URL
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={(viewport) => console.log(viewport)}
    />
  );
}

export default Map;
