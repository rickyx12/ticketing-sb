<?php
	require_once '../session/session.php';
	require '../class/database.php';
	
	$subject = $_POST['subject'];
	$title = $_POST['code'];
	$start = $_POST['start'];
	$end = $_POST['end'];
	$activity = $_POST['activity'];
	$remarks = $_POST['remarks'];

	$db = new database();

	$data = array(
		"subject" => $subject,
		"title" => $title,
		"start" => $start,
		"end" => $end,
		"activity" => $activity,
		"remarks" => $remarks,
		"employee" => $_SESSION['userId']
	);

	$db->insertNow("ticket",$data);


?>