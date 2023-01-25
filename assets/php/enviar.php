<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = 'Formulario Rellenado';
$mensaje = "Nombre: " . $nombre . "<br> Email: $email<br> Mensaje:" . $_POST['mensaje'];

$para = 'paul.moyaf@gmail.com'; 
if (mail($para, $asunto, $mensaje)) {
    echo "Correo enviado";
}
?>