<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$id = $data->idReceipt;

$result = $RT->getReceipt($id);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->receiptArray = $RT->data;
} else {
    $return = new APIresponse("Failure");
    $return->data->receiptArray = null;
}

echo json_encode($return);
?>