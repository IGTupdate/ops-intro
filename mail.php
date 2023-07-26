<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subj = $_POST['subj'];

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp-relay.sendinblue.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@opsintro.com';
        $mail->Password = '9ys5k4Br7zUDZOHV';
        $mail->SMTPSecure = 'tls';
        $mail->Port = '587';
        $mail->setFrom($email);
        $mail->addAddress('contact@opsintro.com');
        $mail->isHTML(true);
        $mail->Subject = 'New Form Submission';
        $mail->Body = "Name: $name <br>Email: $email <br>Subject: $subj <br>Message: $message";
        $mail->send();
        header("Location:contactSuccess.html");
    } catch (Exception $e) {
        $alert = "<div><h1>NOT Sent</h1></div>";
    }
}
?>