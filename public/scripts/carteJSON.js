
const URL_SearchParams = new URLSearchParams(window.location.search);
searchLat = URL_SearchParams.get("lat");
searchLong = URL_SearchParams.get("long");


/* Définition du centre et du zoom de la carte (valeur initiale)  */
const carte = L.map('map').setView([searchLat, searchLong], 19);

/* Ajout d'un fond de carte (arrière-plan) */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* Ajout d'une liste de points à placer sur la carte */


const liste = {

    "YAY" :{"lat":searchLat,"lng":searchLong}
};

/* Création d'un clusterGroup */
const markers= L.markerClusterGroup();

/* Création d'un tableau de marqueurs pour un affichage optimal avec FeatureGroup */
const markerTable = [];

/* Boucle pour créer les marqueurs de la liste */
for (let item in liste){
    /* créer un marqueur pour chaque élément de la liste */
    let unMarqueur = L.marker([liste[item].lat, liste[item].lng]).addTo(carte);
    /* mettre le nom de l'item dans un popup */
    unMarqueur.bindPopup(item);
    /* ajouter ce marqueur au groupe */
    markers.addLayer(unMarqueur);

    /* ajouter ce marqueur au tableau */
    markerTable.push(unMarqueur);
}

/* ajouter le groupe à la carte */
carte.addLayer(markers);

/* placer le tableau de marqueuts dans le featureGroup */
const groupe = new L.featureGroup(markerTable);

/* adapter l'affichage de ma carte en fonction de la position des marqueurs */
carte.fitBounds(groupe.getBounds(),{padding:[10,10]});