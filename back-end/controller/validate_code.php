<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/models/temporaryUserTable.php");
require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);
$username = $UT->test_input($data->username);
$email = $UT->test_input($data->email);
$validation_code = $UT->test_input($data->validation_code);

$TUT = new TemporaryUserTable();

$result = $TUT->getUser($username);
if ($result) {
    $return = new APIresponse("Success");
    $temp_user = $TUT->data;
    if ($temp_user != NULL) {
        if ($validation_code == $temp_user->validation_code) {
            $return->data->result = "Success";
            $new_user = new User($temp_user->username, $temp_user->password, $temp_user->email, $temp_user->phone, $temp_user->address, "customer");
            $UT->insertUser($new_user);
            $TUT->deleteUser($username);
        } else {
            $return->data->result = "Failed";
        }
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);

?>