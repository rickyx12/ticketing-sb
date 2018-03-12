<?php
	session_start();
	require "../class/database.php";
	require_once "../class/Bcrypt.php";		

	$userId = $_POST['userId'];
	$password = $_POST['password'];

	$db = new database();

	$hashedPassword = $db->selectNow('user','password','employeeId',$userId);

	if($db->selectNow('user','id','employeeId',$userId) != "") {
		if($db->selectNow("user",'id',"employeeId",$userId) != "" && $db->selectNow("user","id","password",$db->encrypt_decrypt($password)) != "") {
			$_SESSION['userId'] = $db->selectNow('user','id','employeeId',$userId);			
			if($db->selectNow('user','role','employeeId',$userId) == "user") {
				header("Location: ../index.php");
			}else {
				header("Location: admin-panel.php");
			}
		}else {
			header("Location: ../login.php?error=Authentication Error");
		}
	}else {
		header("Location: ../login.php?error=Authentication Error");
	}

?>