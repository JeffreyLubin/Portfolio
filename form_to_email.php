<?php

    function isInjected($str){
        $injections = 
        array(
        '(\n+)',
        '(\r+)',
        '(\t+)',
        '(%0A+)',
        '(%0D+)',
        '(%08+)',
        '(%09+)'
        );

        $inject = join('|', $injections);
        $inject = "/$inject/i";

        if(preg_match($inject,$str))
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    if(isInjected($visitor_email)){
        echo "Invalid Email";
        exit;
    }
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $message = $_POST['message'];

    $to="jeffy.lubin@gmail.com";

    $email_from = $email;
    $email_subject = "You have a new message from ".$name."!";
    $email_message =  $name." is reaching out! This is what he said,\n".$message."\n They also provided their phone number if you'd want to give them a call!\n".$phone_number;

    mail($to, $email_subhect, $email_message);
    echo "Your email has been sent succesfully! You should hear back from me in about 24-48 hours, thank you!";
    }
?>