<?php
require_once('Database.php');

class motocicleta{

    public static function create_motocicleta($marca, $modelo, $color, $placa){
        $database = new Database();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('INSERT INTO motocicleta (marca, modelo, color, placa) VALUES (:marca, :modelo, :color, :placa)');
        $stmt->bindParam(':marca', $marca);
        $stmt->bindParam(':modelo', $modelo); 
        $stmt->bindParam(':color', $color); 
        $stmt->bindParam(':placa', $placa);  
        if($stmt->execute()){
            //  guardado correctamente
            http_response_code(201);
            echo json_encode(array("message" => " guardado con éxito."));
        }else{
            // Error al guardar los datos
            http_response_code(500);
            echo json_encode(array("message" => "No se ha podido guardar ."));
        }
    }
    
    public static function delete_motocicleta($id){
        $database = new Database();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('DELETE FROM motocicleta WHERE id=:id');
        $stmt->bindParam(':id', $id);

        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(array("message" => "borrado con éxito."));
        }else{
            http_response_code(500);
            echo json_encode(array("message" => "No se ha podido borrar el ."));
        }
    }

    public static function get_all_motocicleta(){
        $database = new Database();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('SELECT * FROM motocicleta');       
        if($stmt->execute()){
            $result = $stmt->fetchAll();
            http_response_code(200);
            echo json_encode($result);
        }else{
            http_response_code(500);
            echo json_encode(array("message" => "No se ha podido consultar ."));
        }
    }

    public static function update_motocicleta($id, $marca, $modelo, $color, $placa){
        $database = new Database();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('UPDATE motocicleta SET marca=:marca, modelo=:modelo, color=:color, placa=:placa WHERE id=:id');
        $stmt->bindParam(':marca', $marca);
        $stmt->bindParam(':modelo', $modelo); 
        $stmt->bindParam(':color', $color); 
        $stmt->bindParam(':placa', $placa);  
        $stmt->bindParam(':id', $id);  
        
        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(array("message" => " actualizado correctamente."));
        }else{
            http_response_code(500);
            echo json_encode(array("message" => "No se ha podido actualizar ."));
        }
    }
    public static function get_by_id($id){
        $database = new Database();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('SELECT * FROM motocicleta WHERE id=:id');
        $stmt->bindParam(':id', $id);
        $stmt->execute(); 
    
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
        if($result){
            http_response_code(200); 
            echo json_encode($result);
        }else{
            http_response_code(500);
            echo json_encode(array("message" => "Error en listado."));
        }
    }
    
}
