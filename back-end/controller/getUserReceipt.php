<?php
require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$data = json_decode($_POST["data"]);
$userId = $data->userId;

$result = $UT->getUserReceipt($userId);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->userArray = $UT->data;
} else {
    $return = new APIresponse("Failure");
    $return->data->userArray = null;
}


echo json_encode($return);
?>