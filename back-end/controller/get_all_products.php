<?php
require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$result = $PT->getProductList();
if ($result) {
    $return = new APIresponse("Success");
    $return->data->productArray = $PT->data;
} else {
    $return = new APIresponse("Failure(Database error)");
}

echo json_encode($return);
?>