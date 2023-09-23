<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require('../PHPMailer/src/Exception.php');
require('../PHPMailer/src/PHPMailer.php');
require('../PHPMailer/src/SMTP.php');

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
    $confirmationCode = mt_rand(100000, 999999);
    $mail->setFrom('lameinbot@gmail.com', 'PHPMailer');
    $mail->addAddress('vinhnt113thotang@gmail.com', 'nguyen tuan vinh');

    $mail->isHTML(true);
    $mail->Subject = 'Đây là tiêu đề email';
    $mail->Body = 'Đây là nội dung email gửi từ <b>PHP Mailer</b> ma xac nhan: '.$confirmationCode;
    $mail->AltBody = 'Đây là nội dung khi gửi plain text không sử dụng định dạng html';
    $mail->send();
} catch (Exception $e) {
    echo $mail->ErrorInfo;
}

?>