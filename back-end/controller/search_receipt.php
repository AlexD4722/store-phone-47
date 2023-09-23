<?php
require_once("../library/classes/receipt.php");
require_once("../library/classes/product.php");
require_once("../library/classes/buyer.php");
require_once("../library/classes/user.php");
require_once("../library/models/receiptTable.php");
require_once("../library/models/productTable.php");
require_once("../library/models/buyerTable.php");
require_once("../library/models/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

$RT = new ReceiptTable();
$PT = new ProductTable();
$BT = new BuyerTable();
$UT = new UserTable();
$data = json_decode($_POST["data"]);
$customer_name = $data->name;
$date = $data->date;

$UT->getUser($customer_name);
$account = $UT->data;
$BT->getBuyer('', $account->id);
$array = [];
if (count($BT->data) > 0) {
    foreach ($BT->data as $buyer) {
        $RT->getReceipt('', $date, $buyer->id, '');
        $array = array_merge($array, $RT->data);
    }
}

$return = new APIresponse("Success");
$return->data->receipt_array = [];
if (count($array) > 0) {
    $return->data->result = "Success";
    foreach ($array as $receipt) {
        $RT->getReceiptLine("", $receipt->id);
        $receipt->addLinesArray($RT->data);
        foreach ($receipt->lines as $line) {
            $PT->getProductById($line->product_id);
            $product = $PT->data;
            $line->product_id = $product;
        }
        array_push($return->data->receipt_array, $receipt);
    }
}

echo json_encode($return);
?>