<?php
require_once("../library/classes/buyer.php");
require_once("../library/classes/product.php");
require_once("../library/classes/receipt.php");
require_once("../library/classes/user.php");
require_once("../library/models/receiptTable.php");
require_once("../library/models/userTable.php");
require_once("../library/models/buyerTable.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$RT = new ReceiptTable();
$RT2 = new ReceiptTable();
$UT = new UserTable();
$BT = new BuyerTable();
$PT = new ProductTable();
$data = json_decode($_POST["data"]);
$idRecipient = $data->idRecipient;

$result = $BT->getBuyer($idRecipient);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->buyerList = $BT->data;
    $rsGetRe =  $RT->getReceipt("", "", $data->idRecipient);
    if($rsGetRe){
        $return->data->receipt = $RT->data;
        $id_receipt = $RT->data[0]->id;
        $resultReceiptLine = $RT2->getReceiptLine("", $id_receipt);
        if($resultReceiptLine){
            $return->data->receiptLine = $RT2->data;
            $listProduct = [];
            for ($i=0; $i < count($return->data->receiptLine); $i++) { 
                $item = new stdClass();
                $PT->getProductById($return->data->receiptLine[$i]->product_id);
                $item->product = $PT->data;
                $item->quantity = $return->data->receiptLine[$i]->quantity;
                $item->totalPrice = floatval($PT->data->selling_price) * floatval($return->data->receiptLine[$i]->quantity);
                array_push($listProduct, $item);
            }
            $return->data->listProducts = $listProduct;
        }
    }   
} else {
    $return = new APIresponse("Failure");
    $return->data->receiptArray = null;
}

echo json_encode($return);
?>