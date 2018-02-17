<?php
	require_once '../session/session.php';
	require '../class/database.php';

	$id = $_POST['id'];
	$subject = $_POST['subject'];
	$title = $_POST['title'];
	$activity = $_POST['activity'];
	$start = $_POST['start'];
	$end = $_POST['end'];
	$remarks = $_POST['remarks'];


	$db = new database();

	$db->editNow("ticket","id",$id,"subject",$subject);
	$db->editNow("ticket","id",$id,"title",$title);
	$db->editNow("ticket","id",$id,"activity",$activity);
	$db->editNow("ticket","id",$id,"start",$start);
	$db->editNow("ticket","id",$id,"end",$end);
	$db->editNow("ticket","id",$id,"remarks",$remarks);

?>