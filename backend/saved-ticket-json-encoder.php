<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$ticket->getSavedTicket($_SESSION['userId']);

	$data = array();

	if(!empty($ticket->getSavedTicket_ticketNo()) > 0) {
		foreach($ticket->getSavedTicket_ticketNo() as $ticketNo) {
			$data[$ticketNo]['ticketNo'] = $ticketNo;
			$data[$ticketNo]['date'] = $db->formatCompleteDate($db->selectNow('ticket','dateSaved','ticketNo',$ticketNo));
		}
		echo json_encode($data);
	}else { 
		echo "null";
	}




?>