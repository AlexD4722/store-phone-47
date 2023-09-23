<?php
require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$data = json_decode($_POST["data"]);

$result = $UT->getUser($data->username);
if ($result) {
    $return = new APIresponse("Success");
    if (count($UT->data) === 1) {
        $return->data->result = "Success";
        $return->data->user = $UT->data[0];
        $return->data->user->password = "///***///";
    } else {
        $return = new APIresponse("Failed: Not found user");
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>