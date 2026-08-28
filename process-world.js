/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const geojson = JSON.parse(fs.readFileSync('world.geojson', 'utf8'));
const RADIUS = 2.005; // Slightly above the surface

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  ];
}

const paths = [];

geojson.features.forEach(feature => {
  if (!feature.geometry) return;
  
  const type = feature.geometry.type;
  const coordinates = feature.geometry.coordinates;
  
  if (type === 'Polygon') {
    coordinates.forEach(ring => {
      const path = ring.map(coord => latLonToVector3(coord[1], coord[0], RADIUS));
      paths.push(path);
    });
  } else if (type === 'MultiPolygon') {
    coordinates.forEach(polygon => {
      polygon.forEach(ring => {
        const path = ring.map(coord => latLonToVector3(coord[1], coord[0], RADIUS));
        paths.push(path);
      });
    });
  }
});

const compactPaths = paths.map(path => 
  path.map(p => [
    Math.round(p[0] * 1000) / 1000,
    Math.round(p[1] * 1000) / 1000,
    Math.round(p[2] * 1000) / 1000
  ])
);

fs.writeFileSync('src/data/world-lines.json', JSON.stringify(compactPaths));
console.log(`Saved ${paths.length} paths to src/data/world-lines.json`);
