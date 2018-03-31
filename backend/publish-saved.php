<?php

	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$ticketNo = $_POST['ticketNo'];
	$datePublished = $_POST['datePublished'];

	$db = new database();
	$ticket = new Ticket();

	$ticket->getTicketByTicketNo($ticketNo,$datePublished);

	foreach($ticket->getTicketByTicketNo_id() as $id) {
		$db->editNow('ticket','id',$id,'status','publish');
		$db->editNow('ticket','id',$id,'datePublished',$datePublished);
		$db->editNow('ticket','id',$id,'dateFormatted',$db->formatCompleteDate($datePublished));
		$db->editNow('ticket','id',$id,'employeeFormatted',$db->selectNow('user','name','id',$db->selectNow('ticket','employee','id',$id)));
	}
?>