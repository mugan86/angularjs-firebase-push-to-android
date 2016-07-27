<?php

	header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header('Access-Control-Allow-Methods: GET, POST');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
	error_reporting(E_ALL);
  
  $type = $_POST["type"];
  $description = $_POST["description"];
  $title = $_POST['title'];
  $messages = json_decode($_POST["messages"]);

  if (sizeof($messages) > 0)
  {
    include('message.php');
  }
 ?>