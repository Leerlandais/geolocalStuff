<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>A BLANK PAGE</title>
</head>
<body>



    <div class="row">
<?php
foreach ($map_loc as $loc) {
    if (isset($_GET["lat"]) && isset($_GET['long'])) {
        ?>
        <span id="thisLat" class="hidden"><?=$loc["lat"]?></span>
        <span id="thisLong" class="hidden"><?=$loc["long"]?></span>
        <?php
}
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
    <h6 id="screenwidth"></h6>
    <script src="scripts/script.js"></script>
</body>
</html>