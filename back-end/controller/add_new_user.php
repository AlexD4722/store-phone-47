<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);

$username = $UT->test_input($data->username);
$password = $UT->test_input($data->password);
$email = $UT->test_input($data->email);
$phone = $UT->test_input($data->phone);
$address = $UT->test_input($data->address);
$user_type = $UT->test_input($data->user_type);

$UT->getUser($username);
$user_type_accepted = ["admin", "customer", "removed"];
$username_exist = count($UT->data) === 1 && in_array($UT->data[0]->user_type, $user_type_accepted);
$UT->getUser("", "", "", $email);
$email_exist = count($UT->data) === 1 && in_array($UT->data[0]->user_type, $user_type_accepted);

if ($username_exist && $email_exist) {
    $return = new APIresponse("Success");
    $return->data->result = "Failed";
} else {
    $user = new User($username, $password, $email, $phone, $address, $user_type);
    $result = $UT->insertUser($user);
    if ($result) {
        $return = new APIresponse("Success");
        $return->data->result = "Success";
    } else {
        $return = new APIresponse("Failed");
    }
}

echo json_encode($return);

?>