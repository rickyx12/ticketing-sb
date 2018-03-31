<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$data = array();


	$ticket->getPublishedTicketUser($_SESSION['userId']);
	
	if(!empty($ticket->getPublishedTicketUser_ticketNo()) > 0) {
		foreach($ticket->getPublishedTicketUser_ticketNo() as $ticketNo) {
			$data[$ticketNo]['ticketNo'] = $ticketNo;
			$data[$ticketNo]['date'] = $db->formatDate($db->selectNow('ticket','datePublished','ticketNo',$ticketNo));
			$data[$ticketNo]['employeeName'] = $db->selectNow('ticket','employeeFormatted','ticketNo',$ticketNo);
			$data[$ticketNo]['dateFormatted'] = $db->selectNow('ticket','dateFormatted','ticketNo',$ticketNo);
			$data[$ticketNo]['userSection'] = $db->selectNow('user','section','id',$db->selectNow('ticket','employee','ticketNo',$ticketNo));
		}
		echo json_encode($data);
	}else { 
		echo "null";
	}




?>