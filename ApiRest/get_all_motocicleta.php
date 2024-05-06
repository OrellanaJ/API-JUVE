<?php
require_once('./includes/motocicleta.php');

 if($_SERVER['REQUEST_METHOD'] == 'GET'){
    motocicleta::get_all_motocicleta();
 }

?>