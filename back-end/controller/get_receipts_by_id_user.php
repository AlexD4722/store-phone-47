<?php
require_once("../library/classes/buyer.php");
require_once("../library/classes/receipt.php");
require_once("../library/classes/user.php");
require_once("../library/models/receiptTable.php");
require_once("../library/models/userTable.php");
require_once("../library/models/buyerTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$BT = new BuyerTable();
$data = json_decode($_POST["data"]);
$idUser = $data->idUser;
$result = $BT->getBuyer("", $idUser);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->buyer = $BT->data;
    $return->data->listObj = [];
    for ($i=0; $i < count($return->data->buyer); $i++) { 
        $RT = new ReceiptTable();
        $obj = new stdClass();
        $obj->buyer =$return->data->buyer[$i];
        $rsGetRe = $RT->getReceipt("", "", $return->data->buyer[$i]->id);
        if ($rsGetRe) {
            $obj->receipt = $RT->data;
            $id_receipt = $RT->data[0]->id;
            $RT2 = new ReceiptTable();
            $resultReceiptLine = $RT2->getReceiptLine("", $id_receipt);
            if ($resultReceiptLine) {
                $obj->receiptLine = $RT2->data;
                array_push( $return->data->listObj, $obj);
            }
        }
    }
} else {
    $return = new APIresponse("Failure");
}
echo json_encode($return);
?>