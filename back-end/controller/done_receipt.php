<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$id = $data->receipt_id;
$result = $RT->getReceipt($id);
if ($result){
    $receipt = $RT->data[0];
    $receipt->status = "Finished";
    $result = $RT->editReceiptLine($id, $receipt);
    if ($result){
        $return = new APIresponse("Success");
    } else{
        $return = new APIresponse("Failure(Database error)");
    }
} else {
    $return = new APIresponse("Failure(Can't find the receipt)");
}

echo json_encode($return);
?>