<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$data = array();


		$ticket->getPublishedTicketUser($_SESSION['userId']);
		
	if($ticket->getPublishedTicketUser_id() != "") {
		foreach($ticket->getPublishedTicketUser_id() as $id) {

			$ticketNo = $db->selectNow('ticket','ticketNo','id',$id);

			 array_push($data,array("id" => $id, "ticketNo" => $ticketNo, "date" => $db->formatDate($db->selectNow('ticket','datePublished','id',$id)),"title" => $db->selectNow('ticket','title','id',$id)));
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