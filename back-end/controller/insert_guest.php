<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);
$guest = new User($data->guest->name, $data->guest->password, $data->guest->email, $data->guest->phone, $data->guest->address, $data->guest->user_type, $data->guest->wishlist, $data->guest->cart);
$result = $UT->insertUser($guest);        
if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Success";
} else {
    $return = new APIresponse("Failed");
}


echo json_encode($return);

?>