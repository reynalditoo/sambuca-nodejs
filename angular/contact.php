<?php

$post_data = file_get_contents("php://input");
$data = json_decode($post_data);

//Just to display the form values
echo "Name : " . $data->name;
echo "Email : " . $data->email;
echo "Message : " . $data->message;

// send an email
$to = $data->email;

$subject = 'Test email from phpcodify.com to test angularjs contact form';

$message = $data->message;

$headers = 'From: ' . $data->name . 'submit@phpcodify.com' . "\r\n" .
        'Reply-To: prem@freewebmentor.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

//php mail function to send email on your email address
mail($to, $subject, $message, $headers);

?>