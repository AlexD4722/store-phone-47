<?php

require_once("../library/classes/product.php");
require_once("../library/classes/receipt.php");
require_once("../library/models/productTable.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$id = $data->id;

$result = $RT->getReceiptLine("", "", $id);
if ($result) {
    if (count($RT->data) > 0) {
        $product = new Product($data->id, $data->name, $data->description, $data->initial_price, $data->selling_price, $data->quantity, $data->images, $data->color, $data->capacity, 0);
        $product->product_line = new ProductLine($data->product_line->name, $data->product_line->brand, $data->product_line->product_type);
        $PT->editProduct($id, $product);
        $return = new APIresponse("Success");
        $return->data->result = "Success";
        $return->data->receipt_found = true;
    } else {
        $PT->removeProduct($id);
        $return = new APIresponse("Success");
        $return->data->result = "Success";
        $return->data->receipt_found = false;
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);

?>