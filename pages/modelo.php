<?php
class Model
{ 
    var $id;
    var $usuario;
    var $clave;

    function __construct(){

    }
    function Logear(){

        //variables de conexion

        $cadenaCnx ="sqlsrv:Server=DESKTOP-LSIA6OB\SQLEXPRESS;Database=LoginInsepetDB";
        $user="LoginAplicativo";
        $pass="Insepet2023";

        $cnx = new PDO($cadenaCnx,$user,$pass);

        try{
            $consulta=$cnx->prepare("SELECT * FROM usuarios WHERE usuario=:parametro1 AND clave=(SELECT dbo.fun_encriptar(:parametro2))");
            $consulta->bindValue(":parametro1",$this->usuario);
            $consulta->bindValue(":parametro2",$this->clave);

            $consulta->execute();

            $fila = $consulta->fetch();

            return $fila;


        }
        catch(PDOException $e){
            echo "Error En la Conexion->".$e;
        }

    }
}

?>