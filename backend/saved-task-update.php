<?php

	require_once '../session/session.php';
	require '../class/database.php';

	$id = $_POST['id'];
	$subject = $_POST['subject'];
	$title = $_POST['title'];
	$activity = $_POST['activity'];
	$startTime = $_POST['startTime'];
	$endTime = $_POST['endTime'];
	$remarks = $_POST['remarks'];

	$db = new database();


	$db->editNow('ticket','id',$id,'subject',$subject);
	$db->editNow('ticket','id',$id,'title',$title);
	$db->editNow('ticket','id',$id,'activity',$activity);
	$db->editNow('ticket','id',$id,'startTime',$db->format24hr($startTime));
	$db->editNow('ticket','id',$id,'endTime',$db->format24hr($endTime));
	$db->editNow('ticket','id',$id,'remarks',$remarks);

?>