<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$data = array();


		$ticket->getPublishedTicketUser($_SESSION['userId']);
		

	if($ticket->getPublishedTicketUser_ticketNo() != "") {
		foreach($ticket->getPublishedTicketUser_ticketNo() as $ticketNo) {
			//$data['ticketNo'] = $ticketNo;
			//$data['date'] = $db->formatDate($db->selectNow('ticket','datePublished','ticketNo',$ticketNo));
			array_push($data,array("ticketNo" => $ticketNo, "date" => $db->formatDate($db->selectNow('ticket','datePublished','ticketNo',$ticketNo)),"title" => $db->selectNow('ticket','title','ticketNo',$ticketNo)));
		}

		$results = array(
			"iTotalRecords" => count($data),
			"iTotalDisplayRecords" => count($data),
			"aaData" => $data
		);
	}else {
		$results = array(
			"iTotalRecords" => 0,
			"iTotalDisplayRecords" => 0,
			"aaData" => array()
		);
	}

		echo json_encode($results);




?>