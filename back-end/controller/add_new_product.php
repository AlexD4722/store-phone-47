<?php

require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$data = json_decode($_POST["data"]);

$folder = str_replace(' ','',$data->name);
$n = $_POST["filenumber"];
mkdir("../imgProduct/$folder/");
for ($i = 0; $i < $n; $i++) {
    if (isset($_FILES['file_' . $i]) && $_FILES['file_' . $i]["error"] == 0) { 
            $filename = $_FILES['file_' . $i]["name"];
            $temptFile = $_FILES['file_' . $i]["tmp_name"];
            move_uploaded_file($temptFile, "../imgProduct/$folder/$filename");       
    }
}

$product = new Product($data->name, $data->desc, $data->inital, $data->selling, $data->lineID, $data->quantity, $folder, $data->color, $data->capacity, 1);
$result = $PT->addProduct($product);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Success";
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);

?>