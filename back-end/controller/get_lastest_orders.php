<?php
require_once("../library/classes/receipt.php");
require_once("../library/classes/product.php");
require_once("../library/models/receiptTable.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}

$RT = new ReceiptTable();
$PT = new ProductTable();

$result = $RT->getRecentReceipt(10);
if ($result){
    $return = new APIresponse("Success");
    $receipt_array = $RT->data;
    if (count($receipt_array) > 0){
        $return->data->result = "Success";
        $return->data->receipt_array = [];
        foreach ($receipt_array as $receipt){
            $RT->getReceiptLine("", $receipt->id);
            $receipt->addLinesArray($RT->data);
            $total_price = 0;
            foreach ($receipt->lines as $line){
                $PT->getProductById($line->product_id);
                $total_price += $PT->data->selling_price;
            }
            $newReceipt = new stdClass();
            $newReceipt->receipt = $receipt;
            $newReceipt->total = $total_price;
            array_push($return->data->receipt_array, $newReceipt);
        }
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>