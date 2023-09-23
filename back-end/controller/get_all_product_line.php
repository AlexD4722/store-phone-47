<?php
require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$result = $PT->getProductLineList();

if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Found";
    $return->data->linesArr = $PT->data;
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>