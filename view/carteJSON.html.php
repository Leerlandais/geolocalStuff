<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cluster de marqueurs</title>
    <!-- CSS de Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
    <!-- CSS de markerCluster -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css">

    <!-- mon CSS -->
    <style>
        #map { height: 400px; }
        .rouge, .rouge a {color:red;}
        h3, h1 {text-align: center;}
    </style>
</head>
<body>
    <h1>Carte et cluster</h1>
    <!-- Zone d'affichage de la carte -->
    <div id="map"></div>
    
    <div class="row">
<?php
foreach ($map_loc as $loc) {

?>
        <div class="col">
            <h4>Title : <?=$loc["name"]?></h4>
            <h5><?=$loc["adresse"]?></h5>
            <a href="?p=carte&lat=<?=$loc["lat"]?>&long=<?=$loc["long"]?>"><img src="<?=$loc["img_url"]?>" alt="anImage" title="Lat : <?=$loc["lat"]?>  Long : <?=$loc["long"]?>" class="mainImg"></a>
        </div>
        <?php
}

?>
</div>
    
    <!-- JS de Leaflet -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
    <!-- JS de markerCluster -->
    <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
     
    <!-- mon JS -->
    <script src="../public/scripts/carteJSON.js"></script>
    
</body>
</html>