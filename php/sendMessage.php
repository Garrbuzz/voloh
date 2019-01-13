<?php

ini_set('display_errors',1);
error_reporting(E_ALL);
include 'functions.php';

$userName = $_POST['userName'];
$userMail = $_POST['userMail'];
$textMessege = $_POST['messageText'];

$from = "imla@imla.com.ua\r\n";
$subject = 'Повідомлення з сайту від   ';
$subject .= $userName;

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"\n";
$headers .= "From: $from";

$send = mail("garrbuzz@gmail.com", $subject, $textMessege, $headers);
 if ($send == 'true'){
	$responce = 'Ok';
 } else {
 	$responce = 'Bad';
 }

$r = json_encode($responce);
echo($r);


