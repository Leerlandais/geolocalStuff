const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const marker = L.marker([51.5, 0]).addTo(map);
/*
const popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("<h3>Je suis ici au centre de <a href = 'https://en.wikipedia.org/wiki/London' target = '_blank'>Londres</a></h3>")
    .openOn(map);
*/

    const monIcone = L.icon({
        iconUrl: 'images/blue_map_marker.svg',    
        iconSize:     [48, 48], // size of the icon
        iconAnchor:   [24, 64], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -48]
    });

    const marker2 = L.marker([51.5, 0.01], {icon:monIcone}).addTo(map);

    marker2.bindPopup("Je suis une icone bleue");