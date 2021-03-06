<?php

	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$ids = $_POST['ids'];
	$ticketNo = $_POST['ticketNo'];


	$db = new database();
	$ticket = new Ticket();

	$id = explode(",",$ids);

	//$ticketNo = $ticket->getLastTicketNo() + 1;

	foreach($id as $id) {
		$db->editNow('ticket','id',$id,'status','publish');
		$db->editNow('ticket','id',$id,'datePublished',date("Y-m-d"));
		$db->editNow('ticket','id',$id,'dateFormatted',date("F d, Y"));
		$db->editNow('ticket','id',$id,'ticketNo',$ticketNo);
		$db->editNow('ticket','id',$id,'employeeFormatted',$db->selectNow('user','name','id',$db->selectNow('ticket','employee','id',$id)));
	}
?>