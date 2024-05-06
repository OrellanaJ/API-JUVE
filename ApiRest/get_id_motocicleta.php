<?php
    require('./includes/motocicleta.php');

    if ($_SERVER['REQUEST_METHOD'] =='GET' && isset($_GET['id'])) {
          
         motocicleta::get_by_id($_GET['id']); //ojo me falta parece S
        
    }else{
        echo 'Nose envio el Id';
    }


?>