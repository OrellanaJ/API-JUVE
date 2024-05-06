<?php 
require_once('./includes/motocicleta.php');

if($_SERVER['REQUEST_METHOD']== 'POST' && isset($_POST['marca']) && isset($_POST['modelo']) && isset($_POST['color']) && isset($_POST['placa'])){

   motocicleta ::create_motocicleta($_POST['marca'], $_POST['modelo'], $_POST['color'], $_POST['placa']);

}else{
   echo (array("message"=>"nose enviaron todos los datos"));
}



?>