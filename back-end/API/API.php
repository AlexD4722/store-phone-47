<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
header("Access-Control-Allow-Origin: http://localhost:3000");
require_once("../library/classes/api_response.php");
if (!isset($_POST["action"])) {
    $return = new APIresponse("No action received");
    echo json_encode($return);
    die;
}

require_once("../library/classes/constants.php");
require_once("../library/models/database.php");

$action = $_POST["action"];
$auth = "TRESPASSING NOT ALLOWED";

switch ($action) {
    case GET_ALL_PRODUCTS:
        require("../controller/get_all_products.php");
        break;
    case GET_5_PRODUCTS_BY_NAME:
        require("../controller/get_5_products.php");
        break;
    case SEARCH_PRODUCTS_BY_NAME:
        require("../controller/search_products_by_name.php");
        break;
    case SEARCH_ITEM_EXACTLY:
        require("../controller/search_item_exactly.php");
        break;
    case GET_RECEIPTS_BY_CID:
        require("../controller/get_receipts_by_cid.php");
        break;
    case DONE_RECEIPT:
        require("../controller/done_receipt.php");
        break;
    case INSERT_RECEIPT:
        require("../controller/insert_receipt.php");
        break;
    case USER_LOGIN:
        require("../controller/user_login.php");
        break;
    case USER_LOGOUT:
        require("../controller/user_logout.php");
        break;
    case USER_SIGNUP:
        require("../controller/signup.php");
        break;
    case ADD_NEW_PRODUCT:
        require("../controller/add_new_product.php");
        break;
    case ADD_NEW_PRODUCT_LINE:
        require("../controller/add_new_product_line.php");
        break;
    case GET_ALL_PRODUCT_LINE:
        require("../controller/get_all_product_line.php");
        break;
    case FIlTER_PRODUCT:
        require("../controller/filter_product.php");
        break;
    case GET_QUANTITY_PRODUCT:
        require("../controller/get_quantity_product.php");
        break;
    case GET_PRODUCTS_BY_WISHLIST:
        require("../controller/get_products_by_id_array.php");
        break;
    case UPDATE_USER:
        require("../controller/update_user.php");
        break;
    case SEND_VALIDATION_EMAIL:
        require("../controller/send_validation_email.php");
        break;
    case VALIDATE_CODE:
        require("../controller/validate_code.php");
        break;
    case FIND_USER_TO_UPDATE:
        require("../controller/find_user.php");
        break;
    case ADD_NEW_USER:
        require("../controller/add_new_user.php");
        break;
    case GET_USER_Receipt:
        require("../controller/getUserReceipt.php");
        break;
    case EDIT_PRODUCT:
        require("../controller/edit_product.php");
        break;
    case REMOVE_PRODUCT:
        require("../controller/remove_product.php");
        break;
    case SEARCH_RECEIPT:
        require("../controller/search_receipt.php");
        break;
    case INSERT_RECEIPT_LINE:
        require("../controller/insert_receipt_line.php");
        break;
    case GET_RECEIPT:
        require("../controller/get_receipt.php");
        break;
    case VALIDATE_NAME_USER:
        require("../controller/validate_name_user.php");
        break;
    case INSERT_GUEST:
        require("../controller/insert_guest.php");
        break;
    case GET_GEST:
        require("../controller/get_guest.php");
        break;
    case GET_LASTEST_ORDERS:
        require("../controller/get_lastest_orders.php");
        break;
    case GET_ORDER_RECEIVED:
        require("../controller/getOrderReceived.php");
        break;
    case GET_RECEIPT_BY_ID:
        require("../controller/get_receipt_by_id.php");
        break;
    case GET_BUYER:
        require("../controller/get_buyer.php");
        break;
    case INSERT_ORDER_RECEIPT:
        require("../controller/insert_order_receipt.php");
        break;
    case GET_RECEIPTS_BY_ID_USER:
        require("../controller/get_receipts_by_id_user.php");
        break;
    case CANCEL_RECEIPT:
        require("../controller/cancel_receipt.php");
        break;
    case REMOVE_USER:
        require("../controller/remove_user.php");
        break;
    default:
        $return = new APIresponse("Action invalid");
        echo json_encode($return);
        break;
}
?>