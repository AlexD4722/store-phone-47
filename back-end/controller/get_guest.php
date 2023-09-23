<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);
$result = $UT->getGuest($data->guest->name);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Success";
    $return->data->guestArray = $UT->data;
} else {
    $return = new APIresponse("Failed");
}


echo json_encode($return);

?>