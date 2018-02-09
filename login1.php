<?php
session_start();
$userId = $_POST['userId'];
$password = $_POST['password'];


	if( $userId == "123" && $password == "123456" ) {
		$_SESSION['userId'] = $userId;
		header("Location: index.php");
	}else {
		header("Location: login.php?error=Incorrect Password");
	}


?>