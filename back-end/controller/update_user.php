<?php
require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$data = json_decode($_POST["data"]);

$result = $UT->getUser('', '', '', '', $data->id);
if (count($UT->data) === 1){
    $user = new User($data->username, $UT->data->password, $data->user_type, $data->email, $data->wishlist, $data->cart, '', 1);
    $result = $UT->editUser($data->id, $user);
    if ($result){
        $return = new APIresponse("Success");
        $return->data->result = "Success";
    } else {
        $return = new APIresponse("Failed: Edit failed");
    }
} else {
    $return = new APIresponse("Failed: Not found user");
}

echo json_encode($return);
?>