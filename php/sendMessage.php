<?php

ini_set('display_errors',1);
error_reporting(E_ALL);
include 'functions.php';

$userName = $_POST['userName'];
$userMail = $_POST['userMail'];
$textMessege = $_POST['messageText'];
$textMessege .= "Content-type: text/html; charset=\"windows-1251\"\n";
$textMessege .= "Content-Transfer-Encoding: 8bit\n\n";
$from = "site@voloh.org.ua\r\n";
$subject = 'Message from site from   ';
$subject .= $userName;

$headers  = "MIME-Version: 1.0";
$headers .= "Content-type: text/html; charset=windows-1251" . "\r\n";
$headers .= "From: $from";

$send = mail("voloh@i.ua ", $subject, $textMessege, $headers);
 if ($send == 'true'){
	$responce = 'Ok';
 } else {
 	$responce = 'Bad';
 }

$r = json_encode($responce);
echo($r);


