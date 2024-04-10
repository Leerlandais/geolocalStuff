let latitude = 50.8227;
let longtitude = 4.3346;
let zoomcarte = 15;
let myAcc = positionTrouveePrecision()
let map = L.map('myMap').setView([latitude, longtitude], zoomcarte);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let circle = L.circle([latitude, longtitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: myAcc
}).addTo(map);


// let marker = L.marker([latitude, longtitude]).addTo(map);

function recherchePosition() {
    if (detecterGeoLoc()) {
        // recherche de la position ou erreur
        document.getElementById("message").innerHTML = "Je recherche";
        navigator.geolocation.getCurrentPosition(positionTrouvee,erreurPosition);
    } else {
        // Pas de géolocalisation
        document.getElementById("message").innerHTML = "La géolocalisation n'est pas supportée sur ce navigateur";
    }
}

function recherchePositionPrecise() {
    if (detecterGeoLoc()) {
        // recherche de la position ou erreur
        document.getElementById("message").innerHTML = "Je recherche";
        navigator.geolocation.getCurrentPosition(positionTrouveePrecise,erreurPosition,{
            enableHighAccuracy:true, timeout:10000, maximumAge:0
        });
    } else {
        // Pas de géolocalisation
        document.getElementById("message").innerHTML = "La géolocalisation n'est pas supportée sur ce navigateur";
    }
}

function detecterGeoLoc() {
    if (navigator.geolocation) {
        return true;    // géolocalisation supportée
    } else {
        return false;   // pas de géolocalisation
    }
}
function positionTrouveePrecision(position) {
    let precision = position.coords.accuracy + " m";
    myAcc = position.coords.accuracy;
}
function positionTrouveePrecise(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let alti = position.coords.altitude;

    let precision = position.coords.accuracy + " m";
    myAcc = position.coords.accuracy;
    let altiPrecision = position.coords.altitudeAccuracy + " m";
    let moment = new Date(position.timestamp);
    moment = moment.toLocaleString("fr-FR");
    let direction = position.coords.heading + " °";
    let vitesse = position.coords.speed + " m/s";           

    document.getElementById("message").innerHTML = `Votre position est : Latitude ${lat}° Longitude ${lng}°.${alti==null ? 'Altitude' : ''}`;
    document.getElementById("message_suite").innerHTML = `Précision de la mesure : ${precision}. La mesure a été prise le ${moment} `;

}        
function erreurPosition(erreur) {
    switch(erreur.code) {
        case erreur.PERMISSION_DENIED: document.getElementById("message").innerHTML = "PERMISSION_DENIED : l'utilisateur n'a pas autorisé l'accès à sa position."; break;
        case erreur.POSITION_UNAVAILABLE: document.getElementById("message").innerHTML = "POSITION_UNAVAILABLE : la position n'a pas pu être déterminée."; break;
        case erreur.TIMEOUT: document.getElementById("message").innerHTML = "TIMEOUT : le service n'a pas répondu à temps."; break;
        case erreur.UNKNOWN_ERROR: document.getElementById("message").innerHTML = "UNKNOWN_ERROR : une erreur inconnue s'est produite";
    }

}