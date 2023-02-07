<?php
require_once 'modelo.php';

//instancia 
$model=new Model();

$model->usuario=$_POST['txtUsuario'];
$model->clave=$_POST['txtPassword'];

$filaController=$model->Logear();

if($filaController>0) {
    echo "<h1>Bienvenido Usario</h1>";
}else{
    echo "<h1Usuario O Contraseña Incorrectos!</h1>";

    header("refresh:2; url= http://localhost/Login/");
}

?>



