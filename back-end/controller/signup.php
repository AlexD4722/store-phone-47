<?php
if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");
require_once("../library/models/temporaryUserTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);

$user = $UT->test_input($data->username);
$pass = $UT->test_input($data->password);
$email = $UT->test_input($data->email);
$phone = $UT->test_input($data->phone);
$address = $UT->test_input($data->address);

$result = $UT->checkUser($user);
if (!$result) {
    $response = new APIresponse("Failed");
} else if (count($UT->data) > 0) {
    $response = new APIresponse("Success");
    $response->data->error = "Username existed";
} else {
    $result = $UT->getUser('', '', '', $email);
    if (count($UT->data) > 0) {
        $response = new APIresponse("Success");
        $response->data->error = "Email existed";
    } else {
        $TUT = new TemporaryUserTable();
        $validation_code = mt_rand(100000, 999999);
        $TUT->insertUser($user, $pass, $email, $phone, $address, $validation_code);
        $response = new APIresponse("Success");
        $response->data->result = "Success";
        $response->data->username = $user;
    }
}

echo json_encode($response);
?>