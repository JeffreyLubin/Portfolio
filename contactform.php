<?php

if (isset($_POST["submit"])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $message = $_POST['message'];

    $to = "Jeffy.lubin@gmail.com";
    $headers = "From: ".$email;
    $body = "You got a new message from ".$name."!\nThis is what it says:\n".$message;

    mail($to, $body, $headers);
    header("Location: idex.php?mailsend");
}
?>