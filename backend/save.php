<?php

	require_once '../session/session.php';
	require '../class/database.php';

	$ids = $_POST['ids'];

	$db = new database();

	$id = explode(",",$ids);

	foreach($id as $id) {
		$db->editNow('ticket','id',$id,'status','saved');
		$db->editNow('ticket','id',$id,'dateSaved',date("Y-m-d"));
	}
?>