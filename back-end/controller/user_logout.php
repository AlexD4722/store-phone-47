<?php
if (isset($_SESSION["userLogin"]) && $_SESSION["login_status"] = "OK"){
    unset($_SESSION["userLogin"]);
    $_SESSION["login_status"] = "Not login";
    $_SESSION["user"] = NULL;
    $return = new APIresponse("Success");
} else {
    $return = new APIresponse("Not login yet");
}

echo json_encode($return);
?>