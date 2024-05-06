<?php 
require_once('./includes/motocicleta.php');

if($_SERVER['REQUEST_METHOD']== 'DELETE' && isset($_GET['id'])){
    motocicleta::delete_motocicleta($_GET['id']);
}
?>