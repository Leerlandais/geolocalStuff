const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const search = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
  });
  
  map.addControl(search);

  const monIcone = L.icon({
    iconUrl: 'images/blue_map_marker.svg',    
    iconSize:     [48, 48], // size of the icon
    iconAnchor:   [24, 64], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -48]
});

const marker2 = L.marker([50.8227, 4.3346], {icon:monIcone}).addTo(map);

