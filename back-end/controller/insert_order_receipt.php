<?php
require_once("../library/classes/buyer.php");
require_once("../library/models/buyerTable.php");
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$BT = new BuyerTable();
$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$buyer = new Buyer($data->buyer->id, $data->buyer->id_account, $data->buyer->name, $data->buyer->phone, $data->buyer->address);
$receipt = new Receipt($data->receipt->id_buyer, $data->receipt->status);
$result = $BT->insertBuyer($buyer);
if ($result) {
    $return = new APIresponse("Success");
        $rs = $RT->addReceipt($receipt);
        $rsGetRe =  $RT->getReceipt("", "", $data->receipt->id_buyer);
        if($rsGetRe){
            $return->data->receipt = $RT->data;
            $itemReceiptLine = $data->receipt_line->items;
            for ($i=0; $i < count($itemReceiptLine); $i++) { 
                $receiptLine = new ReceiptLine($itemReceiptLine[$i]->product->id , $itemReceiptLine[$i]->quantity,$return->data->receipt[0]->id);
                $RT->addReceiptLine($receiptLine);
                $return->data->result = "Success";
            }
        }   
} else {
    $return = new APIresponse("Failure");
}


echo json_encode($return);
?>