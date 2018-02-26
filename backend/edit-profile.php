<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Bcrypt.php';

	$db = new database();

	$userId = $_POST['userId'];
	$employeeFirstName = $_POST['employeeFirstName'];
	$employeeLastName = $_POST['employeeLastName'];
	$employeeMiddleName = $_POST['employeeMiddleName'];
	$currentPassword = $_POST['currentPassword'];
	$newPassword = $_POST['newPassword'];
	$employeeDivision = $_POST['employeeDivision'];
	$employeeDepartment = $_POST['employeeDepartment'];
	$employeeSection = $_POST['employeeSection'];
	$employeeBranch = $_POST['employeeBranch'];
	$employmentStatus = $_POST['employmentStatus'];
	$employeePosition = $_POST['employeePosition'];


	$db->editNow('user','id',$_SESSION['userId'],'employeeId',$userId);
	$db->editNow('user','id',$_SESSION['userId'],'first_name',$employeeFirstName);
	$db->editNow('user','id',$_SESSION['userId'],'last_name',$employeeLastName);
	$db->editNow('user','id',$_SESSION['userId'],'middle_name',$employeeMiddleName);
	$db->editNow('user','id',$_SESSION['userId'],'name',$employeeLastName." ".$employeeFirstName." ".$employeeMiddleName);
	$db->editNow('user','id',$_SESSION['userId'],'division',$employeeDivision);
	$db->editNow('user','id',$_SESSION['userId'],'department',$employeeDepartment);
	$db->editNow('user','id',$_SESSION['userId'],'section',$employeeSection);
	$db->editNow('user','id',$_SESSION['userId'],'branch',$employeeBranch);
	$db->editNow('user','id',$_SESSION['userId'],'employment_status',$employmentStatus);
	$db->editNow('user','id',$_SESSION['userId'],'position',$employeePosition);
	$_SESSION['profile-message'] = "Profile Updated";

	if( $currentPassword != "" && $newPassword != "" ) { 
		$hashedPassword = $db->selectNow('user','password','id',$_SESSION['userId']);
		if(Bcrypt::checkPassword($currentPassword, $hashedPassword)) {
			$db->editNow('user','id',$_SESSION['userId'],'password',Bcrypt::hashPassword($newPassword));
			$_SESSION['password-message'] = "Password Updated";
		}else {
			$_SESSION['password-message'] = "Password Mismatch";
		}
	}else {

	}


?>