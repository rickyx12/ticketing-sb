<?php

	require '../class/database.php';

	$db = new database();

	$userId = $_POST['userId'];
	$employeeFirstName = $_POST['employeeFirstName'];
	$employeeLastName = $_POST['employeeLastName'];
	$employeeMiddleName = $_POST['employeeMiddleName'];
	$empolyeePassword = $_POST['employeePassword'];
	$employeeDivision = $_POST['employeeDivision'];
	$employeeDepartment = $_POST['employeeDepartment'];
	$employeeSection = $_POST['employeeSection'];
	$employeeBranch = $_POST['employeeBranch'];
	$employmentStatus = $_POST['employmentStatus'];
	$employeePosition = $_POST['employeePosition'];

	$data = array(
		"employeeId" => $userId,
		"password" => $db->encrypt_decrypt($empolyeePassword,'e'),
		"first_name" => $employeeFirstName,
		"last_name" => $employeeLastName,
		"middle_name" => $employeeMiddleName,
		"name" => $employeeLastName." ".$employeeFirstName." ".$employeeMiddleName,
		"division" => $employeeDivision,
		"department" => $employeeDepartment,
		"section" => $employeeSection,
		"branch" => $employeeBranch,
		"employment_status" => $employmentStatus,
		"position" => $employeePosition,
		"role" => "user"
	);

	$db->insertNow('user',$data);

?>
