<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$data = json_decode($_POST["data"]);
$receiptLine = $data->receiptLine;
$receipt = $data->receipt;
$RT = new ReceiptTable();
$receipt = new Receipt($receipt->id, $receipt->customer_id, $receipt->status);
$result = $RT->addReceipt($receipt);
if ($result) {
    foreach ($receiptLine as $item) {
        $line = new ReceiptLine($item->product_id, $item->quantity, $item->color, $item->receipt_id);
        $result = $RT->addReceiptLine($line);
    }
    $return = new APIresponse("Success");
} else {
    $return = new APIresponse("Failure");
}


echo json_encode($return);

?>