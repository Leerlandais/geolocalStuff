let latitude = 51.5007;
let longtitude = 0.1246;
let zoomcarte = 15;

let map = L.map('map').setView([latitude, longtitude], zoomcarte);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([latitude, longtitude]).addTo(map);