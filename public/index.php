<?php
require_once "../config.php";


try {
    $db = new PDO(DB_DRIVER . ":host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET . ";port=" . DB_PORT, DB_LOGIN, DB_PWD);
} catch (Exception $e) {
    die($e->getMessage());
}    
$map_loc = getAllMapInfo ($db);

if(isset($_GET["p"])) {
    switch ($_GET["p"]) {
        case "carte" :
            include('../view/carteJSON.html.php');
    }
}


function getAllMapInfo(PDO $db) {
    $sql = "SELECT * FROM locations
            ORDER BY id ASC";
    
    try{
        
        $query = $db->query($sql);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }catch (Exception $e) {
        return $e;
    }
}

include "../view/mainView.php";
// echo json_encode(getAllMapInfo($db));

