<?php

	include 'connect_db.php';

	$token = $_POST["token"]; 

	error_reporting(E_ERROR);

	$tokens_check= mysqli_query($con,"SELECT token
		FROM `tokens` WHERE token = '" . $token . "'");
	
	if (mysqli_num_rows($tokens_check) == 0 && $token !=null)
	{

		$result = mysqli_query($con,"INSERT IGNORE INTO tokens VALUES (NULL, '$token')");

		//Start Array to store result data
		$rawdata = array();

		if ( false===$result ) 
		{
		  
		  	$row_array['status'] = 0;
			$row_array['message'] = mysqli_error($con);
			        
			    //push the values in the array
			array_push($rawdata,$row_array);
		}
		else 
		{
			$row_array['status'] = 1;
			$row_array['message'] = $token." register succesfully!!";
		}

	}
	else if ($token == null)
	{
			$row_array['status'] = 3;
			$row_array['message'] = "No Add correct token (null)";
	}
	else
	{
			$row_array['status'] = 2;
			$row_array['message'] = $token." already register";
	}

	
	array_push($rawdata,$row_array);

	mysqli_close($con);

	//Encode JSON format and return string data...

	echo json_encode($rawdata);	


?>