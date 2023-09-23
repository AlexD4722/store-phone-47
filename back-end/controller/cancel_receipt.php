<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$idReceipt = $data->idReceipt;
$status = $data->status;
$result = $RT->updateStatusReceipt($idReceipt, $status);
if ($result){
    $return = new APIresponse("Success");
} else {
    $return = new APIresponse("Failure(Can't find the receipt)");
}

echo json_encode($return);
?>