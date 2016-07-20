<?php 
	#Conectar a la BBDD
	 
	$DB_SERVER="localhost";
	$DB_USER="root";
	$DB_PASS="root";
	$DB_DATABASE="amuxika";

	#Ejecutar conexión
	$con = new mysqli($DB_SERVER, $DB_USER, $DB_PASS, $DB_DATABASE);

	$con->set_charset("utf8");
	#Analizar la conexión
	if (mysqli_connect_errno()) {
	echo 'Database connection error: ' . mysqli_connect_error();
	exit();
	}

?>