<?php
require_once("../library/classes/buyer.php");
require_once("../library/models/buyerTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$BT = new BuyerTable();
$data = json_decode($_POST["data"]);

$result = $BT->getBuyer();
if ($result) {
    $return = new APIresponse("Success");
    $return->data->userArray = $BT->data;
} else {
    $return = new APIresponse("Failure");
    $return->data->userArray = null;
}


echo json_encode($return);
?>