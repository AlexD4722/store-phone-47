<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once('../PHPMailer/src/Exception.php');
require_once('../PHPMailer/src/PHPMailer.php');
require_once('../PHPMailer/src/SMTP.php');
require_once("../library/models/temporaryUserTable.php");
require_once("../library/models/userTable.php");

$data = json_decode($_POST["data"]);
$UT = new UserTable();
$sent_email = $UT->test_input($data->email);
$sent_user = $UT->test_input($data->username);

$TUT = new TemporaryUserTable();
$result = $TUT->getUser($sent_user);
$user = $TUT->data;
$validation_code = $user->validation_code;

$mail = new PHPMailer(true);

try {
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAuth = true;
  
    $mail->Username = 'lameinbot5260@gmail.com';
    $mail->Password = 'etvlrkcbtcvuuebx';

    $mail->setFrom('lameinbot5260@gmail.com', 'PHPMailer');
    $mail->addAddress($sent_email, 'Machic Store');

    $mail->isHTML(true);
    $mail->Subject = 'Validation required';
    $mail->Body = 'Dear, ' . $sent_user . '.<br /> Your validation code: ' . $validation_code;
    $mail->AltBody = 'Validation code: ' . $validation_code;

    $mail->send();
} catch (Exception $e) {
    echo $mail->ErrorInfo;
}

?>