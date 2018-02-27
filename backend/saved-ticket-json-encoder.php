<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$ticket->getSavedTicket($_SESSION['userId']);

	$data = array();

	if(!empty($ticket->getSavedTicket_id()) > 0) {
		foreach($ticket->getSavedTicket_id() as $ticketId) {
			$data[$ticketId]['id'] = $ticketId;
			$data[$ticketId]['subject'] = $db->selectNow('ticket','subject','id',$ticketId);
			$data[$ticketId]['code'] = $db->selectNow('ticket','title','id',$ticketId);
			$data[$ticketId]['start'] = $db->formatTime($db->selectNow('ticket','start','id',$ticketId));
			$data[$ticketId]['end'] = $db->formatTime($db->selectNow('ticket','end','id',$ticketId));
			$data[$ticketId]['activity'] = $db->selectNow('ticket','activity','id',$ticketId);
			$data[$ticketId]['remarks'] = $db->selectNow('ticket','remarks','id',$ticketId);
		}
		echo json_encode($data);
	}else { 
		echo "null";
	}




?>