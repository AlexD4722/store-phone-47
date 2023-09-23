<?php
require_once("../library/classes/receipt.php");
require_once("../library/classes/product.php");
require_once("../library/models/receiptTable.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$receipt_id = $data->idReceipt;

$result = $RT->getReceiptLine("",$receipt_id);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->receipt_line_array = $RT->data;
    if (count($return->data->receipt_line_array) > 0) {
        $return->data->result = "Success";
        $return->data->array_item= [];
        foreach ($return->data->receipt_line_array as $receipt) {
            // $PT->getProductById($receipt->product_id);
            $PT = new productTable();
            $rs =  $PT->getProductById($receipt->product_id);
            if($rs){
                $item = new stdClass();
                $item->phone = $PT->data;
                $item->color = $receipt->color;
                $item->quantity = $receipt->quantity;
                $item->total = (int)$receipt->quantity * (int)$PT->data->selling_price;
                array_push($return->data->array_item, $item);
            }
        }
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>