<?php
	require_once '../session/session.php';
	require '../class/database.php';

	$db = new database();

	$db->deleteNow('ticket','id',$_POST['id']);

?>