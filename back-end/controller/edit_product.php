<?php

require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$data = json_decode($_POST["data"]);
$id = $data->product->id;
$product = new Product($data->product->name, $data->product->description, $data->product->initial_price, $data->product->selling_price, $data->product->id_product_line, $data->product->quantity, $data->product->images, $data->product->color, $data->product->capacity, $data->product->status);
$product->id = $id;

$result = $PT->editProduct($id, $product);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Success";
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);

?>