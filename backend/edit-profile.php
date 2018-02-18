<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Bcrypt.php';

	$db = new database();

	$userId = $_POST['userId'];
	$employeeName = $_POST['employeeName'];
	$currentPassword = $_POST['currentPassword'];
	$newPassword = $_POST['newPassword'];


	$db->editNow('user','id',$_SESSION['userId'],'employeeId',$userId);
	$db->editNow('user','id',$_SESSION['userId'],'name',$employeeName);


	if( $currentPassword != "" && $newPassword != "" ) { 
		$hashedPassword = $db->selectNow('user','password','id',$_SESSION['userId']);
		if(Bcrypt::checkPassword($currentPassword, $hashedPassword)) {
			$db->editNow('user','id',$_SESSION['userId'],'password',Bcrypt::hashPassword($newPassword));
			$_SESSION['message'] = "Password Updated";
		}else {
			$_SESSION['message'] = "Password Mismatch";
		}
	}else {

	}


?>