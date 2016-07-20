<?php
	header('Content-Type: text/html; charset=utf-8');
	error_reporting(E_ALL);

    require 'simple_html_dom.php';
	
	$path_to_firebase_cm = 'https://fcm.googleapis.com/fcm/send';

	//API-aren giltza(KEY) Googlen lortutakoa izan da nere kontuarekin
	//https://console.firebase.google.com/project/<your_project_id>/settings/cloudmessaging
	$apiKey='<YOUR_API_KEY_REPLACE>';

	$ids = array();

    /***************************************************
    READ TOKENS FROM SERVER OR ADD MANUALLY TOKENS
    ****************************************************/

    /*
    FROM SERVER
    $string = file_get_html(".../get_token.php");
    $json_a=json_decode($string,true);
    $tokens_list = $json_a[0]["tokens"];*/

    //MANUALLY
	array_push($ids, "<TOKEN(S)>");
	
    $message = $description;

    $messages_to_send = array();

    //Add all messages receive by Backend Push notifications panel
    foreach ($messages as $message) {
        //echo "//****Valor: " . $message->id . "\n";
        array_push($messages_to_send, array("html"=>$message->htmlmsg, "img"=>$message->image));
    }
    
	$fields = array(
		'registration_ids' => $ids,
        'data' => array('message' => $description, 'news'=>$messages_to_send, 'action' => 1, 'desc_msg' => 'Notification Example', 'type' => $type)
    );

    $headers = array(
        'Authorization:key=' . $apiKey,
        'Content-Type:application/json'
    );		
	$ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $path_to_firebase_cm); 
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 ); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

    $result = curl_exec($ch);

    //echo ($result);
   
    curl_close($ch);

    echo json_encode( $fields );

	
?>