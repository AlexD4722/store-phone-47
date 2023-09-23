<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$data = json_decode($_POST["data"]);
$RT = new ReceiptTable();
$result = $RT->getReceipt("");
if ($result) {
    $return = new APIresponse("Success");
    $return->data->productArray = $RT->data;
} else {
    $return = new APIresponse("Failure");
}

echo json_encode($return);

?>