<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();


	$ticket->getTicketByDate($_GET['date']);

	$data = array();

	if(!empty($ticket->getTicketByDate_id()) > 0) {
		foreach($ticket->getTicketByDate_id() as $id) {
			$data[$id]['id'] = $id;
			$data[$id]['subject'] = $db->selectNow('ticket','subject','id',$id);
			$data[$id]['title'] = $db->selectNow('ticket','title','id',$id);
			$data[$id]['activity'] = $db->selectNow('ticket','activity','id',$id);
			$data[$id]['start'] = $db->selectNow('ticket','start','id',$id);
			$data[$id]['end'] = $db->selectNow('ticket','end','id',$id);
			$data[$id]['remarks'] = $db->selectNow('ticket','remarks','id',$id);
			$data[$id]['ticketNo'] = $db->selectNow('ticket','ticketNo','id',$id);
		}
		echo json_encode($data);
	}else { 
		echo "null";
	}




?>