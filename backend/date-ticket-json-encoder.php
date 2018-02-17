<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();


	$ticket->getTicketByDate($_GET['date']);

	$data = array();

	if(!empty($ticket->getTicketByDate_id()) > 0) {
		foreach($ticket->getTicketByDate_id() as $ticketId) {
			$data[$ticketId]['ticketId'] = $db->selectNow('ticket','ticketNo','id',$ticketId);
			$data[$ticketId]['date'] = $db->formatDate($db->selectNow('ticket','datePublished','id',$ticketId));
		}
		echo json_encode($data);
	}else { 
		echo "null";
	}




?>