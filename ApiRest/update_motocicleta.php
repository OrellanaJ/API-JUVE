<?php
require('includes/motocicleta.php');

parse_str(file_get_contents("php://input"), $_PUT);

if ($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_PUT['marca']) && isset($_PUT['modelo']) && isset($_PUT['color']) && isset($_PUT['placa']) && isset($_PUT['id'] )) {
    motocicleta::update_motocicleta($_PUT['id'], $_PUT['marca'], $_PUT['modelo'], $_PUT['color'], $_PUT['placa']);
} else {
    echo 'No se han proporcionado todos los datos necesarios para la actualización';
}

?>
