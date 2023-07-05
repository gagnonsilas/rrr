var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer.provider('OpenStreetMap').addTo(map); // fixme
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
